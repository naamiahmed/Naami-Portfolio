import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { education } from '../data/portfolio';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-blue-gradient overflow-hidden">
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-600 to-purple-600 mx-auto transition-colors duration-300"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-blue-200 dark:border-sky-900 hover:border-blue-400 dark:hover:border-sky-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 rounded-lg flex items-center justify-center transition-colors duration-300">
                    {edu.course.includes('Certified') ? (
                      <Award className="w-6 h-6 text-amber-700 dark:text-amber-300" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    )}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    {edu.course}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-2 transition-colors duration-300">
                    {edu.university}
                  </p>
                  <div className="flex items-center text-gray-500 dark:text-gray-500 mb-3 transition-colors duration-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{edu.year}</span>
                  </div>
                  {edu.description && (
                    <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;