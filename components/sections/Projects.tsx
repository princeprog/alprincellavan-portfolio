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
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
            <div className={reverse ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}>
                <div className="group relative overflow-hidden rounded-md border border-zinc-400/60 bg-zinc-300/88 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.52)]">
                    <div className="overflow-hidden rounded-[3px] border border-zinc-300 bg-zinc-100/95">
                        <div className="flex items-center gap-2 border-b border-zinc-300 bg-zinc-200/95 px-4 py-2.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
                            <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
                            <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
                            <span className="ml-auto text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-600">
                                {project.id}
                            </span>
                        </div>

                        <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                                src={project.image ?? '/profile.jpg'}
                                alt={`${project.title} project mockup`}
                                fill
                                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                                sizes="(max-width: 1024px) 100vw, 48vw"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={reverse ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}>
                <div className="max-w-[560px]">
                    <span className="inline-flex rounded-full border border-zinc-200 bg-zinc-100 px-7 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-900 shadow-[0_10px_28px_rgba(0,0,0,0.28)]">
                        {categoryLabels[project.category]}
                    </span>

                    <h3 className="mt-8 text-[clamp(2.2rem,4.2vw,4rem)] font-semibold leading-[1.1] tracking-tight text-white">
                        {project.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-xl leading-9 text-zinc-300">
                        {project.description}
                    </p>

                    {primaryLink ? (
                        <div className="mt-10 inline-flex flex-col items-start">
                            <a
                                href={primaryLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 text-[2rem] leading-none font-medium text-zinc-200 transition hover:text-white"
                            >
                                <span>See Details</span>
                                <ArrowUpRight className="size-8" aria-hidden="true" />
                            </a>

                            <span className="mt-4 h-px w-44 bg-zinc-500/65" />
                        </div>
                    ) : null}
                </div>
            </div>

        </motion.article>
    );
}
