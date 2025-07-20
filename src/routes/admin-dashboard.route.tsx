import { createFileRoute } from '@tanstack/react-router'
import { AdminDashboard } from '@/UI/pages/admin/AdminDashboard'
import { Helmet } from 'react-helmet-async'

export const Route = createFileRoute('/admin-dashboard')({
  component: () => (
    <>
      <Helmet>
        <title>Admin Dashboard - Envision Edge Tech</title>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="slurp" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="msnbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="teoma" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="aolbuild" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="description" content="Admin dashboard - not for public access" />
        <meta name="keywords" content="admin, dashboard, private" />
        <meta property="og:title" content="Admin Dashboard - Envision Edge Tech" />
        <meta property="og:description" content="Admin dashboard - not for public access" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.envisionedgetech.com/admin-dashboard" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Admin Dashboard - Envision Edge Tech" />
        <meta name="twitter:description" content="Admin dashboard - not for public access" />
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
      </Helmet>
      <AdminDashboard />
    </>
  ),
}) 