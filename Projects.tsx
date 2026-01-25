import React from 'react';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group rounded-xl border border-zinc-800 bg-zinc-900/30 p-8 flex flex-col hover:bg-zinc-900/50 transition-all duration-500 hover:border-zinc-700">
    <div className="flex justify-between items-start mb-6">
       <span className="text-[10px] mono font-bold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
        {project.status}
      </span>
      <span className="text-[10px] mono text-zinc-600">ID: PROJ_{Math.floor(Math.random()*1000)}</span>
    </div>
    
    <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
      {project.title}
    </h4>

    <div className="grid grid-cols-1 gap-6 text-sm">
      <div>
        <span className="text-zinc-500 block mono text-[10px] uppercase mb-1">Problem</span>
        <p className="text-zinc-300 leading-relaxed">{project.problem}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="text-zinc-500 block mono text-[10px] uppercase mb-1">Attack Surface</span>
          <p className="text-zinc-400 text-xs">{project.attackSurface}</p>
        </div>
        <div>
          <span className="text-zinc-500 block mono text-[10px] uppercase mb-1">Vuln Class</span>
          <p className="text-cyan-500/80 text-xs font-medium">{project.vulnerabilityClass}</p>
        </div>
      </div>

      <div className="pt-4 border-t border-zinc-800/50">
        <div className="flex items-start mb-3">
          <span className="text-zinc-500 mono text-[10px] uppercase mt-1 mr-3 w-20">Impact</span>
          <p className="text-zinc-400 text-xs flex-1">{project.impact}</p>
        </div>
        <div className="flex items-start">
          <span className="text-zinc-500 mono text-[10px] uppercase mt-1 mr-3 w-20">Fix</span>
          <p className="text-zinc-400 text-xs flex-1 italic">{project.fixDirection}</p>
        </div>
      </div>
    </div>

    <div className="mt-8 flex items-center text-xs mono text-zinc-600 group-hover:text-cyan-400 transition-colors cursor-pointer">
      <span className="underline underline-offset-4 decoration-zinc-800 group-hover:decoration-cyan-500/50">Decrypt Full Case Study</span>
      <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" />
      </svg>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projectList: Project[] = [
    {
      title: "Fintech API Logic Bypass",
      problem: "Complex multi-step transaction process had an out-of-order state transition flaw allowing fee evasion.",
      attackSurface: "REST API / Internal Ledger",
      vulnerabilityClass: "Insecure Direct Object Reference (IDOR)",
      impact: "Potential loss of millions in transaction fees across high-volume accounts.",
      fixDirection: "Implemented server-side state machine validation with cryptographically signed tokens.",
      status: "COMPLETED"
    },
    {
      title: "Android Banking App Runtime Hijack",
      problem: "Sensitive biometric authentication could be bypassed via dynamic instrumentation on rooted devices.",
      attackSurface: "Native Libs / Biometric API",
      vulnerabilityClass: "Broken Authentication",
      impact: "Unauthorized access to user funds on compromised mobile hardware.",
      fixDirection: "Deployed advanced RASP (Runtime Application Self-Protection) and TEE-backed validation.",
      status: "CASE STUDY"
    },
    {
      title: "Cloud Infrastructure Audit System",
      problem: "Disconnected dev teams creating shadow IT resources with public exposure and overly permissive IAM.",
      attackSurface: "AWS Multi-Account Environment",
      vulnerabilityClass: "Configuration Drift",
      impact: "High risk of data exfiltration from exposed S3 buckets and RDS snapshots.",
      fixDirection: "Built automated OPA (Open Policy Agent) gatekeeper for Terraform deployments.",
      status: "ACTIVE RESEARCH"
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-zinc-900">
      <div className="mb-12">
        <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mono mb-4">/ root / case_studies</h3>
        <h2 className="text-3xl font-bold text-white">Project Deep Dives</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectList.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
