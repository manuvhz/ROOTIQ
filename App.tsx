import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import MeaningSection from './components/MeaningSection';
import CISection from './components/CISection';
import PurposeSection from './components/PurposeSection';
import AnatomySection from './components/AnatomySection';
import TypesSection from './components/TypesSection';
import ProsConsSection from './components/ProsConsSection';
import AlgorithmsSection from './components/AlgorithmsSection';
import StepByStepSection from './components/StepByStepSection';
import ExampleSection from './components/ExampleSection';
import SimulatorSection from './components/SimulatorSection';
import ApplicationsSection from './components/ApplicationsSection';
import BeyondTheTreeSection from './components/BeyondTheTreeSection';
import ConclusionSection from './components/ConclusionSection';
import CreatorsSection from './components/CreatorsSection';
import Footer from './components/Footer';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';

const App: React.FC = () => {

  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('fade-out');
      // Remove the preloader from the DOM after the animation
      const timer = setTimeout(() => {
        preloader.style.display = 'none';
      }, 500); // Must match the CSS transition duration
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="dark bg-[#0b0f17] text-gray-300 font-sans leading-relaxed selection:bg-[#00ffae] selection:text-[#0b0f17]">
      <ScrollProgressIndicator />
      <main>
        <HeroSection />
        <MeaningSection />
        <PurposeSection />
        <CISection />
        <AnatomySection />
        <AlgorithmsSection />
        <StepByStepSection />
        <ExampleSection />
        <SimulatorSection />
        <TypesSection />
        <ApplicationsSection />
        <ProsConsSection />
        <BeyondTheTreeSection />
        <ConclusionSection />
        <CreatorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;