import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const ApplicationCard: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode, delay: string }> = ({ icon, title, children, delay }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-100px');

    return (
        <div 
            ref={ref}
            style={{ transitionDelay: delay }}
            className={`group relative p-6 rounded-xl border transition-all duration-500 transform overflow-hidden
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                border-gray-700 bg-gray-900/50 hover:border-[#00ffae]`}
        >
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 transition-colors duration-300 text-[#00ffae] group-hover:text-[#ffcc00]">
                    {icon}
                </div>
                <h3 className="font-orbitron text-xl font-bold">{title}</h3>
            </div>
            <div className="mt-4 text-gray-500 group-hover:text-inherit transition-colors duration-300">
                {children}
            </div>
        </div>
    );
};

const ApplicationsSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-4">
            <h2 className={`font-orbitron text-4xl md:text-5xl font-bold mb-12 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Donde Crecen las Decisiones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                <ApplicationCard title="Salud" delay="0s" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                }>
                    Ayudan a diagnosticar enfermedades basándose en síntomas y resultados de pruebas, creando rutas de diagnóstico rápidas y precisas.
                </ApplicationCard>
                <ApplicationCard title="Finanzas" delay="200ms" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                }>
                    Evalúan el riesgo crediticio analizando factores como ingresos, historial y edad para decidir si se aprueba un préstamo.
                </ApplicationCard>
                <ApplicationCard title="Medio Ambiente" delay="400ms" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A8 8 0 0117.657 18.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1014.12 11.88" /></svg>
                }>
                    Utilizados para predecir la probabilidad de incendios forestales a partir de datos de clima, humedad y vegetación.
                </ApplicationCard>
                <ApplicationCard title="Educación" delay="600ms" icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></svg>
                }>
                    Personalizan rutas de aprendizaje recomendando recursos y actividades según el progreso y las respuestas de cada estudiante.
                </ApplicationCard>
            </div>
        </section>
    );
};

export default ApplicationsSection;
