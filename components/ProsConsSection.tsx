import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const AdvantageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const DisadvantageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const pros = [
    'Fácil de interpretar y visualizar.',
    'Requiere poca preparación de datos.',
    'Funciona con datos numéricos y categóricos.',
];

const cons = [
    'Puede crear árboles complejos (sobreajuste).',
    'Inestable ante pequeñas variaciones en los datos.',
    'Puede tener sesgos si una clase domina.',
];

const ProsConsSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-200px');

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4">
            <h2 className={`font-orbitron text-4xl md:text-5xl font-bold mb-12 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Ventajas y Desventajas
            </h2>
            <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
                {/* Advantages */}
                <div className={`flex-1 p-6 rounded-lg border-2 dark:border-green-400/50 border-green-500/50 dark:bg-green-900/10 bg-green-500/10 transition-transform duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    <h3 className="font-orbitron text-2xl font-bold dark:text-green-300 text-green-700 mb-4">Ventajas</h3>
                    <ul className="space-y-3">
                        {pros.map((pro, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <span className="flex-shrink-0 text-green-400"><AdvantageIcon /></span>
                                <span>{pro}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Disadvantages */}
                <div className={`flex-1 p-6 rounded-lg border-2 dark:border-purple-400/50 border-purple-500/50 dark:bg-purple-900/10 bg-purple-500/10 transition-transform duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                    <h3 className="font-orbitron text-2xl font-bold dark:text-purple-300 text-purple-700 mb-4">Desventajas</h3>
                    <ul className="space-y-3">
                        {cons.map((con, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <span className="flex-shrink-0 text-purple-400"><DisadvantageIcon /></span>
                                <span>{con}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProsConsSection;
