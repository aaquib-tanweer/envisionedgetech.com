import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Calendar,
  ArrowRight,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { 
  blogPosts, 
  comparisonPoints, 
  useBlogEngagement, 
  BlogEngagement 
} from './blogUtils.tsx';
import WooCommerceShopifyCoverImage from '../../../assets/images/shopifyvswoocommerce.jpeg';

export const WooCommerceVsShopifyBlog = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, { once: true });
  const { openCalendly } = useBlogEngagement();

  const blogPost = blogPosts[1];

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

          {/* Cover Image */}
          <div className="mb-8">
            <motion.img
              src={WooCommerceShopifyCoverImage}
              alt="WooCommerce vs Shopify - E-commerce Platform Comparison"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
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
      </div>
    </div>
  );
}; 