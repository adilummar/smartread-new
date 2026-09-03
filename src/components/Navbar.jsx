import React from 'react';
import './Navbar.css';
import { Search, ChevronDown, ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="kidza-navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/smart-read-logo1.png" alt="Smart Read Icon" style={{ height: '36px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
              <span className="logo-title" style={{ color: 'var(--kidza-purple)', fontWeight: '900', fontSize: '1.3rem', letterSpacing: '-0.02em' }}>SmartRead</span>
              <span className="logo-subtitle" style={{ color: 'var(--kidza-orange)', fontWeight: '700', fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Academy</span>
            </div>
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
          <button className="icon-btn">
            <Search size={20} />
          </button>
          <a href="#admission" className="btn btn-orange">
            Enroll Now <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
