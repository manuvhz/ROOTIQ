import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const CreatorsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-200px');

  return (
    <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="creators-pattern" patternUnits="userSpaceOnUse" width="100" height="100">
                        <path d="M50 0 V100 M0 50 H100" strokeWidth="0.5" className="stroke-current text-[#00ffae] dark:text-[#8b5cf6]" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#creators-pattern)" />
            </svg>
        </div>
        
        <div className="text-center z-10">
            <h2 className={`font-orbitron text-4xl md:text-5xl font-bold mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                Las Raíces Detrás del Proyecto
            </h2>
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative p-8 rounded-xl border dark:border-[#8b5cf6] border-[#00ffae] dark:bg-black/30 bg-white/50 backdrop-blur-sm max-w-md mx-auto">
                    <div className="text-left">
                        <h3 className="text-3xl font-orbitron font-bold dark:text-[#00ffae] text-[#8b5cf6]">Luis Noriega</h3>
                        <p className="mt-2 text-lg">Inteligencia Computacional, Universidad de Córdoba</p>
                        <p className="mt-4 border-l-2 pl-4 italic dark:border-[#00ffae]/50 border-[#8b5cf6]/50">
                            “Inspirado en cómo la naturaleza y la IA se entrelazan.”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CreatorsSection;
