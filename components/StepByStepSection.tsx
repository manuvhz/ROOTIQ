import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const Step: React.FC<{ number: number; title: string; children: React.ReactNode, isVisible: boolean, delay: string }> = ({ number, title, children, isVisible, delay }) => {
    return (
        <div
            style={{ transitionDelay: delay }}
            className={`relative pl-12 pb-8 border-l-2 border-gray-700 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="absolute -left-5 top-0 w-10 h-10 bg-[#0b0f17] border-2 border-[#00ffae] rounded-full flex items-center justify-center">
                <span className="font-orbitron text-lg font-bold text-[#00ffae]">{number}</span>
            </div>
            <h3 className="font-orbitron text-xl font-bold">{title}</h3>
            <p className="mt-2 text-gray-400">{children}</p>
        </div>
    );
};

const StepByStepSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-200px');

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4">
            <h2 className={`font-orbitron text-4xl md:text-5xl font-bold mb-16 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Construyendo el Árbol: Paso a Paso
            </h2>
            <div className="max-w-2xl">
                <Step number={1} title="Seleccionar el Mejor Atributo" isVisible={isVisible} delay="0s">
                    El algoritmo elige el atributo (ej. 'Clima') que mejor divide los datos. Esto se hace usando métricas como la Ganancia de Información o el Índice Gini.
                </Step>
                <Step number={2} title="Dividir el Conjunto de Datos" isVisible={isVisible} delay="200ms">
                    El dataset se divide en subconjuntos basados en los valores del atributo seleccionado (ej. 'Soleado', 'Nublado', 'Lluvioso').
                </Step>
                <Step number={3} title="Repetir el Proceso" isVisible={isVisible} delay="400ms">
                    Para cada subconjunto, se repiten los pasos 1 y 2 de forma recursiva. Se crea un nuevo nodo de decisión y se vuelve a dividir.
                </Step>
                <Step number={4} title="Definir las Hojas" isVisible={isVisible} delay="600ms">
                    El proceso se detiene cuando un subconjunto es "puro" (todos los datos pertenecen a la misma clase) o se cumple una condición de parada (como la profundidad máxima del árbol). Ese nodo se convierte en una hoja.
                </Step>
            </div>
        </section>
    );
};

export default StepByStepSection;
