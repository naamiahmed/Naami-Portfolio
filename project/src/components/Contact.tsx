import React, { useState } from 'react';
import { Mail, Linkedin, Send, MapPin, CheckCircle, AlertCircle, Loader2, Facebook, Instagram, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const { trackEvent } = useGoogleAnalytics();

  // Social media links - you can update these with your actual profiles
  const socialLinks = {
    facebook: 'https://facebook.com/naamiahmed27',
    instagram: 'https://instagram.com/naamiahmed27',
    medium: 'https://medium.com/@naamiahmed',
    devto: 'https://dev.to/naamiahmed',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    // Track form submission attempt
    trackEvent('form_submit', 'contact', 'contact_form');

    try {
      const response = await fetch('https://formspree.io/f/xzzgykpg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
        // Track successful form submission
        trackEvent('form_success', 'contact', 'contact_form');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
      // Track form submission error
      trackEvent('form_error', 'contact', 'contact_form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialLinkClick = (platform: string) => {
    trackEvent('social_link_click', 'engagement', platform);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Let's Connect</h2>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto mb-4 transition-colors duration-300"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            I'm always interested in new opportunities and collaboration. 
            Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={() => trackEvent('email_click', 'contact', 'email')}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white transition-colors duration-300">Email</p>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  onClick={() => trackEvent('social_link_click', 'engagement', 'linkedin')}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white transition-colors duration-300">LinkedIn</p>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Connect with me</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white transition-colors duration-300">Location</p>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialLinkClick('facebook')}
                  className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <Facebook className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white transition-colors duration-300">Facebook</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Follow me</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </a>

                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialLinkClick('instagram')}
                  className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <Instagram className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white transition-colors duration-300">Instagram</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Follow me</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </a>

                <a
                  href={socialLinks.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialLinkClick('medium')}
                  className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white transition-colors duration-300">Medium</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Read my articles</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </a>

                <a
                  href={socialLinks.devto}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialLinkClick('devto')}
                  className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45h.53c.38 0 .65-.08.83-.23.19-.15.28-.38.28-.68 0-.3-.09-.53-.28-.68zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.88-1.86.88-.8 0-1.42-.3-1.86-.88-.44-.58-.66-1.34-.66-2.28 0-.94.22-1.7.66-2.28.44-.58 1.06-.88 1.86-.88.8 0 1.42.3 1.86.88.44.58.66 1.34.66 2.28 0 .94-.22 1.7-.66 2.28zm2.43-5.92c-.19-.15-.47-.23-.84-.23h-.56v4.6h.56c.37 0 .65-.08.84-.23.19-.15.28-.38.28-.68 0-.3-.09-.53-.28-.68zM13.98 15.3c-.44.58-1.06.88-1.86.88-.8 0-1.42-.3-1.86-.88-.44-.58-.66-1.34-.66-2.28 0-.94.22-1.7.66-2.28.44-.58 1.06-.88 1.86-.88.8 0 1.42.3 1.86.88.44.58.66 1.34.66 2.28 0 .94-.22 1.7-.66 2.28zm2.43-5.92c-.19-.15-.47-.23-.84-.23h-.56v4.6h.56c.37 0 .65-.08.84-.23.19-.15.28-.38.28-.68 0-.3-.09-.53-.28-.68z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white transition-colors duration-300">Dev.to</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Read my posts</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 animate-fade-in-right transition-colors duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Send Message
            </h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <p className="text-green-800 dark:text-green-200">{submitMessage}</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <p className="text-red-800 dark:text-red-200">{submitMessage}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;