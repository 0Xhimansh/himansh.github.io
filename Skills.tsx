import React from 'react';
import { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill; highlighted?: boolean }> = ({ skill, highlighted }) => (
  <div className={`p-8 rounded-xl border transition-all duration-300 group ${
    highlighted 
    ? 'bg-cyan-500/5 border-cyan-500/20 hover:border-cyan-500/40' 
    : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
  }`}>
    <h4 className="text-xl font-bold text-white mb-6 flex items-center">
      <span className={`w-2 h-2 rounded-full mr-3 group-hover:scale-150 transition-transform ${
        highlighted ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'bg-zinc-700 group-hover:bg-cyan-500'
      }`}></span>
      {skill.title}
    </h4>
    <ul className="space-y-3 mb-8">
      {skill.items.map((item, i) => (
        <li key={i} className="text-zinc-400 text-sm flex items-start">
          <span className="text-zinc-600 mr-2 mono">•</span>
          {item}
        </li>
      ))}
    </ul>
    <div className="pt-6 border-t border-zinc-800/50">
      <p className="text-[10px] mono uppercase text-zinc-600 mb-3 tracking-widest font-bold">Focus & Methodology</p>
      <div className="flex flex-wrap gap-2">
        {skill.tools.map((tool, i) => (
          <span key={i} className="px-2 py-1 text-[11px] mono bg-black/40 text-cyan-500/80 rounded border border-cyan-500/10">
            {tool}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  const coreStrengths: Skill[] = [
    {
      title: "Threat Modeling",
      items: [
        "Identification of trust boundaries, critical assets, and attacker goals",
        "Deep application of STRIDE-style thinking to complex systems",
        "Analysis of abuse cases during the design phase to prevent vulnerabilities",
        "Securing architecture before deployment, not just patching after",
        "Quantifying security risk in terms of business impact"
      ],
      tools: ["STRIDE", "Trust Boundary Mapping", "Abuse Case Analysis", "Risk Scoring"]
    },
    {
      title: "Source Code Review",
      items: [
        "Manual logic review focused on identifying systemic design flaws",
        "Deep dives into backend logic to find auth flaws and state issues",
        "Analysis of data flows to catch unsafe assumptions and injections",
        "Beyond-the-tool review for vulnerabilities scanners consistently miss",
        "Auditing complex distributed systems for race conditions and logic bypasses"
      ],
      tools: ["Manual Auditing", "Static Analysis", "Semgrep", "Data Flow Analysis"]
    }
  ];

  const technicalProficiency: Skill[] = [
    {
      title: "Web & API Security",
      items: [
        "Business logic abuse & workflow flaws",
        "Broken Authorization (IDOR/BOLA)",
        "Advanced XSS & CSRF chaining",
        "Deserialization & Injections (SQL/NoSQL)",
        "Manual exploitation beyond scanners"
      ],
      tools: ["Burp Suite", "Postman", "Intruder", "Repeater", "Custom Fuzzers"]
    },
    {
      title: "Mobile (Android) Security",
      items: [
        "Runtime tampering & SSL pinning bypass",
        "Reverse engineering (APK, Smali, Native)",
        "WebView & Deep Link abuse",
        "Intent hijacking & Client trust failures",
        "Insecure data storage analysis"
      ],
      tools: ["Frida", "Objection", "JADX", "APKTool", "MobSF", "ADB"]
    },
    {
      title: "Active Directory & Internal",
      items: [
        "AD enumeration & attack paths",
        "Kerberos abuse & Golden Ticket",
        "ADCS misconfigurations & NTLM relay",
        "DACL escalation & Lateral movement",
        "Post-exploitation mindset"
      ],
      tools: ["BloodHound", "PowerView", "CrackMapExec", "Rubeus", "Sliver"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="mb-12">
        <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mono mb-4">/ root / expertise</h3>
        <h2 className="text-3xl font-bold text-white">Security Proficiency</h2>
      </div>
      
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreStrengths.map((skill, i) => (
            <SkillCard key={i} skill={skill} highlighted={true} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {technicalProficiency.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
