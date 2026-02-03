import type { Project, Skill, ProjectCategory, SkillCategory } from './types';

export const skillCategories: SkillCategory[] = ['Programming', 'AI / ML', 'Databases', 'Tools'];

export const skills: Skill[] = [
  { name: 'HTML', category: 'Programming', icon: 'FileCode' },
  { name: 'CSS', category: 'Programming', icon: 'Paintbrush' },
  { name: 'JavaScript', category: 'Programming', icon: 'FileJson2' },
  { name: 'Python', category: 'Programming', icon: 'Pyramid' },
  { name: 'Java', category: 'Programming', icon: 'Coffee' },
  { name: 'Data Preprocessing', category: 'AI / ML', icon: 'Scaling' },
  { name: 'Model Training', category: 'AI / ML', icon: 'BrainCircuit' },
  { name: 'Basic ML Algorithms', category: 'AI / ML', icon: 'Bot' },
  { name: 'Firebase Firestore', category: 'Databases', icon: 'Database' },
  { name: 'Database Design', category: 'Databases', icon: 'DatabaseZap' },
  { name: 'Git', category: 'Tools', icon: 'GitMerge' },
  { name: 'GitHub', category: 'Tools', icon: 'Github' },
  { name: 'Firebase', category: 'Tools', icon: 'Flame' },
  { name: 'VS Code', category: 'Tools', icon: 'Code' },
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
