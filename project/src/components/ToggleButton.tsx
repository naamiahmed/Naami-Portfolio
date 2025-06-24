import React from 'react';
import { ToggleState } from '../types';

interface ToggleButtonProps {
  activeState: ToggleState;
  onToggle: (state: ToggleState) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ activeState, onToggle }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg p-1 flex transition-colors duration-300">
        <button
          onClick={() => onToggle('devops')}
          className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 relative z-10 ${
            activeState === 'devops'
              ? 'text-white bg-gray-900 dark:bg-white dark:text-gray-900 shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          DevOps
        </button>
        <button
          onClick={() => onToggle('development')}
          className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 relative z-10 ${
            activeState === 'development'
              ? 'text-white bg-gray-900 dark:bg-white dark:text-gray-900 shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          Development
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;