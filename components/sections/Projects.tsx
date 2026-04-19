'use client';

import Image from 'next/image';
import { projects } from '@/data/projects';
import { Project } from '@/types/index';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const categoryLabels: Record<Project['category'], string> = {
    web: 'WEB DESIGN',
    mobile: 'MOBILE APP',
    ai: 'AI PRODUCT',
    tool: 'DEV TOOL'
};

export default function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden bg-black px-4 py-18 sm:py-22 lg:py-24">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(255,255,255,0.06),transparent_44%),radial-gradient(circle_at_84%_82%,rgba(255,255,255,0.035),transparent_42%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:4px_4px] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_85%,transparent)]" />

            <div className="relative mx-auto max-w-[1260px]">
                <h2 className="sr-only">Projects</h2>

                <div className="space-y-20 lg:space-y-24">
                    {projects.map((project, index) => (
                        <ProjectShowcase
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface ProjectShowcaseProps {
    project: Project;
    index: number;
}

function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
    const reverse = index % 2 === 1;
    const primaryLink = project.demoUrl ?? project.githubUrl;

    return (
        <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
            <div className={reverse ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}>
                <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 p-1.5 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-white/20 hover:shadow-[0_45px_100px_-25px_rgba(0,0,0,0.9)]">
                    <div className="overflow-hidden rounded-lg border border-white/5 bg-black">
                        <div className="flex items-center gap-2 border-b border-white/5 bg-zinc-900/80 px-4 py-3">
                            <div className="flex gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="ml-4 text-[11px] font-medium tracking-[0.2em] text-zinc-500">
                                HTTPS://{project.id.toUpperCase()}.COM
                            </span>
                        </div>

                        <div className="relative min-h-[300px] w-full bg-zinc-950 sm:min-h-[400px]">
                            <Image
                                src={project.image ?? '/profile.jpg'}
                                alt={`${project.title} project showcase`}
                                width={1600}
                                height={1000}
                                className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                                priority={index === 0}
                            />
                        </div>
                    </div>

                    {/* Decorative glow */}
                    <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
                         style={{ background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 40%)' }} />
                </div>
            </div>

            <div className={reverse ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}>
                <div className={reverse ? 'lg:pr-12' : 'lg:pl-12'}>
                    <div className="flex items-center gap-4">
                        <span className="text-zinc-500/80">
                            {project.icon}
                        </span>
                        <span className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">
                            {categoryLabels[project.category]}
                        </span>
                    </div>

                    <h3 className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
                        {project.title}
                    </h3>

                    <p className="mt-8 text-lg leading-relaxed text-zinc-400 sm:text-xl lg:max-w-[480px]">
                        {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {primaryLink ? (
                        <div className="mt-12">
                            <a
                                href={primaryLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link inline-flex items-center gap-4 border-b-2 border-white/10 pb-2 transition-all duration-300 hover:border-white hover:gap-6"
                            >
                                <span className="text-2xl font-semibold text-zinc-200">Explore Project</span>
                                <ArrowUpRight className="size-8 text-zinc-500 transition-colors group-hover/link:text-white" />
                            </a>
                        </div>
                    ) : null}
                </div>
            </div>
        </motion.article>
    );
}
