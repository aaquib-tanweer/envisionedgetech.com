import { Faq } from '../organisms/Faq'
import TopProduct from '../organisms/TopProduct'
import { Contact } from './Contact'
import { Hero } from './Hero'
import { Layout } from './Layout'
import { ClientsTestimonial } from './ClientsTestimonial'
import { TechStack } from './TechStack'
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
      <Layout>
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
              <Faq />
            </section>
            <section>
              <Contact />
            </section>
            <section>
              <TechStack />
            </section>
          </article>
        </main>
      </Layout>
    </>
  )
}
