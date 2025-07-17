import { Careers } from "@/UI/pages/Careers";
import { createFileRoute } from "@tanstack/react-router";
import { SEOHead } from "@/components/SEOHead";
import { seoConfig } from "@/constants/seo.config";
import { Layout } from "@/UI/pages/Layout";

export const Route = createFileRoute("/careers")({
  component: () => (
    <Layout>
      <SEOHead 
        title={seoConfig.careers.title}
        description={seoConfig.careers.description}
        keywords={seoConfig.careers.keywords}
        canonicalUrl="https://www.envisionedgetech.com/careers"
      />
      <Careers />
    </Layout>
  ),
}); 