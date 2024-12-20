import React, { useState } from 'react';
import { motion, MotionProps, Variants } from 'framer-motion';

interface ButtonProps {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
  size?: 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const buttonVariants: Variants = {
  idle: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const glowVariants: Variants = {
  hover: {
    opacity: [0.5, 0.7, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

const rippleVariants: Variants = {
  initial: { scale: 0, opacity: 0.7 },
  animate: { scale: 2, opacity: 0 },
};

const MotionButton: React.FC<ButtonProps & MotionProps> = ({
  variant = 'default',
  size,
  children,
  className = '',
  onClick,
  disabled = false,
  ...motionProps
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const baseClasses = `
    inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors 
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
    disabled:pointer-events-none disabled:opacity-50
  `;

  const variantClasses = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };

  const sizeClasses = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  };

  return (
    <motion.button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size || 'default']}
        ${className}
        relative overflow-hidden
      `}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => setIsPressed(false)}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-primary/20 rounded-lg"
          variants={glowVariants}
          animate="hover"
        />
      )}

      {isPressed && (
        <motion.div
          className="absolute inset-0 bg-white/30 rounded-full"
          initial="initial"
          animate="animate"
          variants={rippleVariants}
          transition={{ duration: 0.5 }}
        />
      )}

      <motion.div
        animate={isHovered ? { y: -2 } : { y: 0 }}
        transition={{ duration: 0.2 }}
        className="relative z-10 flex items-center gap-2"
      >
        {children}
      </motion.div>
    </motion.button>
  );
};

const ButtonsShowcase: React.FC = () => {
  return (
    <div className="p-8 space-y-8 bg-background">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Default Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <MotionButton>Default Button</MotionButton>
          <MotionButton variant="outline">Outline Button</MotionButton>
          <MotionButton variant="secondary">Secondary Button</MotionButton>
          <MotionButton variant="ghost">Ghost Button</MotionButton>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Size Variants</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <MotionButton size="sm">Small Button</MotionButton>
          <MotionButton>Default Size</MotionButton>
          <MotionButton size="lg">Large Button</MotionButton>
          <MotionButton size="icon">🔍</MotionButton>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">States</h3>
        <div className="flex flex-wrap gap-4">
          <MotionButton disabled>Disabled Button</MotionButton>
          <MotionButton variant="outline" disabled>Disabled Outline</MotionButton>
        </div>
      </div>
    </div>
  );
};

export default ButtonsShowcase;