import React from 'react';
import type { Volunteering as VolunteeringType } from '../types';
import { volunteering } from '../data/portfolio';
import { useTheme } from '../contexts/ThemeContext';

const Volunteering: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="volunteering" className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Volunteering & Community Impact
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Contributing to the tech community through mentorship, open source, and social impact projects
          </p>
        </div>

        <div className="space-y-8">
          {volunteering.map((volunteer) => (
            <div
              key={volunteer.id}
              className={`rounded-lg p-6 transition-all duration-300 hover:shadow-xl ${
                isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                  : 'bg-gray-50 hover:bg-white border border-gray-200'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {volunteer.role}
                  </h3>
                  <p className={`text-lg font-medium text-blue-600 dark:text-blue-400 mb-2`}>
                    {volunteer.organization}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-3`}>
                    {volunteer.duration}
                  </p>
                </div>
                
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <div className="flex flex-wrap gap-2">
                    {volunteer.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isDark 
                            ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                            : 'bg-white text-gray-700 border border-gray-300'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className={`text-base mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {volunteer.description}
              </p>

              <div className="space-y-3">
                <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Key Impact:
                </h4>
                <ul className="space-y-2">
                  {volunteer.impact.map((impact, index) => (
                    <li
                      key={index}
                      className={`flex items-start ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        {/* <div className="mt-16">
          <div className={`text-center mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <h3 className="text-2xl font-bold mb-2">Community Impact Summary</h3>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Quantified contributions to the tech community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className={`text-center p-6 rounded-lg ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
            }`}>
              <div className={`text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2`}>
                50+
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Students Mentored
              </div>
            </div>

            <div className={`text-center p-6 rounded-lg ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
            }`}>
              <div className={`text-3xl font-bold text-green-600 dark:text-green-400 mb-2`}>
                20+
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Events Organized
              </div>
            </div>

            <div className={`text-center p-6 rounded-lg ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
            }`}>
              <div className={`text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2`}>
                10+
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Open Source Projects
              </div>
            </div>

            <div className={`text-center p-6 rounded-lg ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'
            }`}>
              <div className={`text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2`}>
                200+
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Community Members
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Volunteering; 