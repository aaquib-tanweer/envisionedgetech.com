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
        ogImage="/ET logo.jpg"
        canonicalUrl="/blog/woocommerce-vs-shopify"
      />
      <WooCommerceVsShopifyBlog />
    </>
  );
} 