import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mono">/ root / about</h3>
        </div>
        <div className="md:col-span-8 space-y-8 text-zinc-400 leading-relaxed text-lg">
          <p>
            I am driven by a deep curiosity for how systems operate under the hood. My approach to security is rooted in <span className="text-zinc-200">offensive security</span> and a "first principles" mentality.
          </p>
          
          <div className="p-6 rounded-xl bg-zinc-900/40 border-l-4 border-cyan-500/50">
            <h4 className="text-sm font-bold text-white mono mb-3 uppercase tracking-wider">Learning Philosophy</h4>
            <p className="text-zinc-400 text-base italic">
              "I prioritize learning systems first—networking, OS internals, cloud orchestration, and distributed systems. By understanding the core mechanics of why things work, I can pinpoint exactly why they break. Fundamentals aren't just a starting point; they are the most powerful exploit primitive."
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            {['Source Code Review', 'Logic Auditing', 'Deep Tech Dives', 'Architecture Design'].map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs mono bg-zinc-900 border border-zinc-800 rounded text-zinc-500">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
