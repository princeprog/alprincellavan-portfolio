export interface Skills{
    node: React.ReactNode;
    title: string;
    href: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    icon: React.ReactNode;
    demoUrl?: string;
    githubUrl?: string;
    image?: string;
    featured: boolean;
    category: 'web' | 'mobile' | 'ai' | 'tool';
}