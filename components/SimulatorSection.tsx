import React, { useState, useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

// --- Data for Dinner Example ---
const dinnerExample = {
    id: 'dinner',
    title: 'Planificador de Cena',
    initialState: { cook: 'Sí', time: 'Mucho', healthy: 'Sí', goOut: 'No', delivery: 'Pizza' },
    tree: {
        id: 'd1',
        question: '¿Ganas de cocinar?',
        options: ['Sí', 'No'],
        children: {
            'Sí': {
                id: 'd2',
                question: '¿Mucho tiempo?',
                options: ['Sí', 'No'],
                children: {
                    'Sí': {
                        id: 'd3',
                        question: '¿Algo saludable?',
                        options: ['Sí', 'No'],
                        children: {
                            'Sí': { id: 'dr1', result: 'Pasta con Vegetales' },
                            'No': { id: 'dr2', result: 'Pizza Casera' },
                        },
                    },
                    'No': { id: 'dr3', result: 'Sándwich Gourmet' },
                },
            },
            'No': {
                id: 'd4',
                question: '¿Salir de casa?',
                options: ['Sí', 'No'],
                children: {
                    'Sí': {
                        id: 'd5',
                        question: '¿Ocasión especial?',
                        options: ['Sí', 'No'],
                        children: {
                            'Sí': { id: 'dr4', result: 'Restaurante Elegante' },
                            'No': { id: 'dr5', result: 'Taquería Local' },
                        },
                    },
                    'No': {
                        id: 'd6',
                        question: '¿Tipo de delivery?',
                        options: ['Pizza', 'Hamburguesa', 'Asiática'],
                        children: {
                            'Pizza': { id: 'dr6', result: 'Pedir Pizza' },
                            'Hamburguesa': { id: 'dr7', result: 'Pedir Hamburguesa' },
                            'Asiática': { id: 'dr8', result: 'Pedir Sushi' },
                        },
                    },
                },
            },
        },
    },
};


const SimulatorSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-300px');

    const [selections, setSelections] = useState(dinnerExample.initialState);
    const [path, setPath] = useState<string[]>([]);
    const [result, setResult] = useState<string | null>(null);
    
    const handleSelectionChange = (key: string, value: string) => {
        setSelections(prev => ({ ...prev, [key]: value }));
    };

    const handleReset = () => {
        setSelections(dinnerExample.initialState);
        setPath([]);
        setResult(null);
    };

    const handleRecommendation = () => {
        let currentPath: string[] = [];
        let finalResult: string = '';
        
        let currentNode: any = dinnerExample.tree;
        
        while (!currentNode.result) {
            currentPath.push(currentNode.id);
            const selectionKey = Object.keys(selections).find(key => currentNode.options.includes(selections[key as keyof typeof selections]));
            if (!selectionKey) break;

            const userChoice = selections[selectionKey as keyof typeof selections];
            currentNode = currentNode.children[userChoice];
        }

        if (currentNode && currentNode.result) {
            currentPath.push(currentNode.id);
            finalResult = currentNode.result;
        }

        setPath(currentPath);
        setResult(finalResult);
    };
    
    const getNodeClasses = (id: string, isResultNode = false) => {
        const isActive = path.includes(id);
        const baseClass = 'relative p-3 rounded-lg border text-center transition-all duration-300 w-full min-h-[60px] flex items-center justify-center';
        let typeClass = 'border-blue-400 bg-blue-900/20'; // internal
        if (id === 'd1') typeClass = 'border-[#00ffae] bg-[#00ffae]/10'; // root
        if (isResultNode) typeClass = 'border-purple-400 bg-purple-900/20'; // leaf
        
        const activeClass = isActive ? `shadow-[0_0_15px_2px_rgba(0,255,174,0.7)] ${isResultNode && result ? 'border-yellow-400' : 'border-[#00ffae]'}` : 'border-gray-700';
        return `${baseClass} ${typeClass} ${activeClass}`;
    };

    const renderControls = () => {
        let currentNode: any = dinnerExample.tree;
        const controls = [];
        
        let i = 0;
        while (currentNode && !currentNode.result && i < 5) {
            const currentSelectionKey = Object.keys(selections).find(key => currentNode.options.includes(selections[key as keyof typeof selections]));
            if (!currentSelectionKey) break;

            const currentSelectionValue = selections[currentSelectionKey as keyof typeof selections];
            
            controls.push(
                <div key={currentNode.id}>
                    <label className="block text-sm font-medium text-gray-400">{currentNode.question}</label>
                    <select value={currentSelectionValue} onChange={e => handleSelectionChange(currentSelectionKey, e.target.value)} className="w-full mt-1 p-2 bg-[#0b0f17] border border-gray-600 rounded focus:ring-[#00ffae] focus:border-[#00ffae]">
                        {currentNode.options.map((opt: string) => <option key={opt}>{opt}</option>)}
                    </select>
                </div>
            );
            
            currentNode = currentNode.children[currentSelectionValue];
            i++;
        }
        return controls;
    };
    
    const renderTree = (node: any) => {
        const isResultNode = !!node.result;
        return (
            <div className="flex flex-col items-center">
                <div className={getNodeClasses(node.id, isResultNode)}>
                    <p className="font-bold">{isResultNode ? node.result : node.question}</p>
                </div>
                {!isResultNode && (
                    <div className="mt-8 flex justify-center gap-4 w-full relative">
                        {/* Vertical line from parent */}
                        <div className="absolute top-[-32px] h-8 w-0.5 bg-gray-600"></div>
                        {Object.keys(node.children).map((option, index, arr) => (
                           <div key={option} className="flex flex-col items-center flex-1 relative">
                               {/* Horizontal line */}
                               <div className={`absolute top-[-1px] h-0.5 bg-gray-600 ${arr.length === 1 ? 'w-0' : 'w-full'} ${index === 0 ? 'left-1/2' : ''} ${index === arr.length - 1 ? 'right-1/2' : ''}`}></div>
                               {/* Vertical line to child */}
                               <div className="absolute top-0 h-8 w-0.5 bg-gray-600"></div>
                               <p className="text-gray-400 mb-2 text-xs">{option}</p>
                               {renderTree(node.children[option])}
                           </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 bg-black/10">
            <h2 className={`font-orbitron text-4xl md:text-5xl font-bold mb-8 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Simulador Interactivo: Planificador de Cena
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl w-full items-start">
                {/* Controls */}
                <div className={`lg:col-span-1 p-6 rounded-lg bg-gray-900/50 border border-gray-700 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <h3 className="font-orbitron text-xl font-bold mb-4">Tus Decisiones</h3>
                    <div className="space-y-4">
                        {renderControls()}
                    </div>
                    <div className="mt-6 flex gap-2">
                        <button onClick={handleRecommendation} className="flex-grow px-4 py-2 font-bold text-lg border-2 rounded-full transition-all duration-300 border-[#00ffae] text-[#00ffae] bg-transparent hover:bg-[#00ffae] hover:text-[#0b0f17]">
                            Ver Resultado
                        </button>
                        <button onClick={handleReset} title="Reiniciar" className="flex-shrink-0 px-4 py-2 font-bold text-lg border-2 rounded-full transition-all duration-300 border-gray-600 text-gray-400 bg-transparent hover:bg-gray-700 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M20 4h-5v5M4 20h5v-5" />
                            </svg>
                        </button>
                    </div>
                    {result && (
                         <div className="mt-4 p-4 rounded text-center font-bold bg-yellow-500/20 text-yellow-300">
                             Resultado: {result}
                         </div>
                    )}
                </div>

                {/* Tree Visualization */}
                <div className={`lg:col-span-2 p-6 rounded-lg bg-gray-900/50 border border-gray-700 transition-all duration-700 delay-200 overflow-x-auto ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <div className="font-mono text-xs sm:text-sm min-w-[600px]">
                        {renderTree(dinnerExample.tree)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SimulatorSection;