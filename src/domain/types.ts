export interface Profile {
    id: string;
    name: string;
    title: string;
    summary: string;
    email: string;
    phone?: string;
    location?: string;
    socials: SocialLink[];
}

export interface SocialLink {
    id: string;
    platform: string;
    url: string;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    startDate: string; // ISO Date
    endDate?: string; // ISO Date or undefined for Present
    description: string;
    technologies: string[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    demoUrl?: string;
    repoUrl?: string;
}

export interface Skill {
    id: string;
    category: string;
    name: string;
}
