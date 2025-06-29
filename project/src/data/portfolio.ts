import { Skill, Project, BlogPost, Education, Experience, Certificate, Volunteering, Service } from '../types';

export const devopsSkills: Skill[] = [
  { name: 'Docker' },
  { name: 'Kubernetes' },
  { name: 'Nginx' },
  { name: 'Jenkins' },
  { name: 'GitHub Actions' },
  { name: 'AWS' },
  { name: 'Google Cloud' },
  { name: 'Azure' },
];

export const developmentSkills: Skill[] = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'React' },
  { name: 'Flutter (Dart)' },
  { name: 'TypeScript' },
  { name: 'PHP' },
  { name: 'Node.js' },
  { name: 'Express.js' },
  { name: 'Java' },
  { name: 'Python' },
  { name: 'MySQL' },
  { name: 'MongoDB' },
  { name: 'Git' },
  { name: 'GitHub' },
  { name: 'VSCode' },
  { name: 'Figma' },
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
    title: '⚠️ What Happens to Your AWS RDS Instances After Account Suspension?',
    summary: 'Have you ever wondered what happens to your AWS resources if your account gets suspended — especially your RDS databases?',
    coverImage: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    readMoreUrl: 'https://dev.to/naamiahmed/what-happens-to-your-aws-rds-instances-after-account-suspensionauthor-naami-ahmed-456c',
    category: 'devops',
    publishDate: '2025-06-27'
  },
  {
    id: '2',
    title: 'Nginx Configuration on AWS EC2 Deployment',
    summary: 'This guide explains how to configure an EC2 instance, install Nginx, and set up auto-deployment using GitHub Actions.',
    coverImage: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
    readMoreUrl: 'https://dev.to/naamiahmed/nginx-configuration-on-aws-ec2-deployment-4fbd',
    category: 'devops',
    publishDate: '2024-01-08'
  },
  {
    id: '3',
    title: 'Automating AWS RDS Management Using IAM, Lambda, CloudWatch, and EventBridge',
    summary: 'In cloud computing, cost and resource optimization are critical for efficient infrastructure management. AWS provides various services that help automate database management, enhance security, and ensure high availability.',
    coverImage: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    readMoreUrl: 'https://medium.com/@naamiahmed/automating-aws-rds-management-using-iam-lambda-cloudwatch-and-eventbridge-6a4aadab6388',
    category: 'devops',
    publishDate: '2025-02-28'
  },
  {
    id: '4',
    title: 'How Java Code Runs on a Computer: From Source Code to Execution',
    summary: 'Java is a powerful, platform-independent programming language known for its "write once, run anywhere" capability. But how exactly does Java code go from plain text written by a programmer to an executable program running on any computer?',
    coverImage: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
    readMoreUrl: 'https://medium.com/@naamiahmed/how-java-code-runs-on-a-computer-from-source-code-to-execution-b040ad9397d8',
    category: 'development',
    publishDate: '2024-11-12'
  }
];

export const education: Education[] = [
  {
    id: '1',
    course: 'BSc (Hons) Computing Science in Software Engineering (TOP UP)',
    university: 'Kingston University',
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
    name: 'AWS Cloud Club Captain',
    issuer: 'Amazon Web Services',
    issueDate: '2025-05-01',
    // expiryDate: '2026-06-15',
    // credentialId: 'AWS-123456789',
    credentialUrl: 'https://www.credly.com/badges/df4185c6-be20-4f6d-b19c-98b962e2bdb6/public_url',
    category: 'devops'
  },
  {
    id: '2',
    name: 'Getting Started with DevOps on AWS',
    issuer: 'Amazon Web Services',
    issueDate: '2024-08-07',
    // credentialId: 'CKAD-987654321',
    credentialUrl: 'https://drive.google.com/file/d/1j4dfFSX3sY4ACGOIgp2-WM2xdUtCzGzz/view',
    category: 'devops'
  },
  {
    id: '3',
    name: 'DevOps Foundations: Continuous Delivery/Continuous Integration',
    issuer: 'LinkedIn Learning',
    issueDate: '2024-07-27',
    // expiryDate: '2026-04-10',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/2cf0b9a591f37862b6b36f85391d08f61010a6d50f42f020b1c3561443a3f04c',
    category: 'devops'
  },
  {
    id: '4',
    name: 'Microsoft Learn Student Ambassador',
    issuer: 'Microsoft',
    issueDate: '2025-01-05',
    // expiryDate: '2026-11-05',
    // credentialId: 'AZ-204-789123456',
    credentialUrl: 'https://mvp.microsoft.com/studentambassadors/certificate/1500eca9-440f-4b57-bb57-8928f9744751',
    category: 'devops'
  },
  {
    id: '5',
    name: 'Manage Kubernetes in Google Cloud',
    issuer: 'Google Cloud',
    issueDate: '2024-08-15',
    // expiryDate: '2026-09-12',
    credentialUrl: 'https://www.credly.com/badges/e86148c9-618e-4fd8-bdbe-ea1ee45e9b8b/public_url',
    category: 'devops'
  },
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

export const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Full-stack web applications using modern technologies like React, Node.js, and TypeScript.',
    icon: '💻',
    features: [
      'Responsive web design',
      'Frontend development with React/Next.js',
      'Backend API development',
      'Database design and optimization',
      'Performance optimization',
      'SEO optimization'
    ],
    category: 'web-development'
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications using React Native, Flutter, and native development.',
    icon: '📱',
    features: [
      'Cross-platform development (iOS & Android)',
      'React Native applications',
      'Flutter development',
      'Native iOS/Android apps',
      'App store optimization',
      'Performance optimization'
    ],
    category: 'mobile-development'
  },
  {
    id: '3',
    title: 'DevOps & Cloud Solutions',
    description: 'Infrastructure automation, CI/CD pipelines, and cloud deployment solutions.',
    icon: '☁️',
    features: [
      'AWS/Azure/GCP cloud infrastructure',
      'Docker containerization',
      'Kubernetes orchestration',
      'CI/CD pipeline setup',
      'Infrastructure as Code (Terraform)',
      'Monitoring and logging'
    ],
    category: 'devops'
  },
  {
    id: '4',
    title: 'Training & Mentorship',
    description: 'Personalized training sessions and mentorship for developers and teams.',
    icon: '📚',
    features: [
      'Web development workshops',
      'DevOps fundamentals training',
      'Cloud computing tutorials',
      'Best practices guidance',
      'Code review sessions',
      'Career development advice'
    ],
    category: 'training'
  }
];

export const personalInfo = {
  name: 'Naami Ahmed',
  title: 'Full-Stack & DevOps Enthusiast',
  summary: 'Passionate about building scalable solutions and optimizing development workflows.',
  email: 'naamiahmed27@gmail.com',
  linkedin: 'https://linkedin.com/in/naamiahmed',
  github: 'https://github.com/naamiahmed',
  about: `Hello! I'm Naami Ahmed, an enthusiastic IT undergraduate at the Institute of Technology, University of Moratuwa, Sri Lanka. I specialize in DevOps, Full-Stack Web Development, and Cloud Technologies.
I'm passionate about building scalable software and systems, contributing to open-source, and learning modern cloud-native tools. My goal is to become a skilled software engineer who can create impactful digital solutions.
`
};