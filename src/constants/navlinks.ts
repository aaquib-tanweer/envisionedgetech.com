// Main navigation links
export const navLinks = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Products',
    link: '/products',
  },
  {
    name: 'Services',
    link: '/services',
  },
]

// Footer quick links (includes all nav links plus additional footer-only links)
export const footerLinks = [
  ...navLinks,
  
  {
    name: 'Privacy Policy',
    link: '/privacy-policy',
  },
  {
    name: 'Terms & Conditions',
    link: '/terms-and-conditions',
  },
]
