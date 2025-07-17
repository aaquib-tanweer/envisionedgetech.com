import Projects from "@/UI/pages/Projects";
import { createFileRoute } from "@tanstack/react-router";
import { SEOHead } from "@/components/SEOHead";
import { seoConfig } from "@/constants/seo.config";
import { Layout } from "@/UI/pages/Layout";

export const Route = createFileRoute("/projects")({
  component: () => (
    <Layout>
      <SEOHead 
        title={seoConfig.projects.title}
        description={seoConfig.projects.description}
        keywords={seoConfig.projects.keywords}
        canonicalUrl="https://www.envisionedgetech.com/projects"
      />
      <Projects />
    </Layout>
  ),
});
