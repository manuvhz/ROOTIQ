import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const HeroSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center text-center relative overflow-hidden px-4">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="z-10">
                <h1 className={`font-orbitron text-5xl md:text-7xl lg:text-8xl font-black uppercase transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    Árboles de Decisión
                </h1>
                <p className={`mt-4 text-xl md:text-2xl max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    Una exploración visual e interactiva en el corazón de la Inteligencia Computacional.
                </p>
                <div className={`mt-10 transition-opacity duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <a href="#meaning" className="px-8 py-3 font-bold text-lg border-2 rounded-full transition-all duration-300
                        border-[#00ffae] text-[#00ffae] bg-transparent
                        hover:bg-[#00ffae] hover:text-[#0b0f17]">
                        Explorar
                    </a>
                </div>
            </div>
            <div className="absolute bottom-10 animate-bounce">
                <svg className="w-8 h-8 text-[#00ffae]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
