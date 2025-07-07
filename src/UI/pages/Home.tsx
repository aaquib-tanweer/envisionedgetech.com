import TopProduct from '../organisms/TopProduct'
import { Hero } from './Hero'
import { ClientsTestimonial } from './ClientsTestimonial'
import { IntegratedFooterSection } from './IntegratedFooterSection'
import { SEOHead } from '@/components/SEOHead'

export const Home = () => {
  return (
    <>
      <SEOHead
        title="Envision Edge Tech - Transform Your Business with Cutting-Edge Technology"
        description="Empower your enterprise with custom software solutions that drive growth, enhance efficiency, and deliver exceptional results."
        keywords="software development, digital transformation, AI solutions, custom software, web development"
        canonicalUrl="https://envisionedgetech.com/"
      />
      
      <main>
        <article>
          <header>
            <Hero />
          </header>
          <section>
            <TopProduct />
          </section>
          <section>
            <ClientsTestimonial />
          </section>
          <section>
            <IntegratedFooterSection />
          </section>
        </article>
      </main>
    </>
  )
}
