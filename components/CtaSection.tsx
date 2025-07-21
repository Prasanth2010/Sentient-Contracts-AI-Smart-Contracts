
import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="bg-gradient-to-r from-brand-primary to-brand-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Ready to Build the Future?
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-100 max-w-2xl mx-auto">
            Join our community of innovators, explore our open-source tools, and start building the next generation of intelligent dApps.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="#result"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-brand-primary bg-white hover:bg-indigo-50 transition-transform transform hover:scale-105"
            >
              Try The Demo
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-indigo-200 text-base font-medium rounded-md text-white hover:bg-white/10 transition-transform transform hover:scale-105"
            >
              Read Dev Docs
            </a>
             <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-indigo-200 text-base font-medium rounded-md text-white hover:bg-white/10 transition-transform transform hover:scale-105"
            >
              Join Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
