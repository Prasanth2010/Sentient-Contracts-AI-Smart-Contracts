
import React from 'react';
import { LayersIcon, RecycleIcon, ShieldCheckIcon, UploadCloudIcon } from './icons';

interface StrategyItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const StrategyItem: React.FC<StrategyItemProps> = ({ icon, title, children }) => (
  <div className="relative pl-12 pb-8 border-l-2 border-brand-primary/30 dark:border-brand-secondary/30">
    <div className="absolute -left-5 top-0 flex items-center justify-center w-10 h-10 bg-white dark:bg-dark-card rounded-full border-2 border-brand-primary/30 dark:border-brand-secondary/30">
      <div className="w-6 h-6 text-brand-primary dark:text-brand-secondary">{icon}</div>
    </div>
    <div className="ml-4">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
      <div className="mt-2 text-slate-600 dark:text-slate-400 space-y-2">{children}</div>
    </div>
  </div>
);

const ImplementationSection: React.FC = () => {
  return (
    <section id="implementation" className="py-20 sm:py-28 bg-slate-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Implementation Strategy
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            A multi-layered approach to safely and effectively integrate AI into the blockchain.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <StrategyItem icon={<UploadCloudIcon />} title="Integration of AI Models">
            <p>We leverage compact, efficient off-chain models like Decision Trees, TinyGPT, and DistilBERT.</p>
            <p>Oracles like Chainlink Functions securely bridge off-chain AI computation with on-chain execution.</p>
          </StrategyItem>

          <StrategyItem icon={<LayersIcon />} title="Modular Contract Architecture">
            <p><strong className="text-slate-800 dark:text-slate-200">Logic Layer:</strong> Classic, immutable Solidity rules form the base.</p>
            <p><strong className="text-slate-800 dark:text-slate-200">Cognition Layer:</strong> AI-driven recommendations and judgments enhance decisions.</p>
            <p><strong className="text-slate-800 dark:text-slate-200">Governance Override:</strong> DAO-set boundaries and failsafes constrain AI behavior.</p>
          </StrategyItem>

          <StrategyItem icon={<RecycleIcon />} title="Self-Reinforcement & Learning Loop">
            <p>Continuously collect on-chain data on usage, efficiency, and outcomes.</p>
            <p>Utilize federated learning techniques to adapt models based on verified on-chain signals without compromising user data.</p>
          </StrategyItem>

          <StrategyItem icon={<ShieldCheckIcon />} title="Safety and Openness">
            <p>AI-generated outputs can be validated by consensus mechanisms or zk-SNARKs for trustless verification.</p>
            <p>A fully transparent and auditable trail of all AI decisions is recorded on-chain.</p>
          </StrategyItem>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;
