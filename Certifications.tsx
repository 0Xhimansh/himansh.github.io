import React from 'react';
import { Certification } from '../types';

const Certifications: React.FC = () => {
  const certs: Certification[] = [
    {
      name: "OSCP",
      issuer: "Offensive Security",
      image: "https://www.offsec.com/_astro/a95c5e2cb0a7e0f009072ef7d12606c9959f34e7-300x300_ckRAj.webp"
    },
    {
      name: "CEH",
      issuer: "EC-Council",
      image: "https://media.licdn.com/dms/document/media/v2/D4D2DAQGOF0GR5tab3w/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1701917547412?e=1770249600&v=beta&t=4e7bhNxHKM5kv0DiWwBBWsO1ed9ysDSunKitXHnGeTA"
    },
    {
      name: "HTB CPTS",
      issuer: "Hack The Box",
      image: "https://academy.hackthebox.com/storage/exam_logos/ngc3KGpohSogBkZKGlvyVnyeuHEi0fnep8BO54Cd.png"
    },
    {
      name: "HTB CWES",
      issuer: "Hack The Box",
      image: "https://academy.hackthebox.com/storage/exam_logos/QOcelZmDJbnXr4VmwTuqFXLVK47D1GBGrDXFZM7P.png"
    },
    {
      name: "HTB CWEE",
      issuer: "Hack The Box",
      image: "https://academy.hackthebox.com/storage/exam_logos/W62ytepTTqjwEkP6nVEdihlpcqiTBd8ELvtYVU2I.png"
    },
    {
      name: "HTB CAPEN",
      issuer: "Hack The Box",
      image: "https://academy.hackthebox.com/storage/exam_logos/dqjOZZ8owwkF2BB0hIJHK7VZOjRufZzskmBheAUS.png"
    }
  ];

  return (
    <section id="certs" className="py-20 border-t border-zinc-900">
      <div className="mb-12">
        <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mono mb-4">/ root / credentials</h3>
        <h2 className="text-3xl font-bold text-white">Certified Specialist</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certs.map((cert, idx) => (
          <div 
            key={idx} 
            className="flex flex-col items-center p-12 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 transition-all duration-500 hover:-translate-y-3 cert-glow group"
          >
            <div className="w-32 h-32 mb-8 relative">
              <img 
                src={cert.image} 
                alt={cert.name} 
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100 scale-110 group-hover:scale-125"
              />
            </div>
            <h4 className="text-white text-base font-bold mono text-center mb-2">{cert.name}</h4>
            <p className="text-zinc-500 text-[11px] uppercase tracking-widest text-center font-medium group-hover:text-cyan-400 transition-colors">
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
