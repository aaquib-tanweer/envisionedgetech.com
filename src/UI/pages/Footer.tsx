import { companyDataConstants } from '@/constants/data/companyData.constant'
import { MapPin, Mail, Phone, ArrowUpRight, Globe, Users, Code2, Github, Linkedin, Twitter } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { footerLinks } from '@/constants/navlinks'
import { motion } from 'framer-motion'
import { useTheme } from '@/components/theme-provider'

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-foreground">
      {title}
    </h2>
    {children}
  </div>
)

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="flex items-center gap-2 text-sm text-foreground/80 hover:text-blue-500 transition-colors group"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
  </a>
)

// Map social media names to their respective icons
const socialIcons = {
  Github,
  LinkedIn: Linkedin,
  Twitter
}

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()
  
  return (
    <footer className="relative bg-white dark:bg-gray-950 border-t border-blue-500/10" id="main-footer">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_bottom_right,_#1E40AF,_transparent_70%)]" />
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_bottom_left,_#1E3A8A,_transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <FooterSection title="About Us">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <img 
                  src={theme === 'dark' ? '/ET logo.jpg' : '/logo.png'}
                  alt="Logo" 
                  className="w-10 h-10 rounded-full" 
                />
                <p className="text-lg font-semibold text-foreground">Envision Edge Tech</p>
              </motion.div>
              <p className="text-base text-foreground/80">
                Where Vision Transforms into Technology
              </p>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="size-4 mt-1 text-blue-500" />
                <span className="text-foreground/80">
                  {companyDataConstants.address}, {companyDataConstants.country}
                </span>
              </div>
            </div>
          </FooterSection>

          {/* Contact Info */}
          <FooterSection title="Get in Touch">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-foreground/90">Email Us:</h3>
                {companyDataConstants.emails.map((email) => (
                  <div key={email} className="group">
                    <FooterLink href={`mailto:${email}`}>
                      <Mail className="size-5 text-blue-500" />
                      <span className="text-foreground/80 hover:text-foreground">{email}</span>
                    </FooterLink>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-foreground/90">Call Us:</h3>
                {companyDataConstants.phones.map((phone) => (
                  <div key={phone.number} className="group">
                    <FooterLink href={`tel:${phone.number}`}>
                      <Phone className="size-5 text-blue-500" />
                      <span className="text-foreground/80 hover:text-foreground">
                        {phone.country === 'IN' ? '🇮🇳 ' : '🇺🇸 '}
                        {phone.number}
                        {phone.number === '+91 99581 37836' ? ' (India Support)' : 
                         phone.number === '+91 99581 37830' ? ' (HR)' :
                         phone.number === '+1 210 898 8560' ? ' (US Support)' : ''}
                      </span>
                    </FooterLink>
                  </div>
                ))}
              </div>
            </div>
          </FooterSection>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.link}
                  className="text-sm text-foreground/80 hover:text-blue-500 transition-colors flex items-center gap-1 group"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
              ))}
            </div>
          </FooterSection>

          {/* Company Stats */}
          <FooterSection title="Company Stats">
            <div className="space-y-4">
              {[
                { icon: Globe, label: "Global Presence", value: "15+ Countries" },
                { icon: Users, label: "Team Members", value: "50+" },
                { icon: Code2, label: "Projects Delivered", value: "200+" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                    <stat.icon className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{stat.label}</p>
                    <p className="text-sm text-foreground/80">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FooterSection>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-blue-500/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/80">
              © {currentYear} Envision Edge Tech. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {companyDataConstants.socials.map((social) => {
                const IconComponent = socialIcons[social.name as keyof typeof socialIcons]
                return IconComponent ? (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors group"
                  >
                    <span className="sr-only">{social.name}</span>
                    <IconComponent className="size-5 group-hover:scale-110 transition-transform" />
                  </a>
                ) : null
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
