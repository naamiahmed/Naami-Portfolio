import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const useGoogleAnalytics = () => {
  const trackPageView = (page_title: string, page_location?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-70RYDWTLQV', {
        page_title,
        page_location: page_location || window.location.href,
      });
    }
  };

  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const trackCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  return {
    trackPageView,
    trackEvent,
    trackCustomEvent,
  };
};

// Hook for tracking page views on route changes
export const usePageTracking = (pageTitle: string) => {
  const { trackPageView } = useGoogleAnalytics();

  useEffect(() => {
    trackPageView(pageTitle);
  }, [pageTitle, trackPageView]);
}; 