
import React from 'react';
import { GithubIcon, TwitterIcon, DiscordIcon, LogoIcon } from './icons';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Prasanth2010', icon: <GithubIcon className="h-6 w-6" /> },
    { name: 'Twitter', href: '#', icon: <TwitterIcon className="h-6 w-6" /> },
    { name: 'Discord', href: '#', icon: <DiscordIcon className="h-6 w-6" /> },
  ];

  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-slate-200 dark:border-dark-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
             <LogoIcon className="h-8 w-8 text-brand-primary" />
             <span className="font-bold text-xl text-slate-800 dark:text-white">Sentient Contracts</span>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-500 dark:text-slate-400 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors"
              >
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-dark-border text-center text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} Sentient Contracts. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:underline">Privacy Policy</a> &middot; <a href="#" className="hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
