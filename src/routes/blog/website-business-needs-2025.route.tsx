import { createFileRoute } from "@tanstack/react-router";
import { SEOHead } from "../../components/SEOHead";
import { WebsiteBusinessNeedsBlog } from "../../UI/pages/blog/WebsiteBusinessNeedsBlog.tsx";

export const Route = createFileRoute("/blog/website-business-needs-2025")({
  component: WebsiteBusinessNeedsBlogRoute,
});

function WebsiteBusinessNeedsBlogRoute() {
  return (
    <>
      <SEOHead 
        title="Why Your Business Needs a Website in 2025 - Envision Edge Tech"
        description="Google Forms and Instagram Pages aren't enough anymore. Learn why your business needs a professional website in 2025 and what features it should have."
        keywords="business website 2025, professional website design, digital presence, website development, Envision Edge Tech"
        ogImage="https://www.envisionedgetech.com/src/assets/images/whyyourbusinessneedawebsite.jpeg"
        canonicalUrl="https://www.envisionedgetech.com/blog/website-business-needs-2025"
        type="article"
        publishedTime="2025-01-15T00:00:00Z"
        modifiedTime="2025-01-15T00:00:00Z"
        author="Envision Edge Tech Team"
        section="Business Insights"
        tags={["E-Commerce", "Web Development", "Business Growth", "Digital Transformation"]}
      />
      <WebsiteBusinessNeedsBlog />
    </>
  );
} 