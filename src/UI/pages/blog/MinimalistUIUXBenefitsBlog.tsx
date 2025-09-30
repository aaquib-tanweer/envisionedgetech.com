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

export const MinimalistUIUXBenefitsBlog = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, { once: true });
  const { openCalendly } = useBlogEngagement();

  const blogPost = blogPosts[7]; // ID 8, index 7

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
              <div className="w-1 h-8 bg-gray-500"></div>
              <span className="text-gray-600 dark:text-gray-400 font-semibold uppercase tracking-wider text-sm">
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

          {/* Why Minimalism Works */}
          <div className="mt-12 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/10 dark:to-slate-900/10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              Why It Works
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 pl-0 list-none">
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-gray-500 mt-1" /><span>Focuses user attention on primary actions and content.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-gray-500 mt-1" /><span>Reduces load times by removing heavy visual noise.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-gray-500 mt-1" /><span>Improves accessibility with simpler hierarchy and contrast.</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-gray-500 mt-1" /><span>Adapts better to responsive layouts.</span></li>
            </ul>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {blogPost.tags?.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-900/40 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800">{tag}</span>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Ready for a minimalist makeover?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Transform your website with clean, minimalist design that improves performance and user experience.
            </p>
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors duration-300"
            >
              Start Redesign
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
