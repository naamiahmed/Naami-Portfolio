export interface Skill {
  name: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: 'devops' | 'development';
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  coverImage?: string;
  readMoreUrl: string;
  category: 'devops' | 'development';
  publishDate: string;
}

export interface Education {
  id: string;
  course: string;
  university: string;
  year: string;
  description?: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  categories: ('devops' | 'development' | 'fullstack')[];
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  category: 'devops' | 'development' | 'other';
}

export interface Volunteering {
  id: string;
  organization: string;
  role: string;
  duration: string;
  description: string;
  impact: string[];
  skills: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
  category: 'web-development' | 'devops' | 'mobile-development' | 'training';
}

export type ToggleState = 'devops' | 'development';

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}