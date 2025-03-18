import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '@/UI/pages/Layout'
import { SEOHead } from '@/components/SEOHead'

export const Route = createFileRoute('/404')({
  component: () => (
    <>
      <SEOHead
        title="404 - Page Not Found | Envision Edge Tech"
        description="The page you're looking for doesn't exist or has been moved."
        keywords="404, page not found, error"
      />
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to the homepage.
          </p>
          <a 
            href="/" 
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Return Home
          </a>
        </div>
      </Layout>
    </>
  ),
}) 