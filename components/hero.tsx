"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const AnimatedStars = () => {
  const starsRef = useRef<any>()

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.x = state.clock.elapsedTime * 0.05
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return <Stars ref={starsRef} radius={300} depth={60} count={5000} factor={7} saturation={0} fade={true} />
}

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <AnimatedStars />
        </Canvas>
      </div>

      <div className="relative z-10 text-center max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8 mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AKE-A%20THON-dYKLXHVqY48JcW0gP9D8hkN4oXTzXl.png"
              alt="SMART Logo"
              width={200}
              height={80}
              className="h-16 md:h-20 w-auto"
            />
            <div className="text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              MAKE-A-THON
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Eastern India's Biggest Hackathon
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-base md:text-lg lg:text-xl text-gray-300 mb-8"
          >
            Organized by Smart Maker Festival 2025
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-slate-800/70 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 border border-purple-500/30 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6 text-white">
            <div className="bg-slate-700/30 rounded-xl p-4 border border-blue-500/20">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-400">📅 Event Date</h3>
              <p className="text-base md:text-lg">6th & 7th September 2025</p>
            </div>
            <div className="bg-slate-700/30 rounded-xl p-4 border border-purple-500/20">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-purple-400">⏰ Duration</h3>
              <p className="text-base md:text-lg">24-hour overnight hackathon</p>
              <p className="text-sm text-gray-300">Starts 11 AM (6th) – Ends 11 AM (7th)</p>
            </div>
            <div className="md:col-span-2 bg-slate-700/30 rounded-xl p-4 border border-cyan-500/20">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-cyan-400">🏆 Prize Distribution</h3>
              <p className="text-base md:text-lg">4 PM, 7th September 2025</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => scrollToSection("participation-info")}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 border border-purple-400/20"
          >
            Register Now
          </Button>
          <Button
            onClick={() => scrollToSection("venue")}
            className="border-2 border-purple-400 bg-transparent text-purple-400 hover:bg-purple-400 hover:text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            View Venue
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
