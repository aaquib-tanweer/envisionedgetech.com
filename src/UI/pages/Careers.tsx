import { useState } from 'react';
import { Layout } from './Layout';
import { motion } from 'framer-motion';
import { careerOpenings } from '@/constants/data/careers';
import { 
  Briefcase, 
  MapPin, 
  Clock,  
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/UI/shadcn/ui/button';
import { SEOHead } from '@/components/SEOHead';

export const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(careerOpenings[0]);

  return (
    <>
      <SEOHead
        title="Careers - Join Our Team at Envision Edge Tech"
        description="Explore exciting career opportunities at Envision Edge Tech. Join our team of innovators and help shape the future of technology."
        keywords="careers, jobs, technology jobs, remote work, software development, web development"
      />
      <Layout>
        <div className="min-h-screen bg-background relative">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute h-full w-full bg-[radial-gradient(circle_at_top_right,_#1E40AF,_transparent_50%)]"></div>
            <div className="absolute h-full w-full bg-[radial-gradient(circle_at_top_left,_#1E3A8A,_transparent_50%)]"></div>
          </div>

          <div className="container mx-auto px-4 py-16">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our Team at{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                  Envision Edge Tech
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Help us shape the future of technology while working with the latest tools and technologies.
              </p>
            </motion.div>

            {/* Job Listings */}
            <div className="grid lg:grid-cols-[350px,1fr] gap-8">
              {/* Job List */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                {careerOpenings.map((job) => (
                  <div
                    key={job.id}
                    onClick={() => setSelectedJob(job)}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedJob.id === job.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-card hover:bg-blue-500/10'
                    }`}
                  >
                    <h3 className="font-semibold mb-2">{job.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Job Details */}
              <motion.div
                key={selectedJob.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card p-6 rounded-lg border border-border"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4">{selectedJob.title}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-blue-500" />
                      <span>{selectedJob.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span>{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>{selectedJob.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="prose prose-blue dark:prose-invert max-w-none">
                  <p className="text-lg mb-6">{selectedJob.description}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedJob.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
                    <ul className="list-disc pl-4 space-y-2">
                      {selectedJob.responsibilities.map((resp) => (
                        <li key={resp}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">How to Apply</h3>
                    <div className="space-y-2 text-sm">
                      <p>To apply for this position, please:</p>
                      <ol className="list-decimal pl-4 space-y-2">
                        <li>Click the "Apply Now" button below to open your email client</li>
                        <li>Include your full name and the position you're applying for in the email body</li>
                        <li>Attach your resume/CV in PDF format</li>
                        <li>Add a brief cover letter explaining why you'd be a great fit for this role</li>
                        <li>Include links to your portfolio/GitHub (if applicable)</li>
                      </ol>
                      <p className="mt-4 text-blue-600 dark:text-blue-400">
                        <strong>Note:</strong> Applications without a resume or proper documentation may not be considered.
                      </p>
                    </div>
                  </div>

                  <Button 
                    size="lg"
                    className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => window.location.href = `mailto:careers@envisionedgetech.com?subject=Application for ${selectedJob.title}`}
                  >
                    Apply Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}; 