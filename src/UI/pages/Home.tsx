import TopProduct from '../organisms/TopProduct'
import { Hero } from './Hero'
import { ClientsTestimonial } from './ClientsTestimonial'
import { IntegratedFooterSection } from './IntegratedFooterSection'

export const Home = () => {
  return (
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
  )
}
