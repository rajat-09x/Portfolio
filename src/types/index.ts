export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
  }
  
  export interface Skill {
    id: number;
    name: string;
    icon: string;
    level: number;
  }
  
  export interface Experience {
    id: number;
    company: string;
    position: string;
    duration: string;
    description: string[];
  }
  
  export interface Education {
    id: number;
    institution: string;
    degree: string;
    duration: string;
    description: string;
  }
  
  export interface Testimonial {
    id: number;
    name: string;
    position: string;
    company: string;
    text: string;
    image: string;
  }