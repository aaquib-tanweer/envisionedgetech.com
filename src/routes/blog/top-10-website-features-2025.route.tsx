import { createFileRoute } from "@tanstack/react-router";
import { SEOHead } from "../../components/SEOHead";
import { Top10WebsiteFeatures2025Blog } from "../../UI/pages/blog/Top10WebsiteFeatures2025Blog.tsx";

export const Route = createFileRoute("/blog/top-10-website-features-2025")({
  component: Top10WebsiteFeatures2025BlogRoute,
});

function Top10WebsiteFeatures2025BlogRoute() {
  return (
    <>
      <SEOHead 
        title="Top 10 Must-Have Features for Modern Business Websites in 2025 - Envision Edge Tech"
        description="Essential capabilities every growth-focused website needs in 2025: mobile-first design, AI chatbots, security, accessibility, and more."
        keywords="website features 2025, modern website, business website, AI chatbots, mobile-first design, website security, Envision Edge Tech"
        ogImage="https://www.envisionedgetech.com/src/assets/images/website-features-2025.png"
        canonicalUrl="https://www.envisionedgetech.com/blog/top-10-website-features-2025"
        type="article"
        publishedTime="2025-09-22T00:00:00Z"
        modifiedTime="2025-09-22T00:00:00Z"
        author="EnvisionEdgeTech Team"
        section="Best Practices"
        tags={["Features", "Performance", "AI", "Security", "Accessibility"]}
      />
      <Top10WebsiteFeatures2025Blog />
    </>
  );
}
