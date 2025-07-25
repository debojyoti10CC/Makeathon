"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Users, Code, Trophy } from "lucide-react"

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)

  const galleryItems = [
    {
      image: "/placeholder.svg?height=400&width=600",
      title: "Hybrid Edition 2024",
      description: "Teams collaborating on innovative solutions",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      title: "Project Presentations",
      description: "Participants showcasing their amazing projects",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      title: "Winners Celebration",
      description: "Celebrating the brilliant minds and their achievements",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      title: "Networking & Mentorship",
      description: "Connecting with industry experts and mentors",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  return (
    <section id="gallery" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-12">
            Previous Edition Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-6 border border-purple-500/20"
            >
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">250+</h3>
              <p className="text-gray-300">Registrations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-2xl p-6 border border-blue-500/20"
            >
              <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Hybrid</h3>
              <p className="text-gray-300">Mode Event</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-2xl p-6 border border-green-500/20"
            >
              <Trophy className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Amazing</h3>
              <p className="text-gray-300">Projects</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="relative bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 border border-purple-500/20 overflow-hidden"
          >
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/40 text-white transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <h3 className="text-2xl font-bold text-white">{galleryItems[currentSlide].title}</h3>

                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/40 text-white transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden mb-6">
                <img
                  src={galleryItems[currentSlide].image || "/placeholder.svg"}
                  alt={galleryItems[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <p className="text-lg text-gray-300 mb-6">{galleryItems[currentSlide].description}</p>

              <div className="flex justify-center space-x-2">
                {galleryItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-purple-400" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
