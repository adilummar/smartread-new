import React from 'react';
import './ContactCTA.css';
import { Mail, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="contact-cta-section" id="contact">
      <div className="contact-cta-container">
        <div className="newsletter-card">
          <div className="newsletter-content">
            <div className="newsletter-icon-wrapper">
              <Mail size={32} color="var(--kidza-orange)" />
              <div className="floating-elements">
                <span className="float-star">⭐</span>
              </div>
            </div>
            <div className="newsletter-text">
              <h3>Stay Updated!</h3>
              <p>Subscribe to our newsletter to get latest updates and special offers.</p>
            </div>
          </div>
          
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="newsletter-input" 
              required
            />
            <button type="submit" className="btn btn-purple">
              Subscribe <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
      
      {/* Wave bottom before footer */}
      <div className="wave-divider" style={{backgroundColor: 'white', transform: 'rotate(180deg)', lineHeight: 0, marginBottom: '-2px', position: 'relative', zIndex: 1}}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{display: 'block', width: '100%', height: '45px'}}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" fill="var(--kidza-purple)"></path>
        </svg>
      </div>
    </section>
  );
};

export default ContactCTA;
