"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Phone, Mail, Send, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16 md:py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-12">
            Get in Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-8">Event Organizers</h3>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-900/60 to-blue-900/60 rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg md:text-xl font-bold text-white">Debangshu Chatterjee</h4>
                      <div className="flex items-center space-x-2 mt-2">
                        <Phone className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 font-semibold text-sm md:text-base">6290277345</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-900/60 to-cyan-900/60 rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg md:text-xl font-bold text-white">Hans Raj Vats</h4>
                      <div className="flex items-center space-x-2 mt-2">
                        <Phone className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 font-semibold text-sm md:text-base">7903671909</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/30 shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-lg md:text-xl font-bold text-white">Email Us</h4>
                </div>
                <p className="text-gray-200 text-sm md:text-base">
                  For any queries or additional information, feel free to reach out to our organizers directly.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-purple-500/30 shadow-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">Send us a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-slate-700/70 border-slate-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20 h-12 text-base"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-700/70 border-slate-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20 h-12 text-base"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-slate-700/70 border-slate-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20 resize-none text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 text-base md:text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
