export interface Skill {
  name: string;
  category: "Languages & Frameworks" | "Distributed Systems & Cloud" | "Databases & Caching" | "Tools & DevOps";
  src?: string;
  badge?: string;
  description?: string;
}

export interface GalleryItem {
  title: string;
  caption: string;
  src: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface Project {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  overview: string;
  challenge: string;
  architecture?: string[];
  solution: string;
  outcome: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
  image: string;
  featured?: boolean;
  highlights: string[];
  metrics?: ProjectMetric[];
  gallery: GalleryItem[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  highlights?: string[];
}
