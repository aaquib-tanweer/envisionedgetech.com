import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Globe2, Cpu, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

// Declare the Calendly type
declare global {
  interface Window {
    Calendly?: any;
  }
}

export const Hero = () => {
  useEffect(() => {
    // Add Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    // Check if Calendly is loaded
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/envisionedgetech/30min'
      });
    }
  };

  return (
    <div className="relative pb-[4.5rem] pt-16 lg:pt-[4.5rem] dark:text-white text-slate-900">

      {/* Background Gradient */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="fixed h-screen w-screen bg-[radial-gradient(circle_at_top_right,_#1E40AF,_transparent_50%)]"></div>
        <div className="fixed h-screen w-screen bg-[radial-gradient(circle_at_top_left,_#1E3A8A,_transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              Innovate • Transform • Succeed
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600"> Cutting-Edge Tech</span>
          </motion.h1>

          <motion.p
            className="text-xl text-slate-600 dark:text-gray-400 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Empower your enterprise with custom software solutions that drive growth,
            enhance efficiency, and deliver exceptional results.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link 
              to="/products"
              className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              onClick={openCalendly}
              className="px-8 py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
            >
              Book a Demo
            </button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            {
              icon: <Globe2 className="h-6 w-6" />,
              title: "Global Solutions",
              description: "Reach customers worldwide with scalable applications"
            },
            {
              icon: <Cpu className="h-6 w-6" />,
              title: "Smart Technology",
              description: "Leverage AI and machine learning capabilities"
            },
            {
              icon: <Rocket className="h-6 w-6" />,
              title: "Rapid Development",
              description: "Fast deployment with agile methodology"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-blue-400/20 dark:from-blue-600 dark:to-blue-800 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative p-6 bg-gradient-to-br from-white via-blue-50/50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 rounded-lg">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { number: "98%", label: "Client Satisfaction" },
            { number: "250+", label: "Projects Delivered" },
            { number: "15+", label: "Countries Served" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-slate-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
