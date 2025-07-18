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
    3: 189
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