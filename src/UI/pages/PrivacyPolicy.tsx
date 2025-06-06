import { SEOHead } from '@/components/SEOHead';
import { seoConfig } from '@/constants/seo.config';

export const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead {...seoConfig.privacyPolicy} />
      <main>
        <article className="max-w-4xl mx-auto px-4 py-12">
          <header>
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          </header>
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              At Envision Edge Tech Pvt. Ltd., we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-6">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Company information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide and maintain our services</li>
              <li>Communicate with you about our services</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
            <p className="mb-6">
              We do not sell or share your personal information with third parties except as described in this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p className="mb-6">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
            <p className="mb-6">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:info@envisionedgetech.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                info@envisionedgetech.com
              </a>
            </p>

            <p className="text-sm text-foreground/70 mt-8">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>
        </article>
      </main>
    </>
  );
};