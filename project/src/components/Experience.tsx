import React, { useState } from 'react';
import type { Experience as ExperienceType } from '../types';
import { experience } from '../data/portfolio';
import { useTheme } from '../contexts/ThemeContext';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = ['all', 'devops', 'development', 'fullstack'];
  
  const filteredExperience = activeFilter === 'all' 
    ? experience 
    : experience.filter(exp => exp.categories.includes(activeFilter as 'devops' | 'development' | 'fullstack'));

  const getCategoryColor = (category: string) => {
    const colors = {
      devops: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      development: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      fullstack: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  return (
    <section id="experience" className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Professional Experience
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            My journey in software development and DevOps engineering
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : `${isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-100'} border border-gray-300 dark:border-gray-600`
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {filteredExperience.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative rounded-lg p-6 transition-all duration-300 hover:shadow-xl ${
                isDark 
                  ? 'bg-gray-700 hover:bg-gray-600 border border-gray-600' 
                  : 'bg-white hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {/* Timeline indicator */}
              <div className="absolute left-0 top-8 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-2"></div>
              
              <div className="ml-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(exp.categories[0])}`}>
                        {exp.categories[0].charAt(0).toUpperCase() + exp.categories[0].slice(1)}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {exp.position}
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                      <div className={`flex items-center gap-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className={`flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className={`flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-base mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                      >
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isDark 
                            ? 'bg-gray-600 text-gray-300 border border-gray-500' 
                            : 'bg-gray-100 text-gray-700 border border-gray-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredExperience.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              No experience found for the selected category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience; 