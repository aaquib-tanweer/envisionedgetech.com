import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export const SEOHead = ({
  title,
  description,
  keywords,
  ogImage = 'https://www.envisionedgetech.com/og-image.jpg',
  canonicalUrl = 'https://www.envisionedgetech.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Envision Edge Tech',
  section,
  tags = []
}: SEOHeadProps) => {
  // Generate structured data based on type
  const generateStructuredData = () => {
    if (type === 'article') {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": ogImage,
        "author": {
          "@type": "Organization",
          "name": author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Envision Edge Tech",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.envisionedgetech.com/logo.png"
          }
        },
        "datePublished": publishedTime,
        "dateModified": modifiedTime || publishedTime,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        "articleSection": section,
        "keywords": keywords,
        "url": canonicalUrl
      };
    }

    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": canonicalUrl,
      "publisher": {
        "@type": "Organization",
        "name": "Envision Edge Tech",
        "url": "https://www.envisionedgetech.com"
      }
    };
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Envision Edge Tech" />
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:site" content="@envisionedgetech" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Envision Edge Tech" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>
    </Helmet>
  );
}; 