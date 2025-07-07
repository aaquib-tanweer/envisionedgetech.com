import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play, Sparkles, Zap, Shield, Rocket, CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";

// Declare the Calendly type
declare global {
  interface Window {
    Calendly?: any;
  }
}

const MotionLink = motion(Link);
const MotionButton = motion.button;

const FeatureCard = ({ icon: Icon, title, description, delay }: { 
  icon: any, 
  title: string, 
  description: string, 
  delay: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="group relative p-6 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-white dark:hover:bg-white/10 transition-all duration-300 shadow-lg dark:shadow-none"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 dark:from-electric-500/10 to-purple-500/10 dark:to-neon-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative z-10">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-electric-500 dark:to-electric-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/25 dark:shadow-electric-500/25">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });

  useEffect(() => {
    // Add Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/envisionedgetech/30min",
      });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mouse follower effect */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-blue-500/10 dark:from-electric-500/20 to-transparent rounded-full blur-3xl pointer-events-none opacity-30"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.3s ease',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pb-28">
        {/* Hero Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full text-gray-900 dark:text-white hover:bg-white dark:hover:bg-white/15 transition-all duration-300 cursor-pointer shadow-lg dark:shadow-none">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-neon-400" />
            <span className="text-sm font-medium">Trusted by 25+ Companies Worldwide</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 dark:from-electric-500/20 to-purple-500/10 dark:to-neon-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold hero-tight-spacing">
            <span className="block text-gray-900 dark:text-white">Transform Your</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-electric-400 dark:via-electric-500 dark:to-neon-400 bg-clip-text text-transparent animate-gradient">
              Tech Vision
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          We build enterprise-grade software solutions that scale with your ambitions. 
          From AI-powered platforms to cloud infrastructure, we turn your vision into reality.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
                  {[
          { value: "99.2%", label: "Uptime" },
          { value: "35+", label: "Projects" },
          { value: "12+", label: "Team" },
          { value: "6+", label: "Countries" },
        ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <MotionLink
            to="/products"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-electric-600 dark:to-electric-500 text-white rounded-xl font-semibold text-lg overflow-hidden shadow-xl shadow-blue-500/25 dark:shadow-electric-500/25"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Building Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-electric-500 dark:to-neon-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </MotionLink>

          <MotionButton
            onClick={openCalendly}
            className="group relative px-8 py-4 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:bg-white dark:hover:bg-white/15 transition-all duration-300 shadow-lg dark:shadow-none"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Book Free Demo
            </span>
          </MotionButton>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Trusted by industry leaders</p>
          <div className="flex justify-center items-center gap-2 text-blue-600 dark:text-neon-400">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm">SOC 2 Compliant</span>
            <span className="mx-2 text-gray-400 dark:text-gray-600">•</span>
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm">Enterprise Security</span>
            <span className="mx-2 text-gray-400 dark:text-gray-600">•</span>
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm">24/7 Support</span>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <FeatureCard
            icon={Zap}
            title="Lightning Fast"
            description="Built for performance with cutting-edge technologies and optimized architecture"
            delay={0.7}
          />
          <FeatureCard
            icon={Shield}
            title="Enterprise Security"
            description="Bank-grade security with end-to-end encryption and compliance certifications"
            delay={0.8}
          />
          <FeatureCard
            icon={Rocket}
            title="Scalable Solutions"
            description="From startup to enterprise, our solutions grow with your business needs"
            delay={0.9}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400/50 dark:border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600/70 dark:bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
