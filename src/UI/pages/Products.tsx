import { Button } from '@/UI/shadcn/ui/button'
import { CheckCircle, ChevronRight, X, ArrowRight, Sparkles, Zap, Shield, Star, Users } from 'lucide-react'
import { productsData } from '@/constants/data/products/products'
import { useState, useRef, useEffect } from 'react'
import { Dialog, DialogContent } from '../shadcn/ui/dialog'
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

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: -50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full text-gray-900 dark:text-white shadow-lg dark:shadow-none">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-electric-400" />
            <span className="text-sm font-medium">Ready-to-Deploy Solutions</span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="block text-gray-900 dark:text-white">Business-Ready</span>
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-electric-400 dark:via-electric-500 dark:to-neon-400 bg-clip-text text-transparent animate-gradient">
            Digital Products
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Deploy powerful, production-ready software solutions that scale with your business. 
          Our enterprise-grade products deliver measurable ROI from day one, with built-in security, analytics, and 24/7 support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          {[
            { icon: Users, value: "25+", label: "Enterprise Clients" },
            { icon: Star, value: "4.8/5", label: "Customer Rating" },
            { icon: Shield, value: "99.5%", label: "Uptime SLA" },
            { icon: Zap, value: "24/7", label: "Global Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 dark:from-electric-500/20 to-purple-500/20 dark:to-electric-600/20 border border-blue-500/30 dark:border-electric-500/30 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg dark:shadow-none">
                <stat.icon className="w-6 h-6 text-blue-600 dark:text-electric-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

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

              <div className="grid gap-3">
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
        <DialogContent className="w-[95%] max-w-6xl p-0 bg-white dark:bg-brand-950/95 backdrop-blur-2xl border border-gray-200 dark:border-white/10 [&>button]:hidden">
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Select Your Investment Package</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Choose the solution that fits your business goals and budget</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
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
        <DialogContent className="max-w-5xl h-[85vh] p-0 bg-white dark:bg-gray-900 [&>button]:hidden">
          <div className="h-full w-full relative rounded-xl overflow-hidden">
            <div className="absolute right-4 top-4 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsCalendlyOpen(false)}
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