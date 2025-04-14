import { Button } from '@/UI/shadcn/ui/button'
import { CheckCircle, ChevronRight, X } from 'lucide-react'
import { productsData } from '@/constants/data/products/products'
import { useState, useRef } from 'react'
import { Dialog, DialogContent } from '../shadcn/ui/dialog'
import { motion, useInView } from 'framer-motion'
import { PopupModal } from 'react-calendly'

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
        className="pt-16 md:pt-20" // Added padding-top to prevent navbar overlap
      >
        <center>
          <h1 className="text-4xl sm:text-2xl md:text-3xl font-bold bg-blue-500 text-black mb-10 rounded-md cursor-pointer md:w-1/3 w-3/4">
            List of Envision Edge Tech Softwares
          </h1>
        </center>
      </motion.div>

      <motion.div
        ref={productsRef}
        initial={{ opacity: 0, x: -100 }}
        animate={productsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-24 mt-10"
      >
        {productsData.map((product, index) => (
          <div
            key={product.title + '_' + index}
            className={`grid gap-6 sm:gap-8 md:grid-cols-2 ${
              index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
            }`}
          >
            <div
              className={`space-y-4 sm:space-y-6 ${
                index % 2 === 1 ? 'md:col-start-2' : ''
              }`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {index + 1} <span className="text-blue-500">.</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {product.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {product.features.map((feature, featureIndex) => (
                  <>
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-2 sm:space-x-3"
                    >
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1 w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  </>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  variant="secondary"
                  className="group w-full sm:w-auto"
                  onClick={() => {
                    setOpen(!open)
                    setSelectedPackage(product.packages)
                  }}
                >
                  View Packages
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  className="group w-full sm:w-auto bg-blue-500 hover:bg-blue-600"
                  onClick={() => setIsCalendlyOpen(true)}
                >
                  Request for Quotation
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <PopupModal
                  url="https://calendly.com/envisionedgetech/30min"
                  open={isCalendlyOpen}
                  onModalClose={() => setIsCalendlyOpen(false)}
                  rootElement={document.getElementById('root')!}
                />
              </div>
            </div>
            <div
              className={`bg-blue-500 max-w-[420px] rounded-lg overflow-hidden ${
                index % 2 === 1 ? 'md:col-start-1' : ''
              }`}
            >
              <img
                src={product.image}
                alt={`${product.title} preview`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Dialog */}
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent className="w-[95%] max-w-4xl p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 flex justify-between items-center mb-4 bg-background/95 backdrop-blur-sm pb-2 border-b">
            <h2 className="text-lg font-semibold">Package Details</h2>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* @ts-ignore */}
            {selectedPackage &&
              Object.values(selectedPackage).map((pkg) => (
                <div
                  key={pkg.name}
                  className="border rounded-lg p-4 sm:p-6 space-y-4 hover:shadow-lg transition-shadow"
                >
                  <div className="text-xl font-bold text-blue-600">{pkg.name}</div>
                  <div className="text-2xl font-bold text-blue-500">
                    {/* {pkg.price} */}
                  </div>
                  <ul className="space-y-2">
                    {/* @ts-ignore */}
                    {pkg.features.map((feature) => (
                      <li
                        key={feature.slice(0, 5)}
                        className="flex items-start space-x-2"
                      >
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1 w-4 h-4" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
