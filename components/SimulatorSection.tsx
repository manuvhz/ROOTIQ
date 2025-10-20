import React, { useState, useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const SimulatorSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-300px');

    // A simple state for the simulator placeholder
    const [status, setStatus] = useState('Listo para simular');

    const handleSimulate = () => {
        setStatus('Simulando...');
        setTimeout(() => {
            setStatus('Simulación completada. ¡Revisa el árbol generado!');
        }, 2000);
    };

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 bg-black/10">
            <div className={`transition-all duration-1000 w-full max-w-6xl ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-center mb-12">
                    <h2 className="font-orbitron text-4xl md:text-5xl font-bold">
                        Simulador Interactivo
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg">
                        Experimenta de primera mano cómo se construye un árbol de decisión. Ajusta los parámetros y observa cómo cambia la estructura.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Controls */}
                    <div className={`md:col-span-1 p-6 rounded-lg border border-gray-700 bg-gray-900/50 transition-transform duration-700 ${isVisible ? 'translate-x-0' : '-translate-x-10'}`}>
                        <h3 className="font-orbitron text-xl font-bold mb-4">Controles</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-semibold">Dataset</label>
                                <select className="w-full mt-1 p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00ffae]">
                                    <option>Clima y Juego</option>
                                    <option>Iris Flores</option>
                                    <option>Titanic Supervivencia</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-semibold">Profundidad Máxima</label>
                                <input type="range" min="1" max="10" defaultValue="3" className="w-full mt-1" />
                            </div>
                            <button 
                                onClick={handleSimulate}
                                className="w-full py-2 font-bold rounded bg-[#00ffae] text-[#0b0f17] hover:bg-opacity-80 transition-colors"
                            >
                                Construir Árbol
                            </button>
                        </div>
                        <div className="mt-6 p-3 text-center bg-gray-800 rounded-md">
                            <p className="text-sm font-mono">{status}</p>
                        </div>
                    </div>

                    {/* Visualization */}
                    <div className={`md:col-span-2 p-6 rounded-lg border border-gray-700 bg-gray-900/50 flex items-center justify-center min-h-[400px] transition-transform duration-700 delay-200 ${isVisible ? 'scale-100' : 'scale-90'}`}>
                        <p className="text-gray-500 text-2xl">[ Área de Visualización del Árbol ]</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SimulatorSection;
