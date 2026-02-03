import type { Project, Skill, ProjectCategory, SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  'Programming',
  'AI / ML',
  'Cloud & DevOps',
  'Tools & Frameworks',
];

export const skills: Skill[] = [
  // Programming
  { name: 'TypeScript', category: 'Programming', icon: 'FileJson' },
  { name: 'JavaScript', category: 'Programming', icon: 'FileJson2' },
  { name: 'Python', category: 'Programming', icon: 'Pyramid' },
  { name: 'Java', category: 'Programming', icon: 'Coffee' },
  { name: 'C++', category: 'Programming', icon: 'FileCode' },
  { name: 'HTML', category: 'Programming', icon: 'FileCode2' },
  { name: 'CSS', category: 'Programming', icon: 'Paintbrush' },

  // AI / ML
  { name: 'Gemini & Claude APIs', category: 'AI / ML', icon: 'BrainCircuit' },
  { name: 'AI Agents & SDKs', category: 'AI / ML', icon: 'Bot' },
  { name: 'Hugging Face', category: 'AI / ML', icon: 'Smile' },
  { name: 'TensorFlow', category: 'AI / ML', icon: 'Scaling' },
  { name: 'Model Training', category: 'AI / ML', icon: 'Cog' },
  { name: 'Data Preprocessing', category: 'AI / ML', icon: 'Filter' },

  // Cloud & DevOps
  { name: 'Docker', category: 'Cloud & DevOps', icon: 'Container' },
  { name: 'Kubernetes', category: 'Cloud & DevOps', icon: 'ShipWheel' },
  { name: 'Vercel', category: 'Cloud & DevOps', icon: 'Triangle' },
  { name: 'Render', category: 'Cloud & DevOps', icon: 'Rocket' },
  { name: 'Railway', category: 'Cloud & DevOps', icon: 'TrainFront' },

  // Tools & Frameworks
  { name: 'Next.js', category: 'Tools & Frameworks', icon: 'Webhook' },
  { name: 'React', category: 'Tools & Frameworks', icon: 'Atom' },
  { name: 'FastAPI', category: 'Tools & Frameworks', icon: 'Server' },
  { name: 'Tailwind CSS', category: 'Tools & Frameworks', icon: 'Wind' },
  { name: 'Firebase', category: 'Tools & Frameworks', icon: 'Flame' },
  { name: 'Git & GitHub', category: 'Tools & Frameworks', icon: 'Github' },
  { name: 'VS Code', category: 'Tools & Frameworks', icon: 'Terminal' },
];

export const projectCategories: ProjectCategory[] = ['AI / ML', 'Database', 'Web', 'Game Development'];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Intelligent Customer Support Chatbot',
    description:
      'A chatbot built with natural language processing to automate customer support, understand user queries, and provide instant, accurate responses. Reduces wait times and improves user satisfaction.',
    techStack: ['Python', 'TensorFlow', 'NLTK', 'Flask'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'AI / ML',
    image: 'https://picsum.photos/seed/1/800/600',
    imageHint: 'AI chatbot',
  },
  {
    id: '2',
    title: 'E-commerce Analytics Dashboard',
    description:
      'A real-time analytics dashboard for an e-commerce platform. It processes and visualizes sales data, customer behavior, and inventory levels to provide actionable insights for business growth.',
    techStack: ['Firebase Firestore', 'React', 'D3.js', 'Node.js'],
    githubLink: 'https://github.com',
    category: 'Database',
    image: 'https://picsum.photos/seed/2/800/600',
    imageHint: 'data dashboard',
  },
  {
    id: '3',
    title: 'Modern Portfolio Website',
    description:
      'A fully responsive personal portfolio website built with Next.js and Tailwind CSS. Features a clean design, smooth animations, and a content management system for easy updates.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    category: 'Web',
    image: 'https://picsum.photos/seed/3/800/600',
    imageHint: 'web design',
  },
  {
    id: '4',
    title: '2D Platformer Adventure Game',
    description:
      'A classic 2D platformer game with unique levels, enemies, and power-ups. Built with a custom game engine focusing on performance and fluid character controls.',
    techStack: ['Java', 'LibGDX', 'Custom Engine'],
    githubLink: 'https://github.com',
    category: 'Game Development',
    image: 'https://picsum.photos/seed/4/800/600',
    imageHint: 'game development',
  },
];
