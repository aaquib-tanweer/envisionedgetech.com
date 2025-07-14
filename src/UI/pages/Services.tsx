import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Zap, Shield, Rocket, Globe, Code, Palette, Database, Cloud, Headphones } from 'lucide-react';
import { services } from '@/constants/services';

interface ServiceItem {
  icon: React.ReactNode;
  name: string;
  description: string;
}

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  icon: any;
}

declare global {
  interface Window {
    Calendly?: any;
  }
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, icon: IconComponent }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        transition: { 
          duration: 0.6, 
          delay: index * 0.1,
          ease: "easeOut"
        }
      } : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        whileHover={{ 
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        className="relative p-8 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg dark:shadow-none"
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 dark:from-electric-500/10 via-transparent to-purple-500/10 dark:to-neon-500/10"
          animate={isHovered ? { 
            scale: 1.1,
            opacity: 1
          } : { 
            scale: 1,
            opacity: 0.5
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 dark:from-electric-500/20 to-purple-500/20 dark:to-neon-500/20 blur-xl"
          animate={isHovered ? { opacity: 1, scale: 1.1 } : { opacity: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="mb-6 relative"
            animate={isHovered ? { 
              rotate: [0, -5, 5, 0],
              scale: 1.1
            } : { 
              rotate: 0,
              scale: 1
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-electric-500 dark:to-electric-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 dark:shadow-electric-500/25">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 dark:from-electric-400 dark:to-electric-600 rounded-2xl blur-md"
              animate={isHovered ? { opacity: 0.8, scale: 1.2 } : { opacity: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
            animate={isHovered ? { x: 4 } : { x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {service.name}
          </motion.h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Learn More Link */}
          <motion.div
            className="flex items-center gap-2 text-blue-600 dark:text-electric-400 font-medium group-hover:text-blue-700 dark:group-hover:text-electric-300 transition-colors"
            animate={isHovered ? { x: 8 } : { x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </div>

        {/* Border animation */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: isHovered 
              ? 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.4), transparent)'
              : 'transparent',
          }}
          animate={isHovered ? {
            rotate: 360,
          } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
};

const PremiumStats = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true });

  const stats = [
    { value: "40+", label: "Projects Delivered", icon: Rocket },
          { value: "99.2%", label: "Uptime Guarantee", icon: Shield },
          { value: "20+", label: "Enterprise Clients", icon: Globe },
    { value: "24/7", label: "Support Available", icon: Headphones },
  ];

  return (
    <motion.div
      ref={statsRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          className="relative group"
        >
          <div className="text-center p-6 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-white dark:hover:bg-white/10 transition-all duration-300 shadow-lg dark:shadow-none">
            <stat.icon className="w-8 h-8 text-blue-600 dark:text-electric-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/envisionedgetech/30min",
      });
    }
  };

  const serviceIcons = {
    'Web Development': Code,
    'Mobile App Development': Rocket,
    'UI/UX Design': Palette,
    'Database Management': Database,
    'Cloud Solutions': Cloud,
    'Technical Support': Headphones,
  };

  const getServiceIcon = (serviceName: string) => {
    return serviceIcons[serviceName as keyof typeof serviceIcons] || Code;
  };

  return (
    <div 
      ref={containerRef}
      className="relative py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technical Hero Section */}
        <motion.div 
          ref={heroRef}
          className="mb-20"
        >
          {/* Terminal-style Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 mb-8 font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-gray-400">services.config.ts</span>
            </div>
            <div className="text-green-400">
              <span className="text-blue-400">export const</span> services = &#123;<br />
              &nbsp;&nbsp;<span className="text-yellow-400">development</span>: <span className="text-purple-400">'enterprise-grade'</span>,<br />
              &nbsp;&nbsp;<span className="text-yellow-400">architecture</span>: <span className="text-purple-400">'scalable'</span>,<br />
              &nbsp;&nbsp;<span className="text-yellow-400">deployment</span>: <span className="text-purple-400">'cloud-native'</span>,<br />
              &nbsp;&nbsp;<span className="text-yellow-400">support</span>: <span className="text-purple-400">'24/7'</span><br />
              &#125;
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Technical Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
              >
                <span className="font-mono text-green-600 dark:text-green-400">$</span> Build Your Vision
                <span className="block text-gray-700 dark:text-gray-300">
                  With Expert Development
                </span>
              </motion.h1>

              {/* Technical Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 mb-8"
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono text-green-600 dark:text-green-400 text-sm">{'>'}</span>
                  <p className="text-gray-600 dark:text-gray-300">
                    Concept to deployment: Custom solutions engineered for your business requirements
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-green-600 dark:text-green-400 text-sm">{'>'}</span>
                  <p className="text-gray-600 dark:text-gray-300">
                    Scalable architecture with modern technology stack
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-green-600 dark:text-green-400 text-sm">{'>'}</span>
                  <p className="text-gray-600 dark:text-gray-300">
                    Performance-optimized with enterprise-grade security
                  </p>
                </div>
              </motion.div>

              {/* Technical CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={openCalendly}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-mono font-semibold transition-colors flex items-center gap-2"
                >
                  <Code className="w-4 h-4" />
                  ./discuss-project
                </button>
              </motion.div>
            </div>

            {/* Technical Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400">development-stack.json</span>
                </div>
                <div className="text-gray-300 space-y-2">
                  <div><span className="text-blue-400">"frontend"</span>: <span className="text-green-400">"React, Next.js, TypeScript"</span>,</div>
                  <div><span className="text-blue-400">"backend"</span>: <span className="text-green-400">"Node.js, Python, Go"</span>,</div>
                  <div><span className="text-blue-400">"database"</span>: <span className="text-green-400">"PostgreSQL, MongoDB"</span>,</div>
                  <div><span className="text-blue-400">"cloud"</span>: <span className="text-green-400">"AWS, Vercel, Docker"</span>,</div>
                  <div><span className="text-blue-400">"tools"</span>: <span className="text-green-400">"Git, CI/CD, Testing"</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <PremiumStats />

        {/* Services Grid */}
        <div className="space-y-8">
          {/* Featured Service */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <ServiceCard 
              service={services.webDevelopement}
              index={0}
              icon={getServiceIcon(services.webDevelopement.name)}
            />
          </motion.div>

          {/* Other Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(services)
              .slice(1)
              .map(([key, service], index) => (
                <ServiceCard 
                  key={key} 
                  service={service} 
                  index={index + 1}
                  icon={getServiceIcon(service.name)}
                />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-20 border-t border-gray-200 dark:border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with our expert development team to create custom solutions that drive measurable business results.
          </p>
          <motion.button
            onClick={openCalendly}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-neon-500 to-electric-500 text-white rounded-xl font-semibold text-lg overflow-hidden shadow-xl shadow-neon-500/25"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}