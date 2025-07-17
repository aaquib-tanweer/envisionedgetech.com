import { IntegratedFooterSection } from '@/UI/pages/IntegratedFooterSection'
import { Layout } from '@/UI/pages/Layout'
import { Services } from '@/UI/pages/Services'
import { createFileRoute } from '@tanstack/react-router'
import { SEOHead } from "@/components/SEOHead";
import { seoConfig } from "@/constants/seo.config";

export const Route = createFileRoute('/services')({
  component: () => (
    <>
      <SEOHead 
        title={seoConfig.services.title}
        description={seoConfig.services.description}
        keywords={seoConfig.services.keywords}
        canonicalUrl="https://www.envisionedgetech.com/services"
      />
      <Layout>
        <Services />
        <IntegratedFooterSection />
      </Layout>
    </>
  ),
})
