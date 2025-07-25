"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Medal, Award } from "lucide-react"

const Prizes = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const prizes = [
    {
      position: "1st",
      icon: Trophy,
      amount: "₹30,000",
      cash: "₹5,000 cash",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-900/60 to-orange-900/60",
      borderColor: "border-yellow-500/40",
      delay: 0.3,
    },
    {
      position: "2nd",
      icon: Medal,
      amount: "₹15,000",
      cash: "₹2,500 cash",
      gradient: "from-gray-300 to-gray-500",
      bgGradient: "from-gray-800/60 to-slate-800/60",
      borderColor: "border-gray-500/40",
      delay: 0.5,
    },
    {
      position: "3rd",
      icon: Award,
      amount: "₹10,000",
      cash: "₹1,500 cash",
      gradient: "from-amber-600 to-yellow-700",
      bgGradient: "from-amber-900/60 to-yellow-900/60",
      borderColor: "border-amber-500/40",
      delay: 0.7,
    },
  ]

  return (
    <section id="prizes" className="py-16 md:py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-12">
            Prizes & Rewards
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ delay: prize.delay, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-gradient-to-br ${prize.bgGradient} rounded-3xl p-6 md:p-8 border ${prize.borderColor} hover:border-opacity-80 transition-all duration-300 relative overflow-hidden group shadow-2xl hover:shadow-yellow-500/20`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <prize.icon
                    className={`w-12 md:w-16 h-12 md:h-16 mx-auto mb-6 text-transparent bg-gradient-to-r ${prize.gradient} bg-clip-text`}
                    style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))" }}
                  />

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{prize.position} Prize</h3>

                  <div
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent mb-4`}
                  >
                    {prize.amount}
                  </div>

                  <p className="text-gray-200 mb-2 text-sm md:text-base">{prize.cash}</p>
                  <p className="text-gray-300 text-xs md:text-sm">+ exclusive prizes</p>

                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center justify-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${prize.gradient}`} />
                      <span className="text-white font-semibold text-sm md:text-base">Winner</span>
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${prize.gradient}`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-6 border border-purple-500/30 shadow-xl"
          >
            <p className="text-base md:text-lg text-gray-200">
              🎉 All winners will receive cash prizes plus exclusive SMART MAKE-A-THON merchandise and certificates!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Prizes
