import { useState, useEffect } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/UI/shadcn/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/UI/shadcn/ui/sheet'
import { navLinks } from '@/constants/navlinks'
import { ModeToggle } from './mode-toggle'
import { motion, AnimatePresence } from 'framer-motion'
import logoImage from '@/assets/images/ET logo.jpg'

// Declare the Calendly type
declare global {
  interface Window {
    Calendly?: any;
  }
}

export const TopNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    // Add Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    }
  }, [lastScrollY])

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/envisionedgetech/30min",
      });
    }
  };

  const isActiveLink = (linkPath: string) => {
    if (linkPath === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(linkPath)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-xl bg-white/95 dark:bg-gray-950/95 border-b border-gray-300/60 dark:border-gray-800/60 shadow-xl shadow-black/10 dark:shadow-black/30' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <motion.div 
              className="flex items-center z-10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                to="/"
                className="flex-shrink-0 flex gap-3 items-center group"
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 p-1">
                    <img 
                      src={logoImage} 
                      alt="Envision Edge Tech Logo" 
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>
                </div>
                <div className="hidden sm:block">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    Envision Edge Tech
                  </span>
                  <div className="text-xs text-gray-600 dark:text-gray-400 -mt-1">Enterprise Solutions</div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <motion.div 
                className="flex items-center space-x-1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.link}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                      isActiveLink(link.link)
                        ? 'text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 shadow-sm'
                        : 'text-gray-800 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </motion.div>

              {/* CTA Section */}
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <ModeToggle />
                
                <Button
                  onClick={openCalendly}
                  className="group relative px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-electric-600 dark:to-electric-500 dark:hover:from-electric-500 dark:hover:to-neon-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <ModeToggle />
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="relative w-10 h-10 border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-900"
                    aria-label="Toggle mobile menu"
                  >
                    <AnimatePresence mode="wait">
                      {isMobileMenuOpen ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <X className="h-4 w-4 text-gray-800 dark:text-gray-200" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Menu className="h-4 w-4 text-gray-800 dark:text-gray-200" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>
                </SheetTrigger>
                
                <SheetContent 
                  side="right" 
                  className="w-[280px] bg-white dark:bg-gray-950 border-l border-gray-300 dark:border-gray-800"
                >
                  <div className="flex flex-col h-full">
                    {/* Mobile Logo */}
                    <div className="flex items-center gap-3 mb-8 mt-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white dark:bg-gray-800 p-1">
                        <img 
                          src={logoImage} 
                          alt="Envision Edge Tech Logo" 
                          className="w-full h-full object-contain rounded-sm"
                        />
                      </div>
                      <div>
                        <div className="text-gray-900 dark:text-white font-semibold">Envision Edge Tech</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Enterprise Solutions</div>
                      </div>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col space-y-2 flex-1">
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            to={link.link}
                            className={`block px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg ${
                              isActiveLink(link.link)
                                ? 'text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 shadow-sm'
                                : 'text-gray-800 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-800/50'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* Mobile CTA */}
                    <div className="border-t border-gray-300 dark:border-gray-800 pt-6">
                      <Button
                        onClick={() => {
                          openCalendly();
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-electric-600 dark:to-electric-500 dark:hover:from-electric-500 dark:hover:to-neon-500 text-white font-medium py-3 rounded-lg shadow-lg"
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Get Started
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Add some top padding to body to account for fixed navbar */}
      <div className="h-16" />
    </>
  )
}
