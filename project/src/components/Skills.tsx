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

  const getSkillColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-gray-800 dark:bg-gray-200';
      case 'Advanced':
        return 'bg-gray-700 dark:bg-gray-300';
      case 'Intermediate':
        return 'bg-gray-600 dark:bg-gray-400';
      case 'Beginner':
        return 'bg-gray-500 dark:bg-gray-500';
      default:
        return 'bg-gray-500 dark:bg-gray-500';
    }
  };

  const getSkillWidth = (level: string) => {
    switch (level) {
      case 'Expert':
        return '100%';
      case 'Advanced':
        return '80%';
      case 'Intermediate':
        return '60%';
      case 'Beginner':
        return '40%';
      default:
        return '40%';
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Skills</h2>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto mb-8 transition-colors duration-300"></div>
        </div>

        <ToggleButton activeState={activeToggle} onToggle={onToggle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">{skill.name}</h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium text-white dark:text-gray-900 ${getSkillColor(skill.level)} transition-colors duration-300`}
                >
                  {skill.level}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors duration-300">
                <div
                  className={`h-2 rounded-full ${getSkillColor(skill.level)} transition-all duration-500`}
                  style={{ width: getSkillWidth(skill.level) }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;