import React from 'react';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-blue-gradient overflow-hidden">
      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`particle particle-${i + 1}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 1.5}s`
          }}
        ></div>
      ))}
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern -z-30 opacity-40 dark:opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-600 to-purple-600 mx-auto transition-colors duration-300"></div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 transition-all duration-300 animate-fade-in-up shadow-lg border border-blue-100 dark:border-sky-900">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto transition-colors duration-300">
            {personalInfo.about}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;