
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 mb-10 border-t border-zinc-900 bg-gradient-to-b from-transparent to-zinc-900/20 rounded-b-3xl">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h3 className="text-xs uppercase tracking-widest text-cyan-500 font-bold mono mb-6">/ contact / connect</h3>
        <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Initiate Secure Connection</h2>
        <p className="text-zinc-400 mb-12 leading-relaxed">
          I'm always open to discussing product security, security architecture, or potential collaborations. Reach out via encrypted channels or common platforms.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <a 
            href="mailto:contact@himansh.security" 
            className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-cyan-500/50 transition-all group"
          >
            <p className="text-[10px] mono text-zinc-600 mb-2 uppercase font-bold tracking-tighter">Email</p>
            <p className="text-zinc-200 group-hover:text-cyan-400 font-medium">contact@himansh.security</p>
          </a>
          
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
            <p className="text-[10px] mono text-zinc-600 mb-2 uppercase font-bold tracking-tighter">Phone</p>
            <p className="text-zinc-200 font-medium">+91 8126620987</p>
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-8 text-zinc-500 text-sm mono">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Bugcrowd</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
