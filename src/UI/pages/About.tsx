import { members } from '@/constants/data/members'
import { Card } from '../shadcn/ui/card'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { User, ArrowRight, Sparkles, Award, Users, Globe, Zap, CheckCircle2, Rocket, Shield, Target } from 'lucide-react'
import { SEOHead } from '@/components/SEOHead'
import { seoConfig } from '@/constants/seo.config'
import { useRef } from 'react'
import { Link } from '@tanstack/react-router'

declare global {
  interface Window {
    Calendly?: any;
  }
}

const CompanyValue = ({ icon: IconComponent, title, description, index }: {
  icon: any,
  title: string,
  description: string,
  index: number
}) => {
  const valueRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(valueRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={valueRef}
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        transition: { 
          duration: 0.6, 
          delay: index * 0.1,
          ease: "easeOut"
        }
      } : {}}
      className="group relative"
    >
      <motion.div
        whileHover={{ 
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        className="relative p-8 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg dark:shadow-none"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 dark:from-electric-500/10 to-purple-500/10 dark:to-neon-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-electric-500 dark:to-electric-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 dark:shadow-electric-500/25 mb-6">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TeamMember = ({ member, index }: { member: any, index: number }) => {
  const memberRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(memberRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={memberRef}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          duration: 0.5, 
          delay: index * 0.1,
          ease: "easeOut"
        }
      } : {}}
      className="group"
    >
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 overflow-hidden shadow-lg dark:shadow-none"
      >
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 dark:from-electric-500/10 to-purple-500/10 dark:to-neon-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10 text-center">
          {/* Avatar */}
          <div className="relative mx-auto mb-6">
            <div className="w-24 h-24 mx-auto rounded-2xl border-2 border-gray-200 dark:border-white/20 bg-gradient-to-br from-blue-500/20 dark:from-electric-500/20 to-purple-500/20 dark:to-neon-500/20 flex items-center justify-center group-hover:border-blue-500/50 dark:group-hover:border-electric-500/50 transition-colors duration-300">
              <User className="w-12 h-12 text-gray-700 dark:text-white/80" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 dark:from-electric-500/20 to-purple-500/20 dark:to-neon-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110" />
          </div>
          
          {/* Name and Role */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-electric-300 transition-colors">
            {member.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">
            {member.role}
          </p>
          
          {/* Projects Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full">
            <Award className="w-4 h-4 text-blue-600 dark:text-electric-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {member.projectsInvolved.length} Projects
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CompanyStats = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true });

  const stats = [
    { value: "25+", label: "Global Clients", icon: Globe },
    { value: "40+", label: "Projects Delivered", icon: Rocket },
    { value: "6+", label: "Countries Served", icon: Target },
    { value: "98%", label: "Client Satisfaction", icon: Shield },
  ];

  return (
    <motion.div
      ref={statsRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          className="text-center p-6 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-white dark:hover:bg-white/10 transition-all duration-300 group shadow-lg dark:shadow-none"
        >
          <stat.icon className="w-8 h-8 text-blue-600 dark:text-electric-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/envisionedgetech/30min",
      });
    }
  };

  const companyValues = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "We leverage cutting-edge technologies and methodologies to deliver solutions that set industry standards."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant infrastructure with enterprise-grade security measures protecting your data."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance and scalable architecture ensuring your solutions perform at peak efficiency."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our mission. We build lasting partnerships through exceptional service delivery."
    }
  ];

  return (
    <>
      <SEOHead {...seoConfig.about} />
      <div 
        ref={containerRef}
        className="relative py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div 
            ref={heroRef}
            className="text-center mb-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full text-gray-900 dark:text-white shadow-lg dark:shadow-none">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-neon-400" />
                <span className="text-sm font-medium">About Envision Edge Tech</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-8"
            >
              <span className="block text-gray-900 dark:text-white">Delivering Technology That</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-electric-400 dark:via-electric-500 dark:to-neon-400 bg-clip-text text-transparent animate-gradient">
                Drives Growth
              </span>
            </motion.h1>

            {/* Company Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative p-8 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl shadow-lg dark:shadow-none">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 dark:from-electric-500/5 to-purple-500/5 dark:to-neon-500/5 rounded-3xl" />
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    <span className="text-blue-600 dark:text-electric-400 font-bold text-2xl md:text-3xl">Envision Edge Tech</span> specializes in developing intelligent software solutions that empower businesses across hospitality, education, and healthcare sectors.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Our expertise spans AI/ML-driven Management Information Systems (MIS), Enterprise Resource Planning (ERP), and Customer Relationship Management (CRM) platforms. We deliver end-to-end web and mobile application development services, ensuring scalable and cutting-edge digital solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Company Stats */}
          <div className="mb-20">
            <CompanyStats />
          </div>

          {/* Company Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The principles that guide every decision and drive our commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <CompanyValue
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Meet Our Amazing Team
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The talented professionals behind our innovative solutions and exceptional client experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {members.map((member, index) => (
                <TeamMember
                  key={index}
                  member={member}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center pt-20 border-t border-gray-200 dark:border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's build something extraordinary together. Schedule a consultation to discuss your vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={openCalendly}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-electric-600 to-electric-500 text-white rounded-xl font-semibold text-lg overflow-hidden shadow-xl shadow-electric-500/25"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-electric-500 to-neon-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="block px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/15 transition-all duration-300 text-center"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;