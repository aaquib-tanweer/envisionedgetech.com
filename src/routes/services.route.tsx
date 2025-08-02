import { IntegratedFooterSection } from '@/UI/pages/IntegratedFooterSection'
import { Layout } from '@/UI/pages/Layout'
import { Services } from '@/UI/pages/Services'
import { createFileRoute } from '@tanstack/react-router'
import { SEOHead } from "@/components/SEOHead";
import { seoConfig } from "@/constants/seo.config";

export const Route = createFileRoute('/services')({
  component: () => {
    // Generate service structured data
    const generateServiceStructuredData = () => {
      return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Software Development Services",
        "description": "Comprehensive software development services including web development, mobile apps, cloud solutions, and digital transformation consulting.",
        "itemListElement": [
          {
            "@type": "Service",
            "position": 1,
            "name": "Web Development",
            "description": "Custom web applications and responsive websites built with modern technologies",
            "provider": {
              "@type": "Organization",
              "name": "Envision Edge Tech"
            },
            "areaServed": "Worldwide",
            "serviceType": "Web Development"
          },
          {
            "@type": "Service",
            "position": 2,
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile applications for iOS and Android",
            "provider": {
              "@type": "Organization",
              "name": "Envision Edge Tech"
            },
            "areaServed": "Worldwide",
            "serviceType": "Mobile App Development"
          },
          {
            "@type": "Service",
            "position": 3,
            "name": "AI & Machine Learning",
            "description": "Custom AI solutions and machine learning implementations",
            "provider": {
              "@type": "Organization",
              "name": "Envision Edge Tech"
            },
            "areaServed": "Worldwide",
            "serviceType": "AI Solutions"
          },
          {
            "@type": "Service",
            "position": 4,
            "name": "Cloud Solutions",
            "description": "Cloud infrastructure and deployment services",
            "provider": {
              "@type": "Organization",
              "name": "Envision Edge Tech"
            },
            "areaServed": "Worldwide",
            "serviceType": "Cloud Computing"
          },
          {
            "@type": "Service",
            "position": 5,
            "name": "Digital Transformation",
            "description": "End-to-end digital transformation consulting and implementation",
            "provider": {
              "@type": "Organization",
              "name": "Envision Edge Tech"
            },
            "areaServed": "Worldwide",
            "serviceType": "Digital Transformation"
          }
        ]
      };
    };

    return (
      <>
        <SEOHead 
          title={seoConfig.services.title}
          description={seoConfig.services.description}
          keywords={seoConfig.services.keywords}
          canonicalUrl="https://www.envisionedgetech.com/services"
        />
        
        {/* Service Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateServiceStructuredData())}
        </script>
        
        <Layout>
          <Services />
          <IntegratedFooterSection />
        </Layout>
      </>
    );
  },
})
