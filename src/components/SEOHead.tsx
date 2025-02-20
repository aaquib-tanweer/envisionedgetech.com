import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const SEOHead = ({
  title,
  description,
  keywords,
  ogImage = 'https://envisionedgetech.com/og-image.jpg',
  canonicalUrl = 'https://envisionedgetech.com'
}: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;
    
    const metaTags = {
      'meta[name="description"]': description,
      'meta[name="keywords"]': keywords,
      'meta[property="og:title"]': title,
      'meta[property="og:description"]': description,
      'meta[property="og:image"]': ogImage,
      'meta[property="og:url"]': canonicalUrl,
      'meta[property="twitter:title"]': title,
      'meta[property="twitter:description"]': description,
      'meta[property="twitter:image"]': ogImage,
      'link[rel="canonical"]': canonicalUrl,
    };

    Object.entries(metaTags).forEach(([selector, content]) => {
      const element = document.querySelector(selector);
      if (element) {
        if (selector.includes('link')) {
          (element as HTMLLinkElement).href = content;
        } else {
          element.setAttribute('content', content);
        }
      }
    });
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
}; 