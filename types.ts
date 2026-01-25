import React from 'react';

export interface Skill {
  title: string;
  items: string[];
  tools: string[];
  icon?: React.ReactNode;
}

export interface Project {
  title: string;
  problem: string;
  attackSurface: string;
  vulnerabilityClass: string;
  impact: string;
  fixDirection: string;
  status: string;
}

export interface Certification {
  name: string;
  issuer: string;
  image: string;
}
