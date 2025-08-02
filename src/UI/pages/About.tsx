import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Faq } from '@/UI/organisms/Faq';
import { faqs } from '@/constants/data/faqs';
import { SEOHead } from '@/components/SEOHead';
import { seoConfig } from '@/constants/seo.config';

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  // Generate FAQ structured data
  const generateFAQStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  };

  return (
    <>
      <SEOHead 
        title={seoConfig.about.title}
        description={seoConfig.about.description}
        keywords={seoConfig.about.keywords}
        canonicalUrl="https://www.envisionedgetech.com/about"
      />
      
      {/* FAQ Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateFAQStructuredData())}
      </script>

      <div ref={containerRef} className="relative py-20">
        {/* Hero Section */}
        <div ref={heroRef} className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About <span className="text-blue-600 dark:text-blue-400">Envision Edge Tech</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We're a passionate team of innovators dedicated to transforming businesses through cutting-edge technology solutions.
          </motion.p>
        </div>

        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center">
            At Envision Edge Tech, we believe that technology should be an enabler, not a barrier. 
            Our mission is to empower businesses with innovative software solutions that drive growth, 
            enhance efficiency, and deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We stay ahead of the curve, embracing emerging technologies to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every line of code, every design element, and every solution is crafted with precision and excellence.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Partnership
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We work closely with our clients, understanding their needs and building lasting relationships.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Faq />
        </motion.div>
      </div>
    </>
  );
};

export default About;