"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Laptop, Zap, Phone } from "lucide-react"

const ParticipationInfo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="participation-info" className="py-16 md:py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-12">
            Participation Info
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-gradient-to-br from-purple-900/60 to-blue-900/60 rounded-3xl p-6 md:p-8 border border-purple-500/30 shadow-2xl"
            >
              <Users className="w-12 h-12 text-purple-400 mb-6 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Team Requirements</h3>
              <p className="text-base md:text-lg text-gray-200 mb-4">Team size: 2–4 members</p>
              <p className="text-red-400 font-semibold text-sm md:text-base">No solo participation allowed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-gradient-to-br from-green-900/60 to-blue-900/60 rounded-3xl p-6 md:p-8 border border-green-500/30 shadow-2xl"
            >
              <div className="text-4xl mb-6">💰</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Registration Fee</h3>
              <p className="text-2xl md:text-3xl font-bold text-green-400">FREE</p>
              <p className="text-gray-200 mt-2 text-sm md:text-base">No registration fee required!</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="bg-gradient-to-br from-blue-900/60 to-cyan-900/60 rounded-3xl p-6 md:p-8 border border-blue-500/30 shadow-2xl"
            >
              <Laptop className="w-12 h-12 text-blue-400 mb-6 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">What to Bring</h3>
              <ul className="text-gray-200 space-y-2 text-sm md:text-base">
                <li>• Your own laptops</li>
                <li>• Chargers</li>
                <li>• Creative minds!</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="bg-gradient-to-br from-yellow-900/60 to-orange-900/60 rounded-3xl p-6 md:p-8 border border-yellow-500/30 shadow-2xl"
            >
              <Zap className="w-12 h-12 text-yellow-400 mb-6 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Important Note</h3>
              <p className="text-yellow-400 font-semibold text-sm md:text-base">
                Please carry power outlets/spike guards if possible
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="bg-slate-800/60 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-purple-500/30 shadow-2xl"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Event Organizers</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center justify-center sm:justify-start space-x-4 bg-slate-700/30 rounded-xl p-4 border border-purple-500/20">
                <Phone className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="text-white font-semibold text-sm md:text-base">Debangshu Chatterjee</p>
                  <p className="text-purple-400 text-sm md:text-base">6290277345</p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-4 bg-slate-700/30 rounded-xl p-4 border border-blue-500/20">
                <Phone className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="text-white font-semibold text-sm md:text-base">Hans Raj Vats</p>
                  <p className="text-blue-400 text-sm md:text-base">7903671909</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ParticipationInfo
