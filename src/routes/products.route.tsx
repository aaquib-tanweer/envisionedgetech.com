import { Products } from "@/UI/pages/Products";
import { createFileRoute } from "@tanstack/react-router";
import { SEOHead } from "@/components/SEOHead";
import { seoConfig } from "@/constants/seo.config";
import { Layout } from "@/UI/pages/Layout";

export const Route = createFileRoute("/products")({
  component: () => (
    <Layout>
      <SEOHead 
        title={seoConfig.products.title}
        description={seoConfig.products.description}
        keywords={seoConfig.products.keywords}
        canonicalUrl="https://www.envisionedgetech.com/products"
      />
      <Products />
    </Layout>
  ),
});
