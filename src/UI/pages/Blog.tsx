import { motion, useInView } from 'framer-motion';
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
  Calendar,
  Share2,
  MessageCircle,
  Heart,
  BookOpen,
  ShoppingCart,
  CreditCard,
  Settings,
  Lock,
  BarChart3,
  CheckCircle,
  XCircle,
  Mail,
  Globe
} from 'lucide-react';


declare global {
  interface Window {
    Calendly?: any;
  }
}

// Blog post data structure
const blogPosts = [
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
  }
];

export const Blog = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  // Engagement states
  const [likedBlogs, setLikedBlogs] = useState<{[key: number]: boolean}>({});
  const [blogLikes, setBlogLikes] = useState<{[key: number]: number}>({
    1: 94,
    2: 127,
    3: 189
  });
  
  // Comment form states
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
      // Reset form for this blog
      setComments(prev => ({ ...prev, [blogId]: { comment: '', email: '', website: '' } }));
    }
  };

  const updateComment = (blogId: number, field: string, value: string) => {
    setComments(prev => ({
      ...prev,
      [blogId]: { ...prev[blogId], [field]: value }
    }));
  };

  const scrollToBlog = (blogId: number) => {
    const element = document.getElementById(`blog-${blogId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Website blog content components
  const websiteFeatures = [
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

  const websiteBenefits = [
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
  const comparisonPoints = [
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

  // Share functionality
  const handleShare = (platform: string, blogId: number) => {
    const blog = blogPosts.find(post => post.id === blogId);
    if (!blog) return;

    const url = encodeURIComponent(window.location.href + `#blog-${blogId}`);
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
      navigator.clipboard.writeText(window.location.href + `#blog-${blogId}`).then(() => {
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

  // Engagement component for each blog
  const BlogEngagement = ({ blogId }: { blogId: number }) => {
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
                  placeholder="https://yourwebsite.com"
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

  return (
    <>

      
      <div ref={containerRef} className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Overview Hero */}
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center mb-8"
            >
              <div className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg">
                <BookOpen className="w-4 h-4" />
                <span className="font-semibold">📚 Our Blog</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            >
              <span className="block text-gray-900 dark:text-white">Latest</span>
              <span className="block relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  Insights & Guides
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              Expert insights on web development, e-commerce platforms, and digital transformation to help your business thrive online.
            </motion.p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onClick={() => scrollToBlog(post.id)}
                className="group cursor-pointer bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105"
              >
                {/* Blog Card Hero */}
                <div className={`relative h-48 bg-gradient-to-r ${
                  post.categoryColor === 'orange' 
                    ? 'from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20' 
                    : 'from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {post.type === 'comparison' ? (
                      <div className="flex items-center gap-8">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                            <span className="text-white font-bold text-lg">W</span>
                          </div>
                          <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">WooCommerce</div>
                        </div>
                        <div className="text-3xl text-gray-400">VS</div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                            <span className="text-white font-bold text-lg">S</span>
                          </div>
                          <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Shopify</div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <post.heroImage.icon className={`w-12 h-12 mx-auto mb-3 ${
                          post.categoryColor === 'orange' ? 'text-orange-500' : 'text-blue-500'
                        }`} />
                        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {post.heroImage.title}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-1 h-6 ${
                      post.categoryColor === 'orange' ? 'bg-orange-500' : 'bg-blue-500'
                    }`}></div>
                    <span className={`${
                      post.categoryColor === 'orange' 
                        ? 'text-orange-600 dark:text-orange-400' 
                        : 'text-blue-600 dark:text-blue-400'
                    } font-semibold uppercase tracking-wider text-xs`}>
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {post.subtitle}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Individual Blog Posts */}
          {/* Blog 1: Website Blog */}
          <div id="blog-1" className="mb-20">
            <BlogPost1 
              websiteFeatures={websiteFeatures}
              websiteBenefits={websiteBenefits}
              openCalendly={openCalendly}
              BlogEngagement={BlogEngagement}
            />
          </div>

          {/* Blog 2: WooCommerce vs Shopify */}
          <div id="blog-2" className="mb-20">
            <BlogPost2 
              comparisonPoints={comparisonPoints}
              openCalendly={openCalendly}
              BlogEngagement={BlogEngagement}
            />
          </div>

          {/* Blog 3: Top 10 Web Development Trends */}
          <div id="blog-3" className="mb-20">
            <BlogPost3 
              openCalendly={openCalendly}
              BlogEngagement={BlogEngagement}
            />
          </div>
        </div>
      </div>
    </>
  );
};

// Blog Post 1 Component - Website Blog
const BlogPost1 = ({ websiteFeatures, websiteBenefits, openCalendly, BlogEngagement }: any) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, { once: true });

  const blogPost = blogPosts[0];

  return (
    <motion.div
      ref={contentRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="glass-premium bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 shadow-xl"
    >
      {/* Blog Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 bg-orange-500"></div>
          <span className="text-orange-600 dark:text-orange-400 font-semibold uppercase tracking-wider text-sm">
            {blogPost.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight font-serif">
          Why Your Business Needs a Website in 2025
          <span className="block text-3xl md:text-4xl text-gray-600 dark:text-gray-400 font-normal mt-2">
            And Not Just Any Website!
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Spoiler: Google Forms and Instagram Pages aren't enough anymore. Here's why your business needs a professional digital presence in today's competitive landscape.
        </p>

        {/* Blog Meta */}
        <div className="flex items-center gap-6 mt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">ET</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">{blogPost.author}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Published {blogPost.date}</div>
            </div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{blogPost.readTime}</div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Question Section */}
        <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/10 p-8 mb-12 rounded-r-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">❓</span>
            Still running your business on just social media?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            You might be getting by, but here's the truth:
          </p>
          <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl">
            <span className="text-2xl">📉</span>
            <p className="text-red-700 dark:text-red-300 font-medium">
              You're losing potential customers who are searching for your name on Google and finding… nothing
            </p>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
            In 2025, your website isn't just "a bonus." It's your digital storefront, your credibility badge, 
            and your 24/7 salesperson — all rolled into one.
          </p>
        </div>

        {/* Think About It Section */}
        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 mb-12 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🧠</span>
            Think about it:
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">Would you trust a brand that has no proper website?</p>
            <p className="text-lg text-gray-700 dark:text-gray-300">Would you buy from a site that looks outdated or slow?</p>
            <p className="text-lg text-gray-700 dark:text-gray-300">Would you share your card details on an unsecured page?</p>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-xl">
              <p className="text-blue-700 dark:text-blue-300 font-semibold text-center">
                If you wouldn't, your customers won't either.
              </p>
            </div>
          </div>
        </div>

        {/* What a Good Website Can Do */}
        <div className="bg-white dark:bg-gray-900 p-8 mb-12 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🚀</span>
            What a Good Website Can Do for Your Business:
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {websiteBenefits.map((benefit: any, index: number) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="p-6 bg-white/60 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-electric-500 dark:to-electric-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Website Requirements */}
        <div className="glass-premium bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 mb-12 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🔧</span>
            But Not Just Any Website Will Do…
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            A random free template or outdated layout won't help. Here's what your website should have in 2025:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {websiteFeatures.map((feature: any, index: number) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-white/40 dark:bg-white/5 border border-gray-200/30 dark:border-white/10 rounded-xl"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-electric-500 dark:to-electric-600 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="glass-premium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-electric-500/10 dark:to-neon-500/10 backdrop-blur-xl border border-blue-200/50 dark:border-electric-500/20 rounded-2xl p-8 mb-12 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">💡</span>
            What We Do at Envision Edge Tech:
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            We build WordPress & eCommerce websites that are:
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 dark:bg-electric-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Sleek, modern, and branded to match your vibe</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 dark:bg-electric-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Built to perform — not just look good</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 dark:bg-electric-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Optimized for speed, search, and sales</span>
            </div>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
            From personal portfolios to large-scale eCommerce sites — we craft websites that work as hard as you do.
          </p>
        </div>

        {/* TL;DR Section */}
        <div className="glass-premium bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 mb-12 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">👇</span>
            TL;DR:
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              If your business doesn't have a website in 2025… You're already behind.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              But it's not too late. Let Envision Edge Tech help you build your online presence the right way.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-500 dark:to-red-500 rounded-lg p-8 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">📞</span>
            Ready to start?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's chat about your website today.
          </p>
          <motion.button
            onClick={openCalendly}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            Start Chat Right Now
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Engagement Section */}
      <BlogEngagement blogId={1} />
    </motion.div>
  );
};

// Blog Post 2 Component - WooCommerce vs Shopify
const BlogPost2 = ({ comparisonPoints, openCalendly, BlogEngagement }: any) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, { once: true });

  const blogPost = blogPosts[1];

  return (
    <motion.div
      ref={contentRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="glass-premium bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 shadow-xl"
    >
      {/* Blog Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 bg-blue-500"></div>
          <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-sm">
            {blogPost.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight font-serif">
          WooCommerce vs. Shopify
          <span className="block text-3xl md:text-4xl text-gray-600 dark:text-gray-400 font-normal mt-2">
            Which Is the Better E-Commerce Platform?
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          At Envision Edge Tech, we know that choosing between WooCommerce and Shopify can be tricky. 
          Each platform offers unique features, and the right choice depends on your business needs.
        </p>

        {/* Blog Meta */}
        <div className="flex items-center gap-6 mt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">ET</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">{blogPost.author}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Published {blogPost.date}</div>
            </div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{blogPost.readTime}</div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Introduction Section */}
        <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/10 p-8 mb-12 rounded-r-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">💭</span>
            Choosing the Right E-Commerce Platform
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Whether you're starting a small online store or scaling up a large business — we break down the differences to help you make an informed decision.
          </p>
        </div>

        {/* Quick Breakdown Section */}
        <div className="bg-white dark:bg-gray-900 p-8 mb-12 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🛠️</span>
            WooCommerce vs Shopify: A Quick Breakdown
          </h2>
          
          {/* Comparison Grid */}
          <div className="space-y-8">
            {comparisonPoints.map((point: any, index: number) => (
              <motion.div
                key={point.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <span className="text-2xl">{index + 1}</span>
                    <point.woocommerce.icon className="w-5 h-5" />
                    {point.category}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  {/* WooCommerce */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">W</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">WooCommerce</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{point.woocommerce.description}</p>
                    
                    <div className="space-y-2">
                      {point.woocommerce.pros.map((pro: string, i: number) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{pro}</span>
                        </div>
                      ))}
                      {point.woocommerce.cons.map((con: string, i: number) => (
                        <div key={i} className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shopify */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">S</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Shopify</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{point.shopify.description}</p>
                    
                    <div className="space-y-2">
                      {point.shopify.pros.map((pro: string, i: number) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{pro}</span>
                        </div>
                      ))}
                      {point.shopify.cons.map((con: string, i: number) => (
                        <div key={i} className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decision Guide */}
        <div className="glass-premium bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 mb-12 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🧑‍💼</span>
            Which One Should You Choose?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Choose WooCommerce */}
            <div className="p-6 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">
                Choose WooCommerce if you:
              </h3>
              <div className="space-y-3">
                {[
                  "Want full control and customization",
                  "Already use WordPress",
                  "Have technical skills or work with a developer",
                  "Need specific functionality not available in Shopify"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Choose Shopify */}
            <div className="p-6 bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">
                Choose Shopify if you:
              </h3>
              <div className="space-y-3">
                {[
                  "Want an easy-to-use platform with minimal setup",
                  "Prefer a hosted solution where everything is managed",
                  "Are looking for fast scalability with less technical involvement",
                  "Need built-in marketing and analytics tools"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="glass-premium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 backdrop-blur-xl border border-blue-200/50 dark:border-blue-500/20 rounded-2xl p-8 mb-12 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            In Short:
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <strong>WooCommerce</strong> is the go-to for businesses seeking flexibility, control, and scalability — but it requires a hands-on approach.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <strong>Shopify</strong> is perfect for entrepreneurs who need an easy, quick setup with less hassle.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-lg p-8 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">📢</span>
            Need help deciding?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's talk about which platform is best for your business
          </p>
          <motion.button
            onClick={openCalendly}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            Click on WhatsApp Button Now
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Engagement Section */}
      <BlogEngagement blogId={2} />
    </motion.div>
  );
};

// Blog Post 3 Component - Web Development Trends 2025
const BlogPost3 = ({ openCalendly, BlogEngagement }: any) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, { once: true });

  const blogPost = blogPosts[2];

  const trends = [
    {
      id: 1,
      icon: "🤖",
      title: "AI & Automation: The Brain Behind Modern Websites",
      subtitle: "What's New:",
      points: [
        "AI-generated code (e.g., GitHub Copilot X) reduces dev time by 40%",
        "Self-learning chatbots (GPT-5) handle 90% of customer queries without human intervention"
      ],
      businessImpact: [
        "E-commerce: AI recommends products like a personal shopper",
        "Cost Savings: Automate repetitive tasks (e.g., form processing)"
      ],
      proTip: "Use TensorFlow.js for AI features without server costs."
    },
    {
      id: 2,
      icon: "🎙️",
      title: "Voice Search: The Future of Queries",
      subtitle: "Stats:",
      points: [
        "55% of households will own smart speakers by 2025 (OC&C Strategy Consultants)"
      ],
      businessImpact: [
        'Optimize for long-tail keywords (e.g., "Where can I buy organic coffee near me?")',
        "Use schema markup for voice-friendly answers"
      ],
      proTip: "Domino's increased orders by 20% via voice search."
    },
    {
      id: 3,
      icon: "⛓️",
      title: "Web3 & Blockchain: Trustless Transactions",
      subtitle: "Key Tech:",
      points: [
        "dApps (decentralized apps) for tamper-proof contracts",
        "NFT memberships for exclusive content access"
      ],
      businessImpact: [
        "Fashion brands like Gucci use NFTs to verify luxury items"
      ],
      proTip: "High energy costs (opt for Ethereum 2.0 or Solana)."
    },
    {
      id: 4,
      icon: "📱",
      title: "PWAs: Faster Than Lightning",
      subtitle: "Why PWAs Win:",
      points: [
        "3x faster than traditional mobile sites",
        "Work offline (e.g., Starbucks' PWA boosted orders by 23%)"
      ],
      businessImpact: [],
      proTip: "Stack: React.js + Workbox for seamless offline caching."
    },
    {
      id: 5,
      icon: "🎨",
      title: "Motion UI: Dance of the Pixels",
      subtitle: "Trends:",
      points: [
        "Micro-interactions (e.g., hover animations for buttons)",
        "3D scrolling (like Apple's product pages)"
      ],
      businessImpact: [
        "35% longer session durations (Adobe)"
      ],
      proTip: ""
    },
    {
      id: 6,
      icon: "👓",
      title: "AR/VR: Try Before You Buy",
      subtitle: "Stats:",
      points: [
        "AR shopping will reduce returns by 25% (Zebra Technologies)"
      ],
      businessImpact: [
        "WebXR API for browser-based AR",
        "Three.js for 3D product previews"
      ],
      proTip: ""
    },
    {
      id: 7,
      icon: "🧩",
      title: "Low-Code/No-Code: Democracy in Dev",
      subtitle: "Who Benefits:",
      points: [
        "Startups: Build MVPs in days, not months",
        "Marketers: Drag-and-drop landing pages with Webflow"
      ],
      businessImpact: [],
      proTip: "Custom logic still needs developers."
    },
    {
      id: 8,
      icon: "🛡️",
      title: "Cybersecurity: Non-Negotiable",
      subtitle: "Must-Haves:",
      points: [
        "Zero-trust architecture (Google's approach)",
        "Biometric logins (e.g., fingerprint/face ID)"
      ],
      businessImpact: [
        "$4.5M avg. breach loss (IBM)"
      ],
      proTip: ""
    },
    {
      id: 9,
      icon: "🔌",
      title: "API-First: Connect Everything",
      subtitle: "Why It's Key:",
      points: [
        "Headless CMS (e.g., Contentful) + IoT devices = seamless data flow"
      ],
      businessImpact: [
        "Shopify's API drives 60% of its revenue"
      ],
      proTip: ""
    },
    {
      id: 10,
      icon: "🌿",
      title: "Green Web: Code for the Planet",
      subtitle: "How to Help:",
      points: [
        "Lazy loading images (saves CO2)",
        "Dark mode reduces energy use by 39% (Google)"
      ],
      businessImpact: [],
      proTip: ""
    }
  ];

  const takeaways = {
    startups: [
      "PWAs + Low-Code",
      "Voice SEO"
    ],
    enterprises: [
      "Web3 + AI",
      "API-First Scalability"
    ]
  };

  return (
    <motion.div
      ref={contentRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="glass-premium bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 shadow-xl"
    >
      {/* Blog Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 bg-purple-500"></div>
          <span className="text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider text-sm">
            {blogPost.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight font-serif">
          🚀 Top 10 Web Development Trends
          <span className="block text-3xl md:text-4xl text-gray-600 dark:text-gray-400 font-normal mt-2">
            for Businesses in 2025
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Future-proof your website with cutting-edge technology. From AI automation to AR experiences, 
          discover the trends that will shape the digital landscape.
        </p>

        {/* Blog Meta */}
        <div className="flex items-center gap-6 mt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">ET</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">{blogPost.author}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Published {blogPost.date}</div>
            </div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{blogPost.readTime}</div>
        </div>
      </div>

      {/* Futuristic Hero Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-lg p-8 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">🚀</span>
            <div>
              <h2 className="text-3xl font-bold mb-2">💡 Why This Matters</h2>
              <p className="text-xl text-white/90">
                By 2025, 75% of businesses will overhaul their websites to stay competitive (Gartner). 
                At Envision Edge Tech, we help you ride this wave with cutting-edge tech. Let's dive in!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Trends Section */}
        <div className="space-y-12">
          {trends.map((trend, index) => (
            <motion.div
              key={trend.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="glass-premium bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl">{trend.icon}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    🔥 {trend.id}. {trend.title}
                  </h2>
                  
                  {trend.subtitle && (
                    <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                      {trend.subtitle}
                    </h3>
                  )}

                  {trend.points.length > 0 && (
                    <div className="space-y-2 mb-4">
                      {trend.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300">{point}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {trend.businessImpact.length > 0 && (
                    <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">📈 Business Impact:</h4>
                      <div className="space-y-1">
                        {trend.businessImpact.map((impact, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <p className="text-green-700 dark:text-green-300 text-sm">{impact}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {trend.proTip && (
                    <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">💡 Pro Tip:</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">{trend.proTip}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="glass-premium bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 mb-12 shadow-xl mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            Key Takeaways
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Startups */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-200 dark:border-blue-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4 text-center">
                For Startups
              </h3>
              <div className="space-y-3">
                {takeaways.startups.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* For Enterprises */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-200 dark:border-purple-500/20 rounded-xl">
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4 text-center">
                For Enterprises
              </h3>
              <div className="space-y-3">
                {takeaways.enterprises.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Future-Proof CTA */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-lg p-8 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">📢</span>
            Ready to Future-Proof Your Website?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Don't get left behind. Let's implement these cutting-edge trends in your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={openCalendly}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              💬 WhatsApp Us
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={openCalendly}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              📞 Book a Free Audit
            </motion.button>
          </div>
        </div>

        {/* Engagement Prompt */}
        <div className="glass-premium bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 backdrop-blur-xl border border-purple-200/50 dark:border-purple-500/20 rounded-2xl p-8 mb-12 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">💬</span>
            Engage With Us!
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">👇</span>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Comment:</strong> Which trend will you adopt first?
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔗</span>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Share:</strong> #WebDev2025 #TechTrends
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Subscribe:</strong> Get monthly tech insights!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Engagement Section */}
      <BlogEngagement blogId={3} />
    </motion.div>
  );
}; 