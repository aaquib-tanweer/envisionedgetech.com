import { members } from '@/constants/data/members'
import { Card } from '../shadcn/ui/card'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { SEOHead } from '@/components/SEOHead'
import { seoConfig } from '@/constants/seo.config'

export const About = () => {
  return (
    <>
      <SEOHead {...seoConfig.about} />
      <section className="min-h-screen py-16 bg-background relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute h-full w-full bg-[radial-gradient(circle_at_top_right,_#1E40AF,_transparent_50%)]"></div>
          <div className="absolute h-full w-full bg-[radial-gradient(circle_at_top_left,_#1E3A8A,_transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div 
            className="max-w-4xl mx-auto mb-16 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2 text-center">
              <motion.h2 
                className="text-blue-600 dark:text-blue-400 text-lg font-semibold tracking-wide uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                About Us
              </motion.h2>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Delivering technology that drives growth and efficiency.
              </motion.h1>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg blur opacity-25"></div>
              <div className="relative bg-background/95 backdrop-blur-sm rounded-lg p-6 text-lg leading-relaxed">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-2xl">Envision Edge Tech</span> specializes in developing intelligent software solutions that empower businesses in sectors such as hospitality, education, and healthcare. Our expertise lies in building AI/ML-driven Management Information Systems (MIS), Enterprise Resource Planning (ERP), and Customer Relationship Management (CRM) platforms. We also offer end-to-end web and mobile application development services, ensuring scalable and cutting-edge digital solutions for our clients.
              </div>
            </motion.div>
          </motion.div>

          {/* Team Section */}
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                Meet Our Amazing Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The talented individuals behind our innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="group bg-gradient-to-br from-background/50 to-background border-blue-600/10 backdrop-blur-sm">
                    <div className="relative p-6">
                      <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-50" />
                      <div className="relative z-10">
                        <div className="mb-6 relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/5 rounded-full" />
                          <div className="w-32 h-32 mx-auto rounded-full border-2 border-blue-600/20 flex items-center justify-center bg-blue-100/50">
                            <User className="w-16 h-16 text-blue-500" />
                          </div>
                        </div>
                        
                        <div className="text-center space-y-3">
                          <h3 className="text-xl font-bold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-sm text-muted-foreground font-medium">
                            {member.role}
                          </p>
                          <div className="pt-2 border-t border-blue-600/10">
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-xs text-muted-foreground">Projects Completed</span>
                              <span className="inline-flex items-center rounded-full bg-blue-600/10 px-2.5 py-0.5 text-xs font-medium text-blue-600 dark:text-blue-400">
                                {member.projectsInvolved.length}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;