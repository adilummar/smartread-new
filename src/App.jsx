import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import StatsGallery from './components/StatsGallery';
import WhyChoose from './components/WhyChoose';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import './index.css';

const MainPage = () => (
  <div className="app-wrapper">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Programs />
      <StatsGallery />
      <WhyChoose />
      <ContactCTA />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
