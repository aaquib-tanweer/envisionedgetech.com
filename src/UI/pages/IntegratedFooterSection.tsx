import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { 
  HelpCircle, 
  Sparkles, 
  Mail, 
  ArrowRight, 
  Code2,
  Zap,
  Shield,
  Globe,
  Send,
  User,
  Phone,
  MessageSquare,
  Building
} from 'lucide-react';
import { faqs } from '@/constants/data/faqs';
import { companyDataConstants } from '@/constants/data/companyData.constant';
import { Input } from '@/UI/shadcn/ui/input';
import { Button } from '@/UI/shadcn/ui/button';
import { Textarea } from '@/UI/shadcn/ui/textarea';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/UI/shadcn/ui/accordion';

const TechLogo = ({ src, alt, delay }: { src: string; alt: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="w-16 h-16 bg-white/90 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 rounded-2xl flex items-center justify-center hover:bg-white dark:hover:bg-white/15 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg dark:group-hover:shadow-electric-500/20">
      <img
        src={src}
        alt={alt}
        className="h-8 w-8 transition-all duration-300"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 dark:from-electric-500/20 to-purple-500/20 dark:to-neon-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
  </motion.div>
);

const StatCard = ({ icon: Icon, value, label, delay }: { 
  icon: any, 
  value: string, 
  label: string, 
  delay: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="text-center group"
  >
    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-electric-500 dark:to-electric-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25 dark:shadow-electric-500/25 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-electric-400 transition-colors">
      {value}
    </div>
    <div className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">
      {label}
    </div>
  </motion.div>
);

export const IntegratedFooterSection = () => {
  const [activeSection, setActiveSection] = useState<'faq' | 'contact' | 'tech'>('faq');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const techLogos = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", 
    "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
  ];

  const stats = [
    { icon: Globe, value: "35+", label: "Projects" },
    { icon: Shield, value: "99.2%", label: "Uptime" },
    { icon: Zap, value: "24/7", label: "Support" },
    { icon: Code2, value: "12+", label: "Developers" }
  ];

  const navigationTabs = [
    { id: 'faq', label: 'Questions', icon: HelpCircle },
    { id: 'contact', label: 'Get in Touch', icon: Mail },
    { id: 'tech', label: 'Our Stack', icon: Code2 }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            website: formData.website,
            message: formData.message,
            status: 'new'
          }
        ]);

      if (error) {
        console.error('Error submitting form:', error);
        toast.error('Failed to send message. Please try again.');
      } else {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          website: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={sectionRef} className="relative">
      {/* Seamless background transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 dark:via-electric-950/30 to-gray-50/50 dark:to-brand-950/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="flex bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 rounded-2xl p-2 shadow-xl dark:shadow-none">
            {navigationTabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as 'faq' | 'contact' | 'tech')}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-electric-600 dark:to-electric-500 text-white shadow-lg shadow-blue-500/25 dark:shadow-electric-500/25'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Content Area */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          {activeSection === 'faq' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Frequently Asked </span>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-electric-400 dark:via-electric-500 dark:to-neon-400 bg-clip-text text-transparent">
                    Questions
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Everything you need to know about our services and solutions.
                </p>
              </div>

              <div className="bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-3xl p-8 shadow-xl dark:shadow-none">
                <Accordion type="single" collapsible>
                  {faqs.slice(0, 5).map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <AccordionItem
                        value={faq.question}
                        className="border-b border-gray-200/50 dark:border-white/10 last:border-b-0"
                      >
                        <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-electric-400 transition-colors duration-300 py-6">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed pb-6">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Ready to Join Our </span>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-electric-400 dark:via-electric-500 dark:to-neon-400 bg-clip-text text-transparent">
                    Success Stories?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Let's discuss how we can help transform your business and achieve similar results.
                </p>
              </div>

              <div className="bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-3xl p-8 shadow-xl dark:shadow-none">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="border-gray-200/50 dark:border-white/20 bg-white/80 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-electric-500"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                        className="border-gray-200/50 dark:border-white/20 bg-white/80 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-electric-500"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="border-gray-200/50 dark:border-white/20 bg-white/80 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-electric-500"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Company Name
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter your company name"
                        className="border-gray-200/50 dark:border-white/20 bg-white/80 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-electric-500"
                      />
                    </div>

                    {/* Website */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <Globe className="w-4 h-4 inline mr-2" />
                        Website URL
                      </label>
                      <Input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="www.your-website.com"
                        className="border-gray-200/50 dark:border-white/20 bg-white/80 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-electric-500"
                      />
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Project Details *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project requirements, timeline, and goals..."
                        required
                        rows={6}
                        className="border-gray-200/50 dark:border-white/20 bg-white/80 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-electric-500 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-electric-600 dark:to-electric-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-electric-500 dark:hover:to-neon-500 text-white rounded-xl font-semibold text-lg shadow-xl shadow-blue-500/25 dark:shadow-electric-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          Start Your Success Story
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {activeSection === 'tech' && (
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900 dark:text-white">Powered by </span>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-electric-400 dark:via-electric-500 dark:to-neon-400 bg-clip-text text-transparent">
                    Cutting-Edge Tech
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  We use the latest technologies to build robust, scalable solutions.
                </p>
              </div>

              <div className="grid grid-cols-4 md:grid-cols-8 gap-6 mb-12">
                {techLogos.map((logo, index) => (
                  <TechLogo
                    key={index}
                    src={logo}
                    alt={`Technology ${index + 1}`}
                    delay={index * 0.1}
                  />
                ))}
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <StatCard key={index} {...stat} delay={index * 0.1} />
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Universal CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 dark:from-electric-500/10 dark:via-electric-500/10 dark:to-neon-500/10 backdrop-blur-xl border border-blue-200/50 dark:border-electric-500/20 rounded-3xl p-12 shadow-xl dark:shadow-none"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join 25+ companies that trust us to deliver exceptional digital solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={`mailto:${companyDataConstants.emails[0]}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-electric-600 dark:to-electric-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-electric-500 dark:hover:to-neon-500 text-white rounded-xl font-semibold text-lg shadow-xl shadow-blue-500/25 dark:shadow-electric-500/25 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className="block px-8 py-4 bg-white/90 dark:bg-white/10 backdrop-blur-sm border border-gray-200/50 dark:border-white/20 text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:bg-white dark:hover:bg-white/15 transition-all duration-300 text-center"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 