
import { seoConfig } from '@/constants/seo.config';
import { motion, useInView } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle2, Mail, FileText } from 'lucide-react';
import { useRef } from 'react';

export const PrivacyPolicy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const sections = [
    {
      id: 1,
      icon: Shield,
      title: "Information We Collect",
      content: "We collect information that you provide directly to us, including:",
      items: [
        "Name and contact information",
        "Email address", 
        "Company information",
        "Any other information you choose to provide"
      ]
    },
    {
      id: 2,
      icon: Lock,
      title: "How We Use Your Information", 
      content: "We use the information we collect to:",
      items: [
        "Provide and maintain our services",
        "Communicate with you about our services",
        "Improve our services and user experience",
        "Comply with legal obligations"
      ]
    },
    {
      id: 3,
      icon: Eye,
      title: "Information Sharing",
      content: "We do not sell or share your personal information with third parties except as described in this Privacy Policy.",
      items: []
    },
    {
      id: 4,
      icon: Shield,
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
      items: []
    },
    {
      id: 5,
      icon: CheckCircle2,
      title: "Your Rights",
      content: "You have the right to:",
      items: [
        "Access your personal information",
        "Correct inaccurate information", 
        "Request deletion of your information",
        "Object to processing of your information"
      ]
    },
    {
      id: 6,
      icon: FileText,
      title: "Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
      items: []
    }
  ];

  return (
    <>

      <div ref={containerRef} className="relative py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            ref={heroRef}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 rounded-full text-gray-900 dark:text-white shadow-xl shadow-blue-500/10 dark:shadow-electric-500/20">
                <Shield className="w-4 h-4 text-blue-600 dark:text-electric-400" />
                <span className="text-sm font-medium">Legal Documentation</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-8"
            >
              <span className="block text-gray-900 dark:text-white">Privacy</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-electric-400 dark:via-electric-500 dark:to-neon-400 bg-clip-text text-transparent animate-gradient">
                Policy
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              At Envision Edge Tech Pvt. Ltd., we are committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information.
            </motion.p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-premium p-8 bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-3xl shadow-xl shadow-blue-500/10 dark:shadow-electric-500/20"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-electric-500 dark:to-electric-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 dark:shadow-electric-500/25 flex-shrink-0">
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                      {section.id}. {section.title}
                    </h2>
                    
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      {section.content}
                    </p>
                    
                    {section.items.length > 0 && (
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 + itemIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 dark:from-electric-500 dark:to-neon-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="glass-premium p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-electric-500/10 dark:to-neon-500/10 backdrop-blur-xl border border-blue-200/50 dark:border-electric-500/20 rounded-3xl shadow-xl shadow-blue-500/10 dark:shadow-electric-500/20"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 dark:from-emerald-500 dark:to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25 dark:shadow-emerald-500/25 flex-shrink-0">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Contact Us
                  </h2>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, please contact us at{' '}
                    <a 
                      href="mailto:info@envisionedgetech.com" 
                      className="text-blue-600 dark:text-electric-400 hover:text-blue-700 dark:hover:text-electric-300 font-medium underline decoration-2 underline-offset-2 transition-colors"
                    >
                      info@envisionedgetech.com
                    </a>
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-full">
                    <FileText className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Last updated: {new Date().getFullYear()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};