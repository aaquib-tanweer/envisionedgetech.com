import { About } from "@/UI/pages/About";
import { createFileRoute } from "@tanstack/react-router";
import { SEOHead } from "@/components/SEOHead";
import { seoConfig } from "@/constants/seo.config";
import { Layout } from "@/UI/pages/Layout";

export const Route = createFileRoute("/about")({
  component: () => (
    <Layout>
      <SEOHead 
        title={seoConfig.about.title}
        description={seoConfig.about.description}
        keywords={seoConfig.about.keywords}
        canonicalUrl="https://www.envisionedgetech.com/about"
      />
      <About />
    </Layout>
  ),
});
