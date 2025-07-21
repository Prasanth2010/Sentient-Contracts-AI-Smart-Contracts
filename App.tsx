
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ObjectivesSection from './components/ObjectivesSection';
import ImplementationSection from './components/ImplementationSection';
import ApplicationsSection from './components/ApplicationsSection';
import FinalResultSection from './components/FinalResultSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Default to dark mode if no preference is saved
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-slate-800 dark:text-slate-300 transition-colors duration-300">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <HeroSection />
        <AboutSection />
        <ObjectivesSection />
        <ImplementationSection />
        <ApplicationsSection />
        <FinalResultSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
