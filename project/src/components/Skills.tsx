import React from 'react';
import { ToggleState } from '../types';
import { devopsSkills, developmentSkills } from '../data/portfolio';
import ToggleButton from './ToggleButton';

interface SkillsProps {
  activeToggle: ToggleState;
  onToggle: (state: ToggleState) => void;
}

const Skills: React.FC<SkillsProps> = ({ activeToggle, onToggle }) => {
  const currentSkills = activeToggle === 'devops' ? devopsSkills : developmentSkills;

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Skills</h2>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto mb-8 transition-colors duration-300"></div>
        </div>

        <ToggleButton activeState={activeToggle} onToggle={onToggle} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {currentSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in-up text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 text-sm md:text-base">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;