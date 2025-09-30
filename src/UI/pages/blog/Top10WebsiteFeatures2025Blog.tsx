import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Calendar,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import {
  blogPosts,
  useBlogEngagement,
  BlogEngagement
} from './blogUtils.tsx';

export const Top10WebsiteFeatures2025Blog = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, { once: true });
  const { openCalendly } = useBlogEngagement();

  const blogPost = blogPosts[4]; // ID 5, index 4

  return (
    <div className="relative py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="w-1 h-8 bg-indigo-500"></div>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider text-sm">
                {blogPost.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight font-serif">
              {blogPost.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {blogPost.subtitle}
            </p>

            {/* Blog Meta */}
            <div className="flex items-center gap-6 mt-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-400">{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-600 dark:text-gray-400">{blogPost.readTime}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-600 dark:text-gray-400">By {blogPost.author}</span>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert blog-content">
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </div>

          {/* Key Takeaways */}
          <div className="mt-12 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/10 dark:to-blue-900/10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              Key Takeaways
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 pl-0 list-none">
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-500 mt-1" /><span>Mobile-first, fast experiences are non-negotiable in 2025.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-500 mt-1" /><span>AI chat and personalization increase conversions and user happiness.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-500 mt-1" /><span>Security and accessibility protect your brand and widen reach.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-500 mt-1" /><span>PWAs, voice, and integrations future-proof your stack.</span></li>
            </ul>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {blogPost.tags?.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">{tag}</span>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Ready to implement these features on your website?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Let our team help you build a modern, feature-rich website that drives growth and conversions.
            </p>
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors duration-300"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Blog Engagement */}
          <BlogEngagement blogId={blogPost.id} />
        </motion.div>
      </div>
    </div>
  );
};
