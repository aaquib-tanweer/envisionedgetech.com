import { useState, useRef } from 'react'
import { projectList } from '@/constants/data/projects'
import { Globe } from 'lucide-react'
import { Button } from '../shadcn/ui/button'
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

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <Card
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="h-full flex flex-col justify-between relative z-10 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900"
      >
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)`,
            mixBlendMode: 'soft-light',
          }}
        />
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
      </Card>
    </motion.div>
  )
}

export default function Projects() {
  return (
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
          {projectList.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
