
import React from 'react';
import { DollarSignIcon, ScaleIcon, UsersIcon, ImageIcon, RefreshCwIcon } from './icons';

interface AppCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AppCard: React.FC<AppCardProps> = ({ icon, title, description }) => (
  <div className="p-6 bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-brand-primary/20 transform hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-dark-border">
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
    </div>
    <p className="mt-4 text-slate-600 dark:text-slate-400">{description}</p>
  </div>
);

const ApplicationsSection: React.FC = () => {
  const applications = [
    {
      icon: <DollarSignIcon className="h-5 w-5" />,
      title: 'DeFi Risk Modification',
      description: 'AI-driven loans and insurance adjust in real time to borrower behavior and market signals.',
    },
    {
      icon: <ScaleIcon className="h-5 w-5" />,
      title: 'Decentralized Markets',
      description: 'Autonomous dispute resolution using sentiment analysis and historical interaction data.',
    },
    {
      icon: <UsersIcon className="h-5 w-5" />,
      title: 'AI-Native DAOs',
      description: 'AI manages treasuries, rewards contributors, and proposes evolutions to governance.',
    },
    {
      icon: <ImageIcon className="h-5 w-5" />,
      title: 'Dynamic NFT Licensing',
      description: 'Real-time adjustment of licenses and royalties based on usage patterns and audience feedback.',
    },
    {
      icon: <RefreshCwIcon className="h-5 w-5" />,
      title: 'Self-Governing Subscriptions',
      description: 'Oracles monitor service quality, pausing or renegotiating payments automatically.',
    },
  ];

  return (
    <section id="applications" className="py-20 sm:py-28 bg-white dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Potential Applications
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Transforming industries by embedding intelligence where it matters most.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
