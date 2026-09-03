import React from 'react';
import './About.css';
import { ArrowRight, CheckCircle2, Lightbulb, Heart, Zap } from 'lucide-react';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image-wrapper">
          {/* Decorative shapes */}
          <div className="blob-shape">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" overflow="visible">
              <path fill="var(--kidza-purple)" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.1,-46.3C90.4,-33.5,96.1,-18,94.9,-3.1C93.7,11.8,85.6,26,75.1,37.3C64.6,48.6,51.7,56.9,38.1,64.3C24.5,71.7,10.2,78.2,-4.2,85.4C-18.6,92.6,-33,100.5,-44.6,97.1C-56.2,93.7,-65,79,-73.2,64.9C-81.4,50.8,-89,37.3,-92.4,22.7C-95.8,8.1,-95,-7.6,-89.6,-21.5C-84.2,-35.4,-74.2,-47.5,-61.8,-55.5C-49.4,-63.5,-34.6,-67.4,-20.9,-71.2C-7.2,-75,5.4,-78.7,18.4,-79.8C31.4,-80.9,44.8,-79.4,44.7,-76.4Z" transform="translate(100 100) scale(0.85)" />
            </svg>
          </div>
          <div className="float-element float-bulb"><Lightbulb fill="#FACC15" color="#FACC15" size={40} /></div>
          <div className="float-element float-heart"><Heart fill="#EC4899" color="#EC4899" size={32} /></div>
          
          <img 
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=85" 
            alt="Student with backpack" 
            className="about-img"
          />
          
          <div className="activities-bubble">
            <span className="bubble-num">10+</span>
            <span className="bubble-text">Programs</span>
          </div>
        </div>

        <div className="about-content">
          <div className="badge badge-purple">About Us</div>
          <h2 className="section-title">
            A Modern Hub for Holistic Education
          </h2>
          <p className="section-text">
            Welcome to Smart Read Academy — a modern learning hub dedicated to nurturing knowledge, creativity, confidence, and character in young minds and future leaders.
          </p>

          <div className="pillars-grid">
            <div className="pillar-item">
              <CheckCircle2 color="var(--kidza-purple)" size={24} />
              <span>Academic Excellence</span>
            </div>
            <div className="pillar-item">
              <CheckCircle2 color="var(--kidza-green)" size={24} />
              <span>AI & Technology</span>
            </div>
            <div className="pillar-item">
              <CheckCircle2 color="var(--kidza-orange)" size={24} />
              <span>Leadership Skills</span>
            </div>
            <div className="pillar-item">
              <CheckCircle2 color="var(--kidza-pink)" size={24} />
              <span>Moral Values</span>
            </div>
            <div className="pillar-item">
              <CheckCircle2 color="var(--kidza-blue)" size={24} />
              <span>Emotional Intelligence</span>
            </div>
            <div className="pillar-item">
              <CheckCircle2 color="var(--kidza-yellow)" size={24} />
              <span>Creative Learning</span>
            </div>
          </div>

          <a href="#about" className="btn btn-orange mt-8">
            Learn More <ArrowRight size={18} />
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default About;
