export interface Bio {
  firstName: string;
  lastName: string;
  title: string;
  description: string[];
  educations: Education[];
  experience: Experience[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

export interface Education {
  degree: string;
  university: string;
  period: string;
}
