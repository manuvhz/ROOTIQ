import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const CISection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-200px');

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 bg-black/10">
            <div className={`transition-all duration-1000 max-w-4xl text-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="font-orbitron text-4xl md:text-5xl font-bold">
                    ¿Dónde Encajan en la Inteligencia Computacional?
                </h2>
                <p className="mt-6 text-lg md:text-xl font-light leading-relaxed">
                    Los árboles de decisión son una piedra angular en el campo del <strong className="text-white">Aprendizaje Supervisado</strong>, una de las principales ramas de la Inteligencia Computacional. A diferencia de modelos más complejos y opacos como las redes neuronales profundas (modelos de "caja negra"), los árboles son un ejemplo perfecto de <strong className="text-[#00ffae]">IA Explicable (XAI)</strong>.
                </p>
                <p className="mt-4 text-lg md:text-xl font-light leading-relaxed">
                    Su estructura transparente permite a los humanos entender e interpretar fácilmente el proceso de toma de decisiones, una cualidad invaluable en campos críticos como la medicina o las finanzas, donde el "porqué" de una decisión es tan importante como la decisión misma.
                </p>
            </div>
        </section>
    );
};

export default CISection;
