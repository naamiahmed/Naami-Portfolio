import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { ToggleState } from '../types';
import { blogPosts } from '../data/portfolio';
import ToggleButton from './ToggleButton';

interface BlogProps {
  activeToggle: ToggleState;
  onToggle: (state: ToggleState) => void;
}

const Blog: React.FC<BlogProps> = ({ activeToggle, onToggle }) => {
  const filteredPosts = blogPosts.filter(post => post.category === activeToggle);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Blog</h2>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto mb-8 transition-colors duration-300"></div>
        </div>

        <ToggleButton activeState={activeToggle} onToggle={onToggle} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {post.coverImage && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 dark:text-gray-500 text-sm mb-3 transition-colors duration-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors duration-300">
                  {post.summary}
                </p>
                
                <a
                  href={post.readMoreUrl}
                  className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;