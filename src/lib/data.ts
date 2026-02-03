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
  { name: 'Python', category: 'Programming', icon: 'Code' },
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
  { name: 'Kubernetes', category: 'Cloud & DevOps', icon: 'Network' },
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

export const projectCategories: ProjectCategory[] = ['AI / ML', 'Web', 'Academic'];

export const projects: Project[] = [
  {
    id: '1',
    title: 'SHIFA – Healthcare Management System',
    description:
      'A full-featured hospital management system for patient records, doctor scheduling, and medical history management.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Vercel'],
    liveLink: 'https://shifa-840.vercel.app/',
    githubLink: 'https://github.com/HafsaRahman05/SHIFA',
    category: 'Web',
    image: 'https://raw.githubusercontent.com/HafsaRahman05/image/main/image%20copy.png',
    imageHint: 'hospital dashboard',
  },
  {
    id: '2',
    title: 'Hecto – Ecommerce website',
    description:
      'A modern e-commerce website with a clean user interface for browsing and purchasing products.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    liveLink: 'https://hecto-hafsarahman-final.vercel.app/',
    githubLink: 'https://github.com/HafsaRahman05/hecto-hafsarahman',
    category: 'Web',
    image: 'https://raw.githubusercontent.com/HafsaRahman05/image/main/Screenshot%202026-02-03%20225902.png',
    imageHint: 'ecommerce website',
  },
  {
    id: '3',
    title: 'Physical AI Humanoid Textbook',
    description:
      'An AI-driven interactive platform for learning humanoid robotics concepts with live simulations and tutorials.',
    techStack: ['Docusaurus', 'Claude API', 'Spec-Kit Plus', 'GitHub Pages'],
    liveLink: 'https://hafsarahman05.github.io/physical-ai-humanoid-textbook/',
    githubLink: 'https://github.com/HafsaRahman05/physical-ai-humanoid-textbook',
    category: 'AI / ML',
    image: 'https://raw.githubusercontent.com/HafsaRahman05/image/main/image%20copy%202.png',
    imageHint: 'humanoid robot',
  },
  {
    id: '4',
    title: 'RAG Chatbot',
    description:
      'An intelligent chatbot using Retrieval-Augmented Generation to provide context-aware responses, built with OpenAI agents and a vector database.',
    techStack: ['OpenAI Agents', 'ChatKit SDK', 'FastAPI', 'Qdrant Cloud'],
    githubLink: 'https://github.com/HafsaRahman05',
    category: 'AI / ML',
    image: 'https://raw.githubusercontent.com/HafsaRahman05/image/main/image%20copy%203.png',
    imageHint: 'AI chatbot conversation',
  },
  {
    id: '5',
    title: 'Inventory Management system',
    description:
      'A system for tracking products, managing stock levels, and handling sales.',
    techStack: ['Python', 'Streamlit', 'Pandas', 'Matplotlib'],
    liveLink: 'https://sda-project-vqrgbocq5xqrno65o2u65u.streamlit.app/',
    githubLink: 'https://github.com/HafsaRahman05/sda-project',
    category: 'Web',
    image: 'https://raw.githubusercontent.com/HafsaRahman05/image/main/image%20copy%204.png',
    imageHint: 'inventory management',
  },
  {
    id: '6',
    title: 'Resume Analyzer – AI/ML',
    description: 'A resume parsing and analysis tool to extract text, perform an ATS-style rewrite, and recommend jobs based on candidate skills and experience.',
    techStack: ['Python', 'FastAPI', 'Railway'],
    liveLink: 'https://web-production-82094.up.railway.app/',
    githubLink: 'https://github.com/HafsaRahman05/Resume-Analyzer-SCD',
    category: 'AI / ML',
    image: 'https://raw.githubusercontent.com/HafsaRahman05/image/main/Screenshot%202026-02-03%20225937.png',
    imageHint: 'resume analysis',
  },
  {
    id: '7',
    title: 'CPU Scheduling Algorithms Simulator',
    description:
      'An interactive simulator demonstrating various CPU scheduling algorithms with visual feedback for educational purposes.',
    techStack: ['Python', 'GUI'],
    githubLink: 'https://github.com/HafsaRahman05/CPU-Scheduling-Algorithms-Simulator-OS',
    category: 'Academic',
    image: 'https://raw.githubusercontent.com/HafsaRahman05/image/main/Screenshot%202026-02-03%20232004.png',
    imageHint: 'cpu simulator',
  },
  {
    id: '8',
    title: '2D Transformations Visualizer',
    description:
      'A visual tool to demonstrate 2D geometric transformations like rotation, scaling, translation, and reflection.',
    techStack: ['Python', 'Graphics Library'],
    githubLink: 'https://github.com/HafsaRahman05/2D-transformations',
    category: 'Academic',
    image: 'https://picsum.photos/seed/2d-viz/800/600',
    imageHint: 'geometric shapes',
  }
];
