import SplitText from "@/components/ui/SplitText"
import FallingText from "../ui/FallingText";
import FuzzyText from "../ui/FuzzyText";

export default function AboutMe() {
    return (
        <div id="about" className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
            <SplitText
                text="About Me"
                className="text-6xl font-semibold text-center text-white"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />
            <FallingText
                text={`I’m a passionate Full-Stack Web Developer who enjoys building modern, scalable, and user-focused web applications. I specialize in combining powerful backend systems with intuitive frontend interfaces while solving complex problems through efficient and maintainable code. My goal is to turn ideas into reliable digital products using modern technologies.`}
                highlightWords={["Full-Stack", "building", "scalable", "complex", "ideas"]}
                trigger="hover"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.56}
                fontSize="1rem"
                mouseConstraintStiffness={0.9}

            />
            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover
                fontSize="2rem"
            >
                What I do?
            </FuzzyText>
            
            <div className="mt-12 max-w-5xl w-full px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-500 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-3">Custom Web Application Development</h3>
                        <p className="text-gray-400">Building tailored web solutions from concept to deployment, designed to meet your specific business needs.</p>
                    </div>
                    
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-500 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-3">API Development & System Integration</h3>
                        <p className="text-gray-400">Creating robust APIs and seamlessly integrating third-party services to enhance functionality.</p>
                    </div>
                    
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-500 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-3">Performance Optimization & Scalable Architecture</h3>
                        <p className="text-gray-400">Optimizing application performance and designing scalable systems that grow with your business.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}