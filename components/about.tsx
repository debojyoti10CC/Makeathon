"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-16 md:py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8">
            About SMART MAKE-A-THON
          </h2>

          <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl p-6 md:p-12 border border-purple-500/30 shadow-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-8"
            >
              SMART MAKE-A-THON, part of Smart Maker Festival 2025, is where innovators, coders, and creators come
              together to build solutions overnight. In its very first edition on 21st & 22nd September 2024, held in
              hybrid mode, it drew over 250+ registrations and made a huge impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-12"
            >
              This year, the festival proudly brings you an even bigger, bolder onsite edition.
            </motion.p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: "🚀",
                  title: "Foster Innovation",
                  description: "Encourage creative thinking and breakthrough solutions",
                },
                {
                  icon: "🤝",
                  title: "Connect & Collaborate",
                  description: "Network with mentors, experts, and like-minded peers",
                },
                {
                  icon: "💡",
                  title: "Solve Real Challenges",
                  description: "Tackle real-world problems in a thrilling overnight marathon",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                  className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="text-3xl md:text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
