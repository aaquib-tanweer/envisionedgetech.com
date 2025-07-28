import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Users, TrendingUp, Shield, Award } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// Declare the Calendly type
declare global {
  interface Window {
    Calendly?: any;
  }
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image?: string;
  companyLogo?: string;
  metrics?: {
    improvement: string;
    metric: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Lena Kowalski",
    role: "CTO",
    content: "Envision Edge Tech transformed our entire digital infrastructure. Their AI-powered MIS system increased our operational efficiency by 40% and reduced costs significantly. The team's expertise and professionalism are unmatched.",
    rating: 5,
    metrics: {
      improvement: "40%",
      metric: "Efficiency Increase"
    }
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "CEO",
    content: "The CRM platform they built for us revolutionized how we handle patient relationships. The intuitive design and powerful analytics have helped us serve over 1,200 patients more effectively.",
    rating: 5,
    metrics: {
      improvement: "1.2K+",
      metric: "Patients Served"
    }
  },
  {
    id: 3,
    name: "Fatima El Amrani",
    role: "Director of Operations",
    content: "Their education management system streamlined our entire operation. Student engagement increased by 60%, and administrative tasks are now 70% faster. Exceptional work and ongoing support.",
    rating: 5,
    metrics: {
      improvement: "60%",
      metric: "Engagement Boost"
    }
  },
  {
    id: 4,
    name: "Jonas Bergström",
    role: "Founder",
    content: "The custom ERP solution exceeded all expectations. Our revenue increased by 35% in the first quarter alone. The real-time analytics and automation features are game-changing.",
    rating: 5,
    metrics: {
      improvement: "35%",
      metric: "Revenue Growth"
    }
  },
  // New Indian testimonials
  {
    id: 5,
    name: "Priya Sharma",
    role: "Product Manager",
    content: "The team at Envision Edge Tech delivered our project ahead of schedule and with outstanding quality. Their attention to detail and support made all the difference.",
    rating: 5,
    metrics: {
      improvement: "Ahead of Schedule",
      metric: "Delivery Time"
    }
  },
  {
    id: 6,
    name: "Ravi Kumar",
    role: "Operations Head",
    content: "We saw a 50% reduction in manual work after implementing their automation solutions. Highly recommended for any business looking to scale efficiently.",
    rating: 5,
    metrics: {
      improvement: "50%",
      metric: "Manual Work Reduced"
    }
  },
  {
    id: 7,
    name: "Ayesha Patel",
    role: "Marketing Lead",
    content: "Their digital marketing dashboard gave us real-time insights and improved our campaign ROI. The user experience is top-notch!",
    rating: 5,
    metrics: {
      improvement: "2x",
      metric: "Campaign ROI"
    }
  },
  {
    id: 8,
    name: "Siddharth Menon",
    role: "IT Consultant",
    content: "From consultation to deployment, the process was seamless. The support team is responsive and knowledgeable. We are very satisfied!",
    rating: 5,
    metrics: {
      improvement: "Seamless",
      metric: "Implementation"
    }
  }
];

const TestimonialCard = ({ testimonial, isActive }: { testimonial: Testimonial, isActive: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
      } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative group ${isActive ? 'z-10' : 'z-0'}`}
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative p-6 sm:p-8 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden"
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-electric-500/10 to-neon-500/10"
          animate={isActive ? { opacity: 1 } : { opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />

        {/* Quote icon */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-electric-500/20 to-neon-500/20 rounded-full flex items-center justify-center">
          <Quote className="w-4 h-4 sm:w-6 sm:h-6 text-electric-400" />
        </div>

        <div className="relative z-10">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-4 sm:mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              >
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-500 text-yellow-500" />
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
            "{testimonial.content}"
          </p>

          {/* Metrics */}
          {testimonial.metrics && (
            <div className="mb-6 p-3 sm:p-4 bg-gray-100/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-neon-500 to-electric-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">{testimonial.metrics.improvement}</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{testimonial.metrics.metric}</div>
                </div>
              </div>
            </div>
          )}

          {/* Author */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500/20 dark:from-electric-500/20 to-purple-500/20 dark:to-neon-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center border border-gray-200 dark:border-white/20">
              <Users className="w-5 h-5 sm:w-7 sm:h-7 text-gray-700 dark:text-white/80" />
            </div>
            <div>
              <h4 className="text-gray-900 dark:text-white font-bold text-base sm:text-lg">{testimonial.name}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{testimonial.role}</p>
            </div>
          </div>
        </div>

        {/* Border animation - disabled on mobile */}
        <motion.div
          className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 hidden sm:block"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.4), transparent)',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
};

const TrustStats = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true });

  const stats = [
    { value: "25+", label: "Happy Clients", icon: Users },
    { value: "96%", label: "Success Rate", icon: Award },
    { value: "24/7", label: "Support", icon: Shield },
    { value: "12+", label: "Industries", icon: TrendingUp },
  ];

  return (
    <motion.div
      ref={statsRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          className="text-center p-4 sm:p-6 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 group"
        >
          <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-electric-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
          <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{stat.value}</div>
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const ClientsTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Add Calendly script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/envisionedgetech/30min",
      });
    }
  };

  // Auto-play functionality - disabled on mobile
  useEffect(() => {
    if (!isAutoPlaying || isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isMobile]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const getVisibleTestimonials = () => {
    // On mobile, show only one testimonial at a time
    if (isMobile) {
      return [{
        ...testimonials[currentIndex],
        isActive: true
      }];
    }
    
    // On desktop, show 3 testimonials
    const visibleCount = 3;
    const testimonialsList = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      testimonialsList.push({
        ...testimonials[index],
        isActive: i === 1 // Middle card is active
      });
    }
    
    return testimonialsList;
  };

  return (
    <div 
      ref={containerRef}
      className="relative py-12 sm:py-16 lg:py-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          ref={heroRef}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full text-gray-900 dark:text-white">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-neon-400" />
              <span className="text-xs sm:text-sm font-medium">Client Success Stories</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-8"
          >
            <span className="block text-gray-900 dark:text-white">Trusted by Industry</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-electric-400 dark:via-electric-500 dark:to-neon-400 bg-clip-text text-transparent animate-gradient">
              Leaders Worldwide
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
          >
            See how we've helped companies across the globe transform their operations 
            and achieve extraordinary results with our enterprise solutions.
          </motion.p>
        </motion.div>

        {/* Trust Stats */}
        <TrustStats />

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 z-20">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>
          
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 z-20">
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 px-4 md:px-16">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard 
                  testimonial={testimonial} 
                  isActive={testimonial.isActive}
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full flex items-center justify-center text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 dark:bg-electric-500 w-6 sm:w-8' 
                    : 'bg-gray-400/50 dark:bg-white/30 hover:bg-gray-500/70 dark:hover:bg-white/50'
                }`}
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
          className="text-center mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-gray-200 dark:border-white/10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Let's discuss how we can help transform your business and achieve similar results.
          </p>
          <motion.button
            onClick={openCalendly}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-electric-600 to-electric-500 text-white rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg overflow-hidden shadow-xl shadow-electric-500/25"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Your Success Story
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-electric-500 to-neon-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
