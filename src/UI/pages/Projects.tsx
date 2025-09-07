import { useState, useRef } from 'react'
import { projectList } from '@/constants/data/projects'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../shadcn/ui/card'
import { Badge } from '../shadcn/ui/badge'
import { motion } from 'framer-motion'
import { BackgroundBeams } from '../aceternity/background-beams'

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      })
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Mobile Application':
        return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
      case 'Web Application':
        return 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
      case 'Web & Mobile Application':
        return 'from-green-500/20 to-emerald-500/20 border-green-500/30'
      case 'SaaS Platform':
        return 'from-orange-500/20 to-red-500/20 border-orange-500/30'
      case 'Enterprise Software':
        return 'from-indigo-500/20 to-blue-500/20 border-indigo-500/30'
      default:
        return 'from-gray-500/20 to-slate-500/20 border-gray-500/30'
    }
  }

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'Mobile Application':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
      case 'Web Application':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20'
      case 'Web & Mobile Application':
        return 'bg-green-500/10 text-green-400 border-green-500/20'
      case 'SaaS Platform':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/20'
      case 'Enterprise Software':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <Card
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`h-full flex flex-col relative overflow-hidden backdrop-blur-sm border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-electric-500/10 ${getTypeColor(project.type)}`}
      >
        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)`,
          }}
        />
<<<<<<< Updated upstream
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <CardTitle className="text-xl font-semibold text-blue-900 dark:text-blue-100">
              {project.title}
            </CardTitle>
            <Badge
              variant="secondary"
              className="bg-blue-200 text-blue-900 dark:bg-blue-900 dark:text-blue-100"
            >
              {project.type}
            </Badge>
          </div>
          <CardDescription className="text-blue-800 dark:text-blue-200">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg object-cover w-full h-48"
          />
        </CardContent>
        <CardFooter className="pt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
           
          </a>
        </CardFooter>
=======
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-electric-500/20 via-transparent to-neon-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
        
        {/* Content */}
        <div className="relative z-10 p-6 flex flex-col h-full">
          <CardHeader className="p-0 mb-4">
            <div className="flex justify-between items-start mb-3">
              <CardTitle className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {project.title}
              </CardTitle>
              <Badge
                variant="outline"
                className={`${getTypeBadgeColor(project.type)} backdrop-blur-sm`}
              >
                {project.type}
              </Badge>
            </div>
            <CardDescription className="text-gray-300 leading-relaxed">
              {project.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-0 flex-grow flex flex-col">
            <div className="relative overflow-hidden rounded-xl mb-4 flex-grow">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Year badge */}
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400 font-medium">
                {project.year}
              </span>
              <motion.div
                className="w-2 h-2 rounded-full bg-gradient-to-r from-electric-500 to-neon-500"
                animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </CardContent>
        </div>
>>>>>>> Stashed changes
      </Card>
    </motion.div>
  )
}

export default function Projects() {
  return (
<<<<<<< Updated upstream
    <section className="bg-blue-50 dark:bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-bold text-5xl mb-12 text-center text-blue-900 dark:text-blue-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Past Works
          <span className="text-blue-500 dark:text-blue-500">.</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
    <section className="relative min-h-screen py-24 overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0 -z-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-electric-200 to-neon-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our innovative solutions and cutting-edge projects that are transforming industries and creating digital experiences that matter.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
>>>>>>> Stashed changes
          {projectList.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.p
            className="text-gray-400 text-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Ready to start your next project?{' '}
            <span className="text-electric-400 font-semibold cursor-pointer hover:text-neon-400 transition-colors">
              Let's build something amazing together.
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
