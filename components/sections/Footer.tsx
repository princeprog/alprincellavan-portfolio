'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    const socials = [
        { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub' },
        { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
        { icon: <FaEnvelope />, href: 'mailto:hello@example.com', label: 'Email' },
    ];

    return (
        <footer className="bg-black border-t border-zinc-900">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Left side - Copyright */}
                    <div className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </div>

                    {/* Right side - Social links */}
                    <div className="flex gap-6">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target={social.label !== 'Email' ? '_blank' : undefined}
                                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                                className="text-gray-600 hover:text-white transition-colors text-xl"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
