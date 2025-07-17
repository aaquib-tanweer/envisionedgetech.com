import { PrivacyPolicy } from "@/UI/pages/PrivacyPolicy";
import { createFileRoute } from "@tanstack/react-router";
import { SEOHead } from "@/components/SEOHead";
import { seoConfig } from "@/constants/seo.config";
import { Layout } from "@/UI/pages/Layout";

export const Route = createFileRoute("/privacy-policy")({
  component: () => (
    <Layout>
      <SEOHead 
        title={seoConfig.privacyPolicy.title}
        description={seoConfig.privacyPolicy.description}
        keywords={seoConfig.privacyPolicy.keywords}
        canonicalUrl="https://www.envisionedgetech.com/privacy-policy"
      />
      <PrivacyPolicy />
    </Layout>
  ),
}); 