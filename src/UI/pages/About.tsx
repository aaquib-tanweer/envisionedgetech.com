import { Layout } from './Layout'
import { members } from '@/constants/data/members'
import { Card } from '../shadcn/ui/card'

export const About = () => {
  return (
    <Layout>
      <section className="min-h-screen py-16 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-16 space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-primary text-lg font-semibold tracking-wide uppercase">About Us</h2>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Delivering technology that drives growth and efficiency.
              </h1>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-25"></div>
              <div className="relative bg-background/95 backdrop-blur-sm rounded-lg p-6 text-lg leading-relaxed">
                <span className="text-primary font-bold text-2xl">Envision Edge Tech</span> specializes in developing intelligent software solutions that empower businesses in sectors such as hospitality, education, and healthcare. Our expertise lies in building AI/ML-driven Management Information Systems (MIS), Enterprise Resource Planning (ERP), and Customer Relationship Management (CRM) platforms. We also offer end-to-end web and mobile application development services, ensuring scalable and cutting-edge digital solutions for our clients.
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Meet Our Amazing Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The talented individuals behind our innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {members.map((member, index) => (
                <Card 
                  key={index} 
                  className="group bg-gradient-to-br from-background/50 to-background border-primary/10 backdrop-blur-sm"
                >
                  <div className="relative p-6">
                    <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-50" />
                    <div className="relative z-10">
                      <div className="mb-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full" />
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-primary/20"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="text-center space-y-3">
                        <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {member.role}
                        </p>
                        <div className="pt-2 border-t border-primary/10">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-xs text-muted-foreground">Projects Completed</span>
                            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                              {member.projectsInvolved.length}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;