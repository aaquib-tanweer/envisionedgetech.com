import { BackgroundBeams } from '@/UI/aceternity/background-beams';
import { FeaturesSection } from '@/UI/aceternity/feature-section';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <>
      <div className="mt-12 p-8 md:mt-0 md:h-screen flex flex-col md:items-center justify-center gap-8 landscape:md:max-lg:mb-64">
        
        {/* Animated Heading */}
        <motion.h1
          className="md:text-center font-bold text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="">Where</span> Vision Transforms <br />
          into Technology <span className="text-primary">.</span>
        </motion.h1>

        {/* Animated Action Button */}
        <motion.a
          href="/products"
          className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Get Started
        </motion.a>
        
        {/* Animated Spacer */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-primary w-full"
        ></motion.div>

        {/* Animated Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <FeaturesSection />
        </motion.div>

        {/* Animated Background Beams */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <BackgroundBeams className="-z-50" />
        </motion.div>

      </div>
    </>
  );
};
