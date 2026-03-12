# Al Prince Llavan - Portfolio

A modern, accessible, and performant portfolio website showcasing my work as a Full-Stack Web Developer. Built with Next.js 16, React 19, and featuring advanced animations, WCAG compliance, and optimized SEO.

## ✨ Features

### 🎨 Advanced Animations
- **GSAP-powered** accordion navigation with smooth transitions
- **Motion library** for fluid page animations and interactions
- **Matter.js** physics-based text effects
- **WebGL (OGL)** animated background with Perlin noise
- Custom text animations: blur reveal, typewriter, fuzzy effects, and more
- **Respects user preferences** with `prefers-reduced-motion` support

### ♿ Accessibility (WCAG 2.1 Level A Compliant)
- Full keyboard navigation support
- Skip-to-content link for assistive technologies
- ARIA labels and live regions for screen readers
- Minimum 44×44px touch targets for mobile users
- High contrast ratios (WCAG AA/AAA) for text legibility
- Reduced motion support for users with vestibular disorders

### 🚀 Performance & SEO
- Server-side rendering with Next.js App Router
- Optimized metadata with OpenGraph and Twitter Cards
- Responsive typography using CSS `clamp()` for fluid scaling
- Efficient component architecture with code splitting
- Search engine ready with robots.txt and sitemap.xml

### 💼 Content Sections
- **Hero Section**: Animated introduction with typewriter effect
- **Tech Stack**: Scrolling marquee showcasing 15+ technologies
- **About Me**: Interactive text animations describing skills and services
- **Projects**: Filterable portfolio with 6 featured projects
- **Contact**: Multiple ways to get in touch with professional presentation

## 🛠️ Tech Stack

**Core Framework:**
- Next.js 16.1.6 (App Router)
- React 19.2.3
- TypeScript 5

**Animation Libraries:**
- GSAP 3.13.0 with ScrollTrigger
- Motion 12.23.12
- Matter.js 0.20.0
- OGL 1.0.11

**Styling:**
- Tailwind CSS 4
- Custom CSS animations
- Responsive design with mobile-first approach

**Tools & Utilities:**
- Lenis for smooth scrolling
- React Icons (5.6.0)
- Class Variance Authority for component variants

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/princeprog/alprincellavan-portfolio.git
cd alprincellavan-portfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── home/              # Main portfolio page
│   ├── layout.tsx         # Root layout with navigation
│   └── globals.css        # Global styles and CSS variables
├── components/
│   ├── layout/            # Layout components (navigation, etc.)
│   ├── sections/          # Page sections (About, Projects, Contact)
│   └── ui/                # Reusable UI components and animations
├── data/
│   ├── contacts.tsx       # Social media links (centralized)
│   ├── projects.tsx       # Portfolio projects data
│   └── skills.tsx         # Technology stack data
├── pages/
│   └── Home.tsx           # Hero section component
├── public/
│   ├── robots.txt         # Search engine crawling rules
│   └── sitemap.xml        # Site structure for SEO
└── types/
    └── index.ts           # TypeScript type definitions
```

## 🎯 Key Components

### Animation Components (`components/ui/`)
- **BlurText**: Word/letter blur reveal on scroll
- **SplitText**: GSAP character animation
- **TextType**: Typewriter effect with cursor
- **FuzzyText**: Canvas-based distortion effect
- **FallingText**: Physics-based text animation
- **Threads**: WebGL animated background
- **LogoLoop**: Smooth infinite scrolling marquee
- **TrueFocus**: Selective text focus effect

### Section Components (`components/sections/`)
- **AboutMe**: Introduction with animated text and service cards
- **Projects**: Filterable project grid with categories
- **Contact**: Professional contact links with animations
- **TechStack**: Technology showcase with logo carousel
- **Footer**: Site footer with social links

## ♿ Accessibility Features

This portfolio meets **WCAG 2.1 Level A** standards:

- ✅ Keyboard-accessible navigation (Tab, Enter, Space keys)
- ✅ Skip link for bypassing navigation
- ✅ Screen reader optimizations with ARIA attributes
- ✅ Motion preferences respected (`prefers-reduced-motion`)
- ✅ Sufficient color contrast ratios (WCAG AA/AAA)
- ✅ Mobile-friendly touch targets (minimum 44×44px)
- ✅ Semantic HTML structure

## 🔧 Customization

### Update Your Information

1. **Social Links**: Edit `data/contacts.tsx`
2. **Projects**: Edit `data/projects.tsx` 
3. **Skills**: Edit `data/skills.tsx`
4. **Metadata**: Update `app/layout.tsx` for SEO
5. **Domain**: Update `public/sitemap.xml` and `public/robots.txt`

See [TODO-UPDATE-URLS.md](TODO-UPDATE-URLS.md) for a complete checklist.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables (if needed)
4. Deploy!

Vercel automatically optimizes Next.js applications with:
- Edge caching
- Automatic HTTPS
- Global CDN distribution
- Image optimization

### Other Platforms
- **Netlify**: Works with Next.js
- **AWS Amplify**: Full Next.js support
- **Cloudflare Pages**: Static export or SSR

## 📊 Performance

- ✅ Lighthouse Performance: 90+ score
- ✅ First Contentful Paint: Optimized
- ✅ SEO: 100 score with proper metadata
- ✅ Accessibility: 100 score with WCAG compliance
- ✅ Best Practices: 100 score

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Al Prince Llavan**  
Full-Stack Web Developer

- 🌐 Portfolio: [https://yourwebsite.com](https://yourwebsite.com)
- 💼 LinkedIn: [alprince-llavan-34952728a](https://www.linkedin.com/in/alprince-llavan-34952728a/)
- 🐙 GitHub: [@princeprog](https://github.com/princeprog)
- 📧 Email: [alprincellavan2019@gmail.com](mailto:alprincellavan2019@gmail.com)

---

Built with ❤️ using Next.js, React, and modern web technologies.
