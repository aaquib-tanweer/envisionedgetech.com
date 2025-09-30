import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { 
  Monitor, 
  Smartphone, 
  Shield, 
  Zap, 
  Search, 
  Users, 
  ArrowRight,
  Share2,
  MessageCircle,
  Heart,
  Mail,
  Globe,
  ShoppingCart,
  Settings,
  Lock,
  BarChart3,
  CreditCard
} from 'lucide-react';

declare global {
  interface Window {
    Calendly?: any;
  }
}

// Blog post data structure
export const blogPosts = [
  {
    id: 1,
    title: "Why Your Business Needs a Website in 2025 — And Not Just Any Website!",
    subtitle: "Google Forms and Instagram Pages aren't enough anymore.",
    date: "January 15, 2025",
    readTime: "8 min read",
    tags: ["E-Commerce", "Web Development", "Business Growth", "Digital Transformation"],
    author: "Envision Edge Tech Team",
    category: "Business Insights",
    categoryColor: "orange",
    heroImage: {
      icon: Monitor,
      title: "Professional Website Design",
      subtitle: "The foundation of digital success"
    },
    likes: 94,
    type: "website"
  },
  {
    id: 2,
    title: "WooCommerce vs. Shopify: Which Is the Better E-Commerce Platform for Your Business?",
    subtitle: "Choosing the Right E-Commerce Platform",
    date: "January 20, 2025",
    readTime: "12 min read",
    tags: ["E-Commerce", "WooCommerce", "Shopify", "Platform Comparison", "Online Business"],
    author: "Envision Edge Tech Team",
    category: "Platform Comparison",
    categoryColor: "blue",
    heroImage: {
      icon: ShoppingCart,
      title: "E-Commerce Platform Comparison",
      subtitle: "WooCommerce vs Shopify"
    },
    likes: 127,
    type: "comparison"
  },
  {
    id: 3,
    title: "🚀 Top 10 Web Development Trends for Businesses in 2025",
    subtitle: "Future-proof your website with cutting-edge technology",
    date: "January 25, 2025",
    readTime: "15 min read",
    tags: ["Web Development", "AI", "AR/VR", "Web3", "Technology Trends", "Future Tech"],
    author: "Envision Edge Tech Team",
    category: "Tech Trends",
    categoryColor: "purple",
    heroImage: {
      icon: Zap,
      title: "Future Web Technologies",
      subtitle: "AI, AR, Blockchain & Beyond"
    },
    likes: 189,
    type: "trends"
  },
  {
    id: 4,
    title: "How AI is Transforming the Way Websites Are Built",
    subtitle: "From automated design to hyper-personalized experiences",
    date: "September 22, 2025",
    readTime: "9 min read",
    tags: ["AI", "Web Development", "Personalization", "Automation", "Testing"],
    author: "EnvisionEdgeTech Team",
    category: "AI & Automation",
    categoryColor: "emerald",
    heroImage: {
      icon: Zap,
      title: "AI-Powered Web",
      subtitle: "Design, Content, Personalization"
    },
    likes: 76,
    type: "ai"
  },
  {
    id: 5,
    title: "Top 10 Must-Have Features for Modern Business Websites in 2025",
    subtitle: "Essential capabilities every growth-focused site needs",
    slug: "top-10-website-features-2025",
    date: "September 22, 2025",
    readTime: "10 min read",
    tags: ["Features", "Performance", "AI", "Security", "Accessibility"],
    author: "EnvisionEdgeTech Team",
    category: "Best Practices",
    categoryColor: "indigo",
    heroImage: {
      icon: Zap,
      title: "Modern Website Features",
      subtitle: "Speed, AI, Security & Scale"
    },
    likes: 0,
    type: "website",
    content: `<p>A modern website is more than a digital brochure—it’s a growth engine. In 2025, businesses must integrate certain features to stay competitive.</p>  

<h2>1. Mobile-First Design</h2>  
<p>Over 70% of web traffic comes from mobile. A mobile-first strategy is essential.</p>  

<h2>2. Lightning-Fast Loading</h2>  
<p>Page speed impacts both user experience and SEO rankings.</p>  

<h2>3. AI Chatbots</h2>  
<p>24/7 intelligent customer support improves conversions and satisfaction.</p>  

<h2>4. Personalization</h2>  
<p>Content tailored to each user boosts engagement and retention.</p>  

<h2>5. Enhanced Security</h2>  
<p>SSL, HTTPS, and real-time monitoring are no longer optional.</p>  

<h2>6. Accessibility</h2>  
<p>Websites must be inclusive, meeting WCAG standards.</p>  

<h2>7. Progressive Web Apps (PWAs)</h2>  
<p>Offline-ready, app-like experiences directly in browsers.</p>  

<h2>8. Voice Search Optimization</h2>  
<p>With smart speakers rising, websites need to optimize for voice queries.</p>  

<h2>9. Seamless Integrations</h2>  
<p>Connecting CRMs, payment gateways, and analytics tools.</p>  

<h2>10. Scalable Architecture</h2>  
<p>Websites should grow with your business without performance drops.</p>  

<h3>Conclusion</h3>  
<p>Adopting these features ensures your website isn’t just modern—it’s future-ready.</p>

<h3>Implementation Tips</h3>
<ul>
  <li>Start with a performance budget—set targets for LCP, CLS, and TTI.</li>
  <li>Adopt design tokens to unify themes across web and mobile.</li>
  <li>Use feature flags to roll out new capabilities safely.</li>
  <li>Audit integrations quarterly to remove unused tools and reduce bloat.</li>
  <li>Enable server-side rendering or static generation for critical pages.</li>
  <li>Bundle monitor with RUM (Real User Monitoring) to track real performance.</li>
  <li>Build an accessibility checklist into your PR process.</li>
</ul>

<h3>Recommended Stack</h3>
<ul>
  <li>Core Web Vitals: Lighthouse CI, WebPageTest, Sentry Performance</li>
  <li>Security: security.txt, Mozilla Observatory, automated dependency scans</li>
  <li>AI: Chatbot via API (OpenAI), personalization via rules + embeddings</li>
  <li>PWA: Workbox, Background Sync, Add to Home Screen</li>
  <li>Integrations: native CRM connectors, webhook gateway, retry queues</li>
</ul>

<h3>Business KPIs to Track</h3>
<ul>
  <li>Conversion rate uplift after personalization</li>
  <li>Form completion rate and drop-off</li>
  <li>Time to First Byte (TTFB) and Largest Contentful Paint (LCP)</li>
  <li>Organic traffic growth after structured data implementation</li>
  <li>Support deflection via chatbot vs. human</li>
</ul>

<h3>Mini Case Study</h3>
<p>A multi-location service brand cut page load from 4.8s to 1.9s and increased lead submissions by 28% after implementing image optimization, SSR, and a guided booking flow.</p>`
  },
  {
    id: 6,
    title: "The Psychology of Colors in Web & App Design",
    subtitle: "How color choices influence trust and conversion",
    slug: "psychology-of-colors-design",
    date: "September 24, 2025",
    readTime: "7 min read",
    tags: ["Design", "UI/UX", "Branding", "Psychology"],
    author: "EnvisionEdgeTech Team",
    category: "Design",
    categoryColor: "rose",
    heroImage: {
      icon: Monitor,
      title: "Color Psychology",
      subtitle: "Meaningful palettes that drive action"
    },
    likes: 0,
    type: "design",
    content: `<p>Colors aren’t just aesthetics—they influence behavior, trust, and brand perception. In web and app design, color psychology plays a powerful role.</p>  

<h2>Red: Energy and Urgency</h2>  
<p>Often used in sales banners and notifications to drive action.</p>  

<h2>Blue: Trust and Stability</h2>  
<p>Banks and tech companies often use blue to convey reliability.</p>  

<h2>Green: Growth and Balance</h2>  
<p>Commonly used in finance, health, and eco-friendly brands.</p>  

<h2>Yellow: Optimism and Attention</h2>  
<p>Effective in highlighting key sections but should be used sparingly.</p>  

<h2>Black & White: Sophistication and Simplicity</h2>  
<p>Minimalist designs often lean on monochrome palettes.</p>  

<h3>Conclusion</h3>  
<p>Choosing colors isn’t random—it’s strategy. The right palette enhances user trust, conversion, and brand identity.</p>

<h3>Practical Guidelines</h3>
<ul>
  <li>Use color to reinforce hierarchy—headings, buttons, and links should be scannable.</li>
  <li>Reserve a single accent color for primary CTAs to avoid decision fatigue.</li>
  <li>Test color choices under different ambient light and device conditions.</li>
  <li>Meet WCAG AA contrast (at minimum); consider AAA for text-heavy pages.</li>
</ul>

<h3>Testing Toolkit</h3>
<ul>
  <li>Contrast Checkers: Stark, Polypane, WebAIM</li>
  <li>User Testing: 5-second tests for color recognition and CTA clarity</li>
  <li>Heatmaps: Verify that color emphasis draws attention to the right places</li>
</ul>

<h3>Brand Consistency Tips</h3>
<ul>
  <li>Create semantic color tokens (primary, success, warning) rather than raw hex codes.</li>
  <li>Document usage—where each color appears and where it must not.</li>
  <li>Provide light/dark variants to maintain mood and contrast parity.</li>
</ul>

<h3>Mini Case Study</h3>
<p>A fintech app increased onboarding completion by 17% after switching to a calmer palette (blue/green), reducing visual noise, and standardizing CTA color use across screens.</p>`
  },
  {
    id: 7,
    title: "5 Common Website Security Mistakes Businesses Make",
    subtitle: "Simple oversights that put your site at risk",
    slug: "website-security-mistakes",
    date: "September 26, 2025",
    readTime: "6 min read",
    tags: ["Security", "Best Practices", "HTTPS", "Backups"],
    author: "EnvisionEdgeTech Team",
    category: "Security",
    categoryColor: "emerald",
    heroImage: {
      icon: Shield,
      title: "Website Security",
      subtitle: "Avoid the most common pitfalls"
    },
    likes: 0,
    type: "security",
    content: `<p>Website security is often overlooked until it’s too late. Businesses frequently make simple mistakes that leave them vulnerable.</p>  

<h2>1. Weak Passwords</h2>  
<p>Using simple or reused passwords across platforms invites hackers.</p>  

<h2>2. Outdated Plugins & Themes</h2>  
<p>Neglecting updates opens the door to exploits.</p>  

<h2>3. No SSL/HTTPS</h2>  
<p>Without encryption, sensitive data is exposed.</p>  

<h2>4. Poor Backup Practices</h2>  
<p>Not having regular backups means longer recovery times after attacks.</p>  

<h2>5. Ignoring Regular Security Audits</h2>  
<p>Many businesses never test their defenses until a breach happens.</p>  

<h3>Conclusion</h3>  
<p>Proactive security prevents costly disasters. Fixing these mistakes strengthens trust and keeps your digital presence safe.</p>

<h3>Hardening Basics</h3>
<ul>
  <li>Implement a WAF (Web Application Firewall) and rate limiting.</li>
  <li>Use CSP, X-Frame-Options, and Referrer-Policy headers.</li>
  <li>Rotate API keys regularly; prefer short-lived tokens with scopes.</li>
  <li>Enable 2FA on admin panels and cloud providers.</li>
  <li>Encrypt secrets at rest; avoid storing credentials in repos.</li>
</ul>

<h3>Security Operations</h3>
<ul>
  <li>Run monthly vulnerability scans and dependency checks.</li>
  <li>Adopt a backup strategy: 3-2-1 rule with periodic restore drills.</li>
  <li>Maintain an incident runbook with contacts and escalation steps.</li>
</ul>

<h3>Mini Case Study</h3>
<p>An e-commerce store eliminated credential stuffing incidents after enforcing MFA, adding a WAF challenge for suspicious IPs, and introducing device fingerprinting on login.</p>`
  },
  {
    id: 8,
    title: "Why Minimalist UI/UX Design Outperforms Heavy Interfaces",
    subtitle: "Clarity and speed that boost engagement",
    slug: "minimalist-ui-ux-benefits",
    date: "September 28, 2025",
    readTime: "6 min read",
    tags: ["UI/UX", "Performance", "Accessibility", "Design"],
    author: "EnvisionEdgeTech Team",
    category: "UI/UX",
    categoryColor: "gray",
    heroImage: {
      icon: Smartphone,
      title: "Minimalist Design",
      subtitle: "Faster, clearer, more inclusive"
    },
    likes: 0,
    type: "design",
    content: `<p>Minimalist design isn’t just aesthetics—it improves usability and performance.</p>  

<h2>Faster Load Times</h2>  
<p>Clean interfaces reduce heavy assets, improving site speed.</p>  

<h2>Reduced Cognitive Load</h2>  
<p>Minimalism makes navigation easier and less overwhelming.</p>  

<h2>Better Accessibility</h2>  
<p>Simple layouts are more inclusive and easier to adapt.</p>  

<h2>Improved Focus</h2>  
<p>Users pay more attention to the content that matters.</p>  

<h2>Timeless Appeal</h2>  
<p>Minimalist designs stay modern longer compared to trend-heavy designs.</p>  

<h3>Examples</h3>  
<p>Apple’s product pages and Google’s search interface show the power of simplicity.</p>  

<h3>Conclusion</h3>  
<p>Minimalism drives clarity, engagement, and better conversions—making it a winning UI/UX strategy.</p>

<h3>Design Principles</h3>
<ul>
  <li>Define a clear visual hierarchy using size, weight, and spacing.</li>
  <li>Use a tight palette and limit font families to one or two.</li>
  <li>Adopt an 8px spacing system to maintain rhythm.</li>
  <li>Prefer progressive disclosure—hide advanced options until needed.</li>
</ul>

<h3>Performance Practices</h3>
<ul>
  <li>Defer non-critical scripts and avoid layout thrashing animations.</li>
  <li>Compress images and prefer responsive formats (AVIF/WebP).</li>
  <li>Use skeleton screens and optimistic UI to smooth perceived latency.</li>
</ul>

<h3>Mini Case Study</h3>
<p>A SaaS dashboard reduced cognitive load and support tickets by 22% after removing decorative clutter, tightening spacing, and simplifying primary flows to one CTA per view.</p>`
  }
];

// Website blog content components
export const websiteFeatures = [
  {
    icon: Zap,
    title: "Fast Loading Speed",
    description: "Under 3 seconds loading time"
  },
  {
    icon: Smartphone,
    title: "Mobile-Responsive Design",
    description: "Perfect on all devices"
  },
  {
    icon: Shield,
    title: "SSL Security & Privacy",
    description: "Secure data transmission"
  },
  {
    icon: Users,
    title: "Smooth User Flow",
    description: "Optimized for conversions"
  },
  {
    icon: Search,
    title: "Basic SEO Optimization",
    description: "Better search visibility"
  },
  {
    icon: Monitor,
    title: "Clear Calls to Action",
    description: "Guide users to take action"
  }
];

export const websiteBenefits = [
  {
    icon: Shield,
    title: "Build Instant Trust",
    description: "A clean, professional-looking website tells visitors: \"We're legit. You're in safe hands.\""
  },
  {
    icon: Users,
    title: "Convert Visitors into Customers",
    description: "With clear CTAs, product/service info, and contact options — it guides people to take action."
  },
  {
    icon: Search,
    title: "Improve Visibility & SEO",
    description: "Your site shows up on Google, helping more people discover your business."
  },
  {
    icon: Smartphone,
    title: "Mobile Users? Covered!",
    description: "Most visitors are browsing on phones — we design with that in mind, first."
  }
];

// E-commerce comparison content
export const comparisonPoints = [
  {
    category: "Ease of Use",
    woocommerce: {
      icon: Settings,
      description: "Requires WordPress familiarity and more hands-on setup",
      pros: ["Natural extension of WordPress", "Flexible integration"],
      cons: ["Steeper learning curve", "More technical setup required"]
    },
    shopify: {
      icon: Zap,
      description: "Intuitive drag-and-drop interface, perfect for beginners",
      pros: ["Simple setup process", "User-friendly interface"],
      cons: ["Less flexibility for advanced users"]
    }
  },
  {
    category: "Customization & Flexibility",
    woocommerce: {
      icon: Settings,
      description: "Complete control over design and functionality",
      pros: ["Unlimited customization", "Thousands of themes/plugins"],
      cons: ["Requires technical knowledge"]
    },
    shopify: {
      icon: Monitor,
      description: "Good selection of themes with easier customization",
      pros: ["Easy theme customization", "Good app ecosystem"],
      cons: ["More limited than WooCommerce"]
    }
  },
  {
    category: "Security",
    woocommerce: {
      icon: Shield,
      description: "Security depends on hosting provider and maintenance",
      pros: ["Full control over security measures"],
      cons: ["Requires manual updates", "Self-managed security"]
    },
    shopify: {
      icon: Lock,
      description: "Comprehensive security handled by Shopify",
      pros: ["SSL included", "Automatic updates", "Secure by default"],
      cons: ["Less control over security settings"]
    }
  },
  {
    category: "Payment Options",
    woocommerce: {
      icon: CreditCard,
      description: "Wide range of payment gateways without restrictions",
      pros: ["No transaction fees", "Any gateway supported"],
      cons: ["Manual gateway setup required"]
    },
    shopify: {
      icon: CreditCard,
      description: "Shopify Payments plus third-party options",
      pros: ["Built-in payment system", "Easy integration"],
      cons: ["Transaction fees for third-party gateways"]
    }
  },
  {
    category: "SEO & Marketing",
    woocommerce: {
      icon: Search,
      description: "Full SEO control with WordPress's powerful plugins",
      pros: ["Complete SEO control", "Yoast SEO integration"],
      cons: ["Requires SEO knowledge"]
    },
    shopify: {
      icon: BarChart3,
      description: "SEO-friendly with built-in marketing tools",
      pros: ["Built-in blog", "Email marketing", "Abandoned cart recovery"],
      cons: ["Fewer SEO customization options"]
    }
  }
];

// Shared functionality hooks
export const useBlogEngagement = () => {
  const [likedBlogs, setLikedBlogs] = useState<{[key: number]: boolean}>({});
  const [blogLikes, setBlogLikes] = useState<{[key: number]: number}>({
    1: 94,
    2: 127,
    3: 189,
    4: 76,
    5: 0,
    6: 0,
    7: 0,
    8: 0
  });
  
  const [comments, setComments] = useState<{[key: number]: {comment: string, email: string, website: string}}>({});

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/envisionedgetech/30min",
      });
    }
  };

  const handleLike = (blogId: number) => {
    const isLiked = likedBlogs[blogId];
    setLikedBlogs(prev => ({ ...prev, [blogId]: !isLiked }));
    setBlogLikes(prev => ({ 
      ...prev, 
      [blogId]: isLiked ? prev[blogId] - 1 : prev[blogId] + 1 
    }));
  };

  const handleSubmitComment = (e: React.FormEvent, blogId: number) => {
    e.preventDefault();
    const commentData = comments[blogId];
    if (commentData) {
      console.log(`Comment for blog ${blogId}:`, commentData);
      setComments(prev => ({ ...prev, [blogId]: { comment: '', email: '', website: '' } }));
    }
  };

  const updateComment = (blogId: number, field: string, value: string) => {
    setComments(prev => ({
      ...prev,
      [blogId]: { ...prev[blogId], [field]: value }
    }));
  };

  // Share functionality
  const handleShare = (platform: string, blogId: number) => {
    const blog = blogPosts.find(post => post.id === blogId);
    if (!blog) return;

    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(blog.title);
    const text = encodeURIComponent(`${blog.title} - ${blog.subtitle}`);

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=WebDevelopment,EnvisionEdgeTech`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
      telegram: `https://t.me/share/url?url=${url}&text=${text}`,
      email: `mailto:?subject=${title}&body=${text}%0A%0A${url}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copied to clipboard!');
      }).catch(() => {
        alert('Failed to copy link');
      });
      return;
    }

    if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'noopener,noreferrer');
    }
  };

  return {
    likedBlogs,
    blogLikes,
    comments,
    openCalendly,
    handleLike,
    handleSubmitComment,
    updateComment,
    handleShare
  };
};

// Engagement component for blogs
export const BlogEngagement = ({ blogId }: { blogId: number }) => {
  const {
    likedBlogs,
    blogLikes,
    comments,
    handleLike,
    handleSubmitComment,
    updateComment,
    handleShare
  } = useBlogEngagement();

  const isLiked = likedBlogs[blogId];
  const likes = blogLikes[blogId];
  const commentData = comments[blogId] || { comment: '', email: '', website: '' };
  const [showShareMenu, setShowShareMenu] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
        setShowShareMenu(false);
      }
    };

    if (showShareMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showShareMenu]);

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 space-y-8">
      {/* Like and Share */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleLike(blogId)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isLiked 
                ? 'bg-red-500 text-white shadow-lg' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-500/10'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            <span>{likes} Likes</span>
          </button>
          
          <div className="relative" ref={shareMenuRef}>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-400">Share:</span>
              
              {/* Twitter Share */}
              <button 
                onClick={() => handleShare('twitter', blogId)}
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors transform hover:scale-105"
                title="Share on Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>

              {/* Facebook Share */}
              <button 
                onClick={() => handleShare('facebook', blogId)}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
                title="Share on Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>

              {/* LinkedIn Share */}
              <button 
                onClick={() => handleShare('linkedin', blogId)}
                className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors transform hover:scale-105"
                title="Share on LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>

              {/* WhatsApp Share */}
              <button 
                onClick={() => handleShare('whatsapp', blogId)}
                className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors transform hover:scale-105"
                title="Share on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>

              {/* More Share Options Button */}
              <button 
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors transform hover:scale-105"
                title="More share options"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            {/* Dropdown Share Menu */}
            {showShareMenu && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2 z-10 min-w-[200px]"
              >
                <button 
                  onClick={() => {
                    handleShare('telegram', blogId);
                    setShowShareMenu(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
                >
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </button>
                
                <button 
                  onClick={() => {
                    handleShare('email', blogId);
                    setShowShareMenu(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
                >
                  <Mail className="w-4 h-4 text-gray-500" />
                  Email
                </button>
                
                <button 
                  onClick={() => {
                    handleShare('copy', blogId);
                    setShowShareMenu(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
                >
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Link
                </button>
              </motion.div>
            )}
          </div>
        </div>
        
        <Link 
          to="/services"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
        >
          View Our Services
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Comment Form */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Leave Your Comment</h3>
        <form onSubmit={(e) => handleSubmitComment(e, blogId)} className="space-y-4">
          <div>
            <textarea
              value={commentData.comment}
              onChange={(e) => updateComment(blogId, 'comment', e.target.value)}
              placeholder="Share your thoughts about this post..."
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical min-h-[100px]"
              required
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
              </div>
              <input
                type="email"
                value={commentData.email}
                onChange={(e) => updateComment(blogId, 'email', e.target.value)}
                placeholder="your@email.com"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Website (Optional)
                </label>
              </div>
              <input
                type="url"
                value={commentData.website}
                onChange={(e) => updateComment(blogId, 'website', e.target.value)}
                placeholder="www.your-website.com"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
}; 