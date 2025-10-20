import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const BeyondTheTreeSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-200px');

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 bg-black/10">
            <h2 className={`font-orbitron text-4xl md:text-5xl font-bold mb-12 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Más Allá del Árbol: El Bosque
            </h2>
            <div className="max-w-4xl w-full space-y-8">
                <div className={`p-8 rounded-xl border border-gray-700 bg-gray-900/50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <h3 className="font-orbitron text-3xl font-bold text-[#00ffae]">Random Forest (Bosque Aleatorio)</h3>
                    <p className="mt-4 text-lg">
                        ¿Por qué confiar en un solo árbol cuando puedes tener un bosque entero? Random Forest es un <strong className="text-white">método de ensamble</strong> que construye múltiples árboles de decisión durante el entrenamiento. Para hacer una predicción, cada árbol del bosque "vota", y la decisión más popular se convierte en el resultado final.
                    </p>
                    <p className="mt-3 text-sm italic text-gray-400">Reduce drásticamente el sobreajuste (overfitting) y mejora la precisión.</p>
                </div>
                <div className={`p-8 rounded-xl border border-gray-700 bg-gray-900/50 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <h3 className="font-orbitron text-3xl font-bold text-purple-400">Gradient Boosting</h3>
                    <p className="mt-4 text-lg">
                        Otro poderoso método de ensamble. En lugar de construir árboles de forma independiente, Gradient Boosting los construye de forma secuencial. Cada nuevo árbol intenta corregir los errores del árbol anterior. Es como un equipo de expertos donde cada uno aprende de los errores de su predecesor.
                    </p>
                     <p className="mt-3 text-sm italic text-gray-400">A menudo produce modelos de altísima precisión, ganadores de muchas competiciones de machine learning.</p>
                </div>
            </div>
        </section>
    );
};

export default BeyondTheTreeSection;
