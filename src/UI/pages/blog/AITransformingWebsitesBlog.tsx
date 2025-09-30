import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Calendar,
  ArrowRight
} from 'lucide-react';
import {
  blogPosts,
  useBlogEngagement,
  BlogEngagement
} from './blogUtils.tsx';
import AICoverImage from '../../../assets/images/AI.png';

export const AITransformingWebsitesBlog = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, { once: true });
  const { openCalendly } = useBlogEngagement();

  const blogPost = blogPosts[3];

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
              <div className="w-1 h-8 bg-emerald-500"></div>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider text-sm">
                {blogPost.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight font-serif">
              How AI is Transforming the Way Websites Are Built
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Artificial Intelligence (AI) is reshaping every industry, and web development is no exception. From automated design to personalized user experiences, AI tools are changing the way websites are built and maintained.
            </p>

            {/* Blog Meta */}
            <div className="flex items-center gap-6 mt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
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

          {/* Cover Image */}
          <div className="mb-8">
            <motion.img
              src={AICoverImage}
              alt="AI Transforming Websites - Artificial Intelligence in Web Development"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none blog-content">
            {/* 1. AI-Powered Design Tools */}
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <span className="text-4xl">🎨</span>
                AI-Powered Design Tools
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                AI simplifies layout creation, color selection, and responsive design by learning from best practices and brand inputs. Designers can generate multiple variants, accelerate wireframes, and enforce consistency across breakpoints.
              </p>
              <ul className="list-disc pl-6 marker:text-emerald-500">
                <li className="text-gray-700 dark:text-gray-300">Automated layout proposals and design systems alignment</li>
                <li className="text-gray-700 dark:text-gray-300">Smart color palettes and accessibility-aware contrast suggestions</li>
                <li className="text-gray-700 dark:text-gray-300">Responsive components generated from a single source of truth</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                Examples include <strong>Figma AI</strong> for rapid UI generation, <strong>Wix ADI</strong> for site scaffolding, and <strong>Framer AI</strong> for production-ready sections.
              </p>
            </div>

            {/* 2. Smarter Content Creation */}
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <span className="text-4xl">✍️</span>
                Smarter Content Creation
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                AI-driven copywriting assistants can generate blogs, product descriptions, CTAs, and meta tags tuned for tone and SEO. This dramatically reduces time-to-market for content-heavy websites while maintaining brand voice.
              </p>
              <ul className="list-disc pl-6 marker:text-emerald-500">
                <li className="text-gray-700 dark:text-gray-300">Draft-first workflows with human-in-the-loop editing</li>
                <li className="text-gray-700 dark:text-gray-300">Automated localization and A/B test variant generation</li>
                <li className="text-gray-700 dark:text-gray-300">Programmatic SEO content at scale</li>
              </ul>
            </div>

            {/* 3. Personalized User Experiences */}
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <span className="text-4xl">🧠</span>
                Personalized User Experiences
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                By analyzing behavior, AI recommends content and products to each visitor. Dynamic landing pages adapt in real-time, improving engagement and conversion—especially in e-commerce.
              </p>
              <ul className="list-disc pl-6 marker:text-emerald-500">
                <li className="text-gray-700 dark:text-gray-300">Recommendation engines for articles and products</li>
                <li className="text-gray-700 dark:text-gray-300">Audience segments with adaptive CTAs and layouts</li>
                <li className="text-gray-700 dark:text-gray-300">Predictive search and intent-aware navigation</li>
              </ul>
            </div>

            {/* 4. AI in Testing & Maintenance */}
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <span className="text-4xl">🧪</span>
                AI in Testing & Maintenance
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                AI automates bug detection, performance optimization, and predictive maintenance. It identifies flaky tests, flags security regressions, and suggests fixes before incidents impact users.
              </p>
              <ul className="list-disc pl-6 marker:text-emerald-500">
                <li className="text-gray-700 dark:text-gray-300">Visual regression and accessibility testing at scale</li>
                <li className="text-gray-700 dark:text-gray-300">Performance budgets with AI-driven tuning suggestions</li>
                <li className="text-gray-700 dark:text-gray-300">Threat detection and anomaly alerts to reduce downtime</li>
              </ul>
            </div>

            {/* 5. The Future of AI in Web Development */}
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <span className="text-4xl">🚀</span>
                The Future of AI in Web Development
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                AI won’t replace developers—it will act as a co-pilot. Teams will focus more on creativity, strategy, and problem-solving while AI handles repetitive tasks across design, code, and content pipelines.
              </p>
            </div>

            {/* Conclusion */}
            <div className="glass-premium bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl p-8 mb-12 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conclusion</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                AI is no longer a futuristic concept—it’s a practical tool driving innovation in web development today. Businesses adopting AI-powered solutions will enjoy faster development cycles, better user experiences, and a stronger digital presence.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-8 text-center text-white shadow-lg">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <span className="text-4xl">📞</span>
                Ready to build with AI?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Let’s modernize your website with AI-driven design, content, and performance.
              </p>
              <motion.button
                onClick={openCalendly}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Engagement Section */}
          <BlogEngagement blogId={4} />
        </motion.div>
      </div>
    </div>
  );
};



