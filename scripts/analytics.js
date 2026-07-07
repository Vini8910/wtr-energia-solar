/**
 * Analytics Module
 * WTR Energia Solar
 */

export const initAnalytics = () => {
  // Google Analytics 4
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
  
  // Initialize GA4
  const initGA4 = () => {
    if (typeof gtag !== 'undefined') {
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  };

  // Track events
  const trackEvent = (action, category, label) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label
      });
    }
  };

  // Track form submissions
  const trackFormSubmit = (formName) => {
    trackEvent('submit', 'form', formName);
  };

  // Track CTA clicks
  const trackCTAClick = (ctaName) => {
    trackEvent('click', 'cta', ctaName);
  };

  // Track chat interactions
  const trackChat = (event) => {
    trackEvent(event, 'chat', 'ia_interaction');
  };

  // Auto-track important elements
  document.addEventListener('DOMContentLoaded', () => {
    // Track CTA buttons
    document.querySelectorAll('[data-track-cta]').forEach(btn => {
      btn.addEventListener('click', () => {
        trackCTAClick(btn.dataset.trackCta);
      });
    });

    // Track form submissions
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', () => {
        trackFormSubmit(form.id || 'contact_form');
      });
    });
  });

  return { initGA4, trackEvent, trackFormSubmit, trackCTAClick, trackChat };
};