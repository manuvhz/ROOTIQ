import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const ExampleSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-200px');

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4">
            <div className={`transition-all duration-1000 text-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="font-orbitron text-4xl md:text-5xl font-bold">
                    Un Ejemplo Clásico: ¿Jugar o no Jugar?
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg">
                    Imaginemos que queremos decidir si salir a jugar tenis basándonos en el clima. Nuestro árbol podría tomar la siguiente forma.
                </p>
            </div>
            
            <div className={`mt-12 w-full max-w-4xl p-8 rounded-lg border border-gray-800 bg-black/20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="font-mono text-sm space-y-4">
                    {/* Root */}
                    <div className="p-3 border border-[#00ffae] rounded bg-[#00ffae]/10 text-center">
                        <p className="font-bold">Clima</p>
                    </div>
                    {/* Level 1 branches */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-gray-400">Soleado</p>
                            <div className="mt-2 p-3 border border-blue-400 rounded bg-blue-900/20">
                                <p className="font-bold">Humedad</p>
                            </div>
                            {/* Level 2 branches */}
                            <div className="mt-2 grid grid-cols-2 gap-2">
                                <div>
                                    <p className="text-gray-400 text-xs">Alta</p>
                                    <div className="mt-1 p-2 border border-purple-400 rounded bg-purple-900/20">
                                        <p>No Jugar</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Normal</p>
                                    <div className="mt-1 p-2 border border-purple-400 rounded bg-purple-900/20">
                                        <p>Jugar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-400">Nublado</p>
                            <div className="mt-2 p-3 border border-purple-400 rounded bg-purple-900/20">
                                <p>Jugar</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-400">Lluvioso</p>
                            <div className="mt-2 p-3 border border-blue-400 rounded bg-blue-900/20">
                                <p className="font-bold">Viento</p>
                            </div>
                             {/* Level 2 branches */}
                             <div className="mt-2 grid grid-cols-2 gap-2">
                                <div>
                                    <p className="text-gray-400 text-xs">Fuerte</p>
                                    <div className="mt-1 p-2 border border-purple-400 rounded bg-purple-900/20">
                                        <p>No Jugar</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Débil</p>
                                    <div className="mt-1 p-2 border border-purple-400 rounded bg-purple-900/20">
                                        <p>Jugar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExampleSection;
