import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ShoppingCart, Search, Star, Truck, CreditCard, Heart, 
  Package, Medal, ArrowRight, CheckCircle, Zap 
} from 'lucide-react'

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
}

const iconRotationVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', stiffness: 300 }
  }
}

const rotatingIcons = [
  { icon: ShoppingCart, tooltip: 'Easy Checkout' },
  { icon: Heart, tooltip: 'Personalized Experience' },
  { icon: CreditCard, tooltip: 'Secure Payments' },
  { icon: Package, tooltip: 'Fast Shipping' }
]

const featureCategories = [
  {
    title: 'Navigation & Search',
    features: [
      { icon: Search, text: 'Advanced search with AI-powered recommendations' },
      { icon: Zap, text: 'Intelligent filtering and sorting capabilities' }
    ]
  },
  {
    title: 'Product Experience',
    features: [
      { icon: Star, text: 'Rich, interactive product presentations' },
      { icon: CheckCircle, text: 'Comprehensive product details and reviews' }
    ]
  },
  {
    title: 'Shopping Features',
    features: [
      { icon: Truck, text: 'Real-time inventory and dynamic pricing' },
      { icon: Package, text: 'Smart cart and wishlist management' }
    ]
  }
]

export default function EnhancedProductShowcase() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Cycle through feature categories automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % featureCategories.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Memoize current category features for performance
  const currentFeatures = useMemo(() => 
    featureCategories[activeCategory].features, 
    [activeCategory]
  )

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-200 p-6 sm:p-8 rounded-2xl shadow-2xl max-w-full sm:max-w-4xl lg:max-w-6xl mx-auto relative overflow-hidden">
      {/* Animated background effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-200 opacity-30"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'], 
          transition: { duration: 10, repeat: Infinity, repeatType: 'reverse' }
        }}
      />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center text-indigo-900 text-center sm:text-left">
            <Medal className="mr-2 text-yellow-500" />
            Premium E-Commerce Solution
            <span className="ml-3 bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-sm">
              Top Rated
            </span>
          </h2>
          <a 
            href="/products" 
            className="bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-colors flex items-center group"
          >
            Explore Products
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-indigo-900 text-center lg:text-left">
              Our cutting-edge e-commerce platform delivers an intelligent, 
              seamless shopping experience with AI-driven personalization, 
              secure transactions, and intuitive design.
            </p>

            {/* Feature Category Selector */}
            <div className="flex space-x-2 mb-4">
              {featureCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${activeCategory === index 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50'}
                  `}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Animated Features */}
            <AnimatePresence mode="wait">
              <ul className="space-y-4">
                {currentFeatures.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={featureVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex items-start"
                  >
                    <item.icon className="text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-indigo-900">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-6 sm:mt-8">
              <button className="bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-800 transition-colors w-full sm:w-auto">
                Request Demo
              </button>
              <button 
                className="border border-indigo-300 text-indigo-800 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors w-full sm:w-auto"
              >
                Get Quotation
              </button>
            </div>
          </div>

          <div className="relative h-[300px] sm:h-[400px]">
            {/* Rotating Icons with Simple Title Tooltips */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            >
              {rotatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute group"
                  style={{
                    top: `${50 + 40 * Math.sin((index * Math.PI) / 2)}%`,
                    left: `${50 + 40 * Math.cos((index * Math.PI) / 2)}%`,
                  }}
                  initial="hidden"
                  animate="visible"
                  variants={iconRotationVariants}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="relative">
                    <item.icon className="text-indigo-600 h-10 w-10 sm:h-12 sm:w-12" />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.tooltip}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated Laptop SVG */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <svg
                viewBox="0 0 200 200"
                className="w-48 h-48 sm:w-64 sm:h-64"
              >
                <defs>
                  <linearGradient
                    id="productGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                <motion.rect
                  x="40"
                  y="40"
                  width="120"
                  height="80"
                  rx="10"
                  fill="url(#productGradient)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M30,120 L170,120 L180,140 L20,140 Z"
                  fill="#6366F1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
                />
                <motion.circle
                  cx="100"
                  cy="80"
                  r="20"
                  fill="#8B5CF6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: 'spring', stiffness: 500 }}
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}