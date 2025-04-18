"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Grab as Crab } from 'lucide-react';

export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToVideo = () => {
    const videoSection = document.querySelector('#video-section');
    if (videoSection) {
      videoSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`w-full py-4 px-6 md:px-10 fixed top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-crabbio-blue/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Crab className="text-crabbio-cream h-8 w-8" />
            <span className="text-crabbio-cream font-poppins font-bold text-2xl">Crabbio</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#benefits" className="text-crabbio-cream hover:text-crabbio-accent transition-colors">Benefits</a>
            <a href="#founders" className="text-crabbio-cream hover:text-crabbio-accent transition-colors">Team</a>
            <a href="#contact" className="text-crabbio-cream hover:text-crabbio-accent transition-colors">Contact</a>
          </div>
          <Button variant="default" size="sm">Sign Up</Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex items-center justify-center flex-1 pt-20">
        <div className="container-padding max-w-6xl mx-auto text-center">
          <div className="relative mb-4 inline-block">
            <div className="absolute inset-0 bg-crabbio-accent/20 blur-3xl rounded-full"></div>
            <Crab className="text-crabbio-cream h-20 w-20 md:h-24 md:w-24 relative animate-float mb-4 mx-auto" />
          </div>
          
          <h1 className="text-crabbio-cream font-bold mb-6 leading-tight">
            Enjoy AI without <br className="md:hidden" />
            <span className="text-crabbio-accent animate-pulse-gentle">compromising</span> your data.
          </h1>
          
          <p className="text-crabbio-light text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Crabbio protects your privacy while delivering powerful AI solutions.
            No data harvesting, no tracking, just pure AI assistance.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <Button variant="default" size="lg" className="w-full md:w-auto">
              Book a Call
            </Button>
            <Button variant="secondary" size="lg" className="w-full md:w-auto">
              Join Early Adopters
            </Button>
          </div>
          
          <div className="mt-16 max-w-md mx-auto p-3 rounded-lg bg-crabbio-secondary/50 backdrop-blur-sm">
            <p className="text-crabbio-cream text-sm">
              "Crabbio gives me peace of mind knowing my sensitive data stays private."
            </p>
            <p className="text-crabbio-accent text-xs mt-2">— Jane Doe, CEO at TechPrivacy</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToVideo}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none focus:outline-none hover:scale-110 transition-transform"
        aria-label="Scroll to video section"
      >
        <div className="w-10 h-10 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crabbio-cream">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </button>
    </section>
  );
}