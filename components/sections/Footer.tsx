'use client';

import { socialLinks } from '@/data/contacts';

export default function Footer() {
    const socials = socialLinks;

    return (
        <footer className="bg-black border-t border-zinc-900">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Left side - Copyright */}
                    <div className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </div>

                    {/* Right side - Social links */}
                    <div className="flex gap-6">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target={social.name !== 'Email' ? '_blank' : undefined}
                                rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                                className="text-gray-500 hover:text-white transition-colors text-xl"
                                aria-label={social.ariaLabel}
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
