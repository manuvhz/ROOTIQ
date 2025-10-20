import React, { useState, useEffect } from 'react';

const ScrollProgressIndicator: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const accentColor = '#00ffae'; // Hardcoded dark theme color

    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (totalHeight <= 0) {
            setScrollProgress(0);
            return;
        }
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
            <div 
                style={{ width: `${scrollProgress}%`, backgroundColor: accentColor }}
                className="h-full transition-all duration-100 ease-linear"
            />
        </div>
    );
};

export default ScrollProgressIndicator;
