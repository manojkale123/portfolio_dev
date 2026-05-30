// ─── Skill ───────────────────────────────────────────────
export interface Skill {
  name: string;
}

// ─── Experience ──────────────────────────────────────────
export interface SubRole {
  title: string;
  technologies: string[];
  bullets: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  subRoles?: SubRole[];
  bullets?: string[];
  technologies?: string[];
}

// ─── Project ─────────────────────────────────────────────
export interface Project {
  id: string;
  number: string;
  name: string;
  description: string;
  stack: string[];
}

// ─── Education ───────────────────────────────────────────
export interface Education {
  id: string;
  degree: string;
  university: string;
  location: string;
}

// ─── Contact ─────────────────────────────────────────────
export interface ContactLink {
  label: string;
  value: string;
  href: string;
}
