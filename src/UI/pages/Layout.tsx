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
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
      <Analytics />
    </div>
  )
}
