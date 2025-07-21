
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            A New Paradigm for Digital Agreements
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Sentient Contracts are a next-generation framework that embeds AI agents directly within smart contracts, enabling them to learn, reason, and adapt autonomously. This transforms contracts from static, rigid rule engines into intelligent agents capable of dynamic governance, adaptive pricing, sophisticated fraud prevention, and nuanced dispute resolution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
