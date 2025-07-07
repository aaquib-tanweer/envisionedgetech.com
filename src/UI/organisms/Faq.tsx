import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/UI/shadcn/ui/accordion'
import { faqs } from '@/constants/data/faqs'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HelpCircle, Sparkles } from 'lucide-react'

export function Faq() {
  const faqRef = useRef(null)
  const isInView = useInView(faqRef, { once: true, margin: "-100px" })

  return (
    <div className="relative pt-20 pb-8">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={faqRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full text-gray-900 dark:text-white shadow-lg dark:shadow-none">
              <HelpCircle className="w-4 h-4 text-purple-600 dark:text-electric-400" />
              <span className="text-sm font-medium">Got Questions?</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="block text-gray-900 dark:text-white">Frequently Asked</span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:from-electric-400 dark:via-electric-500 dark:to-neon-400 bg-clip-text text-transparent animate-gradient">
              Questions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Everything you need to know about our services and solutions. 
            Can't find what you're looking for? Contact our support team.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl dark:shadow-none p-6 sm:p-8 relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 dark:from-electric-500/10 to-blue-500/5 dark:to-neon-500/10 rounded-3xl" />

          <div className="relative z-10">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <AccordionItem
                      value={faq.question}
                      className="border-b border-gray-200 dark:border-white/10 last:border-b-0"
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-electric-400 transition-colors duration-300 py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-gray-600 dark:text-gray-300 leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                )
              })}
            </Accordion>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-electric-600 dark:to-electric-500 hover:from-purple-700 hover:to-blue-700 dark:hover:from-electric-500 dark:hover:to-neon-500 text-white rounded-xl font-semibold text-lg overflow-hidden shadow-xl shadow-purple-500/25 dark:shadow-electric-500/25"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              Get in Touch
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-electric-500 dark:to-neon-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
