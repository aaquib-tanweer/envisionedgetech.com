import { SEOHead } from '@/components/SEOHead';
import { seoConfig } from '@/constants/seo.config';

export const TermsAndConditions = () => {
  return (
    <>
      <SEOHead {...seoConfig.termsAndConditions} />
      <main>
        <article className="max-w-4xl mx-auto px-4 py-12">
          <header>
            <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
          </header>
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              Welcome to Envision Edge Tech Pvt. Ltd. By accessing our website and services, you agree to these terms and conditions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing and using our services, you accept and agree to be bound by the terms and conditions of this agreement.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Permission is granted to temporarily access our services for personal, non-commercial use.</li>
              <li>This license does not include:
                <ul className="list-disc pl-6 mt-2">
                  <li>Modifying or copying our materials</li>
                  <li>Using materials for commercial purposes</li>
                  <li>Attempting to reverse engineer any software</li>
                  <li>Removing any copyright or proprietary notations</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
            <p className="mb-6">
              Our services are provided "as is". We make no warranties, expressed or implied, and hereby disclaim all warranties including, but not limited to, implied warranties or merchantability and fitness for a particular purpose.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitations</h2>
            <p className="mb-6">
              We shall not be held liable for any damages arising from the use or inability to use our services, even if we have been notified of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Revisions and Updates</h2>
            <p className="mb-6">
              We may update these terms and conditions at any time. By using our services, you agree to be bound by the current version of these terms and conditions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Governing Law</h2>
            <p className="mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about these Terms and Conditions, please contact us at{' '}
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