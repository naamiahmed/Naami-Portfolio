import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import profileImage from '../assets/profile-image.jpg';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 pt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Professional Image */}
          <div className="flex justify-center lg:justify-start animate-fade-in-left">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl overflow-hidden shadow-2xl transition-colors duration-300">
                {/* Professional headshot image */}
                <img
                  src={profileImage}
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center">
                        <svg class="w-32 h-32 text-gray-500 dark:text-gray-400 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                    `;
                  }}
                />
              </div>
              {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center shadow-lg transition-colors duration-300">
                <span className="text-white dark:text-gray-900 font-bold text-2xl"></span>
              </div> */}
            </div>
          </div>

          {/* Right side - Introduction */}
          <div className="text-center lg:text-left animate-fade-in-right">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-semibold mb-6 transition-colors duration-300">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg transition-colors duration-300">
              {personalInfo.summary}
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:text-gray-600 dark:hover:text-gray-300 hover:-translate-y-1"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.linkedin}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:text-gray-600 dark:hover:text-gray-300 hover:-translate-y-1"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.github}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:text-gray-600 dark:hover:text-gray-300 hover:-translate-y-1"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => window.open('https://drive.google.com/file/d/1RXe1kNi0SUwlEmemiJaT8QXCcMS5GY9D/view?usp=sharing', '_blank')}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                View My Resume
              </button>
              <button 
                onClick={scrollToServices}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <Briefcase className="w-5 h-5" />
                <span>My Services</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;