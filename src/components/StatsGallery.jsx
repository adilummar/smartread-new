import React from 'react';
import './StatsGallery.css';
import { Smile, Users, Clock, Award } from 'lucide-react';

const StatsGallery = () => {
  return (
    <section className="stats-gallery-section" id="gallery">
      {/* Top Wave */}
      <div className="wave-divider wave-divider-top">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="stats-gallery-bg">
        <div className="stats-gallery-container">
          <div className="text-center mb-8">
            <div className="badge badge-purple" style={{backgroundColor: 'rgba(255,255,255,0.2)'}}>Our Specialities</div>
            <h2 className="section-title text-white">
              Life at Smart Read Academy
            </h2>
          </div>

          {/* Gallery Cards (like Kidza classes) */}
          <div className="gallery-cards">
            <div className="gallery-card">
              <div className="gallery-card-img">
                <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=85" alt="Interactive Classrooms" />
                <span className="gallery-tag tag-blue">Interactive Classrooms</span>
              </div>
            </div>
            <div className="gallery-card">
              <div className="gallery-card-img">
                <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=85" alt="Group Learning" />
                <span className="gallery-tag tag-yellow">Group Learning</span>
              </div>
            </div>
            <div className="gallery-card">
              <div className="gallery-card-img">
                <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=85" alt="Tech Education" />
                <span className="gallery-tag tag-orange">Tech Education</span>
              </div>
            </div>
          </div>

          {/* Stats Strip */}
          <div className="stats-strip">
            <div className="stat-item">
              <div className="stat-icon-wrapper bg-yellow">
                <Smile color="var(--kidza-text-main)" size={24} />
              </div>
              <div className="stat-text">
                <h4>5</h4>
                <p>Learning Hubs</p>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon-wrapper bg-purple">
                <Users color="white" size={24} />
              </div>
              <div className="stat-text">
                <h4>10+</h4>
                <p>Programs Offered</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrapper bg-pink">
                <Clock color="white" size={24} />
              </div>
              <div className="stat-text">
                <h4>Age 3–18+</h4>
                <p>All Age Groups</p>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon-wrapper bg-green">
                <Award color="white" size={24} />
              </div>
              <div className="stat-text">
                <h4>Sharjah</h4>
                <p><a href="https://maps.app.goo.gl/XygKCaCTDjuqH3Ki8?g_st=aw" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>Al Qasimia, UAE</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsGallery;
