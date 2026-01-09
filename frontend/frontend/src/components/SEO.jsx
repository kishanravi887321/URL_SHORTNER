import { useEffect } from 'react';

/**
 * SEO Component for managing meta tags
 */
const SEO = ({ 
  title = 'URL Shortener - Shorten Your Links Instantly',
  description = 'Free URL shortener to create short links. Make your long URLs shorter, trackable, and shareable. Fast, reliable, and easy to use.',
  keywords = 'url shortener, link shortener, short url, tiny url, shorten link, free url shortener',
  canonicalUrl = 'https://urlshortner.saksin.online',
  ogImage = '/og-image.png',
  ogType = 'website'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Saksin');
    updateMetaTag('robots', 'index, follow');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'URL Shortener', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonicalLink);
    }

    // Cleanup function
    return () => {
      // Reset title on unmount if needed
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType]);

  return null;
};

export default SEO;
