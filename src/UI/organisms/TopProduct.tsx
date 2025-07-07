import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from 'framer-motion'
import { 
  Code2, Palette, Layers, Sparkles, ArrowRight, CheckCircle, Zap, Users, 
  TrendingUp, Globe, Shield, PlayCircle, Smartphone, Monitor, Tablet,
  Cpu, Database, Cloud, Lock, BarChart3, Layout, Brush, Rocket
} from 'lucide-react'
import { Link } from '@tanstack/react-router'

// Declare Calendly type
declare global {
  interface Window {
    Calendly?: any;
  }
}

const WebsitePreview = () => {
  const [activeType, setActiveType] = useState('portfolio')
  const [isRotating, setIsRotating] = useState(false)
  
  const websiteTypes = [
    { 
      id: 'portfolio', 
      icon: Brush, 
      label: 'Portfolio',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'ecommerce', 
      icon: Globe, 
      label: 'E-Commerce',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'saas', 
      icon: Rocket, 
      label: 'SaaS Platform',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true)
      setTimeout(() => {
        setActiveType(prev => {
          const currentIndex = websiteTypes.findIndex(type => type.id === prev)
          const nextIndex = (currentIndex + 1) % websiteTypes.length
          return websiteTypes[nextIndex].id
        })
        setIsRotating(false)
      }, 300)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])

  const renderWebsiteContent = () => {
    switch (activeType) {
      case 'portfolio':
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center p-6">
              <div className="w-32 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              <div className="flex gap-3">
                <div className="w-10 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <div className="w-10 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <div className="w-10 h-3 bg-purple-400 rounded-full"></div>
              </div>
            </div>
            
            {/* Hero Section */}
            <div className="px-6 py-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl mx-auto mb-6"></div>
              <div className="w-40 h-4 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-3"></div>
              <div className="w-32 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto"></div>
            </div>
            
            {/* Portfolio Grid */}
            <div className="grid grid-cols-3 gap-4 px-6">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-2xl shadow-xl"
                />
              ))}
            </div>
          </div>
        )
      
      case 'ecommerce':
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center p-6">
              <div className="w-28 h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-xl"></div>
                <div className="w-8 h-8 bg-blue-400 rounded-xl"></div>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-4 px-6">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-700 rounded-2xl p-4 shadow-xl"
                >
                  <div className="w-full h-20 bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-700 dark:to-cyan-700 rounded-xl mb-3"></div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
                  <div className="w-16 h-3 bg-blue-400 rounded"></div>
                </motion.div>
              ))}
            </div>
          </div>
        )
      
      case 'saas':
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center p-6">
              <div className="w-28 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-2xl"></div>
                <div className="w-10 h-10 bg-green-400 rounded-2xl"></div>
              </div>
            </div>
            
            {/* Dashboard */}
            <div className="px-6">
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white dark:bg-gray-700 rounded-xl p-3 shadow-xl"
                  >
                    <div className="w-6 h-6 bg-green-400 rounded mb-2"></div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
                    <div className="w-12 h-2 bg-green-400 rounded"></div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-4 shadow-xl">
                <div className="flex justify-between items-center mb-3">
                  <div className="w-20 h-3 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  <div className="w-6 h-6 bg-green-400 rounded"></div>
                </div>
                <div className="space-y-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="relative">
      {/* Type Selector */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-gray-200 dark:border-white/20 rounded-3xl p-2 shadow-2xl dark:shadow-none">
          {websiteTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveType(type.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-500 font-medium ${
                activeType === type.id
                  ? `bg-gradient-to-r ${type.color} text-white shadow-2xl shadow-current/25 scale-105`
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
              }`}
            >
              <type.icon className="w-5 h-5" />
              <span className="text-sm">{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3D Website Preview - Much Larger */}
      <div className="relative perspective-1000">
        <motion.div
          animate={{ 
            rotateY: isRotating ? 15 : 0,
            scale: isRotating ? 0.95 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {/* Main Monitor - Significantly Larger */}
          <div className="relative mx-auto">
            <motion.div
              className="relative w-[600px] h-[380px] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[40px] p-8 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.6), 0 0 0 2px rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Screen */}
              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl overflow-hidden shadow-inner">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeType}
                    initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateX: -15 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    {renderWebsiteContent()}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Monitor Stand */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl"></div>
                <div className="w-28 h-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full mt-2"></div>
              </div>
            </motion.div>
          </div>

          {/* Floating Elements - Repositioned for larger monitor */}
          <motion.div
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -top-12 -right-16 w-20 h-20 bg-gradient-to-br from-blue-500/30 dark:from-blue-500/20 to-purple-500/30 dark:to-purple-500/20 backdrop-blur-xl border border-gray-200 dark:border-white/20 rounded-3xl flex items-center justify-center shadow-2xl dark:shadow-none"
          >
            <Code2 className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [10, -10, 10],
              rotate: [0, -5, 0, 5, 0],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-8 -left-16 w-18 h-18 bg-gradient-to-br from-green-500/30 dark:from-green-500/20 to-emerald-500/30 dark:to-emerald-500/20 backdrop-blur-xl border border-gray-200 dark:border-white/20 rounded-2xl flex items-center justify-center shadow-2xl dark:shadow-none"
          >
            <Palette className="w-9 h-9 text-green-600 dark:text-green-400" />
          </motion.div>

          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 -right-20 w-16 h-16 bg-gradient-to-br from-orange-500/30 dark:from-orange-500/20 to-red-500/30 dark:to-red-500/20 backdrop-blur-xl border border-gray-200 dark:border-white/20 rounded-2xl flex items-center justify-center shadow-2xl dark:shadow-none"
          >
            <Rocket className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [5, -5, 5],
              x: [-2, 2, -2],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute top-16 -left-12 w-14 h-14 bg-gradient-to-br from-purple-500/30 dark:from-purple-500/20 to-pink-500/30 dark:to-pink-500/20 backdrop-blur-xl border border-gray-200 dark:border-white/20 rounded-2xl flex items-center justify-center shadow-2xl dark:shadow-none"
          >
            <Layers className="w-7 h-7 text-purple-600 dark:text-purple-400" />
          </motion.div>
        </motion.div>

        {/* Background Glow - Adjusted for larger monitor */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  )
}

const FeatureHighlight = ({ feature, index, isActive }: { 
  feature: { icon: any, title: string, description: string, metrics: string }, 
  index: number,
  isActive: boolean 
}) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ 
      opacity: isActive ? 1 : 0.7, 
      x: 0,
      scale: isActive ? 1.02 : 1,
      y: isActive ? -4 : 0
    }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`group relative p-8 rounded-3xl border transition-all duration-700 overflow-hidden ${
      isActive 
        ? 'bg-white/95 dark:bg-white/10 border-blue-200 dark:border-white/30 shadow-2xl backdrop-blur-2xl' 
        : 'bg-white/80 dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-xl hover:bg-white dark:hover:bg-white/8 hover:border-gray-300 dark:hover:border-white/20'
    }`}
  >
    {/* Animated Background */}
    <motion.div
      className="absolute inset-0 opacity-0 group-hover:opacity-100"
      animate={isActive ? { opacity: 0.1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)',
      }}
    />
    
    <div className="relative z-10 flex items-start gap-6">
      <motion.div 
        className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-2xl ${
          isActive 
            ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-blue-500/25' 
            : 'bg-gradient-to-br from-gray-600 to-gray-700 group-hover:from-blue-500 group-hover:to-purple-600'
        }`}
        animate={isActive ? { 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <feature.icon className="w-8 h-8 text-white" />
      </motion.div>
      
      <div className="flex-1">
        <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
          isActive ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
        }`}>
          {feature.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-4 transition-colors duration-500 ${
          isActive ? 'text-gray-700 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'
        }`}>
          {feature.description}
        </p>
        <motion.div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold transition-all duration-500 ${
            isActive 
              ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-400/30' 
              : 'bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600/30 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-300'
          }`}
          whileHover={{ scale: 1.05 }}
        >
          <TrendingUp className="w-3 h-3" />
          {feature.metrics}
        </motion.div>
      </div>
    </div>
  </motion.div>
)

const StatsCard = ({ icon: Icon, value, label, color, delay }: {
  icon: any,
  value: string,
  label: string,
  color: string,
  delay: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.05, y: -8 }}
    className="group relative p-8 bg-white/90 dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl dark:shadow-none overflow-hidden"
  >
    {/* Animated Background */}
    <motion.div
      className="absolute inset-0 opacity-0 group-hover:opacity-100"
      style={{
        background: `linear-gradient(135deg, ${color.replace('from-', 'rgba(').replace(' to-', ', 0.1) 0%, rgba(').replace('-500', '').replace('-600', '')}, 0.1) 100%)`,
      }}
      transition={{ duration: 0.5 }}
    />
    
    <div className="relative z-10">
      <motion.div 
        className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 shadow-2xl`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
      <motion.div 
        className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
      >
        {value}
      </motion.div>
      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{label}</div>
    </div>
  </motion.div>
)

export default function CustomWebDevelopmentShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Code2,
      title: "Custom Development",
      description: "Tailored websites built from scratch using modern technologies like React, Next.js, and Node.js for optimal performance.",
      metrics: "100% Custom Code"
    },
    {
      icon: Palette,
      title: "Premium Design",
      description: "Stunning UI/UX designs with glassmorphism effects, advanced animations, and responsive layouts that captivate users.",
      metrics: "Pixel-Perfect Design"
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Optimized for speed with lazy loading, code splitting, and CDN integration for blazing-fast load times.",
      metrics: "99% PageSpeed Score"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with SSL encryption, secure authentication, and regular security audits to protect your data.",
      metrics: "SOC 2 Compliant"
    }
  ]

  const stats = [
    { icon: Globe, value: "35+", label: "Websites Built", color: "from-blue-500 to-cyan-500", delay: 0.1 },
    { icon: Users, value: "98%", label: "Client Satisfaction", color: "from-green-500 to-emerald-500", delay: 0.2 },
    { icon: TrendingUp, value: "3x", label: "Performance Boost", color: "from-purple-500 to-pink-500", delay: 0.3 },
    { icon: Rocket, value: "24/7", label: "Support & Maintenance", color: "from-orange-500 to-red-500", delay: 0.4 }
  ]

  // Add Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Auto-cycle features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [features.length])

  const openCalendlyDemo = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/envisionedgetech/30min'
      });
    }
  };

  const openCalendlyQuotation = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/envisionedgetech/30min'
      });
    }
  };

  return (
    <div ref={containerRef} className="relative py-32 overflow-hidden bg-gray-50/50 dark:bg-transparent">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 dark:from-blue-500/10 to-purple-500/20 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/20 dark:from-green-500/10 to-emerald-500/20 dark:to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-orange-500/20 dark:from-orange-500/10 to-red-500/20 dark:to-red-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/90 dark:bg-white/10 backdrop-blur-2xl border border-gray-200 dark:border-white/20 rounded-full text-gray-900 dark:text-white shadow-2xl dark:shadow-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </motion.div>
              <span className="text-sm font-semibold">Featured Development Service</span>
              <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full font-bold">
                #1 Choice
              </div>
            </div>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="block text-gray-900 dark:text-white">Custom Web</span>
            <span className="block bg-gradient-to-r from-blue-600 dark:from-blue-400 via-purple-600 dark:via-purple-400 to-pink-600 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
              Development
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Transform your digital presence with stunning, high-performance websites. 
            From concept to deployment, we craft unique digital experiences that drive results.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-8">
              {features.map((feature, index) => (
                <FeatureHighlight
                  key={index}
                  feature={feature}
                  index={index}
                  isActive={index === activeFeature}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 pt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.button
                onClick={openCalendlyDemo}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-3xl font-bold text-lg overflow-hidden shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <PlayCircle className="w-6 h-6" />
                  View Live Demo
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={openCalendlyQuotation}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-white/90 dark:bg-white/10 backdrop-blur-2xl border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white rounded-3xl font-bold text-lg hover:bg-white dark:hover:bg-white/20 hover:border-gray-300 dark:hover:border-white/30 transition-all duration-300 shadow-2xl dark:shadow-none"
              >
                <span className="flex items-center justify-center gap-3">
                  <Code2 className="w-6 h-6" />
                  Get Free Quote
                </span>
              </motion.button>
            </motion.div>

            {/* Additional Info */}
            <motion.div 
              className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 text-sm text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span>30-day free updates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span>Lifetime support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Website Preview */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="lg:col-span-3 relative flex justify-center"
          >
            <WebsitePreview />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mt-32 pt-20 border-t border-gray-200 dark:border-white/10"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
            Join 25+ businesses who trust us to create exceptional digital experiences.
          </p>
          <Link 
            to="/products"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-2xl shadow-2xl transition-all duration-300 group"
          >
            <Layers className="w-5 h-5" />
            Explore All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
