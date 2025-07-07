import { useState } from 'react';
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
import { JobApplicationModal } from '@/components/JobApplicationModal';
import { Toaster } from 'sonner';

export const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(careerOpenings[0]);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  return (
    <>
      <SEOHead
        title="Careers - Join Our Team at Envision Edge Tech"
        description="Explore exciting career opportunities at Envision Edge Tech. Join our team of innovators and help shape the future of technology."
        keywords="careers, jobs, technology jobs, remote work, software development, web development"
      />
      <div className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center mb-8"
            >
              <div className="glass-premium inline-flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 rounded-full text-gray-900 dark:text-white shadow-xl shadow-blue-500/10 dark:shadow-electric-500/20">
                <Briefcase className="w-4 h-4 text-blue-600 dark:text-electric-400" />
                <span className="text-sm font-medium">Join Our Team</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="block text-gray-900 dark:text-white">Career Opportunities at</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-electric-400 dark:via-electric-500 dark:to-neon-400 bg-clip-text text-transparent animate-gradient">
                Envision Edge Tech
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
            >
              Help us shape the future of technology while working with the latest tools and technologies. 
              Join our team of innovators and build solutions that impact thousands of users worldwide.
            </motion.p>

            {/* Career Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { value: "100%", label: "Remote Work", icon: "🌍" },
                { value: "5+", label: "Open Positions", icon: "💼" },
                { value: "Growth", label: "Opportunities", icon: "📈" },
                { value: "Flexible", label: "Hours", icon: "⏰" },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="glass-premium text-center p-4 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl shadow-lg shadow-blue-500/5 dark:shadow-electric-500/10"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Job Listings */}
          <div className="grid lg:grid-cols-[380px,1fr] gap-8">
            {/* Job List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="glass-premium sticky top-6 p-6 bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl shadow-xl shadow-blue-500/10 dark:shadow-electric-500/20 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Open Positions</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Choose a position to learn more</p>
              </div>
              
              {careerOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  onClick={() => setSelectedJob(job)}
                  className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 backdrop-blur-xl border ${
                    selectedJob.id === job.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-electric-600 dark:to-electric-500 text-white border-blue-500/50 dark:border-electric-500/50 shadow-xl shadow-blue-500/25 dark:shadow-electric-500/25 scale-105'
                      : 'glass-premium bg-white/85 dark:bg-white/5 border-gray-200/50 dark:border-white/10 hover:bg-white/95 dark:hover:bg-white/10 hover:border-blue-500/30 dark:hover:border-electric-500/30 shadow-lg shadow-blue-500/5 dark:shadow-electric-500/10 hover:scale-102'
                  }`}
                >
                  {/* Glow effect for active job */}
                  {selectedJob.id === job.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-electric-600/20 dark:to-electric-500/20 rounded-2xl blur-xl scale-110 -z-10" />
                  )}
                  
                  <div className="flex items-start justify-between mb-3">
                    <h3 className={`font-bold text-lg ${selectedJob.id === job.id ? 'text-white' : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-electric-400'} transition-colors`}>
                      {job.title}
                    </h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedJob.id === job.id 
                        ? 'bg-white/20 text-white' 
                        : 'bg-blue-100 dark:bg-electric-500/20 text-blue-600 dark:text-electric-400'
                    }`}>
                      {job.type}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className={`flex items-center gap-2 text-sm ${selectedJob.id === job.id ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'}`}>
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    <div className={`flex items-center gap-2 text-sm ${selectedJob.id === job.id ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'}`}>
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  
                  <p className={`text-sm leading-relaxed ${selectedJob.id === job.id ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                    {job.description.substring(0, 120)}...
                  </p>
                  
                  {/* Hover indicator */}
                  {selectedJob.id !== job.id && (
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 dark:bg-electric-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Job Details */}
            <motion.div
              key={selectedJob.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-premium sticky top-6 bg-white/90 dark:bg-white/5 p-8 rounded-2xl border border-gray-200/50 dark:border-white/10 backdrop-blur-xl shadow-xl shadow-blue-500/10 dark:shadow-electric-500/20"
            >
              {/* Header */}
              <div className="relative mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-electric-500/10 dark:to-neon-500/10 rounded-2xl border border-blue-200/50 dark:border-electric-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-electric-500/10 dark:to-neon-500/10 rounded-2xl" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedJob.title}</h2>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">Join our innovative team</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-electric-500 text-white rounded-full text-sm font-medium shadow-lg">
                      <Briefcase className="w-4 h-4" />
                      {selectedJob.type}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-xl">
                      <div className="w-10 h-10 bg-blue-500 dark:bg-electric-500 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{selectedJob.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-xl">
                      <div className="w-10 h-10 bg-purple-500 dark:bg-neon-500 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                        <p className="font-semibold text-gray-900 dark:text-white">{selectedJob.experience}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-xl">
                      <div className="w-10 h-10 bg-green-500 dark:bg-emerald-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">💼</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Team Size</p>
                        <p className="font-semibold text-gray-900 dark:text-white">10-15 people</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div className="mb-8 p-6 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-electric-500 rounded-full"></span>
                  Job Description
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{selectedJob.description}</p>
              </div>

              {/* Required Skills */}
              <div className="mb-8 p-6 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 dark:bg-neon-500 rounded-full"></span>
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedJob.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group relative px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-electric-500/20 dark:to-neon-500/20 text-blue-700 dark:text-electric-300 rounded-full text-sm font-medium border border-blue-200/50 dark:border-electric-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-200 cursor-pointer"
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-electric-500/30 dark:to-neon-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-8 p-6 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 dark:bg-emerald-500 rounded-full"></span>
                  Key Responsibilities
                </h3>
                <ul className="space-y-3">
                  {selectedJob.responsibilities.map((resp, index) => (
                    <motion.li 
                      key={resp}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-gray-200/30 dark:border-white/10 rounded-xl"
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-electric-500 dark:to-neon-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* How to Apply */}
              <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-electric-500/10 dark:to-neon-500/10 backdrop-blur-sm border border-blue-200/50 dark:border-electric-500/20 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 dark:bg-electric-500 rounded-full"></span>
                  How to Apply
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">Ready to join our team? Follow these simple steps:</p>
                  <ol className="space-y-2">
                    {[
                      "Click the 'Apply Now' button below",
                      "Fill out the application form with your details", 
                      "Upload your resume in PDF format",
                      "Add a cover letter explaining why you'd be a great fit",
                      "Submit your application and we'll get back to you!"
                    ].map((step, index) => (
                      <li key={step} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-500 dark:bg-electric-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                              </div>

                {/* Apply Button */}
                <motion.button
                  onClick={() => setIsApplicationModalOpen(true)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-electric-600 dark:to-electric-500 hover:from-blue-700 hover:to-purple-700 dark:hover:from-electric-500 dark:hover:to-neon-500 text-white rounded-xl font-semibold text-lg shadow-xl shadow-blue-500/25 dark:shadow-electric-500/25 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Apply Now
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-electric-500 dark:to-neon-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </motion.div>
            </div>
        </div>

      <JobApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
        jobTitle={selectedJob.title}
      />

      <Toaster />
    </>
  );
}; 
