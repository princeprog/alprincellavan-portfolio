import { Skills } from '@/types/index';
import { 
    SiReact, 
    SiNextdotjs, 
    SiTypescript, 
    SiTailwindcss,
    SiNodedotjs,
    SiPython,
    SiTensorflow,
    SiDocker,
    SiKubernetes,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiGit,
    SiGraphql,
    SiJavascript
} from 'react-icons/si';

export const skills: Skills[] = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiTensorflow />, title: "TensorFlow", href: "https://www.tensorflow.org" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiKubernetes />, title: "Kubernetes", href: "https://kubernetes.io" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiRedis />, title: "Redis", href: "https://redis.io" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org" },
]