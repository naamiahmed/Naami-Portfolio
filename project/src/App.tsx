import React, { useState, useEffect } from 'react';
import { ToggleState } from './types';
import { ThemeProvider } from './contexts/ThemeContext';
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Services from './components/Services';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';

function App() {
  const [activeToggle, setActiveToggle] = useState<ToggleState>('devops');
  const { trackPageView, trackEvent } = useGoogleAnalytics();

  // Track initial page view
  useEffect(() => {
    trackPageView('Naami Ahmed - Portfolio', window.location.href);
  }, [trackPageView]);

  const handleToggle = (state: ToggleState) => {
    setActiveToggle(state);
    // Track toggle interactions
    trackEvent('toggle_section', 'navigation', state);
  };

  // Track section visibility when scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.id;
            if (sectionName) {
              trackEvent('section_view', 'engagement', sectionName);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [trackEvent]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Services />
        <Certificates />
        <Skills activeToggle={activeToggle} onToggle={handleToggle} />
        <Projects activeToggle={activeToggle} onToggle={handleToggle} />
        <Blog activeToggle={activeToggle} onToggle={handleToggle} />
        <Volunteering />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;