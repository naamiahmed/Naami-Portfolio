import { Skill, Project, BlogPost, Education, Certificate, Volunteering } from '../types';

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
    course: 'BSc (Hons) Computing Science in Software Engineering (TOP UP)',
    university: 'Kingston University (Esoft)',
    year: 'Apr 2025 - Present',
    // description: 'Specialized in Software Engineering and Cloud Computing'
  },
  {
    id: '2',
    course: 'National Diploma in Technology (NDT)- Information Technology',
    university: 'Institute of Technology, University of Moratuwa',
    year: 'Dec 2022 - Present',
    // description: 'Professional certification in cloud architecture and services'
  },
  {
    id: '3',
    course: 'Diploma in Computer Science',
    university: 'KDMC Nenasala Training Centre - Kalmunai',
    year: 'Mar 2022 - Mar 2023',
    // description: 'Expertise in Kubernetes application development and deployment'
  }
];

export const certificates: Certificate[] = [
  {
    id: '1',
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    issueDate: '2023-06-15',
    expiryDate: '2026-06-15',
    credentialId: 'AWS-123456789',
    credentialUrl: 'https://aws.amazon.com/verification',
    category: 'cloud'
  },
  {
    id: '2',
    name: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'Cloud Native Computing Foundation',
    issueDate: '2023-08-20',
    credentialId: 'CKAD-987654321',
    credentialUrl: 'https://www.cncf.io/certification/ckad/',
    category: 'devops'
  },
  {
    id: '3',
    name: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    issueDate: '2023-04-10',
    expiryDate: '2026-04-10',
    credentialId: 'DCA-456789123',
    category: 'devops'
  },
  {
    id: '4',
    name: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    issueDate: '2023-11-05',
    expiryDate: '2026-11-05',
    credentialId: 'AZ-204-789123456',
    credentialUrl: 'https://www.microsoft.com/en-us/learning/certification-verification.aspx',
    category: 'cloud'
  },
  {
    id: '5',
    name: 'Google Cloud Professional Cloud Developer',
    issuer: 'Google Cloud',
    issueDate: '2023-09-12',
    expiryDate: '2026-09-12',
    credentialId: 'GCP-PCD-321654987',
    category: 'cloud'
  },
  {
    id: '6',
    name: 'Certified Information Systems Security Professional (CISSP)',
    issuer: 'ISC²',
    issueDate: '2023-12-01',
    credentialId: 'CISSP-147258369',
    category: 'security'
  }
];

export const volunteering: Volunteering[] = [
  {
    id: '1',
    organization: 'Code for Good',
    role: 'Technical Lead',
    duration: '2022 - Present',
    description: 'Leading development teams to create technology solutions for non-profit organizations.',
    impact: [
      'Developed 3 web applications for local charities',
      'Mentored 15+ junior developers',
      'Reduced operational costs by 40% through automation'
    ],
    skills: ['React', 'Node.js', 'Leadership', 'Project Management', 'Mentoring']
  },
  {
    id: '2',
    organization: 'Tech Mentorship Program',
    role: 'Senior Mentor',
    duration: '2021 - Present',
    description: 'Providing technical guidance and career advice to students and early-career professionals.',
    impact: [
      'Mentored 25+ students in software development',
      'Conducted 50+ technical workshops',
      'Helped 8 mentees secure their first tech jobs'
    ],
    skills: ['Teaching', 'Communication', 'Career Development', 'Technical Writing']
  },
  {
    id: '3',
    organization: 'Open Source Community',
    role: 'Contributor & Maintainer',
    duration: '2020 - Present',
    description: 'Active contributor to various open-source projects, focusing on DevOps tools and developer experience.',
    impact: [
      'Contributed to 10+ open-source projects',
      'Maintained 3 popular developer tools',
      'Created documentation used by 1000+ developers'
    ],
    skills: ['Git', 'Documentation', 'Community Building', 'Code Review']
  },
  {
    id: '4',
    organization: 'Local Developer Meetup',
    role: 'Organizer & Speaker',
    duration: '2021 - Present',
    description: 'Organizing monthly tech meetups and delivering technical presentations on modern development practices.',
    impact: [
      'Organized 20+ successful meetups',
      'Delivered 15 technical presentations',
      'Built a community of 200+ developers'
    ],
    skills: ['Public Speaking', 'Event Planning', 'Networking', 'Community Management']
  }
];

export const personalInfo = {
  name: 'Naami Ahmed',
  title: 'Full-Stack & DevOps Enthusiast',
  summary: 'Passionate about building scalable solutions and optimizing development workflows.',
  email: 'mailto:naamiahmed27@gmail.com',
  linkedin: 'https://www.linkedin.com/in/naami-ahmed/',
  github: 'https://github.com/naamiahmed',
  about: `Hello! I'm Naami Ahmed, an enthusiastic IT undergraduate at the Institute of Technology, University of Moratuwa, Sri Lanka. I specialize in DevOps, Full-Stack Web Development, and Cloud Technologies.
I’m passionate about building scalable software and systems, contributing to open-source, and learning modern cloud-native tools. My goal is to become a skilled software engineer who can create impactful digital solutions.
`
};