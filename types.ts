export interface Project {
  title: string;
  category: 'AI Tool' | 'Gamification';
  description: string;
  role?: string;
  tags: string[];
  link?: string;
  image?: string; // URL placeholder
  account?: string;
  password?: string;
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  location?: string;
}

export interface Patent {
  title: string;
  number: string;
}

export interface Publication {
  authors: string;
  year: string;
  title: string;
  journal: string;
}

export interface Hobby {
  name: string;
  description: string;
  details?: string[];
  icon?: React.ReactNode;
}