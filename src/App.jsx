import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import './assets/styles/main.css';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;