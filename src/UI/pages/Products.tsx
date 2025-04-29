import { Button } from '@/UI/shadcn/ui/button'
import { CheckCircle, ChevronRight, X, ArrowRight } from 'lucide-react'
import { productsData } from '@/constants/data/products/products'
import { useState, useRef } from 'react'
import { Dialog, DialogContent } from '../shadcn/ui/dialog'
import { motion, useInView } from 'framer-motion'
import { InlineWidget } from 'react-calendly'

export function Products() {
  const [open, setOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<unknown>()
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  const titleRef = useRef(null)
  const productsRef = useRef(null)
  const titleInView = useInView(titleRef, { once: false })
  const productsInView = useInView(productsRef, { once: false })

  return (
    <div className="container p-8 min-h-screen overflow-hidden landscape:md:max-lg:pt-80">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: -50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="pt-16 md:pt-20"
      >
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4"
          >
            Our Products
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
              Software Solutions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl text-foreground/80 max-w-2xl mx-auto"
          >
            Discover our suite of powerful software solutions designed to transform your business operations.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        ref={productsRef}
        initial={{ opacity: 0, x: -100 }}
        animate={productsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="max-w-6xl mx-auto space-y-24 mt-20"
      >
        {productsData.map((product, index) => (
          <motion.div
            key={product.title + '_' + index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`grid gap-12 sm:gap-16 md:grid-cols-2 items-center ${
              index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
            }`}
          >
            <div
              className={`space-y-6 ${
                index % 2 === 1 ? 'md:col-start-2' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-400/5 text-blue-500">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  {product.title}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {product.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start space-x-3 group"
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-green-500/10 text-green-500 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="text-base text-foreground/80 group-hover:text-foreground transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="secondary"
                  className="group w-full sm:w-auto"
                  onClick={() => {
                    setOpen(!open)
                    setSelectedPackage(product.packages)
                  }}
                >
                  <span className="flex items-center gap-2">
                    View Packages
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button
                  className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsCalendlyOpen(true)}
                >
                  <span className="flex items-center gap-2">
                    Request for Quotation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>
            <motion.div
              className={`relative overflow-hidden rounded-2xl shadow-xl ${
                index % 2 === 1 ? 'md:col-start-1' : ''
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-video w-full">
                <img
                  src={product.image}
                  alt={`${product.title} preview`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Dialog */}
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent className="w-[95%] max-w-4xl p-4 sm:p-6 max-h-[90vh] overflow-y-auto [&>button]:hidden">
          <div className="sticky top-0 flex justify-between items-center mb-6 bg-background/95 backdrop-blur-sm pb-4 border-b z-10">
            <h2 className="text-xl font-semibold">Package Details</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* @ts-ignore */}
            {selectedPackage &&
              Object.values(selectedPackage).map((pkg) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-xl p-6 space-y-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-xl font-bold text-blue-600">{pkg.name}</div>
                  <div className="text-2xl font-bold text-blue-500">
                    {/* {pkg.price} */}
                  </div>
                  <ul className="space-y-3">
                    {/* @ts-ignore */}
                    {pkg.features.map((feature) => (
                      <li
                        key={feature.slice(0, 5)}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-green-500/10 text-green-500">
                          <CheckCircle className="w-3 h-3" />
                        </div>
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isCalendlyOpen} onOpenChange={setIsCalendlyOpen}>
        <DialogContent className="max-w-4xl h-[80vh] p-4 [&>button]:hidden">
          <div className="h-full w-full relative">
            <div className="absolute right-2 top-2 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsCalendlyOpen(false)}
                className="rounded-full bg-white hover:bg-gray-100"
              >
                <X className="h-4 w-4 text-black" />
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
