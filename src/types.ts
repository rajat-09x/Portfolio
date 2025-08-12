export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
    github?: string; // NEW
  }
  
  export interface Skill {
    name: string;
    level: number;
  }
  
  export interface SkillCategory {
    category: string;
    skills: Skill[];
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }