
import React from 'react';
import { BrainCircuitIcon, CodeIcon, ZapIcon } from './icons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-brand-secondary/20 transition-all duration-300 transform hover:-translate-y-1 border border-transparent dark:border-dark-border">
    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary text-white mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
    <p className="mt-2 text-base text-slate-600 dark:text-slate-400">{description}</p>
  </div>
);

const ObjectivesSection: React.FC = () => {
  const features = [
    {
      icon: <BrainCircuitIcon className="h-6 w-6" />,
      title: 'AI-Driven Intelligence',
      description: 'Embeds machine learning directly at the contract layer for smarter, data-informed decision-making.',
    },
    {
      icon: <CodeIcon className="h-6 w-6" />,
      title: 'Digital Agency',
      description: 'Creates truly autonomous contracts that learn from outcomes and self-optimize their logic over time.',
    },
    {
      icon: <ZapIcon className="h-6 w-6" />,
      title: 'Dynamic Responsiveness',
      description: 'Adapts to evolving user needs and system requirements in DeFi, DAOs, and complex dApps.',
    },
  ];

  return (
    <section id="objectives" className="py-20 sm:py-28 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Core Objectives</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Building the foundation for a more intelligent and adaptive decentralized future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
