import { Home } from "@/UI/pages/Home";
import { createFileRoute } from "@tanstack/react-router";
import { SEOHead } from "@/components/SEOHead";
import { seoConfig } from "@/constants/seo.config";
import { Layout } from "@/UI/pages/Layout";

export const Route = createFileRoute("/")({
  component: () => (
    <Layout>
      <SEOHead 
        title={seoConfig.home.title}
        description={seoConfig.home.description}
        keywords={seoConfig.home.keywords}
        canonicalUrl="https://www.envisionedgetech.com/"
      />
      <Home />
    </Layout>
  ),
});
