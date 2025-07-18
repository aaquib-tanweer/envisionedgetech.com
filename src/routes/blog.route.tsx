import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SEOHead } from "@/components/SEOHead";
import { seoConfig } from "@/constants/seo.config";
import { Layout } from "@/UI/pages/Layout";

export const Route = createFileRoute('/blog')({
  component: () => (
    <Layout>
      <SEOHead 
        title={seoConfig.blog.title}
        description={seoConfig.blog.description}
        keywords={seoConfig.blog.keywords}
        canonicalUrl="https://www.envisionedgetech.com/blog"
      />
      <Outlet />
    </Layout>
  ),
}) 