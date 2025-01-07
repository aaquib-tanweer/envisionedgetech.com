import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { Button } from '@/UI/shadcn/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/UI/shadcn/ui/sheet'
import { navLinks } from '@/constants/navlinks'
import { ModeToggle } from './mode-toggle'

export const TopNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`fixed w-full z-40 transition-transform duration-300 bg-background ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_top_right,_#1E40AF,_transparent_50%)]"></div>
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_top_left,_#1E3A8A,_transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex gap-2 items-center justify-center"
            >
              <img src={'/logo.png'} className="size-12" />
              <span className="text-2xl font-bold text-black dark:text-white">
                Envision Edge Tech
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  to={link.link}
                  key={link.name}
                  className="text-secondary-foreground hover:bg-accent/80 hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <ModeToggle />
            </div>
          </div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild title="open sheet">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Toggle mobile menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <div className="flex flex-col space-y-4 mt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.link}
                      className="text-secondary-foreground hover:bg-accent hover:text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="p-2">
                  <ModeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
