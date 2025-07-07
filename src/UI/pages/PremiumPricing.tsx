import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Check, Star, Zap, Shield, Crown, ArrowRight, Sparkles, Users, Database, Headphones, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { Link } from '@tanstack/react-router';

declare global {
  interface Window {
    Calendly?: any;
  }
}

interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  popular: boolean;
  enterprise: boolean;
  features: string[];
  icon: any;
  gradient: string;
  buttonText: string;
  maxProjects?: string;
  support: string;
  teamSize: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses getting started',
    price: '$2,999',
    period: '/project',
    popular: false,
    enterprise: false,
    icon: Zap,
    gradient: 'from-blue-500 to-purple-600',
    buttonText: 'Get Started',
    maxProjects: '1-3 Projects',
    support: 'Email Support',
    teamSize: '1-5 Team Members',
    features: [
      'Custom Web/Mobile Development',
      'Basic UI/UX Design',
      'Database Setup & Configuration',
      '3 Months Support',
      'Source Code Delivery',
      'Basic Analytics Integration',
      'Responsive Design',
      'SEO Optimization'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing companies and established businesses',
    price: '$7,999',
    period: '/project',
    popular: true,
    enterprise: false,
    icon: Star,
    gradient: 'from-electric-500 to-neon-500',
    buttonText: 'Most Popular',
    maxProjects: '3-7 Projects',
    support: 'Priority Support',
    teamSize: '5-20 Team Members',
    features: [
      'Everything in Starter',
      'Advanced AI/ML Integration',
      'Custom CRM/ERP Solutions',
      'Advanced Analytics Dashboard',
      'API Development & Integration',
      '6 Months Support & Maintenance',
      'Cloud Infrastructure Setup',
      'Performance Optimization',
      'Security Implementation',
      'Third-party Integrations'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Complete solution for large organizations',
    price: 'Custom',
    period: 'Quote',
    popular: false,
    enterprise: true,
    icon: Crown,
    gradient: 'from-purple-500 to-pink-600',
    buttonText: 'Contact Sales',
    maxProjects: 'Unlimited',
    support: '24/7 Dedicated Support',
    teamSize: 'Unlimited Team Size',
    features: [
      'Everything in Professional',
      'Custom Enterprise Architecture',
      'Dedicated Development Team',
      'Advanced Security & Compliance',
      'Multi-platform Development',
      '12+ Months Ongoing Support',
      'DevOps & CI/CD Pipeline',
      'Load Balancing & Scaling',
      'Custom Integrations',
      'Training & Documentation',
      'SLA Guarantees',
      'White-label Solutions'
    ]
  }
];

const PricingCard = ({ tier, index }: { tier: PricingTier, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/envisionedgetech/30min",
      });
    }
  };

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
          delay: index * 0.2,
          ease: "easeOut"
        }
      } : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group ${tier.popular ? 'scale-105 z-10' : 'z-0'}`}
    >
      {/* Popular Badge */}
      {tier.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="bg-gradient-to-r from-electric-500 to-neon-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Most Popular
          </div>
        </motion.div>
      )}

      <motion.div
        whileHover={{ 
          y: tier.popular ? -5 : -10,
          scale: tier.popular ? 1.02 : 1.05,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        className={`relative p-8 backdrop-blur-xl border rounded-3xl overflow-hidden h-full ${
          tier.popular 
            ? 'bg-white/10 border-electric-500/50 shadow-2xl shadow-electric-500/20' 
            : tier.enterprise
            ? 'bg-white/5 border-purple-500/30'
            : 'bg-white/5 border-white/10'
        }`}
      >
        {/* Glow Effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            tier.popular 
              ? 'from-electric-500/20 to-neon-500/20'
              : tier.enterprise 
              ? 'from-purple-500/20 to-pink-500/20'
              : 'from-blue-500/10 to-purple-500/10'
          }`}
        />

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${tier.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
              <tier.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
              <p className="text-gray-400">{tier.description}</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-bold text-white">{tier.price}</span>
              <span className="text-gray-400 text-lg">{tier.period}</span>
            </div>
            {tier.enterprise && (
              <p className="text-electric-400 text-sm mt-2">Tailored solutions for your needs</p>
            )}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 gap-3 mb-8 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-electric-400" />
              <span className="text-sm text-gray-300">{tier.maxProjects}</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-electric-400" />
              <span className="text-sm text-gray-300">{tier.teamSize}</span>
            </div>
            <div className="flex items-center gap-3">
              <Headphones className="w-5 h-5 text-electric-400" />
              <span className="text-sm text-gray-300">{tier.support}</span>
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
            <ul className="space-y-3">
              {tier.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 bg-gradient-to-br from-electric-500 to-neon-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={openCalendly}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative w-full px-6 py-4 font-semibold text-lg rounded-xl overflow-hidden transition-all duration-300 ${
              tier.popular
                ? 'bg-gradient-to-r from-electric-600 to-electric-500 text-white shadow-xl shadow-electric-500/25'
                : tier.enterprise
                ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-xl shadow-purple-500/25'
                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/15'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {tier.buttonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            {(tier.popular || tier.enterprise) && (
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </motion.button>

          {/* Additional Enterprise Benefits */}
          {tier.enterprise && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-semibold text-white">Enterprise Benefits</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Dedicated account manager, custom SLA, priority development queue, and enterprise-grade security compliance.
              </p>
            </motion.div>
          )}
        </div>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
          style={{
            background: tier.popular 
              ? 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.4), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
          }}
          animate={isHovered ? {
            rotate: 360,
          } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
};

const ComparisonFeature = ({ feature, tiers }: { feature: string, tiers: boolean[] }) => (
  <div className="grid grid-cols-4 gap-4 py-4 border-b border-white/10">
    <div className="text-gray-300 text-sm">{feature}</div>
    {tiers.map((included, index) => (
      <div key={index} className="flex justify-center">
        {included ? (
          <div className="w-6 h-6 bg-gradient-to-br from-electric-500 to-neon-500 rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        ) : (
          <div className="w-6 h-6 border-2 border-gray-600 rounded-full" />
        )}
      </div>
    ))}
  </div>
);

export const PremiumPricing = () => {
  const [showComparison, setShowComparison] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const comparisonFeatures = [
    { feature: 'Custom Development', tiers: [true, true, true] },
    { feature: 'AI/ML Integration', tiers: [false, true, true] },
    { feature: 'Enterprise Architecture', tiers: [false, false, true] },
    { feature: 'Dedicated Team', tiers: [false, false, true] },
    { feature: '24/7 Support', tiers: [false, false, true] },
    { feature: 'SLA Guarantees', tiers: [false, false, true] },
  ];

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/envisionedgetech/30min",
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          ref={heroRef}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white">
              <Crown className="w-4 h-4 text-neon-400" />
              <span className="text-sm font-medium">Enterprise-Grade Solutions</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            <span className="block text-white">Choose Your</span>
            <span className="block bg-gradient-to-r from-electric-400 via-electric-500 to-neon-400 bg-clip-text text-transparent animate-gradient">
              Success Plan
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Transparent, value-driven pricing for businesses of all sizes. 
            From startups to enterprise, we have the perfect solution for your digital transformation.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.id} tier={tier} index={index} />
          ))}
        </div>

        {/* Feature Comparison Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.button
            onClick={() => setShowComparison(!showComparison)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/15 transition-all duration-300"
          >
            <span>Compare All Features</span>
            <motion.div
              animate={{ rotate: showComparison ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Feature Comparison Table */}
        <AnimatePresence>
          {showComparison && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Feature Comparison</h3>
              
              {/* Header */}
              <div className="grid grid-cols-4 gap-4 mb-6 pb-4 border-b border-white/20">
                <div className="text-white font-semibold">Features</div>
                <div className="text-center text-white font-semibold">Starter</div>
                <div className="text-center text-white font-semibold">Professional</div>
                <div className="text-center text-white font-semibold">Enterprise</div>
              </div>

              {/* Comparison Features */}
              {comparisonFeatures.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ComparisonFeature feature={item.feature} tiers={item.tiers} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center pt-16 border-t border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your project requirements and get a custom quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={openCalendly}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-electric-600 to-electric-500 text-white rounded-xl font-semibold text-lg overflow-hidden shadow-xl shadow-electric-500/25"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-500 to-neon-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
                className="block px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/15 transition-all duration-300 text-center"
              >
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 