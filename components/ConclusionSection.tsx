import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const ConclusionSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-300px');

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <h2 className="font-orbitron text-4xl md:text-5xl font-bold">
                    Más Allá de la Raíz
                </h2>
                <p className="mt-6 max-w-3xl mx-auto text-xl font-light leading-relaxed">
                    Hemos viajado desde la raíz hasta las hojas, explorando la anatomía, propósito y poder de los árboles de decisión. Son más que un simple algoritmo; son una representación intuitiva de cómo tomamos decisiones, traducida al lenguaje de las máquinas.
                </p>
                <p className="mt-4 max-w-3xl mx-auto text-xl font-light leading-relaxed">
                    Aunque simples en su concepto, forman la base de algunos de los modelos de machine learning más potentes y complejos del mundo. Comprenderlos es el primer paso para dominar el vasto y fascinante campo de la inteligencia artificial.
                </p>
                <div className={`mt-10 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-[#00ffae] font-semibold">Sigue explorando. Sigue aprendiendo. Sigue creciendo.</p>
                </div>
            </div>
        </section>
    );
};

export default ConclusionSection;
