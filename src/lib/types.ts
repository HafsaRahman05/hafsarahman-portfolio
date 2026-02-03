export type SkillCategory =
  | 'Programming'
  | 'AI / ML'
  | 'Cloud & DevOps'
  | 'Tools & Frameworks';

export type Skill = {
  name: string;
  category: SkillCategory;
  icon?: string;
};

export type ProjectCategory = 'AI / ML' | 'Database' | 'Web' | 'Game Development';

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink: string;
  category: ProjectCategory;
  image: string;
  imageHint: string;
};
