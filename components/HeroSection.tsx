
import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
          <span className="block">Sentient Contracts</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary mt-2">AI × Smart Contracts</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-300">
          Autonomous, adaptive smart contracts powered by on-chain AI agents.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#result"
            className="px-8 py-3 font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            Explore the Demo
          </a>
          <a
            href="#about"
            className="px-8 py-3 font-semibold text-white bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg shadow-lg hover:bg-slate-700/80 transform transition-transform duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
