import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const TypesSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-200px');

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4">
            <h2 className={`font-orbitron text-4xl md:text-5xl font-bold mb-12 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Tipos de Árboles de Decisión
            </h2>
            <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
                {/* Classification Tree */}
                <div className={`flex-1 p-6 rounded-lg border-2 border-[#00ffae]/50 bg-[#00ffae]/10 transition-transform duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                    <h3 className="font-orbitron text-2xl font-bold text-[#00ffae] mb-4">Árbol de Clasificación</h3>
                    <p>
                        Se utiliza cuando la variable de salida es categórica (tiene un número finito de valores posibles).
                    </p>
                    <ul className="mt-4 list-disc list-inside space-y-2">
                        <li><strong>Ejemplo:</strong> ¿El correo es spam o no?</li>
                        <li><strong>Salida:</strong> Una clase (ej. 'Sí' o 'No').</li>
                        <li><strong>Métricas comunes:</strong> Índice Gini, Ganancia de Información.</li>
                    </ul>
                </div>
                {/* Regression Tree */}
                <div className={`flex-1 p-6 rounded-lg border-2 border-purple-400/50 bg-purple-900/10 transition-transform duration-700 delay-200 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                    <h3 className="font-orbitron text-2xl font-bold text-purple-300 mb-4">Árbol de Regresión</h3>
                    <p>
                        Se utiliza cuando la variable de salida es continua (puede tomar cualquier valor dentro de un rango).
                    </p>
                    <ul className="mt-4 list-disc list-inside space-y-2">
                        <li><strong>Ejemplo:</strong> ¿Cuál será el precio de la casa?</li>
                        <li><strong>Salida:</strong> Un valor numérico (ej. 250,000$).</li>
                        <li><strong>Métricas comunes:</strong> Error Cuadrático Medio (MSE).</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TypesSection;
