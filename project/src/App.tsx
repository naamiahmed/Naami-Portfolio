import React, { useState } from 'react';
import { ToggleState } from './types';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  const [activeToggle, setActiveToggle] = useState<ToggleState>('devops');

  const handleToggle = (state: ToggleState) => {
    setActiveToggle(state);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills activeToggle={activeToggle} onToggle={handleToggle} />
        <Projects activeToggle={activeToggle} onToggle={handleToggle} />
        <Blog activeToggle={activeToggle} onToggle={handleToggle} />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;