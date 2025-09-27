import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Calendar,
  ArrowRight,
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import { 
  blogPosts, 
  useBlogEngagement, 
  BlogEngagement 
} from './blogUtils.tsx';
import WebDevTrendsCoverImage from '../../../assets/images/Webdevelopmenttrends.jpeg';

export const WebDevelopmentTrends2025Blog = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, { once: true });
  const { openCalendly } = useBlogEngagement();

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

          {/* Cover Image */}
          <div className="mb-8">
            <motion.img
              src={WebDevTrendsCoverImage}
              alt="Web Development Trends 2025 - Future Technologies and Innovations"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
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
      </div>
    </div>
  );
}; 