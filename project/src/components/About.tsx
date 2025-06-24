import React from 'react';
import { personalInfo } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">About Me</h2>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto transition-colors duration-300"></div>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 lg:p-12 transition-all duration-300 animate-fade-in-up">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto transition-colors duration-300">
            {personalInfo.about}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;