import { SEOHead } from '@/components/SEOHead';
import { Layout } from '@/UI/pages/Layout';
import { seoConfig } from '@/constants/seo.config';

export const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead {...seoConfig.privacyPolicy} />
      <Layout>
        <main>
          <article className="max-w-4xl mx-auto px-4 py-12">
            <header>
              <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            </header>
            <div className="prose prose-blue dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                At Envision Edge Tech Pvt. Ltd., we take your privacy seriously. This privacy policy describes how we collect, use, and protect your personal information.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide and maintain our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you technical notices and updates</li>
                <li>Improve our services and develop new features</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Information Security</h2>
              <p className="mb-6">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
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
      </Layout>
    </>
  );
};