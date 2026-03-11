import LogoLoop from "../ui/LogoLoop";
import { skills } from "@/data/skills";
export default function TechStack() {
    
    return (
        <section id="techstack">
            <LogoLoop
                logos={skills}
                speed={100}
                direction="right"
                logoHeight={60}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#000000"
                ariaLabel="Technology partners"
                className="bg-black text-white"
            />
        </section>
    )
}