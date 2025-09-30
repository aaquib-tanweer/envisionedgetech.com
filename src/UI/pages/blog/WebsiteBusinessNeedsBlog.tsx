import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Calendar,
  ArrowRight
} from 'lucide-react';
import { 
  blogPosts, 
  websiteFeatures, 
  websiteBenefits, 
  useBlogEngagement, 
  BlogEngagement 
} from './blogUtils.tsx';

export const WebsiteBusinessNeedsBlog = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, { once: true });
  const { openCalendly } = useBlogEngagement();

  const blogPost = blogPosts[0];

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
          <div className="prose prose-lg dark:prose-invert max-w-none blog-content">
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
      </div>
    </div>
  );
}; 