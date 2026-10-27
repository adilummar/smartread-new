import React from 'react';
import './FloatingWhatsApp.css';
import WhatsAppIcon from './WhatsAppIcon';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/971545496922?text=Hello%20SmartRead%20Academy%2C%20I%20would%20like%20more%20information."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      title="Chat with us on WhatsApp"
      aria-label="Chat with SmartRead Academy on WhatsApp"
    >
      <div className="floating-whatsapp-pulse"></div>
      <WhatsAppIcon size={30} color="#FFFFFF" />
    </a>
  );
};

export default FloatingWhatsApp;
