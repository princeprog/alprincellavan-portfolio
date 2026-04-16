import { Project } from '@/types/index';
import { SiReact, SiNextdotjs, SiPython, SiNodedotjs, SiTensorflow, SiDocker } from 'react-icons/si';
import { FaBrain, FaRocket, FaShoppingCart, FaMobileAlt, FaCloud, FaChartLine } from 'react-icons/fa';

export const projects: Project[] = [
    {
        id: 'quantum-task',
        title: 'QuantumTask',
        description: 'AI-powered task management system that predicts deadlines and optimizes workflow',
        longDescription: 'A revolutionary task management platform that leverages machine learning to analyze work patterns, predict completion times, and automatically prioritize tasks. Features include smart scheduling, team collaboration, and real-time analytics dashboard.',
        image: '/mockups/quantum-task.svg',
        tags: ['React', 'Node.js', 'TensorFlow', 'MongoDB', 'WebSocket'],
        icon: <FaBrain className="w-8 h-8" />,
        demoUrl: 'https://quantumtask.demo',
        githubUrl: 'https://github.com/demo/quantum-task',
        featured: true,
        category: 'ai'
    },
    {
        id: 'nexus-commerce',
        title: 'NexusCommerce',
        description: 'Next-gen e-commerce platform with AR product visualization',
        longDescription: 'A cutting-edge e-commerce solution that brings products to life using augmented reality. Customers can visualize products in their space before purchasing. Includes inventory management, payment processing, and advanced analytics.',
        image: '/mockups/nexus-commerce.svg',
        tags: ['Next.js', 'TypeScript', 'Three.js', 'Stripe', 'PostgreSQL'],
        icon: <FaShoppingCart className="w-8 h-8" />,
        demoUrl: 'https://nexuscommerce.demo',
        githubUrl: 'https://github.com/demo/nexus-commerce',
        featured: true,
        category: 'web'
    },
    {
        id: 'cloudstream',
        title: 'CloudStream Analytics',
        description: 'Real-time data streaming and visualization platform for IoT devices',
        longDescription: 'Enterprise-grade streaming analytics platform that processes millions of events per second. Features include real-time dashboards, anomaly detection, predictive maintenance, and custom alerting systems.',
        image: '/mockups/cloudstream.svg',
        tags: ['React', 'Kafka', 'ElasticSearch', 'Docker', 'Kubernetes'],
        icon: <FaCloud className="w-8 h-8" />,
        demoUrl: 'https://cloudstream.demo',
        featured: true,
        category: 'tool'
    },
    {
        id: 'pulse-fitness',
        title: 'PulseFit',
        description: 'Mobile fitness app with AI personal trainer and nutrition tracking',
        longDescription: 'Comprehensive fitness application featuring AI-powered workout recommendations, meal planning, progress tracking, and social features. Integrates with wearable devices for real-time health monitoring.',
        image: '/mockups/pulse-fitness.svg',
        tags: ['React Native', 'Python', 'FastAPI', 'TensorFlow', 'Redis'],
        icon: <FaMobileAlt className="w-8 h-8" />,
        demoUrl: 'https://pulsefit.demo',
        githubUrl: 'https://github.com/demo/pulse-fitness',
        featured: false,
        category: 'mobile'
    },
    {
        id: 'neural-insights',
        title: 'NeuralInsights',
        description: 'Business intelligence platform with predictive analytics',
        longDescription: 'Advanced BI tool that transforms raw data into actionable insights using machine learning. Features automated reports, trend prediction, natural language queries, and interactive visualizations.',
        image: '/mockups/neural-insights.svg',
        tags: ['TypeScript', 'Python', 'Pandas', 'D3.js', 'PostgreSQL'],
        icon: <FaChartLine className="w-8 h-8" />,
        demoUrl: 'https://neuralinsights.demo',
        featured: false,
        category: 'ai'
    },
    {
        id: 'velocity-deploy',
        title: 'VelocityDeploy',
        description: 'Automated CI/CD pipeline with zero-downtime deployment',
        longDescription: 'Modern deployment platform that automates the entire software delivery process. Features include automated testing, blue-green deployments, rollback capabilities, and infrastructure monitoring.',
        image: '/mockups/velocity-deploy.svg',
        tags: ['Node.js', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
        icon: <FaRocket className="w-8 h-8" />,
        githubUrl: 'https://github.com/demo/velocity-deploy',
        featured: false,
        category: 'tool'
    }
];

export const featuredProjects = projects.filter(p => p.featured);
