import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { DecisionTreeNode } from '../types';

const NodeComponent: React.FC<{ node: DecisionTreeNode, level: number }> = ({ node, level }) => (
    <div className="flex items-center">
        <div style={{ marginLeft: `${level * 2}rem` }} className="flex items-center">
            {level > 0 && <span className="mr-2">└─</span>}
            <div className={`p-3 rounded-lg border text-sm ${
                node.type === 'root' ? 'border-[#00ffae] bg-[#00ffae]/10' :
                node.type === 'internal' ? 'border-blue-400 bg-blue-900/20' :
                'border-purple-400 bg-purple-900/20'
            }`}>
                <span className="font-bold">{node.label}</span>
                {node.condition && <span className="text-xs text-gray-400 block">{node.condition}</span>}
            </div>
        </div>
    </div>
);

const AnatomySection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-300px');

    const treeData: DecisionTreeNode = {
        id: '1', type: 'root', label: 'Nodo Raíz', condition: '¿Pregunta inicial?',
        children: [
            {
                id: '2', type: 'internal', label: 'Nodo Interno', condition: '¿Otra pregunta?',
                children: [
                    { id: '4', type: 'leaf', label: 'Hoja (Decisión A)' },
                    { id: '5', type: 'leaf', label: 'Hoja (Decisión B)' },
                ]
            },
            { id: '3', type: 'leaf', label: 'Hoja (Decisión C)' }
        ]
    };

    const renderTree = (node: DecisionTreeNode, level: number = 0) => (
        <div key={node.id}>
            <NodeComponent node={node} level={level} />
            {node.children && node.children.map(child => renderTree(child, level + 1))}
        </div>
    );

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4">
            <h2 className={`font-orbitron text-4xl md:text-5xl font-bold mb-12 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Anatomía de un Árbol
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full items-start">
                <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="p-4 border-l-4 border-[#00ffae]">
                        <h3 className="font-orbitron text-xl font-bold">Nodo Raíz</h3>
                        <p>El punto de partida. Representa toda la población de datos y la primera pregunta que la divide.</p>
                    </div>
                    <div className="p-4 border-l-4 border-blue-400">
                        <h3 className="font-orbitron text-xl font-bold">Nodos Internos (o de Decisión)</h3>
                        <p>Representan las preguntas o condiciones que dividen los datos en subconjuntos más pequeños.</p>
                    </div>
                    <div className="p-4 border-l-4 border-purple-400">
                        <h3 className="font-orbitron text-xl font-bold">Hojas (o Nodos Terminales)</h3>
                        <p>Los puntos finales del árbol. Representan la decisión, clasificación o valor final predicho.</p>
                    </div>
                    <div className="p-4 border-l-4 border-gray-500">
                        <h3 className="font-orbitron text-xl font-bold">Ramas</h3>
                        <p>Las conexiones entre nodos, que representan las respuestas a las preguntas (ej. 'Sí' o 'No').</p>
                    </div>
                </div>
                <div className={`p-6 rounded-lg bg-black/20 border border-gray-800 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    <h4 className="text-center font-semibold mb-4">Estructura Visual</h4>
                    <div className="font-mono space-y-2">
                        {renderTree(treeData)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnatomySection;
