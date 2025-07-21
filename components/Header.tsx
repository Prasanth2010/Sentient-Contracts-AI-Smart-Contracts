
import React from 'react';
import { SunIcon, MoonIcon, LogoIcon } from './icons';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Strategy', href: '#implementation' },
    { name: 'Use Cases', href: '#applications' },
    { name: 'Demo', href: '#result' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 dark:bg-dark-bg/70 border-b border-slate-200 dark:border-dark-border transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center space-x-2">
            <LogoIcon className="h-8 w-8 text-brand-primary" />
            <span className="font-bold text-xl text-slate-800 dark:text-white">Sentient</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
            <a href="#cta" className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-white bg-brand-primary hover:bg-opacity-90 rounded-md transition-all">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
