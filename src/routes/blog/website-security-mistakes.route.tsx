import { createFileRoute } from "@tanstack/react-router";
import { SEOHead } from "../../components/SEOHead";
import { WebsiteSecurityMistakesBlog } from "../../UI/pages/blog/WebsiteSecurityMistakesBlog.tsx";

export const Route = createFileRoute("/blog/website-security-mistakes")({
  component: WebsiteSecurityMistakesBlogRoute,
});

function WebsiteSecurityMistakesBlogRoute() {
  return (
    <>
      <SEOHead 
        title="5 Common Website Security Mistakes Businesses Make - Envision Edge Tech"
        description="Avoid these common website security pitfalls that leave businesses vulnerable to attacks. Learn how to protect your digital presence."
        keywords="website security, cybersecurity, SSL HTTPS, website backups, security audits, Envision Edge Tech"
        ogImage="https://www.envisionedgetech.com/src/assets/images/website-security-mistakes.png"
        canonicalUrl="https://www.envisionedgetech.com/blog/website-security-mistakes"
        type="article"
        publishedTime="2025-09-22T00:00:00Z"
        modifiedTime="2025-09-22T00:00:00Z"
        author="EnvisionEdgeTech Team"
        section="Security"
        tags={["Security", "Best Practices", "HTTPS", "Backups"]}
      />
      <WebsiteSecurityMistakesBlog />
    </>
  );
}
