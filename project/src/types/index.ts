export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
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

export type ToggleState = 'devops' | 'development';

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}