import React, { useState } from 'react';
import { Certificate } from '../types';
import { certificates } from '../data/portfolio';
import { useTheme } from '../contexts/ThemeContext';

const Certificates: React.FC = () => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = ['all', 'devops', 'cloud', 'development', 'security', 'other'];
  
  const filteredCertificates = activeFilter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter);

  const getCategoryColor = (category: string) => {
    const colors = {
      devops: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      cloud: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      development: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      security: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      other: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
    };
    return colors[category as keyof typeof colors] || colors.other;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <section id="certificates" className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Professional Certifications
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Industry-recognized certifications that validate my expertise and commitment to continuous learning
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

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((certificate) => (
            <div
              key={certificate.id}
              className={`rounded-lg p-6 transition-all duration-300 hover:shadow-xl ${
                isDark 
                  ? 'bg-gray-700 hover:bg-gray-600 border border-gray-600' 
                  : 'bg-white hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(certificate.category)}`}>
                  {certificate.category.charAt(0).toUpperCase() + certificate.category.slice(1)}
                </span>
                {certificate.expiryDate && (
                  <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Expires: {formatDate(certificate.expiryDate)}
                  </span>
                )}
              </div>

              <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {certificate.name}
              </h3>
              
              <p className={`text-sm mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {certificate.issuer}
              </p>

              <div className={`text-xs mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <p>Issued: {formatDate(certificate.issueDate)}</p>
                {certificate.credentialId && (
                  <p>ID: {certificate.credentialId}</p>
                )}
              </div>

              <div className="flex gap-2">
                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                  >
                    Verify →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              No certificates found for the selected category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates; 