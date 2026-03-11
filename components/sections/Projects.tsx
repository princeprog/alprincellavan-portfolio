'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import { Project } from '@/types/index';
import { motion, AnimatePresence } from 'motion/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const categories = [
        { id: 'all', label: 'All' },
        { id: 'web', label: 'Web' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'ai', label: 'AI/ML' },
        { id: 'tool', label: 'Tools' },
    ];

    const filteredProjects = selectedCategory === 'all' 
        ? projects 
        : projects.filter(p => p.category === selectedCategory);

    return (
        <div id="projects" className="min-h-screen py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-5xl font-bold text-white mb-4">Projects</h2>
                    <p className="text-gray-500 text-lg">A selection of my recent work</p>
                </div>

                {/* Category Filter */}
                <div className="flex gap-3 mb-12 border-b border-gray-800 overflow-x-auto">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`pb-3 px-1 text-sm font-medium transition-colors whitespace-nowrap ${
                                selectedCategory === category.id
                                    ? 'text-white border-b-2 border-white'
                                    : 'text-gray-500 hover:text-gray-300'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty state */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-600">No projects found</p>
                    </div>
                )}
            </div>
        </div>
    );
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
                duration: 0.3, 
                delay: index * 0.05,
            }}
            className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300 p-6"
        >
            {/* Title */}
            <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors">
                    {project.title}
                </h3>
                {project.featured && (
                    <span className="text-xs text-gray-600 font-mono">Featured</span>
                )}
            </div>
            
            {/* Description */}
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs text-gray-500 font-mono"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 text-sm">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <FaGithub className="text-base" />
                        <span>Code</span>
                    </a>
                )}
                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <FaExternalLinkAlt className="text-sm" />
                        <span>Live Demo</span>
                    </a>
                )}
            </div>
        </motion.div>
    );
}
