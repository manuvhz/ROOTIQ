import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const EvolvingSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-200px');
    const accentColor = '#00ffae'; // Hardcoded dark theme color

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <h2 className="font-orbitron text-4xl md:text-5xl font-bold">
                    La Evolución Constante
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg">
                    Un árbol de decisión es una poderosa herramienta, pero es solo el primer paso. La verdadera magia ocurre cuando evolucionan y se combinan.
                </p>
            </div>

            <div className="relative mt-16 w-full max-w-3xl h-64 flex justify-center items-center">
                <div className={`absolute transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <p className="font-orbitron text-2xl" style={{ color: accentColor }}>Un Árbol</p>
                    <p className="text-sm">(Una perspectiva)</p>
                </div>
                
                <div 
                    style={{ transitionDelay: '500ms' }}
                    className={`absolute text-4xl font-bold text-gray-500 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                >
                    →
                </div>
                
                <div 
                    style={{ transitionDelay: '1000ms' }}
                    className={`absolute transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                >
                    <p className="font-orbitron text-2xl" style={{ color: '#ffcc00' }}>Un Bosque</p>
                    <p className="text-sm">(Múltiples perspectivas)</p>
                </div>
            </div>

            <div 
                style={{ transitionDelay: '1500ms' }}
                className={`mt-8 max-w-3xl text-xl italic font-light transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                <p>"De la simplicidad de una única estructura, emerge la complejidad y robustez de un ecosistema inteligente. Así es como la IA aprende a ver el mundo, no con un solo ojo, sino con miles."</p>
            </div>
        </section>
    );
};

export default EvolvingSection;
