import React from 'react';
import './WhyChoose.css';
import { Quote, CheckCircle2, ArrowRight } from 'lucide-react';

const WhyChoose = () => {
  return (
    <section className="whychoose-section" id="why">
      {/* Bottom Wave of Purple Section */}
      <div className="wave-divider" style={{marginTop: '-2px', backgroundColor: 'white'}}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="whychoose-container">
        <div className="whychoose-grid">
          
          {/* Testimonial / Quote Card */}
          <div className="testimonial-card">
            <div className="quote-icon">
              <Quote fill="var(--kidza-purple)" color="var(--kidza-purple)" size={32} />
            </div>
            <p className="testimonial-text">
              "Smart Read Academy blends the best of academic learning, modern technology, and character development in one unified platform. The teachers are caring and the activities are amazing!"
            </p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            
            <div className="author-info">
              <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&q=80" alt="Parent" className="author-img" />
              <div>
                <h5 className="author-name">— Sarah Johnson</h5>
                <span className="author-role">Happy Parent</span>
              </div>
            </div>
          </div>

          {/* Tour / CTA Card */}
          <div className="tour-card">
            <div className="tour-content">
              <h3>Take a School Tour</h3>
              <p>See how we create a safe and exciting learning environment.</p>
              
              <ul className="tour-list">
                <li><CheckCircle2 color="var(--kidza-green)" size={18} /> Modern Classrooms</li>
                <li><CheckCircle2 color="var(--kidza-green)" size={18} /> Tech Education</li>
                <li><CheckCircle2 color="var(--kidza-green)" size={18} /> Expert Teachers</li>
              </ul>
              
              <a href="#contact" className="btn btn-orange mt-4">
                Book a Tour <ArrowRight size={18} />
              </a>
            </div>
            <div className="tour-img-wrapper">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80" alt="School" className="tour-img" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
