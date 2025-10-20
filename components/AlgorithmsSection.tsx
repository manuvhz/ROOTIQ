import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const TreeCard: React.FC<{ title: string; subtitle: string; children: React.ReactNode; isVisible: boolean; delay: string }> = ({ title, subtitle, children, isVisible, delay }) => {
    return (
        <div
            style={{ transitionDelay: delay }}
            className={`p-6 rounded-lg border border-gray-800 bg-gray-900/50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <h3 className="font-orbitron text-2xl font-bold text-[#00ffae]">{title}</h3>
            <p className="text-sm text-gray-400">{subtitle}</p>
            <p className="mt-3">{children}</p>
        </div>
    );
};

const AlgorithmsSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-200px');

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 bg-black/10">
            <h2 className={`font-orbitron text-4xl md:text-5xl font-bold mb-12 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Otras Estructuras de Árboles Fundamentales
            </h2>
            <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8">
                <TreeCard title="Árbol Binario de Búsqueda (BST)" subtitle="El pilar de la búsqueda eficiente" isVisible={isVisible} delay="0s">
                    Estructura donde cada nodo izquierdo es menor que el padre, y el derecho es mayor. Permite búsquedas e inserciones muy rápidas, con un rendimiento promedio de tiempo logarítmico O(log n).
                </TreeCard>
                <TreeCard title="Árbol AVL" subtitle="El equilibrio es la clave" isVisible={isVisible} delay="200ms">
                    Un tipo de BST que se autobalancea. Mantiene una altura equilibrada mediante rotaciones, garantizando que las operaciones (búsqueda, inserción, borrado) se mantengan en el caso óptimo O(log n).
                </TreeCard>
                <TreeCard title="Árbol B (B-Tree)" subtitle="Optimizados para almacenamiento masivo" isVisible={isVisible} delay="400ms">
                    Árboles que pueden tener más de dos hijos. Son cruciales en bases de datos y sistemas de archivos, ya que minimizan las costosas lecturas de disco al agrupar grandes bloques de datos en cada nodo.
                </TreeCard>
                {/* FIX: Corrected closing tag from PageCard to TreeCard. */}
                <TreeCard title="Árbol Rojo-Negro" subtitle="Eficiencia balanceada en la práctica" isVisible={isVisible} delay="600ms">
                    Otro BST autobalanceado que usa propiedades de color (rojo/negro) en los nodos para asegurar que el camino más largo no sea más del doble del más corto, manteniendo un rendimiento garantizado O(log n).
                </TreeCard>
            </div>
        </section>
    );
};

export default AlgorithmsSection;