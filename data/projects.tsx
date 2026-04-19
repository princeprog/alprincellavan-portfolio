import { Project } from '@/types/index';
import { SiReact, SiNextdotjs, SiPython, SiNodedotjs, SiTensorflow, SiDocker, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaBrain, FaRocket, FaShoppingCart, FaMobileAlt, FaCloud, FaChartLine, FaUmbrellaBeach, FaFilm, FaBoxOpen } from 'react-icons/fa';

export const projects: Project[] = [
    {
        id: 'startupsphere',
        title: 'StartupSphere',
        description: 'Elite global ecosystem for startup founders and visionary investors.',
        longDescription: 'A high-fidelity networking platform designed for the modern startup ecosystem. Features include AI-driven founder-investor matching, interactive project pitching canvases, and comprehensive deal flow management tools. Built with a focus on speed, connectivity, and premium design aesthetics.',
        image: '/startupsphere-project.jpg',
        tags: ['Next.js', 'Typescript', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL'],
        icon: <FaRocket className="w-8 h-8" />,
        demoUrl: '#',
        githubUrl: '#',
        featured: true,
        category: 'web'
    },
    {
        id: 'ayahay-digital',
        title: 'Ayahay (Hayahai)',
        description: 'Elite travel management ecosystem for agents and fleet operators.',
        longDescription: 'A comprehensive digital infrastructure designed to streamline travel bookings and financial operations. Features a high-fidelity admin dashboard, manual wallet deposit systems with automated verification, and a robust manifest management engine for island-wide transportation networks.',
        image: '/hayahai-project.png',
        tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
        icon: <FaUmbrellaBeach className="w-8 h-8" />,
        demoUrl: 'https://ayahay.com', // Placeholder if not provided
        githubUrl: '#',
        featured: true,
        category: 'web'
    },
    {
        id: 'cinema-hub',
        title: 'Cinema Hub',
        description: 'Immersive cinematic exploration and real-time ticketing platform.',
        longDescription: 'A high-fidelity movie discovery platform integrated with the TMDB API. Features include interactive seat selection, real-time showtime synchronization, and a premium editorial layout designed for cinematic immersion. Built with high-performance animations and reactive state management.',
        image: '/cinema-project.png',
        tags: ['React', 'Node.js', 'Framer Motion', 'Redux', 'TMDB API'],
        icon: <FaFilm className="w-8 h-8" />,
        demoUrl: '#',
        githubUrl: '#',
        featured: true,
        category: 'web'
    },
    {
        id: 'project-pach',
        title: 'Project Pach',
        description: 'Specialized community asset management and digital repository.',
        longDescription: 'A specialized platform designed for community-driven asset tracking and resource sharing. Features a sleek, minimalist interface and robust data filtering capabilities, enabling users to manage and discover localized assets with precision and ease.',
        image: '/pach-project.png',
        tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Lucide Icons'],
        icon: <FaBoxOpen className="w-8 h-8" />,
        demoUrl: '#',
        featured: true,
        category: 'tool'
    }
];

export const featuredProjects = projects.filter(p => p.featured);
