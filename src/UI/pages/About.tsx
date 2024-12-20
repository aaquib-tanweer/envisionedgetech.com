import { Card, CardHeader, CardContent } from '../shadcn/ui/card'
import { Layout } from './Layout'
import { members } from '@/constants/data/members'

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
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Meet Our Amazing Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {members.map((member, index) => (
                <Card key={index} className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        src={member.image}
                        alt={member.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Projects</span>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary">
                        {member.projectsInvolved.length}
                      </span>
                    </div>
                  </CardContent>
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