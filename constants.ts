
import { Experience, Education, SkillCategory, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Himanshu Dewali",
  title: "Cybersecurity Engineer",
  email: "Himansh.sec.eng@gmail.com",
  phone: "+91 8126627650",
  location: "Dehradun, India",
  linkedin: "https://linkedin.com", // Placeholder URL as specific slug wasn't in OCR
  summary: "Cybersecurity Engineer with hands-on experience in web and API penetration testing, vulnerability assessment, and application security. Strong at uncovering logic flaws, validating real-world exploitability, and working closely with engineering teams to drive secure remediation. Focused on fundamentals, clarity, and measurable risk reduction."
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Bug Bounty & Hands-On Security Practice",
    company: "Bugcrowd / Self-Practice",
    location: "Global",
    period: "Jun 2025 - Present",
    responsibilities: [
      "Actively engaged in bug bounty programs on Bugcrowd, identifying and reporting real-world web and API vulnerabilities.",
      "Earned swag and bounties for valid security findings, reinforcing practical exploit validation and responsible disclosure workflows.",
      "Continued structured hands-on practice through Hack The Box and web security labs, focusing on authentication, authorization, and business logic flaws aligned with OWASP Top 10 and OWASP API Top 10."
    ]
  },
  {
    role: "Cybersecurity Analyst",
    company: "In TechNet Limited",
    location: "Hyderabad / Remote",
    period: "Mar 2023 - Jun 2025",
    responsibilities: [
      "Conducted 30+ Penetration tests on web application and APIs identifying 150+ security vulnerabilities, including 15+ critical issues (Broken Access Control, Authentication flaws).",
      "Performed manual validation of automated scan results to eliminate false positives and deliver accurate, business-relevant findings.",
      "Authored clear, developer-friendly security reports with risk ratings, exploitation scenarios, and remediation guidance.",
      "Helped developers understand security findings in practical terms, making it easier for them to prioritize and fix issues during regular development cycles.",
      "Executed API security testing using Burp Suite, Postman, SoapUI, focusing on auth flows, token handling, and logic-level abuse."
    ]
  },
  {
    role: "Project Intern",
    company: "MentorMind",
    location: "Remote",
    period: "Aug 2023 - Oct 2023",
    responsibilities: [
      "Built and assessed a secure e-commerce application, performing end-to-end VAPT across authentication, authorization, and business logic layers.",
      "Identified and reported critical vulnerabilities, assisting in prioritization and secure implementation of fixes.",
      "Ensured alignment with OWASP Top 10 and OWASP API Top 10 security standards."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Web & API Security",
    description: "Hands-on experience testing modern web and API applications with focus on authentication, session handling, object-level authorization, and business logic flaws."
  },
  {
    name: "Pentesting Tooling",
    description: "Proficient with Burp Suite, Postman, SoapUI, and manual fuzzing to analyze endpoints, validate exploitability, and eliminate false positives."
  },
  {
    name: "Access Control Analysis",
    description: "Strong in identifying IDOR, BOLA, and privilege escalation across role-based systems and multi-endpoint workflows."
  },
  {
    name: "Exploit Validation & Risk",
    description: "Emphasis on real-world impact - demonstrating unauthorized access, cross-account exposure, and state changes."
  },
  {
    name: "Reporting & Collaboration",
    description: "Clear, developer-friendly reporting with effective communication during triage, remediation, and re-testing."
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Certified Ethical Hacker (CEH) Practical", issuer: "EC-Council" },
  { name: "Microsoft-AZ 900", issuer: "Microsoft" },
  { name: "Certified Appsec Practitioner", issuer: "The SecOps Group" }
];

export const EDUCATION: Education[] = [
  {
    institution: "Indian Institute of Technology Guwahati",
    degree: "Micro-Credit Course",
    location: "Remote",
    period: "Sep 2024 - Jun 2025"
  },
  {
    institution: "Maharaja Agrasen Himalayan Garhwal University",
    degree: "Bachelor's in Computer Applications",
    location: "Pauri (Uttarakhand), India",
    period: "May 2024"
  }
];
