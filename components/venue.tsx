"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Navigation, Building } from "lucide-react"

const Venue = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="venue" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-12">
            Where to Find Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-green-500/20">
                <Building className="w-12 h-12 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">IEM Management Building</h3>
                <p className="text-lg text-gray-300 mb-6">Kolkata - A hub of innovation and collaboration</p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-400" />
                    <span className="text-white">Prime location in Kolkata</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Navigation className="w-5 h-5 text-blue-400" />
                    <span className="text-white">Easy accessibility</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-purple-400" />
                    <span className="text-white">Modern facilities</span>
                  </div>
                </div>
              </div>

              <motion.a
                href="https://g.co/kgs/swtvWUv"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Open in Google Maps
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-4 border border-green-500/20 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1234567890123!2d88.4234567890123!3d22.5234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMxJzI0LjQiTiA4OMKwMjUnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Venue
