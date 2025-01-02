import { companyDataConstants } from '@/constants/data/companyData.constant'
import { MapPin, Mail, Phone } from 'lucide-react'
import { navLinks } from '@/constants/navlinks'
import { Link } from '@tanstack/react-router'

export const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Envision Edge Tech Pvt. Ltd.
            </h2>
            <p className="text-foreground/80 italic">
              Where Vision Transforms into Technology.
            </p>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="size-5 mt-1 text-primary" />
              <span className="text-foreground/90">
                {companyDataConstants.address}, {companyDataConstants.country}
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary uppercase">
              Contact Us
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <Mail className="size-4 text-primary group-hover:text-primary/80 transition-colors" />
                <a href="mailto:info@envisionedgetech.com" className="text-sm hover:text-primary transition-colors">
                  info@envisionedgetech.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="size-4 text-primary group-hover:text-primary/80 transition-colors" />
                <a href="mailto:support@envisionedgetech.com" className="text-sm hover:text-primary transition-colors">
                  support@envisionedgetech.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="size-4 text-primary group-hover:text-primary/80 transition-colors" />
                <a href="tel:+91987654321" className="text-sm hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="size-4 text-primary group-hover:text-primary/80 transition-colors" />
                <a href="tel:+91123456789" className="text-sm hover:text-primary transition-colors">
                  +91 12345 67890
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary uppercase">
              Follow Us
            </h2>
            <div className="flex flex-col gap-2">
              {companyDataConstants.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:text-primary transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary uppercase">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {navLinks.map((navLink) => (
                <li key={navLink.name}>
                  <Link 
                    to={navLink.link} 
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground/10 text-center text-sm text-foreground/70">
          Copyright © {companyDataConstants.foundedYear} - {new Date().getFullYear()} | 
          <span className="text-primary"> Envision Edge Tech Pvt. Ltd.</span>
        </div>
      </div>
    </footer>
  )
}
