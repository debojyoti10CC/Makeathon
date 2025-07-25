"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, Calendar, Trophy, Coffee, Code, Users } from "lucide-react"

const Schedule = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scheduleItems = [
    {
      time: "11:00 AM",
      date: "6th Sept",
      title: "Opening Ceremony & Kickoff",
      description: "Welcome address, rules explanation, and team formation",
      icon: Users,
      color: "text-purple-400",
    },
    {
      time: "12:00 PM",
      date: "6th Sept",
      title: "Coding Sessions Begin",
      description: "Teams start working on their projects",
      icon: Code,
      color: "text-blue-400",
    },
    {
      time: "6:00 PM",
      date: "6th Sept",
      title: "Mentor Visits & Guidance",
      description: "Industry experts provide guidance and feedback",
      icon: Coffee,
      color: "text-green-400",
    },
    {
      time: "12:00 AM",
      date: "7th Sept",
      title: "Midnight Fun Activities",
      description: "Games, refreshments, and progress check",
      icon: Coffee,
      color: "text-yellow-400",
    },
    {
      time: "11:00 AM",
      date: "7th Sept",
      title: "Submission Deadline",
      description: "Final project submissions and presentations",
      icon: Clock,
      color: "text-red-400",
    },
    {
      time: "4:00 PM",
      date: "7th Sept",
      title: "Prize Distribution & Closing",
      description: "Winners announcement and closing ceremony",
      icon: Trophy,
      color: "text-orange-400",
    },
  ]

  return (
    <section id="schedule" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-12">
            Event Schedule
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500" />

            <div className="space-y-8">
              {scheduleItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-slate-900 z-10" />

                  {/* Content */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"} pl-16 md:pl-0`}
                  >
                    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400 text-sm">{item.date}</span>
                          <Clock className="w-4 h-4 text-gray-400 ml-2" />
                          <span className="text-white font-semibold">{item.time}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Schedule
