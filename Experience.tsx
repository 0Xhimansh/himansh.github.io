import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mono">/ root / corporate_exp</h3>
        </div>
        <div className="md:col-span-8">
          <h2 className="text-3xl font-bold text-white mb-12">Corporate Experience</h2>
          
          <div className="space-y-16">
            {/* Cybersecurity Analyst */}
            <div className="relative pl-8 border-l border-zinc-800 group">
              <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
              <div className="mb-4">
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">Cybersecurity Analyst</h4>
                <div className="flex flex-wrap items-center gap-x-3 text-sm mono mt-1">
                  <span className="text-cyan-400">IN TECHNET LIMITED</span>
                  <span className="text-zinc-600">(Hyderabad / Remote)</span>
                  <span className="text-zinc-500">— Mar 2023 – Jun 2025</span>
                </div>
              </div>
              <ul className="space-y-3 text-zinc-400 text-sm leading-relaxed max-w-3xl">
                <li className="flex items-start">
                  <span className="text-zinc-600 mr-2 mono">•</span>
                  Conducted 30+ penetration tests on web applications and APIs, identifying 150+ security vulnerabilities, including 15+ critical issues (Broken Access Control, Authentication flaws).
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-600 mr-2 mono">•</span>
                  Performed manual validation of automated scan results to eliminate false positives and deliver accurate, business-relevant findings.
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-600 mr-2 mono">•</span>
                  Authored clear, developer-friendly security reports with risk ratings, exploitation scenarios, and remediation guidance.
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-600 mr-2 mono">•</span>
                  Helped developers understand security findings in practical terms, making it easier for them to prioritize and fix issues during regular development cycles.
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-600 mr-2 mono">•</span>
                  Executed API security testing using Burp Suite, Postman, and SoapUI, focusing on auth flows, token handling, and logic-level abuse.
                </li>
              </ul>
            </div>

            {/* Project Intern */}
            <div className="relative pl-8 border-l border-zinc-800 group">
              <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-zinc-800 group-hover:bg-cyan-500 transition-colors"></div>
              <div className="mb-4">
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">Project Intern</h4>
                <div className="flex flex-wrap items-center gap-x-3 text-sm mono mt-1">
                  <span className="text-cyan-400">MENTORMIND</span>
                  <span className="text-zinc-600">(Remote)</span>
                  <span className="text-zinc-500">— Aug 2023 – Oct 2023</span>
                </div>
              </div>
              <ul className="space-y-3 text-zinc-400 text-sm leading-relaxed max-w-3xl">
                <li className="flex items-start">
                  <span className="text-zinc-600 mr-2 mono">•</span>
                  Built and assessed a secure e-commerce application, performing end-to-end VAPT across authentication, authorization, and business logic layers.
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-600 mr-2 mono">•</span>
                  Identified and reported critical vulnerabilities, assisting in prioritization and secure implementation of fixes.
                </li>
                <li className="flex items-start">
                  <span className="text-zinc-600 mr-2 mono">•</span>
                  Ensured alignment with OWASP Top 10 and OWASP API Top 10 security standards.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
