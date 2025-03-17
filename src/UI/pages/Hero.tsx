import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Blocks, Zap } from "lucide-react";
import { motion } from "framer-motion";

// Declare the Calendly type
declare global {
  interface Window {
    Calendly?: any;
  }
}

const MotionLink = motion(Link);
const MotionButton = motion.button;

export const Hero = () => {
  useEffect(() => {
    // Add Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
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
        url: "https://calendly.com/envisionedgetech/30min",
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pb-[4.5rem] pt-16 lg:pt-[4.5rem] dark:text-white text-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1E40AF,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#1E3A8A,_transparent_50%)]" />
        <motion.div
          className="absolute h-full w-full"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(30, 64, 175, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(30, 64, 175, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, rgba(30, 64, 175, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 0%, rgba(30, 64, 175, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(30, 64, 175, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <span className="relative inline-flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 group cursor-pointer">
            <span className="relative z-10">Innovate • Transform • Succeed</span>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-blue-500/20"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Transform Your Business with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600">
            Cutting-Edge Tech
          </span>
        </motion.h1>

        <motion.p
          className="text-xl text-foreground/80 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Empower your enterprise with custom software solutions that drive
          growth, enhance efficiency, and deliver exceptional results.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <MotionLink
            to="/products"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Journey
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </MotionLink>

          <MotionButton
            onClick={openCalendly}
            className="relative px-8 py-4 bg-foreground/10 backdrop-blur-sm text-foreground rounded-lg overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Demo
          </MotionButton>
        </motion.div>

        {/* Tech Icons Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: Code2, label: "Modern Tech Stack", desc: "Latest frameworks & tools" },
            { icon: Blocks, label: "Scalable Architecture", desc: "Built for growth" },
            { icon: Zap, label: "High Performance", desc: "Optimized solutions" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative p-6 bg-background/50 backdrop-blur-sm rounded-lg border border-blue-500/10">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-400/5 text-blue-500 mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.label}</h3>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
