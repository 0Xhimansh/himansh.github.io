import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Approach from './components/Approach';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import HackerAgent from './components/HackerAgent';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-cyan-500/30">
      {/* Ambient background layers */}
      <div className="bg-grid-ambient"></div>
      <div className="bg-scanline"></div>
      
      {/* Decorative character */}
      <HackerAgent />
      
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 lg:px-8">
          <Hero />
          <div className="reveal"><About /></div>
          <div className="reveal"><Experience /></div>
          <div className="reveal"><Approach /></div>
          <div className="reveal"><Skills /></div>
          <div className="reveal"><Certifications /></div>
          <div className="reveal"><Projects /></div>
          <div className="reveal"><Roadmap /></div>
          <div className="reveal"><Contact /></div>
        </main>
        
        <footer className="py-12 text-center text-zinc-500 text-sm border-t border-zinc-900 mt-20">
          <p className="mono">HIMANSH // PRODSEC_ENGINEER // {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
