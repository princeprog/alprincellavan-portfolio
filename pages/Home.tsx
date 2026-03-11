'use client';
import BlurText from '@/components/ui/BlurText';
import TrueFocus from '@/components/ui/TrueFocus';
import TextType from '@/components/ui/TextType';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center  min-h-screen py-2 pb-20">
            <div className="flex flex-col items-center justify-center">
                <BlurText
                    text="Al Prince Llavan"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    className="text-8xl mb-8 text-white"
                />
                <TrueFocus
                    sentence="Full-Stack Web Developer"
                    manualMode
                    blurAmount={5}
                    borderColor="#5227FF"
                    animationDuration={0.5}
                    pauseBetweenAnimations={1}
                />
            </div>
            <TextType
                text={["Building scalable web applications", "Designing modern digital experiences", "Powering ideas with clean code"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="█"
                deletingSpeed={50}
                cursorBlinkDuration={0.5}
                className='text-lg text-gray-400 text-center max-w-3xl py-8 absolute bottom-34'
            />
            
        </div>
    );
}