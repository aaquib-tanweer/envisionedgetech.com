import { createFileRoute } from "@tanstack/react-router";
import { SEOHead } from "../../components/SEOHead";
import { AITransformingWebsitesBlog } from "../../UI/pages/blog/AITransformingWebsitesBlog.tsx";

export const Route = createFileRoute("/blog/ai-transforming-websites")({
  component: AITransformingWebsitesBlogRoute,
});

function AITransformingWebsitesBlogRoute() {
  return (
    <>
      <SEOHead 
        title="How AI is Transforming the Way Websites Are Built - Envision Edge Tech"
        description="AI is reshaping web development—from design and content to personalization and maintenance. Learn how AI accelerates delivery and improves user experiences."
        keywords="AI websites, AI web development, personalized websites, AI testing, AI maintenance, Envision Edge Tech"
        ogImage="https://www.envisionedgetech.com/src/assets/images/AI.png"
        canonicalUrl="https://www.envisionedgetech.com/blog/ai-transforming-websites"
        type="article"
        publishedTime="2025-09-22T00:00:00Z"
        modifiedTime="2025-09-22T00:00:00Z"
        author="EnvisionEdgeTech Team"
        section="AI & Automation"
        tags={["AI", "Web Development", "Personalization", "Automation", "Testing"]}
      />
      <AITransformingWebsitesBlog />
    </>
  );
}



