import { createFileRoute } from "@tanstack/react-router";
import { SEOHead } from "../../components/SEOHead";
import { WooCommerceVsShopifyBlog } from "../../UI/pages/blog/WooCommerceVsShopifyBlog.tsx";

export const Route = createFileRoute("/blog/woocommerce-vs-shopify")({
  component: WooCommerceVsShopifyBlogRoute,
});

function WooCommerceVsShopifyBlogRoute() {
  return (
    <>
      <SEOHead 
        title="WooCommerce vs. Shopify: Which E-Commerce Platform is Better? - Envision Edge Tech"
        description="At Envision Edge Tech, we compare WooCommerce and Shopify to help you choose the right e-commerce platform for your business needs."
        keywords="WooCommerce vs Shopify, e-commerce platform comparison, online store, WordPress WooCommerce, Shopify store, Envision Edge Tech"
        ogImage="https://www.envisionedgetech.com/ET logo.jpg"
        canonicalUrl="https://www.envisionedgetech.com/blog/woocommerce-vs-shopify"
        type="article"
        publishedTime="2025-01-20T00:00:00Z"
        modifiedTime="2025-01-20T00:00:00Z"
        author="Envision Edge Tech Team"
        section="Platform Comparison"
        tags={["E-Commerce", "WooCommerce", "Shopify", "Platform Comparison", "Online Business"]}
      />
      <WooCommerceVsShopifyBlog />
    </>
  );
} 