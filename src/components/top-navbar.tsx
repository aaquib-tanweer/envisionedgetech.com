import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { Button } from '@/UI/shadcn/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/UI/shadcn/ui/sheet'
import { navLinks } from '@/constants/navlinks'
import { ModeToggle } from './mode-toggle'
import { motion } from 'framer-motion'
import { useTheme } from '@/components/theme-provider'

export const TopNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setIsScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl bg-background/70' : 'bg-transparent'
      }`}
    >
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="flex-shrink-0 flex gap-2 items-center group"
            >
              <div className="relative">
                <img 
                  src={theme === 'dark' ? "/ET logo.jpg" : "/logo.png"}
                  alt="Envision Edge Tech Logo"
                  className="size-12 transition-all duration-300 group-hover:scale-110 rounded-full"
                />
                <div className="absolute inset-0 bg-blue-500/20 rounded-full filter blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-2xl font-bold text-foreground dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-400">
                Envision Edge Tech
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <motion.div 
              className="ml-10 flex items-center space-x-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navLinks.map((link) => (
                <Link
                  to={link.link}
                  key={link.name}
                  className="relative px-4 py-2 text-sm font-medium transition-colors group"
                >
                  <span className="relative z-10 text-foreground/80 group-hover:text-foreground transition-colors">
                    {link.name}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-400/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
              <div className="ml-2 border-l border-border/50 pl-2">
                <ModeToggle />
              </div>
            </motion.div>
          </div>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild title="open sheet">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative group"
                  aria-label="Toggle mobile menu"
                >
                  <Menu className="h-5 w-5 transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-blue-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px] backdrop-blur-xl bg-background/95">
                <div className="flex flex-col space-y-4 mt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.link}
                      className="relative px-3 py-2 text-sm font-medium transition-colors group rounded-md"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="relative z-10 group-hover:text-blue-500 transition-colors">
                        {link.name}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-400/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
                <div className="absolute bottom-4 left-4">
                  <ModeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
