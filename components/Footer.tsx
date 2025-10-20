import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full py-12 px-4 text-center border-t dark:border-[#00ffae]/20 border-[#8b5cf6]/20 mt-24 bg-black/10 dark:bg-white/5">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="font-orbitron text-lg mb-2">
                        ROOT<span className="dark:text-[#00ffae] text-[#8b5cf6]">IQ</span>
                    </h3>
                    <p className="dark:text-gray-400 text-gray-600">
                        Un proyecto educativo para la visualización de algoritmos de Inteligencia Computacional.
                    </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                    <h4 className="font-semibold dark:text-gray-200 text-gray-800 mb-2">Asignatura</h4>
                    <p className="dark:text-gray-400 text-gray-600">
                        Inteligencia Computacional<br/>
                        Quinto Semestre
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end text-center md:text-right">
                    <h4 className="font-semibold dark:text-gray-200 text-gray-800 mb-2">Afiliación</h4>
                    <p className="dark:text-gray-400 text-gray-600">
                        Universidad de Córdoba<br/>
                        Licenciatura en Informática
                    </p>
                </div>
            </div>
            <div className="mt-10 pt-6 border-t dark:border-gray-800 border-gray-200 text-xs dark:text-gray-500 text-gray-600">
                <p>Desarrollado por Luis Noriega | {currentYear}</p>
            </div>
        </footer>
    );
};

export default Footer;