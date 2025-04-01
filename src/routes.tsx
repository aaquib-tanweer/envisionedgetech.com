import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router'
import { Home } from '@/UI/pages/Home'
import { About } from '@/UI/pages/About'
import { Products } from '@/UI/pages/Products'
import { Services } from '@/UI/pages/Services'
import { Careers } from '@/UI/pages/Careers'
import { PrivacyPolicy } from '@/UI/pages/PrivacyPolicy'
import { TermsAndConditions } from '@/UI/pages/TermsAndConditions'
import { Layout } from '@/UI/pages/Layout'

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  )
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: Products,
})

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: Services,
})

const careersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/careers',
  component: Careers,
})

const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: PrivacyPolicy,
})

const termsAndConditionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/terms-and-conditions',
  component: TermsAndConditions,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  productsRoute,
  servicesRoute,
  careersRoute,
  privacyPolicyRoute,
  termsAndConditionsRoute,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
} 