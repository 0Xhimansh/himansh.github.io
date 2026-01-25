
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="py-24 md:py-32 flex flex-col justify-center animate-fade-in">
      <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs mono font-medium mb-6 w-fit">
        SEC_OP_READY
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
        Himansh
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium text-zinc-400 mb-8">
        Product Security Engineer
      </h2>
      <p className="max-w-2xl text-lg md:text-xl text-zinc-500 leading-relaxed border-l-2 border-zinc-800 pl-6 italic">
        “I secure products by thinking like an attacker — from business logic and APIs to mobile apps and internal systems.”
      </p>
      <div className="mt-12">
        <a 
          href="#contact" 
          className="px-6 py-3 rounded-md bg-zinc-100 text-black font-semibold hover:bg-cyan-400 transition-all duration-300 inline-flex items-center group"
        >
          Secure Your Product
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
