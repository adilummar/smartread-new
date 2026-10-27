import React from 'react';
import './Navbar.css';
import { ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const Navbar = () => {
  return (
    <nav className="kidza-navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/Smart Read Logo.png" alt="Smart Read Logo" style={{ height: '24px' }} />
          </div>
          
        </div>

        <ul className="nav-links">
          <li><a href="#hero" className="active">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#courses">Programs</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="navbar-right">
          <a 
            href="https://wa.me/971545496922?text=Hello%20SmartRead%20Academy%2C%20I%20would%20like%20more%20information." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-btn whatsapp-nav-btn"
            title="Chat on WhatsApp (+971 54 54 96 922)"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon size={20} color="#25D366" />
          </a>
          <a href="tel:+971545496922" className="btn btn-orange" title="Call to Enroll: +971 54 54 96 922">
            Enroll Now <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
