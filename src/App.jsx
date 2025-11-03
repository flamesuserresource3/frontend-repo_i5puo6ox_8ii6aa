import React from 'react';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-black selection:text-white">
      <Hero />
      <main>
        <PortfolioGrid />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
