import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    content: "Working with this team has transformed our business. Their innovative solutions and dedication to excellence are unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen", 
    role: "CTO, InnovateLabs",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    content: "The level of technical expertise and customer service we received was exceptional. They truly understand modern business needs.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Director, FutureScale", 
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "Their solutions have helped us achieve remarkable growth. The attention to detail and support is outstanding.",
    rating: 5
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "COO, CloudNine",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    content: "The team's ability to deliver complex solutions on time and within budget has been crucial to our success.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Zhang",
    role: "VP Engineering, DataFlow",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    content: "Their technical prowess and commitment to innovation have helped us stay ahead of the competition.",
    rating: 5
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Founder, TechStart",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    content: "From concept to execution, they've been an invaluable partner in our digital transformation journey.",
    rating: 5
  },
  {
    id: 7,
    name: "Maria Garcia",
    role: "CIO, GlobalTech",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    content: "Their solutions are not just innovative but also scalable and future-proof. Exactly what we needed.",
    rating: 5
  },
  {
    id: 8,
    name: "Robert Kim",
    role: "Director, NextGen Solutions",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    content: "The team's expertise in cutting-edge technologies has been instrumental in modernizing our infrastructure.",
    rating: 5
  }
]

export const ClientsTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAutoScrollPaused) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(timer)
  }, [isAutoScrollPaused])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-muted/50 to-background dark:from-black dark:via-zinc-900 dark:to-black"
      onMouseEnter={() => setIsAutoScrollPaused(true)}
      onMouseLeave={() => setIsAutoScrollPaused(false)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(234,179,8,.2)_50%,transparent_75%,transparent_100%)] bg-64 animate-pattern"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Client Success Stories
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-[1fr,1.5fr] gap-8 items-center bg-gradient-to-br from-background/80 via-muted/80 to-background/80 dark:from-zinc-950/80 dark:via-zinc-900/80 dark:to-zinc-950/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-yellow-500/20 shadow-xl shadow-yellow-500/5"
            >
              <div className="flex flex-col items-center md:items-start space-y-6">
                <div className="w-32 h-32 rounded-full ring-4 ring-yellow-500/30 overflow-hidden shadow-lg shadow-yellow-500/20">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="font-bold text-2xl text-foreground mb-1">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-yellow-500 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>

                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -left-6 text-6xl text-yellow-500/20">"</div>
                <p className="text-foreground/90 text-lg md:text-xl leading-relaxed italic relative z-10">
                  {testimonials[currentIndex].content}
                </p>
                <div className="absolute -bottom-6 -right-6 text-6xl text-yellow-500/20">"</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center mt-12 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-muted/80 hover:bg-muted text-yellow-500 transition-all border border-yellow-500/20 hover:border-yellow-500/40 shadow-lg hover:shadow-yellow-500/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-yellow-500 w-8 shadow-md shadow-yellow-500/50'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-muted/80 hover:bg-muted text-yellow-500 transition-all border border-yellow-500/20 hover:border-yellow-500/40 shadow-lg hover:shadow-yellow-500/10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}