import { Faq } from '../organisms/Faq'
import TopProduct from '../organisms/TopProduct'
import { Contact } from './Contact'
import { Hero } from './Hero'
import { Layout } from './Layout'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ClientsTestimonial } from './ClientsTestimonial'
import { TechStack } from './TechStack'
export const Home = () => {
  const productRef = useRef(null)
  const contactRef = useRef(null) 

  const productInView = useInView(productRef, { once: false })
  const contactInView = useInView(contactRef, { once: false })

  return (
    <Layout>
      <div className="container p-8 min-h-screen overflow-hidden landscape:md:max-lg:pt-80">
        <Hero />
        
        {/* Top 1 Product showcase section */}
        <motion.div
          ref={productRef}
          initial={{ opacity: 0, x: -100 }}
          animate={productInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <TopProduct />
        </motion.div>

        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={contactInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <Contact />
          
        </motion.div>

        <ClientsTestimonial />
        <Faq />
        <TechStack />
      </div>
    </Layout>
  )
}
