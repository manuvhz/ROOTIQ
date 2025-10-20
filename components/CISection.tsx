import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const CISection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-200px');
    const accentColor = '#00ffae';

    return (
        <section ref={ref} className="min-h-screen w-full flex items-center justify-center py-24 px-4 bg-black/10">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <h2 className="font-orbitron text-4xl md:text-5xl font-bold leading-tight">
                        Un Pilar en la Inteligencia Computacional
                    </h2>
                    <p className="mt-6 text-lg">
                        Los árboles de decisión son fundamentales en la Inteligencia Computacional (IC) y el Machine Learning. Pertenecen a la categoría de <strong style={{ color: accentColor }}>aprendizaje supervisado</strong>, lo que significa que aprenden de datos previamente etiquetados para hacer predicciones sobre datos nuevos y no vistos.
                    </p>
                    <p className="mt-4 text-lg">
                        Su simplicidad, interpretabilidad y poder los convierten en una de las primeras herramientas que todo practicante de IA debe dominar. Son la base para algoritmos más complejos como los Bosques Aleatorios y el Gradient Boosting.
                    </p>
                </div>
                <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    {/* Placeholder for a visual element */}
                    <div className="aspect-square bg-gray-900 border-2 border-[#00ffae]/30 rounded-xl flex items-center justify-center">
                        <p className="text-gray-500 text-2xl font-mono">
                           [ Visualización de IC ]
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CISection;
