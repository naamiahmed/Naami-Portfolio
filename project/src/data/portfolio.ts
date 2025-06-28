import { Skill, Project, BlogPost, Education, Experience, Certificate, Volunteering } from '../types';

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
    title: 'AWS RDS Cost Optimization Using Serverless Automation',
    description: 'Designed and implemented an automated cost-optimization solution for AWS RDS using **AWS Lambda, CloudFormation, and CloudWatch Logs**. This serverless function automatically starts and stops the RDS instance based on scheduled times, reducing unnecessary billing costs during idle periods.',
    techStack: ['AWS Lambda', 'RDS', 'IAM', 'CloudFormation', 'CloudWatch'],
    // githubUrl: 'https://github.com/username/multi-cloud-infra',
    category: 'devops'
  },
  {
    id: '2',
    title: 'CI/CD Pipeline Optimization',
    description: 'Reduced deployment time by 70% using advanced CI/CD techniques and containerization.',
    techStack: ['Jenkins', 'Docker', 'AWS', 'Bash', 'Monitoring'],
    // githubUrl: 'https://github.com/username/cicd-optimization',
    category: 'devops'
  },
  {
    id: '3',
    title: 'TrekTempo (Smart Travel app for Sri Lanka )',
    description: 'A comprehensive travel app that enables users to plan trips, explore destinations, and manage events and accommodations.Key Features - Trip planning based on budget type , Explore and add events and destinations ,Add and manage accommodation options',
    techStack: ['Flutter', 'Node.js', 'Express.js', 'JavaScript', 'HTML', 'CSS', 'React', 'MongoDB', 'AWS EC2'],
    githubUrl: 'https://github.com/naamiahmed/TrekTempo',
    // demoUrl: 'https://demo.example.com',
    category: 'development'
  },
  {
    id: '4',
    title: 'Busify (Ticket Booking Managements System)',
    description: 'Developed a web application for bus ticket booking with real-time tracking of bus locations.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    githubUrl: 'https://github.com/naamiahmed/Busify',
    // demoUrl: 'https://task-demo.example.com',
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

export const experience: Experience[] = [
  // {
  //   id: '1',
  //   position: 'Senior DevOps Engineer',
  //   company: 'TechCorp Solutions',
  //   location: 'San Francisco, CA',
  //   duration: '2023 - Present',
  //   description: 'Leading infrastructure automation and cloud migration initiatives for enterprise clients.',
  //   achievements: [
  //     'Reduced deployment time by 70% through CI/CD pipeline optimization',
  //     'Implemented multi-cloud strategy saving $200K annually in infrastructure costs',
  //     'Led team of 5 engineers in Kubernetes migration project',
  //     'Improved system reliability achieving 99.9% uptime'
  //   ],
  //   technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'GitHub Actions', 'Python', 'Bash'],
  //   category: 'devops'
  // },
  {
    id: '2',
    position: 'Intern Software Engineer',
    company: 'EverestX Technologies',
    location: 'Sri Lanka, Colombo',
    duration: 'Jan 2025 - Present',
    description: 'Developed and maintained web applications using React with TypeScript for a scalable and efficient frontend. Worked on cloud infrastructure, utilizing AWS RDS, Lambda, EC2, and Nginx for deployment and backend optimization.',
    achievements: [
    ],
    technologies: ['React', 'Angular', 'TypeScript', 'PostgreSQL', 'Nginx', 'Docker', 'AWS'],
    categories: ['development', 'devops']
  },
  // {
  //   id: '3',
  //   position: 'Software Engineer',
  //   company: 'StartupHub',
  //   location: 'Austin, TX',
  //   duration: '2020 - 2021',
  //   description: 'Contributed to early-stage startup developing mobile-first web applications.',
  //   achievements: [
  //     'Developed MVP features that helped secure $2M in funding',
  //     'Built responsive UI components used across 5 different applications',
  //     'Implemented automated testing increasing code coverage to 85%',
  //     'Collaborated with design team to improve user experience'
  //   ],
  //   technologies: ['React', 'JavaScript', 'Flutter', 'Firebase', 'Git', 'Jest', 'Figma'],
  //   category: 'development'
  // }
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
    organization: 'Amazon Web Services (AWS)',
    role: 'AWS Cloud Club Captain - ITUM',
    duration: '2025 - Present',
    description: 'Selected as the AWS Cloud Club Captain for the Institute of Technology, University of Moratuwa. Led technical workshops, cloud study sessions, and helped peers get started with AWS fundamentals.',
    impact: [
      'Organized cloud bootcamps, webinars, and lab sessions',
      'Mentored students on AWS best practices and certifications',
      'Coordinated with AWS community leaders to run cloud events'
    ],
    skills: ['Team coordination', 'Public speaking', 'Event planning', 'Mentorship', 'Time management', 'Community building']
  },
  {
    id: '2',
    organization: 'Microsoft',
    role: 'Microsoft Learn Student Ambassador (MLSA)',
    duration: '2024 - Present',
    description: 'Microsoft Learn Student Ambassador (MLSA) is a program that provides students with the opportunity to learn about Microsoft technologies and become ambassadors for Microsoft. I was selected as a Microsoft Learn Student Ambassador for the Institute of Technology, University of Moratuwa.',
    impact: [
      'Participated in Microsoft Learn Student Ambassador program',
      'Attended Microsoft events and webinars',
      'Promoted open-source contribution and learning culture'
    ],
    skills: ['Azure Functions', 'CI/CD pipelines', 'Technical presentation', 'Support for juniors', 'Hosting events', 'Managing student groups']
  },
  // {
  //   id: '3',
  //   organization: 'Open Source Community',
  //   role: 'Contributor & Maintainer',
  //   duration: '2020 - Present',
  //   description: 'Active contributor to various open-source projects, focusing on DevOps tools and developer experience.',
  //   impact: [
  //     'Contributed to 10+ open-source projects',
  //     'Maintained 3 popular developer tools',
  //     'Created documentation used by 1000+ developers'
  //   ],
  //   skills: ['Git', 'Documentation', 'Community Building', 'Code Review']
  // },
  {
    id: '4',
    organization: 'Bakinigahwela Undergraduates Association',
    role: 'Vice President',
    duration: '2021 - Present',
    description: 'Actively involved in planning, coordinating, and managing various academic, technical, and cultural events to support student engagement and leadership.',
    impact: [
      'Assisted the President in leading the student body and committees',
      'Coordinated events such as workshops, tech talks, and competitions',
      'Supported students through mentoring and organizing awareness sessions',
      'Collaborated with external speakers, sponsors, and university staff'
    ],
    skills: ['Public Speaking', 'Event Planning', 'Networking', 'Community Management']
  }
];

export const personalInfo = {
  name: 'Naami Ahmed',
  title: 'Full-Stack & DevOps Enthusiast',
  summary: 'Passionate about building scalable solutions and optimizing development workflows.',
  email: 'naamiahmed@gmail.com',
  linkedin: 'https://linkedin.com/in/naamiahmed',
  github: 'https://github.com/naamiahmed',
  about: `Hello! I'm Naami Ahmed, an enthusiastic IT undergraduate at the Institute of Technology, University of Moratuwa, Sri Lanka. I specialize in DevOps, Full-Stack Web Development, and Cloud Technologies.
I'm passionate about building scalable software and systems, contributing to open-source, and learning modern cloud-native tools. My goal is to become a skilled software engineer who can create impactful digital solutions.
`
};