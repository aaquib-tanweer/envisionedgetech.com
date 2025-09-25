import { createFileRoute } from "@tanstack/react-router";
import { SEOHead } from "../../components/SEOHead";
import { WebDevelopmentTrends2025Blog } from "../../UI/pages/blog/WebDevelopmentTrends2025Blog.tsx";

export const Route = createFileRoute("/blog/web-development-trends-2025")({
  component: WebDevelopmentTrends2025BlogRoute,
});

function WebDevelopmentTrends2025BlogRoute() {
  return (
    <>
      <SEOHead 
        title="🚀 Top 10 Web Development Trends for Businesses in 2025 - Envision Edge Tech"
        description="Future-proof your website with cutting-edge technology. From AI automation to AR experiences, discover the trends that will shape the digital landscape in 2025."
        keywords="web development trends 2025, AI automation, AR VR web development, Web3 blockchain, PWA development, future web technologies, Envision Edge Tech"
        ogImage="https://www.envisionedgetech.com/src/assets/images/Webdevelopmenttrends.jpeg"
        canonicalUrl="https://www.envisionedgetech.com/blog/web-development-trends-2025"
        type="article"
        publishedTime="2025-01-25T00:00:00Z"
        modifiedTime="2025-01-25T00:00:00Z"
        author="Envision Edge Tech Team"
        section="Tech Trends"
        tags={["Web Development", "AI", "AR/VR", "Web3", "Technology Trends", "Future Tech"]}
      />
      <WebDevelopmentTrends2025Blog />
    </>
  );
} 