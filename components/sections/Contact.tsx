'use client';

import { motion } from 'motion/react';
import { socialLinks } from '@/data/contacts';

export default function Contact() {
    const socials = socialLinks;

    return (
        <div id="contact" className="min-h-screen py-20 px-4 bg-black flex items-center">
            <div className="max-w-4xl mx-auto w-full">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </div>

                {/* Contact Links */}
                <div className="space-y-4">
                    {socials.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.href}
                            target={social.name !== 'Email' ? '_blank' : undefined}
                            rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                            aria-label={social.ariaLabel}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex items-center gap-4 p-4 border border-zinc-800 hover:border-zinc-700 transition-colors"
                        >
                            <div className="text-2xl text-gray-400 group-hover:text-white transition-colors">
                                {social.icon}
                            </div>
                            <div className="flex-1">
                                <div className="text-sm text-gray-500 mb-1">{social.name}</div>
                                <div className="text-gray-400 group-hover:text-white transition-colors">
                                    {social.label}
                                </div>
                            </div>
                            <div className="text-gray-700 group-hover:text-gray-500 transition-colors">
                                →
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-16 pt-8 border-t border-zinc-900">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
