import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const PurposeCard: React.FC<{ title: string; children: React.ReactNode, isVisible: boolean, delay: string }> = ({ title, children, isVisible, delay }) => (
    <div 
        style={{ transitionDelay: delay }}
        className={`p-6 rounded-lg border border-gray-800 bg-gray-900/50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
        <h3 className="font-orbitron text-2xl font-bold text-[#00ffae]">{title}</h3>
        <p className="mt-3 text-lg">{children}</p>
    </div>
);

const PurposeSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-200px');

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4">
            <div className={`transition-opacity duration-1000 text-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="font-orbitron text-4xl md:text-5xl font-bold">
                    ¿Para Qué Sirven?
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-xl">
                    Su objetivo principal es crear un modelo que predice el valor de una variable objetivo aprendiendo reglas de decisión simples inferidas de las características de los datos.
                </p>
            </div>
            <div className="mt-16 max-w-5xl w-full grid md:grid-cols-2 gap-8">
                <PurposeCard title="Clasificación" isVisible={isVisible} delay="200ms">
                    Para asignar una categoría a un objeto. Por ejemplo, decidir si un correo electrónico es 'spam' o 'no spam'. El árbol aprende las características que distinguen a cada clase.
                </PurposeCard>
                <PurposeCard title="Regresión" isVisible={isVisible} delay="400ms">
                    Para predecir un valor numérico continuo. Por ejemplo, estimar el precio de una casa basándose en su tamaño, ubicación y número de habitaciones.
                </PurposeCard>
            </div>
        </section>
    );
};

export default PurposeSection;
