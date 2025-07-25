"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import ParticipationInfo from "@/components/participation-info"
import Prizes from "@/components/prizes"
import Schedule from "@/components/schedule"
import Mascot from "@/components/mascot"
import Venue from "@/components/venue"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CursorTrail from "@/components/cursor-trail"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <CursorTrail />
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <ParticipationInfo />
        <Prizes />
        <Schedule />
        <Mascot />
        <Venue />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
