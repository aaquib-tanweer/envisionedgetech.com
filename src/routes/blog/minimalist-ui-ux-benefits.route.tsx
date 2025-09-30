import { createFileRoute } from "@tanstack/react-router";
import { SEOHead } from "../../components/SEOHead";
import { MinimalistUIUXBenefitsBlog } from "../../UI/pages/blog/MinimalistUIUXBenefitsBlog.tsx";

export const Route = createFileRoute("/blog/minimalist-ui-ux-benefits")({
  component: MinimalistUIUXBenefitsBlogRoute,
});

function MinimalistUIUXBenefitsBlogRoute() {
  return (
    <>
      <SEOHead 
        title="Why Minimalist UI/UX Design Outperforms Heavy Interfaces - Envision Edge Tech"
        description="Discover how minimalist design improves usability, performance, and accessibility while driving better user engagement and conversions."
        keywords="minimalist design, UI UX design, web performance, accessibility, user experience, clean design, Envision Edge Tech"
        ogImage="https://www.envisionedgetech.com/src/assets/images/minimalist-ui-ux.png"
        canonicalUrl="https://www.envisionedgetech.com/blog/minimalist-ui-ux-benefits"
        type="article"
        publishedTime="2025-09-22T00:00:00Z"
        modifiedTime="2025-09-22T00:00:00Z"
        author="EnvisionEdgeTech Team"
        section="UI/UX"
        tags={["UI/UX", "Performance", "Accessibility", "Design"]}
      />
      <MinimalistUIUXBenefitsBlog />
    </>
  );
}
