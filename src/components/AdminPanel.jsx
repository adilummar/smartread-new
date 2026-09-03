import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import './AdminPanel.css';
import { LogOut, Plus, Trash2, Link as LinkIcon } from 'lucide-react';

const AdminPanel = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // New slide form state
  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');
  const [text, setText] = useState('');
  const [badge, setBadge] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchSlides();
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchSlides = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "hero_slides"));
      const slidesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSlides(slidesData);
    } catch (err) {
      console.error("Error fetching slides:", err);
    }
    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError("Invalid email or password. Make sure you created a user in Firebase Auth!");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleAddSlide = async (e) => {
    e.preventDefault();
    if (!imageUrl) {
      setError('Please provide an image URL.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await addDoc(collection(db, "hero_slides"), {
        title1,
        title2,
        text,
        badge,
        image: imageUrl,
        createdAt: new Date()
      });

      // Reset form and fetch updated slides
      setTitle1('');
      setTitle2('');
      setText('');
      setBadge('');
      setImageUrl('');
      setIsSubmitting(false);
      fetchSlides();
    } catch (err) {
      console.error(err);
      setError("An error occurred while saving the slide.");
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete this slide?")) {
      try {
        await deleteDoc(doc(db, "hero_slides", id));
        fetchSlides();
      } catch (err) {
        console.error("Error deleting document: ", err);
      }
    }
  };

  if (!user) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-box">
          <h2>Admin Login</h2>
          <p>Sign in to manage your website content.</p>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <div className="setup-note">
            <strong>Note:</strong> You must create a user in your Firebase Console under Authentication &gt; Users first!
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Banner Management</h1>
        <div className="header-actions">
          <span>{user.email}</span>
          <button onClick={handleLogout} className="logout-btn"><LogOut size={16} /> Logout</button>
        </div>
      </header>

      <div className="admin-content">
        <div className="add-slide-section">
          <h2>Add New Slide</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleAddSlide} className="slide-form">
            <div className="form-grid">
              <div className="input-group">
                <label>First Title Line (e.g. "Innovating")</label>
                <input type="text" value={title1} onChange={e => setTitle1(e.target.value)} required />
              </div>
              <div className="input-group">
                <label>Second Title Line (e.g. "The Future")</label>
                <input type="text" value={title2} onChange={e => setTitle2(e.target.value)} required />
              </div>
            </div>
            
            <div className="input-group">
              <label>Badge Text (e.g. "Now Enrolling!")</label>
              <input type="text" value={badge} onChange={e => setBadge(e.target.value)} />
            </div>

            <div className="input-group">
              <label>Description Text</label>
              <textarea value={text} onChange={e => setText(e.target.value)} rows="3" required></textarea>
            </div>

            <div className="input-group">
              <label>Background Image URL</label>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', background: 'white', border: '2px solid #E5E7EB', borderRadius: '12px', padding: '0 16px'}}>
                <LinkIcon size={20} color="#9CA3AF" />
                <input 
                  type="url" 
                  value={imageUrl} 
                  onChange={e => setImageUrl(e.target.value)} 
                  placeholder="https://images.unsplash.com/photo-..."
                  required 
                  style={{border: 'none', padding: '12px 0', flex: 1, outline: 'none'}}
                />
              </div>
              <small style={{color: '#6B7280', fontSize: '0.8rem', marginTop: '6px', display: 'block'}}>
                Paste a link to any image from the internet. Need to upload a file? Use a free host like postimages.org and paste the Direct Link here.
              </small>
            </div>

            <button type="submit" className="submit-slide-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : <><Plus size={18} /> Add Slide</>}
            </button>
          </form>
        </div>

        <div className="current-slides-section">
          <h2>Current Slides</h2>
          {loading ? (
            <p>Loading slides...</p>
          ) : slides.length === 0 ? (
            <p className="no-slides">No slides found in the database. Add one above!</p>
          ) : (
            <div className="slides-list">
              {slides.map(slide => (
                <div key={slide.id} className="admin-slide-card">
                  <div className="slide-card-img" style={{backgroundImage: `url(${slide.image})`}}></div>
                  <div className="slide-card-content">
                    <div className="slide-badge">{slide.badge}</div>
                    <h3>{slide.title1} {slide.title2}</h3>
                    <p>{slide.text}</p>
                  </div>
                  <button onClick={() => handleDelete(slide.id)} className="delete-btn" title="Delete Slide">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
