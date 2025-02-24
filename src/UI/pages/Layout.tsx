import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Analytics } from "@vercel/analytics/react"
type Props = {
  children?: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
      <Analytics />
    </div>
  )
}
