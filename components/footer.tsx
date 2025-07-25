"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Heart } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="relative py-16 px-4 bg-gradient-to-t from-slate-900 to-transparent border-t border-purple-500/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AKE-A%20THON-dYKLXHVqY48JcW0gP9D8hkN4oXTzXl.png"
                alt="SMART Logo"
                width={80}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                MAKE-A-THON
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Eastern India's biggest hackathon, bringing together innovators, coders, and creators to build the future.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                { icon: Github, href: "#", color: "hover:text-gray-300" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-slate-800/50 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 border border-purple-500/20 hover:border-purple-400/40`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Prizes", "Schedule"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">More Info</h3>
            <ul className="space-y-3">
              {["Venue", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="border-t border-purple-500/20 pt-8 text-center"
        >
          <p className="text-gray-300 flex items-center justify-center space-x-2">
            <span>© 2025 SMART MAKE-A-THON - Part of Smart Maker Festival 2025</span>
            <Heart className="w-4 h-4 text-red-400" />
          </p>
          <p className="text-gray-400 text-sm mt-2">Built with passion for innovation and collaboration</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
