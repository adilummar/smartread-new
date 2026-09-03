import React from 'react';
import './Footer.css';
import { MapPin, Phone, Mail, Globe, MessageCircle, MessageSquare, Video } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          
          <div className="footer-col brand-col">
            <div className="logo footer-logo" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/smart-read-logo1.png" alt="Smart Read Icon" style={{ height: '40px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
                <span className="logo-title" style={{ color: 'white', fontWeight: '900', fontSize: '1.5rem', letterSpacing: '-0.02em' }}>SmartRead</span>
                <span className="logo-subtitle" style={{ color: 'var(--kidza-yellow)', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Academy</span>
              </div>
            </div>
            <p className="footer-desc">
              We provide a safe, caring and stimulating environment where children learn, grow and shine.
            </p>
            <div className="social-links">
              <a href="#"><Globe size={18} /></a>
              <a href="https://instagram.com/smart_read_uae"><MessageCircle size={18} /></a>
              <a href="#"><Video size={18} /></a>
              <a href="#"><MessageSquare size={18} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#courses">Programs</a></li>
              <li><a href="#admission">Admissions</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Programs</h4>
            <ul className="footer-links">
              <li><a href="#courses">AI & Future</a></li>
              <li><a href="#courses">Future Leaders</a></li>
              <li><a href="#courses">Little Dreamers</a></li>
              <li><a href="#courses">EduHub</a></li>
              <li><a href="#courses">Moral Studies</a></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact-info">
              <li>
                <MapPin size={18} color="var(--kidza-orange)" />
                <span>Al Qasimia, Sharjah, UAE</span>
              </li>
              <li>
                <Phone size={18} color="var(--kidza-orange)" />
                <a href="tel:+971545496922">+971 54 549 6922</a>
              </li>
              <li>
                <Mail size={18} color="var(--kidza-orange)" />
                <a href="mailto:smartreadaccdemy@gmail.com">smartreadaccdemy@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Smart Read Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
