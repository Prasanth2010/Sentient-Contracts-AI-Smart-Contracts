import React from 'react';
import InteractiveDemo from './InteractiveDemo';

const FinalResultSection: React.FC = () => {
  return (
    <section id="result" className="py-20 sm:py-28 bg-slate-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Interactive Demo
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Experience autonomous decision-making firsthand. Ask our AI to analyze a smart contract concept.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <InteractiveDemo />
        </div>
      </div>
    </section>
  );
};

export default FinalResultSection;