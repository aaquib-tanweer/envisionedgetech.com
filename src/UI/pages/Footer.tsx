import { companyDataConstants } from '@/constants/data/companyData.constant'
import { MapPin, Mail, Phone, ArrowUpRight, Globe, Users, Code2, Github, Linkedin, Twitter, Instagram, Facebook, Sparkles, CheckCircle2 } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { footerLinks } from '@/constants/navlinks'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import logoImage from '@/assets/images/ET logo.jpg'

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
      {title}
    </h2>
    {children}
  </div>
)

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-electric-400 transition-all duration-300 group"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
  </a>
)

// Map social media names to their respective icons
const socialIcons = {
  Github,
  LinkedIn: Linkedin,
  Twitter,
  Instagram,
  Facebook
}

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })
  
  return (
    <footer 
      ref={footerRef}
      className="relative pt-20 pb-8" 
      id="main-footer"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FooterSection title="About Us">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg shadow-blue-500/25 dark:shadow-electric-500/25 bg-white dark:bg-gray-800 p-2">
                    <img 
                      src={logoImage} 
                      alt="Envision Edge Tech Logo" 
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">Envision Edge Tech</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Enterprise Solutions</p>
                  </div>
                </motion.div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Transforming businesses through innovative technology solutions. 
                  We build enterprise-grade software that scales with your vision.
                </p>
                
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="size-4 mt-1 text-blue-600 dark:text-electric-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {companyDataConstants.address}, {companyDataConstants.country}
                  </span>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-green-600 dark:text-neon-400" />
                    <span className="text-xs text-gray-600 dark:text-gray-300">SOC 2 Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full">
                    <Sparkles className="w-3 h-3 text-blue-600 dark:text-electric-400" />
                    <span className="text-xs text-gray-600 dark:text-gray-300">Enterprise Ready</span>
                  </div>
                </div>
              </div>
            </FooterSection>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FooterSection title="Get in Touch">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Email</h3>
                  {companyDataConstants.emails.map((email) => (
                    <div key={email} className="group">
                      <FooterLink href={`mailto:${email}`}>
                        <div className="w-8 h-8 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-lg flex items-center justify-center">
                          <Mail className="size-4 text-blue-600 dark:text-electric-400" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">{email}</span>
                      </FooterLink>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider">Phone</h3>
                  {companyDataConstants.phones.map((phone) => (
                    <div key={phone.number} className="group">
                      <FooterLink href={`tel:${phone.number}`}>
                        <div className="w-8 h-8 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-lg flex items-center justify-center">
                          <Phone className="size-4 text-green-600 dark:text-neon-400" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                          {phone.country === 'IN' ? '🇮🇳 ' : '🇺🇸 '}
                          {phone.number}
                        </span>
                      </FooterLink>
                    </div>
                  ))}
                </div>
              </div>
            </FooterSection>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FooterSection title="Quick Links">
              <div className="grid gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.link}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-electric-400 transition-all duration-300 flex items-center gap-2 group py-2"
                  >
                    <div className="w-6 h-6 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-md flex items-center justify-center group-hover:border-blue-500/30 dark:group-hover:border-electric-500/30 transition-all duration-300">
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-blue-600 dark:text-electric-400" />
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                ))}
              </div>
            </FooterSection>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FooterSection title="Company Stats">
              <div className="space-y-6">
                {[
                  { icon: Globe, label: "Global Presence", value: "6+ Countries", color: "from-blue-500 to-purple-600 dark:from-electric-500 dark:to-electric-600" },
                  { icon: Users, label: "Team Members", value: "12+", color: "from-green-500 to-emerald-600 dark:from-neon-500 dark:to-neon-600" },
                  { icon: Code2, label: "Projects Delivered", value: "35+", color: "from-purple-500 to-indigo-600 dark:from-primary-500 dark:to-primary-600" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 p-4 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-xl hover:bg-white dark:hover:bg-white/15 hover:border-gray-300 dark:hover:border-white/30 transition-all duration-300 shadow-sm dark:shadow-none">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                        <stat.icon className="size-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-electric-400 transition-colors">{stat.value}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FooterSection>
          </motion.div>
        </div>



        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="py-8 border-t border-gray-200 dark:border-white/10"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <p>© {currentYear} Envision Edge Tech. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link to="/privacy-policy" className="hover:text-blue-600 dark:hover:text-electric-400 transition-colors">Privacy Policy</Link>
                <span>•</span>
                <Link to="/terms-and-conditions" className="hover:text-blue-600 dark:hover:text-electric-400 transition-colors">Terms of Service</Link>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {companyDataConstants.socials.map((social) => {
                const IconComponent = socialIcons[social.name as keyof typeof socialIcons]
                return IconComponent ? (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-xl hover:bg-white dark:hover:bg-white/15 hover:border-gray-300 dark:hover:border-white/30 transition-all duration-300 shadow-sm dark:shadow-none"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="sr-only">{social.name}</span>
                    <IconComponent className="size-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-electric-400 transition-colors duration-300" />
                  </motion.a>
                ) : null
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
