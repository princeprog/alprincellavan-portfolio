import type { Metadata } from "next";
import { Geist, Geist_Mono, Unbounded } from "next/font/google";
import "./globals.css";
import CardNav from "@/components/layout/CardNav";
import Threads from "@/components/ui/Threads";
import { primarySocials } from '@/data/contacts';

import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})


export const metadata: Metadata = {
  title: "Al Prince Llavan | Full-Stack Developer Portfolio",
  description: "Portfolio of Al Prince Llavan, a full-stack web developer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects and get in touch.",
  authors: [{ name: "Al Prince Llavan" }],
  keywords: ["Al Prince Llavan", "Full-Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Portfolio", "Software Engineer"],
  openGraph: {
    title: "Al Prince Llavan | Full-Stack Developer Portfolio",
    description: "Portfolio showcasing web development projects built with React, Next.js, and modern technologies.",
    type: "website",
    locale: "en_US",
    siteName: "Al Prince Llavan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Prince Llavan | Full-Stack Developer Portfolio",
    description: "Portfolio showcasing web development projects built with React, Next.js, and modern technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "About Me", ariaLabel: "About Me Section", href: "#about" },
        { label: "Tech Stack", ariaLabel: "Tech Stack Section", href: "#techstack" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "All Projects", ariaLabel: "View All Projects", href: "#projects" },
        { label: "Featured", ariaLabel: "Featured Projects", href: "#projects" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Get In Touch", ariaLabel: "Contact Section", href: "#contact" },
        { label: "Social Links", ariaLabel: "Social Media", href: "#contact" }
      ]
    }
  ];
  return (
    <html lang="en" className={unbounded.className}>

      <body
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <header>
          <CardNav
            logo="/llavan_logo.png"
            logoAlt="Company Logo"
            items={items}
            theme="dark"
            baseColor="#131010"
            menuColor="#000"
            buttonBgColor="#ffffff"
            buttonTextColor="#000000"
            ease="power3.out"
            className="fixed "
          />
        </header>
        <div style={{
          width: '100%', height: '600px', position: 'absolute',  // Scrolls with content
          top: 0,
          left: 0,
          minHeight: '100vh',
          zIndex: -1,
          backgroundColor: 'black'
        }}>
          <Threads
            amplitude={1}
            distance={0}
            enableMouseInteraction={false }
          />
        </div>
        
        {/* Social Media Icons - Bottom Right */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
          {primarySocials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.name !== 'Email' ? '_blank' : undefined}
              rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className="group relative p-3 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg hover:border-zinc-600 hover:bg-zinc-800/80 transition-all duration-300 hover:scale-110"
              aria-label={social.ariaLabel}
            >
              <span className="text-2xl text-zinc-400 group-hover:text-white transition-colors duration-300">
                {social.iconAlt || social.icon}
              </span>
            </a>
          ))}
        </div>
        
        {children}
      </body>
    </html>
  );
}
