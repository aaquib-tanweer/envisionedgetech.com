import { createFileRoute } from "@tanstack/react-router";
import { SEOHead } from "../../components/SEOHead";
import { PsychologyOfColorsDesignBlog } from "../../UI/pages/blog/PsychologyOfColorsDesignBlog.tsx";

export const Route = createFileRoute("/blog/psychology-of-colors-design")({
  component: PsychologyOfColorsDesignBlogRoute,
});

function PsychologyOfColorsDesignBlogRoute() {
  return (
    <>
      <SEOHead 
        title="The Psychology of Colors in Web & App Design - Envision Edge Tech"
        description="How color choices influence user behavior, trust, and conversion rates in web and app design. Learn the strategic use of color psychology."
        keywords="color psychology, web design, app design, UI UX design, branding, color theory, Envision Edge Tech"
        ogImage="https://www.envisionedgetech.com/src/assets/images/color-psychology-design.png"
        canonicalUrl="https://www.envisionedgetech.com/blog/psychology-of-colors-design"
        type="article"
        publishedTime="2025-09-22T00:00:00Z"
        modifiedTime="2025-09-22T00:00:00Z"
        author="EnvisionEdgeTech Team"
        section="Design"
        tags={["Design", "UI/UX", "Branding", "Psychology"]}
      />
      <PsychologyOfColorsDesignBlog />
    </>
  );
}
