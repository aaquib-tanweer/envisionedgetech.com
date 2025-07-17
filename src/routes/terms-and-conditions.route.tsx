import { TermsAndConditions } from "@/UI/pages/TermsAndConditions";
import { createFileRoute } from "@tanstack/react-router";
import { SEOHead } from "@/components/SEOHead";
import { seoConfig } from "@/constants/seo.config";
import { Layout } from "@/UI/pages/Layout";

export const Route = createFileRoute("/terms-and-conditions")({
  component: () => (
    <Layout>
      <SEOHead 
        title={seoConfig.termsAndConditions.title}
        description={seoConfig.termsAndConditions.description}
        keywords={seoConfig.termsAndConditions.keywords}
        canonicalUrl="https://www.envisionedgetech.com/terms-and-conditions"
      />
      <TermsAndConditions />
    </Layout>
  ),
}); 