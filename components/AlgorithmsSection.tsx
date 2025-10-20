import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const AlgorithmCard: React.FC<{ name: string; description: string; metric: string; isVisible: boolean, delay: string }> = ({ name, description, metric, isVisible, delay }) => (
    <div 
        style={{ transitionDelay: delay }}
        className={`p-6 rounded-lg border border-gray-800 bg-gray-900/50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className="font-orbitron text-2xl font-bold text-[#00ffae]">{name}</h3>
        <p className="mt-3">{description}</p>
        <p className="mt-4 text-sm font-mono p-2 bg-black/30 rounded">Métrica Principal: <span className="font-bold">{metric}</span></p>
    </div>
);

const AlgorithmsSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-200px');

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4">
            <h2 className={`font-orbitron text-4xl md:text-5xl font-bold mb-12 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Algoritmos Populares
            </h2>
            <div className="max-w-5xl w-full grid md:grid-cols-1 gap-8">
                <AlgorithmCard 
                    name="ID3 (Iterative Dichotomiser 3)"
                    description="Uno de los algoritmos pioneros. Utiliza la 'Ganancia de Información' para decidir qué atributo usar para dividir los datos en cada paso. Funciona bien con datos categóricos."
                    metric="Ganancia de Información"
                    isVisible={isVisible}
                    delay="0s"
                />
                <AlgorithmCard 
                    name="C4.5"
                    description="Una evolución de ID3. Puede manejar tanto datos categóricos como numéricos y también gestiona valores faltantes. Utiliza la 'Ratio de Ganancia' para evitar el sesgo hacia atributos con muchos valores."
                    metric="Ratio de Ganancia"
                    isVisible={isVisible}
                    delay="200ms"
                />
                <AlgorithmCard 
                    name="CART (Classification and Regression Trees)"
                    description="Un algoritmo versátil que puede usarse tanto para clasificación como para regresión. Crea árboles binarios (cada nodo se divide en dos ramas) y utiliza el 'Índice Gini' para clasificación."
                    metric="Índice Gini"
                    isVisible={isVisible}
                    delay="400ms"
                />
            </div>
        </section>
    );
};

export default AlgorithmsSection;
