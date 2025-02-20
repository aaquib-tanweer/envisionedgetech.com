import { Footer } from './Footer'
import { Navbar } from './Navbar'

type Props = {
  children?: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  console.log('Layout rendering');
  return (
    <div className="min-h-screen" id="main-layout">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
