import React, { useState, useEffect } from 'react';
import './Hero.css';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

const defaultSlides = [
  {
    id: 'poster-1',
    title1: "",
    title2: "",
    text: "",
    imageDesktop: "/hero1-landscape.png",
    imageMobile: "/hero1.jpeg",
    badge: ""
  },
  {
    id: 'poster-2',
    title1: "",
    title2: "",
    text: "",
    imageDesktop: "/hero2-landscape.png",
    imageMobile: "/hero2.jpeg",
    badge: ""
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = defaultSlides;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*
    const fetchSlides = async () => {
      try {
        const q = query(collection(db, "hero_slides"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedSlides = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        if (fetchedSlides.length > 0) {
          setSlides(fetchedSlides);
        } else {
          setSlides(defaultSlides);
        }
      } catch (error) {
        console.error("Error fetching slides:", error);
        setSlides(defaultSlides);
      }
      setLoading(false);
    };

    fetchSlides();
    */
    setLoading(false);
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    if (slides.length > 0) setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    if (slides.length > 0) setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-section" id="hero">
      
      {slides.map((slide, index) => (
        <div key={slide.id} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
          <div 
            className="hero-slide-fg" 
            style={{ 
              '--bg-desktop': `url(${slide.imageDesktop})`,
              '--bg-mobile': `url(${slide.imageMobile})`
            }}
          ></div>
          <div className="hero-slide-overlay"></div>
          
          <div className="hero-container">
            <div className="hero-content text-center">
              {slide.title1 && (
                <>
                  <div className="hero-badge-container mx-auto">
                    <span className="pulse-dot"></span>
                    {slide.badge}
                  </div>
                  <h1 className="hero-title text-center mx-auto">
                    {slide.title1} <br />
                    <span className="hero-title-highlight">{slide.title2}</span>
                  </h1>
                  <p className="hero-desc text-center mx-auto">{slide.text}</p>
                  
                  <div className="hero-buttons justify-center">
                    <a href="#courses" className="btn-primary">Explore Programs</a>
                    <a href="#contact" className="btn-secondary">Contact Us</a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="carousel-controls">
        <button className="carousel-btn prev" onClick={prevSlide}><ChevronLeft size={24} /></button>
        <button className="carousel-btn next" onClick={nextSlide}><ChevronRight size={24} /></button>
      </div>
      
      <div className="carousel-indicators">
        {slides.map((_, idx) => (
          <button 
            key={idx} 
            className={`indicator-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>

      {/* Wave bottom */}
      <div className="wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#F9F9FC"></path>
        </svg>
      </div>

    </section>
  );
};

export default Hero;
