import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Analytics } from "@vercel/analytics/react"
import { useEffect } from 'react'
import { useRouter } from '@tanstack/react-router'
import { ScrollToTop } from '@/components/ScrollToTop'

type Props = {
  children?: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const router = useRouter()

  useEffect(() => {
    // Scroll to top when route changes
    const unsubscribe = router.subscribe('onLoad', () => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    })

    return () => {
      unsubscribe()
    }
  }, [router])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Unified Background Layer */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient that spans entire viewport */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-brand-950 dark:via-brand-900 dark:to-electric-950" />
        
        {/* Aurora effect */}
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(99,102,241,0.05)_25%,transparent_50%,rgba(52,211,153,0.05)_75%,transparent_100%)] dark:bg-[linear-gradient(115deg,transparent_0%,rgba(99,102,241,0.1)_25%,transparent_50%,rgba(52,211,153,0.1)_75%,transparent_100%)] animate-aurora" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/8 dark:bg-electric-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-2/3 left-1/4 w-96 h-96 bg-purple-500/8 dark:bg-neon-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-green-500/6 dark:bg-electric-500/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }} />
        
        {/* Noise overlay for texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.01] dark:opacity-[0.02] pointer-events-none" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </div>
      
      <ScrollToTop />
      <Analytics />
    </div>
  )
}
