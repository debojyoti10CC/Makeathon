"use client"

import { useEffect, useState } from "react"

interface TrailPoint {
  x: number
  y: number
  id: number
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let animationId: number

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const updateTrail = () => {
      setTrail((prevTrail) => {
        const newTrail = [...prevTrail]

        // Add new point
        newTrail.push({
          x: mousePosition.x,
          y: mousePosition.y,
          id: Date.now(),
        })

        // Keep only last 10 points
        if (newTrail.length > 10) {
          newTrail.shift()
        }

        return newTrail
      })

      animationId = requestAnimationFrame(updateTrail)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animationId = requestAnimationFrame(updateTrail)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [mousePosition])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: ((index + 1) / trail.length) * 0.8,
            transform: `scale(${(index + 1) / trail.length})`,
            boxShadow: "0 0 10px rgba(96, 165, 250, 0.5)",
          }}
        />
      ))}
    </div>
  )
}

export default CursorTrail
