import { Button } from '@/UI/shadcn/ui/button'
import { CheckCircle, ChevronRight, X, ArrowRight, Sparkles, Zap, Shield, Star, Users } from 'lucide-react'
import { productsData } from '@/constants/data/products/products'
import { useState, useRef, useEffect } from 'react'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '../shadcn/ui/dialog'
import { motion, useInView } from 'framer-motion'
import { InlineWidget } from 'react-calendly'

// Declare the Calendly type
declare global {
  interface Window {
    Calendly?: any;
  }
}

const FeatureCard = ({ feature, index }: { feature: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="group flex items-center space-x-3 p-3 rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-blue-500 dark:hover:border-electric-500/30 transition-all duration-300 shadow-sm dark:shadow-none"
  >
    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-neon-500 dark:to-neon-600 shadow-lg shadow-blue-500/25 dark:shadow-neon-500/25">
      <CheckCircle className="w-4 h-4 text-white" />
    </div>
    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
      {feature}
    </span>
  </motion.div>
)

const PackageCard = ({ pkg, isPopular = false, openCalendly }: { pkg: any; isPopular?: boolean; openCalendly: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
      isPopular
        ? 'bg-gradient-to-br from-blue-500/10 dark:from-electric-500/10 to-purple-500/10 dark:to-neon-500/10 border-blue-500/30 dark:border-electric-500/30 shadow-2xl shadow-blue-500/20 dark:shadow-electric-500/20'
        : 'bg-white/80 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 shadow-lg dark:shadow-none'
    }`}
  >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <div className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-electric-600 dark:to-electric-500 text-white text-sm font-semibold rounded-full shadow-lg">
          Most Popular
        </div>
      </div>
    )}
    
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{pkg.name}</h3>
      <div className="text-gray-500 dark:text-gray-400 mb-4">Perfect for growing teams</div>
    </div>
    
    <ul className="space-y-4 mb-8">
      {pkg.features.map((feature: string, index: number) => (
        <li key={index} className="flex items-start space-x-3">
          <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 dark:from-neon-500/20 to-purple-500/20 dark:to-neon-600/20 border border-blue-500/30 dark:border-neon-500/30">
            <CheckCircle className="w-3 h-3 text-blue-600 dark:text-neon-400" />
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feature}</span>
        </li>
      ))}
    </ul>
    
    <Button
      onClick={openCalendly}
      className={`w-full font-medium py-3 rounded-xl transition-all duration-300 ${
        isPopular
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-electric-600 dark:to-electric-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-electric-500 dark:hover:to-neon-500 text-white shadow-lg shadow-blue-500/25 dark:shadow-electric-500/25'
          : 'bg-white dark:bg-white/10 hover:bg-gray-50 dark:hover:bg-white/20 text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 hover:border-gray-300 dark:hover:border-white/30'
      }`}
    >
      Get Started
      <ArrowRight className="w-4 h-4 ml-2" />
    </Button>
  </motion.div>
)

export function Products() {
  const [open, setOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<any>()
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  const titleRef = useRef(null)
  const productsRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })
  const productsInView = useInView(productsRef, { once: true })

  // Handle escape key to close dialogs
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setIsCalendlyOpen(false)
      }
    }

    if (open || isCalendlyOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when dialog is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [open, isCalendlyOpen])

  // Close dialogs when clicking outside
  const handleClose = () => {
    setOpen(false)
    setIsCalendlyOpen(false)
  }

  return (
    <div className="container mx-auto px-4 py-24">
      {/* Innovation Showcase Hero */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: -50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                <span className="text-indigo-700 dark:text-indigo-300 font-medium text-sm">
                  INNOVATION LABS
                </span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="block text-gray-900 dark:text-white">Next-Gen</span>
              <span className="block relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400">
                  Digital Products
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 rounded-full transform scale-x-0 animate-pulse origin-left"></div>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
            >
              Cutting-edge software solutions engineered for tomorrow's challenges. 
              Deploy enterprise-grade products that deliver instant ROI with AI-powered insights, 
              quantum-ready security, and seamless scalability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
             
            </motion.div>
          </div>

          {/* Tech Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Floating Cards */}
            <div className="relative h-96 w-full">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-4 w-32 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg p-4 flex items-center justify-center"
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-16 right-8 w-28 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg p-3 flex items-center justify-center"
              >
                <Shield className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 left-12 w-36 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-4 flex items-center justify-center"
              >
                <Users className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-4 right-4 w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg flex items-center justify-center"
              >
                <Star className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Innovation Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700"
        >
          {[
            { icon: Users, value: "25+", label: "Enterprise Clients", color: "text-indigo-600 dark:text-indigo-400" },
            { icon: Star, value: "4.8/5", label: "Innovation Score", color: "text-purple-600 dark:text-purple-400" },
            { icon: Shield, value: "99.5%", label: "Uptime SLA", color: "text-cyan-600 dark:text-cyan-400" },
            { icon: Zap, value: "24/7", label: "AI Support", color: "text-emerald-600 dark:text-emerald-400" },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${stat.color} bg-current/10`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        ref={productsRef}
        initial={{ opacity: 0, x: -100 }}
        animate={productsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="space-y-32"
      >
        {productsData.map((product, index) => (
          <motion.div
            key={product.title + '_' + index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`grid gap-16 lg:grid-cols-2 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}
          >
            <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 dark:from-electric-500 dark:to-electric-600 shadow-xl shadow-blue-500/25 dark:shadow-electric-500/25">
                    <span className="text-white font-bold text-2xl">{index + 1}</span>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{product.title}</h2>
                    <p className="text-blue-600 dark:text-electric-400 font-medium">Production-Ready Solution</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Deploy {product.title.toLowerCase()} solutions that drive business growth. 
                  Enterprise-grade architecture with proven performance, security, and scalability.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.slice(0, 6).map((feature, featureIndex) => (
                  <FeatureCard key={featureIndex} feature={feature} index={featureIndex} />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="outline"
                  className="group bg-white dark:bg-white/10 backdrop-blur-sm border-gray-200 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/20 hover:border-blue-500 dark:hover:border-electric-500/50 transition-all duration-300 shadow-lg dark:shadow-none"
                  onClick={() => {
                    setOpen(true)
                    setSelectedPackage(product.packages)
                  }}
                >
                  <span className="flex items-center gap-2">
                    View Packages
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <Button
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 dark:from-electric-600 dark:to-electric-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-electric-500 dark:hover:to-neon-500 text-white shadow-xl shadow-blue-500/25 dark:shadow-electric-500/25 hover:shadow-blue-500/40 dark:hover:shadow-electric-500/40 transition-all duration-300"
                  onClick={() => setIsCalendlyOpen(true)}
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Get Free Demo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>

            <motion.div
              className={`relative overflow-hidden rounded-3xl shadow-2xl ${
                index % 2 === 1 ? 'lg:col-start-1' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="aspect-video w-full bg-gradient-to-br from-blue-500/20 dark:from-electric-500/20 to-purple-500/20 dark:to-neon-500/20 backdrop-blur-sm border border-gray-200 dark:border-white/10">
                <img
                  src={product.image}
                  alt={`${product.title} preview`}
                  className="w-full h-full object-cover rounded-3xl"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent className="w-[95%] max-w-6xl max-h-[90vh] p-0 bg-white dark:bg-brand-950/95 backdrop-blur-2xl border border-gray-200 dark:border-white/10 [&>button]:hidden overflow-hidden">
          <DialogTitle className="sr-only">Select Your Investment Package</DialogTitle>
          <DialogDescription className="sr-only">Choose the solution that fits your business goals and budget</DialogDescription>
          <div className="p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Select Your Investment Package</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Choose the solution that fits your business goals and budget</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="rounded-full w-12 h-12 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 border border-gray-200 dark:border-white/10"
              >
                <X className="h-6 w-6 text-gray-600 dark:text-white" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {selectedPackage &&
                Object.values(selectedPackage).map((pkg: any, index) => (
                  <PackageCard 
                    key={pkg.name} 
                    pkg={pkg} 
                    isPopular={index === 1}
                    openCalendly={() => setIsCalendlyOpen(true)}
                  />
                ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isCalendlyOpen} onOpenChange={setIsCalendlyOpen}>
        <DialogContent className="max-w-5xl h-[85vh] p-0 bg-white dark:bg-gray-900 [&>button]:hidden overflow-hidden">
          <DialogTitle className="sr-only">Schedule a Meeting</DialogTitle>
          <DialogDescription className="sr-only">Schedule a consultation with our team to discuss your project requirements</DialogDescription>
          <div className="h-full w-full relative rounded-xl overflow-hidden">
            <div className="absolute right-4 top-4 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={handleClose}
                className="rounded-full bg-white hover:bg-gray-100 border-gray-200"
              >
                <X className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
            <InlineWidget
              url="https://calendly.com/envisionedgetech/30min"
              styles={{
                height: '100%',
                width: '100%'
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
} 