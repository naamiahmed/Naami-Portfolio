import { Skill, Project, BlogPost, Education } from '../types';

export const devopsSkills: Skill[] = [
  { name: 'Docker', level: 'Advanced' },
  { name: 'AWS', level: 'Advanced' },
  { name: 'Kubernetes', level: 'Intermediate' },
  { name: 'CI/CD', level: 'Advanced' },
  { name: 'Linux', level: 'Expert' },
  { name: 'GitHub Actions', level: 'Advanced' },
  { name: 'Terraform', level: 'Intermediate' },
  { name: 'Jenkins', level: 'Advanced' },
];

export const developmentSkills: Skill[] = [
  { name: 'React', level: 'Advanced' },
  { name: 'Node.js', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'Spring Boot', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Advanced' },
  { name: 'Flutter', level: 'Intermediate' },
  { name: 'PostgreSQL', level: 'Advanced' },
  { name: 'Python', level: 'Intermediate' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Multi-Cloud Infrastructure',
    description: 'Automated deployment pipeline with Terraform and Kubernetes for multi-cloud environments.',
    techStack: ['Terraform', 'Kubernetes', 'AWS', 'Docker', 'GitHub Actions'],
    githubUrl: 'https://github.com/username/multi-cloud-infra',
    category: 'devops'
  },
  {
    id: '2',
    title: 'CI/CD Pipeline Optimization',
    description: 'Reduced deployment time by 70% using advanced CI/CD techniques and containerization.',
    techStack: ['Jenkins', 'Docker', 'AWS', 'Bash', 'Monitoring'],
    githubUrl: 'https://github.com/username/cicd-optimization',
    category: 'devops'
  },
  {
    id: '3',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory and payment processing.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    githubUrl: 'https://github.com/username/ecommerce-platform',
    demoUrl: 'https://demo.example.com',
    category: 'development'
  },
  {
    id: '4',
    title: 'Task Management App',
    description: 'Cross-platform task management application with real-time collaboration features.',
    techStack: ['Flutter', 'Firebase', 'Node.js', 'WebSocket', 'MongoDB'],
    githubUrl: 'https://github.com/username/task-manager',
    demoUrl: 'https://task-demo.example.com',
    category: 'development'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Docker Multi-Stage Builds',
    summary: 'Learn how to optimize your Docker images using multi-stage builds and reduce image size by up to 80%.',
    coverImage: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    readMoreUrl: '#',
    category: 'devops',
    publishDate: '2024-01-15'
  },
  {
    id: '2',
    title: 'Kubernetes Best Practices',
    summary: 'Essential security and performance practices for production Kubernetes deployments.',
    coverImage: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
    readMoreUrl: '#',
    category: 'devops',
    publishDate: '2024-01-08'
  },
  {
    id: '3',
    title: 'Building Scalable React Applications',
    summary: 'Architecture patterns and best practices for building maintainable React applications at scale.',
    coverImage: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    readMoreUrl: '#',
    category: 'development',
    publishDate: '2024-01-22'
  },
  {
    id: '4',
    title: 'Modern API Design with Node.js',
    summary: 'Design patterns and tools for creating robust, scalable APIs using Node.js and TypeScript.',
    coverImage: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
    readMoreUrl: '#',
    category: 'development',
    publishDate: '2024-01-10'
  }
];

export const education: Education[] = [
  {
    id: '1',
    course: 'Bachelor of Science in Computer Science',
    university: 'University of Technology',
    year: '2020-2024',
    description: 'Specialized in Software Engineering and Cloud Computing'
  },
  {
    id: '2',
    course: 'AWS Certified Solutions Architect',
    university: 'Amazon Web Services',
    year: '2023',
    description: 'Professional certification in cloud architecture and services'
  },
  {
    id: '3',
    course: 'Certified Kubernetes Application Developer',
    university: 'Cloud Native Computing Foundation',
    year: '2023',
    description: 'Expertise in Kubernetes application development and deployment'
  }
];

export const personalInfo = {
  name: 'Alex Johnson',
  title: 'Full-Stack & DevOps Enthusiast',
  summary: 'Passionate about building scalable solutions and optimizing development workflows.',
  email: 'alex.johnson@example.com',
  linkedin: 'https://linkedin.com/in/alexjohnson',
  github: 'https://github.com/alexjohnson',
  about: `I'm a dedicated software engineer with a strong foundation in both development and DevOps practices. 
  My journey began with a Computer Science degree where I discovered my passion for creating efficient, 
  scalable solutions. I love the intersection of development and operations, finding innovative ways to 
  streamline processes and improve system reliability. When I'm not coding, you'll find me exploring 
  new cloud technologies or contributing to open-source projects.`
};