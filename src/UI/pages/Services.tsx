import React, { useState } from 'react';
import { motion, MotionProps, Variants } from 'framer-motion';
import { services } from '@/constants/services';

interface ServiceItem {
  icon: React.ReactNode;
  name: string;
  description: string;
}

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
  index?: number;
}

const cardVariants: Variants = {
  idle: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const iconVariants: Variants = {
  hover: {
    scale: [1, 1.1, 1],
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8],
      repeat: Infinity,
      repeatDelay: 1
    }
  }
};

const ServiceCard: React.FC<ServiceCardProps & MotionProps> = ({ 
  service, 
  className = "",
  index = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        variants={cardVariants}
        initial="idle"
        whileHover="hover"
        className={`
          group relative rounded-xl p-6 bg-background/50 border border-border/50 
          backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 
          ${className}
        `}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="flex items-start gap-4">
          <motion.div
            variants={iconVariants}
            animate={isHovered ? "hover" : "idle"}
            className="flex-shrink-0 p-3 rounded-lg bg-blue-500/10 text-blue-500"
          >
            <span className="text-2xl">{service.icon}</span>
          </motion.div>
          
          <div className="space-y-2">
            <motion.h3
              animate={isHovered ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.2 }}
              className="text-lg font-semibold tracking-tight"
            >
              {service.name}
            </motion.h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-blue-500/10 rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
};

export function Services() {
  return (
    <section className="relative py-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" 
      />
      
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-sm font-semibold text-blue-500 mb-3">OUR SERVICES</h2>
          <h3 className="text-3xl font-bold mb-4">
            Power Innovation with Scalable Solutions
          </h3>
          <p className="text-muted-foreground">
            From web and mobile app development to UI/UX design and ongoing
            support, we deliver exceptional services that drive growth.
          </p>
        </motion.div>

        <div className="grid gap-6">
          <ServiceCard 
            service={services.webDevelopement}
            className="md:flex-row"
            index={0}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(services)
              .slice(1)
              .map(([key, service], index) => (
                <ServiceCard 
                  key={key} 
                  service={service} 
                  index={index + 1}
                />
            ))}
          </div>
        </div>
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"
        />
      </div>
    </section>
  );
}