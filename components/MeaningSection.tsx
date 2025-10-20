import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const MeaningSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-200px');

    return (
        <section id="meaning" ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="font-orbitron text-4xl md:text-5xl font-bold">
                    ¿Qué es un Árbol de Decisión?
                </h2>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                    Imagina un diagrama de flujo, pero súper potente. Un árbol de decisión es un modelo de aprendizaje automático que toma decisiones basándose en una serie de preguntas sobre los datos. Comienza en una raíz y se ramifica en nodos, donde cada nodo representa una pregunta, cada rama una respuesta, y cada hoja una decisión final o predicción.
                </p>
            </div>
            <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="p-8 border border-[#00ffae]/30 rounded-lg bg-black/20 max-w-2xl mx-auto">
                    <p className="text-xl italic">"Es como jugar a las '20 preguntas' con tus datos para descubrir sus secretos."</p>
                </div>
            </div>
        </section>
    );
};

export default MeaningSection;
