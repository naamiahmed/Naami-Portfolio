import React, { useState } from 'react';
import { MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { services } from '../data/portfolio';
import { useTheme } from '../contexts/ThemeContext';
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';

const Services: React.FC = () => {
  const { isDark } = useTheme();
  const { trackEvent } = useGoogleAnalytics();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = ['all', 'web-development', 'mobile-development', 'devops', 'training'];
  
  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  const getCategoryColor = (category: string) => {
    const colors = {
      'web-development': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'mobile-development': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'devops': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'training': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Naami! I'm interested in your services. Can we discuss a project?");
    const whatsappUrl = `https://wa.me/94702652676?text=${message}`;
    window.open(whatsappUrl, '_blank');
    trackEvent('whatsapp_click', 'contact', 'services_section');
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    trackEvent('contact_click', 'navigation', 'services_section');
  };

  return (
    <section id="services" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
            My Services
          </h2>
          <div className={`w-20 h-1 ${isDark ? 'bg-white' : 'bg-gray-900'} mx-auto mb-4 transition-colors duration-300`}></div>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto transition-colors duration-300`}>
            Comprehensive solutions for your digital needs, from web development to DevOps consulting
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
              {category === 'all' ? 'All Services' : category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className={`relative rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                isDark 
                  ? 'bg-gray-700 hover:bg-gray-600 border border-gray-600' 
                  : 'bg-white hover:bg-gray-50 border border-gray-200'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Service Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>
              
              {/* Category Badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getCategoryColor(service.category)}`}>
                {service.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </span>
              
              {/* Service Title */}
              <h3 className={`text-2xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className={`text-base mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                {service.description}
              </p>
              
              {/* Features List */}
              <div className="space-y-3 mb-6">
                <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start ${isDark ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Action Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center p-8 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-white'} shadow-lg transition-colors duration-300`}>
          <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
            Ready to Start Your Project?
          </h3>
          <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
            Let's discuss how I can help bring your ideas to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </button>
            <button
              onClick={scrollToContact}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 px-8 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
              No services found for the selected category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services; 