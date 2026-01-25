import React from 'react';

const Navbar: React.FC = () => {
  const links = [
    { label: "/about", href: "#about" },
    { label: "/experience", href: "#experience" },
    { label: "/approach", href: "#approach" },
    { label: "/skills", href: "#skills" },
    { label: "/certs", href: "#certs" },
    { label: "/projects", href: "#projects" },
    { label: "/contact", href: "#contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="mono font-bold text-lg tracking-tighter text-white">
          HIMANSH<span className="text-cyan-500 animate-pulse">_</span>
        </div>
        <div className="hidden md:flex space-x-6 text-[12px] mono font-medium text-zinc-500">
          {links.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="hover:text-cyan-400 transition-all hover:-translate-y-0.5"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
            <span className="text-zinc-600 text-xs mono">MENU</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
