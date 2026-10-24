export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI/ML' | 'Full Stack' | 'Database / System';
  description: string;
  longDescription: string;
  image: string;
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
  features: string[];
  architecture?: string[];
  highlight?: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
    description: string;
    iconName?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  description: string[];
  technologies: string[];
  certificateUrl?: string;
  certificateType?: 'image' | 'pdf';
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
  description: string;
  coursework?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: 'NPTEL' | 'Professional' | 'Industrial';
  date: string;
  credentialId?: string;
  verification?: string;
  certificateUrl?: string;
  certificateType?: 'image' | 'pdf';
  skillsGained: string[];
  description?: string;
}

export interface EditableResumeData {
  fullName: string;
  targetRole: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  skillsText: string;
  educationText: string;
  experienceText: string;
  projectsText: string;
}
