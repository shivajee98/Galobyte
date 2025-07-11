"use client"

import { useEffect, useRef } from "react"

export default function BlackHole() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationFrame: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      // Position black hole in upper right area
      const centerX = canvas.width * 0.85
      const centerY = canvas.height * 0.15
      const maxRadius = 150

      // Create multiple concentric circles for the accretion disk
      for (let i = 0; i < 8; i++) {
        const radius = (maxRadius / 8) * (i + 1)
        const opacity = ((8 - i) / 8) * 0.3
        const rotationSpeed = 0.5 / (i + 1)

        // Create gradient for each ring
        const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.8, centerX, centerY, radius)
        gradient.addColorStop(0, `rgba(255, 215, 0, ${opacity * 0.8})`)
        gradient.addColorStop(0.5, `rgba(255, 140, 0, ${opacity * 0.6})`)
        gradient.addColorStop(1, `rgba(255, 69, 0, ${opacity * 0.2})`)

        // Draw rotating ring segments
        for (let j = 0; j < 12; j++) {
          const angle = (j * Math.PI) / 6 + time * rotationSpeed
          const segmentLength = Math.PI / 8

          ctx.beginPath()
          ctx.arc(centerX, centerY, radius, angle, angle + segmentLength)
          ctx.strokeStyle = gradient
          ctx.lineWidth = 3
          ctx.stroke()
        }
      }

      // Draw the event horizon (black center)
      const eventHorizonRadius = 25
      const horizonGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, eventHorizonRadius)
      horizonGradient.addColorStop(0, "rgba(0, 0, 0, 1)")
      horizonGradient.addColorStop(0.8, "rgba(0, 0, 0, 0.9)")
      horizonGradient.addColorStop(1, "rgba(255, 215, 0, 0.1)")

      ctx.beginPath()
      ctx.arc(centerX, centerY, eventHorizonRadius, 0, Math.PI * 2)
      ctx.fillStyle = horizonGradient
      ctx.fill()

      // Add gravitational lensing effect
      const lensingGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        eventHorizonRadius,
        centerX,
        centerY,
        eventHorizonRadius * 2,
      )
      lensingGradient.addColorStop(0, "rgba(255, 215, 0, 0.1)")
      lensingGradient.addColorStop(1, "rgba(255, 215, 0, 0)")

      ctx.beginPath()
      ctx.arc(centerX, centerY, eventHorizonRadius * 2, 0, Math.PI * 2)
      ctx.fillStyle = lensingGradient
      ctx.fill()

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-5" style={{ background: "transparent" }} />
  )
}
