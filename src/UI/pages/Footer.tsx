import { companyDataConstants } from '@/constants/data/companyData.constant'
import { MapPin, Mail, Phone } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { footerLinks } from '@/constants/navlinks'

export const Footer = () => {
  return (
    <footer className="bg-secondary relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_bottom_right,_#1E40AF,_transparent_50%)]"></div>
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_bottom_left,_#1E3A8A,_transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Envision Edge Tech Pvt. Ltd.
            </h2>
            <p className="text-foreground/80 italic">
              Where Vision Transforms into Technology.
            </p>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="size-5 mt-1 text-blue-600 dark:text-blue-400" />
              <span className="text-foreground/90">
                {companyDataConstants.address}, {companyDataConstants.country}
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 uppercase">
              Contact Us
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <Mail className="size-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors" />
                <a href="mailto:info@envisionedgetech.com" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  info@envisionedgetech.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="size-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors" />
                <a href="mailto:support@envisionedgetech.com" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  support@envisionedgetech.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="size-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors" />
                <a href="tel:+91987654321" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="size-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors" />
                <a href="tel:+91123456789" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +91 12345 67890
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 uppercase">
              Follow Us
            </h2>
            <div className="flex flex-col gap-2">
              {companyDataConstants.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 uppercase">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.link} 
                    className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground/10 text-center text-sm text-foreground/70">
          Copyright © {companyDataConstants.foundedYear} - {new Date().getFullYear()} | 
          <span className="text-blue-600 dark:text-blue-400"> Envision Edge Tech Pvt. Ltd.</span>
        </div>
      </div>
    </footer>
  )
}
