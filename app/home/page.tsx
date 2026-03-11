import AboutMe from "@/components/sections/AboutMe"
import TechStack from "@/components/sections/TechStack"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"
import Home from "@/pages/Home"

export default function HomePage() {
    return (
        <div>
            <Home/>
            <TechStack/>
            <AboutMe/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}