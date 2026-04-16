import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { SiGithub, SiGmail } from 'react-icons/si';

export interface SocialLink {
    name: string;
    icon: React.ReactNode;
    iconAlt?: React.ReactNode; // Alternative icon for different styles
    href: string;
    label: string;
    ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        icon: <FaGithub />,
        iconAlt: <SiGithub />,
        href: 'https://github.com/princeprog',
        label: 'github.com/princeprog',
        ariaLabel: 'GitHub Profile'
    },
    {
        name: 'LinkedIn',
        icon: <FaLinkedin />,
        href: 'https://www.linkedin.com/in/alprince-llavan-34952728a/',
        label: 'linkedin.com/in/alprince-llavan-34952728a',
        ariaLabel: 'LinkedIn Profile'
    },
    {
        name: 'Email',
        icon: <FaEnvelope />,
        iconAlt: <SiGmail />,
        href: 'mailto:alprincellavan2019@gmail.com',
        label: 'alprincellavan2019@gmail.com',
        ariaLabel: 'Email'
    },
    {
        name: 'Twitter',
        icon: <FaTwitter />,
        href: 'https://twitter.com/alprincedev',
        label: '@alprincedev',
        ariaLabel: 'Twitter Profile'
    },
];

// Helper to get only specific social links
export const getSocialLink = (name: string) => 
    socialLinks.find(link => link.name === name);

// Export primary socials for sidebar/header (GitHub, LinkedIn, Email)
export const primarySocials = socialLinks.filter(
    link => ['GitHub', 'LinkedIn', 'Email'].includes(link.name)
);
