import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { 
  BookOpen,
  ArrowRight,
  Heart,
  Calendar
} from 'lucide-react';
import { blogPosts } from './blog/blogUtils.tsx';
import AICoverImage from '../../assets/images/AI.png';
import WebDevTrendsCoverImage from '../../assets/images/Webdevelopmenttrends.jpeg';
import BusinessWebsiteCoverImage from '../../assets/images/whyyourbusinessneedawebsite.jpeg';
import WooCommerceShopifyCoverImage from '../../assets/images/shopifyvswoocommerce.jpeg';
import Top10FeaturesCoverImage from '../../assets/images/10 must have features.jpeg';
import PsychologyOfColorsCoverImage from '../../assets/images/the psychology of colors.png';
import SecurityMistakesCoverImage from '../../assets/images/5 common security mistake.jpeg';
import MinimalistUICoverImage from '../../assets/images/minimilistic UI.jpeg';

export const Blog = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const navigate = useNavigate();

  // Simple likes state for preview cards
  const blogLikes: {[key: number]: number} = {
    1: 94,
    2: 127,
    3: 189,
    4: 76,
    5: 142,
    6: 88,
    7: 101,
    8: 79
  };

  const getRouteFromBlogId = (blogId: number) => {
    switch (blogId) {
      case 1:
        return '/blog/website-business-needs-2025';
      case 2:
        return '/blog/woocommerce-vs-shopify';
      case 3:
        return '/blog/web-development-trends-2025';
      case 4:
        return '/blog/ai-transforming-websites';
      case 5:
        return '/blog/top-10-website-features-2025';
      case 6:
        return '/blog/psychology-of-colors-design';
      case 7:
        return '/blog/website-security-mistakes';
      case 8:
        return '/blog/minimalist-ui-ux-benefits';
      default:
        return '/blog';
    }
  };

  const getCoverImageFromBlogId = (blogId: number) => {
    switch (blogId) {
      case 1:
        return BusinessWebsiteCoverImage;
      case 2:
        return WooCommerceShopifyCoverImage;
      case 3:
        return WebDevTrendsCoverImage;
      case 4:
        return AICoverImage;
      case 5:
        return Top10FeaturesCoverImage;
      case 6:
        return PsychologyOfColorsCoverImage;
      case 7:
        return SecurityMistakesCoverImage;
      case 8:
        return MinimalistUICoverImage;
      default:
        return BusinessWebsiteCoverImage;
    }
  };

  const handleBlogCardClick = (blogId: number) => {
    const route = getRouteFromBlogId(blogId);
    console.log('Navigating to:', route);
    navigate({ to: route as any });
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
                onClick={() => handleBlogCardClick(post.id)}
                className="group cursor-pointer bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105"
              >
                {/* Blog Card Hero - Cover Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={getCoverImageFromBlogId(post.id)}
                    alt={`${post.title} - Cover Image`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-1 h-6 ${
                      post.categoryColor === 'orange' 
                        ? 'bg-orange-500' 
                        : post.categoryColor === 'blue'
                        ? 'bg-blue-500'
                        : 'bg-purple-500'
                    }`}></div>
                    <span className={`${
                      post.categoryColor === 'orange' 
                        ? 'text-orange-600 dark:text-orange-400' 
                        : post.categoryColor === 'blue'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-purple-600 dark:text-purple-400'
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
                      <span>{blogLikes[post.id]}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
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

                  {/* Read More Button */}
                  <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              From cutting-edge websites to powerful e-commerce solutions, let's bring your vision to life with the latest technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-colors"
              >
                View Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-semibold text-lg transition-colors"
              >
                <Calendar className="w-5 h-5" />
                See Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}; 