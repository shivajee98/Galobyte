"use client"

import { useEffect, useRef } from "react"

export default function ShootingStars() {
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

    const shootingStars: Array<{
      x: number
      y: number
      length: number
      speed: number
      angle: number
      opacity: number
      life: number
      maxLife: number
    }> = []

    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5, // Upper half of screen
        length: Math.random() * 80 + 20,
        speed: Math.random() * 6 + 4,
        angle: (Math.random() * Math.PI) / 4 + Math.PI / 4, // 45-90 degrees
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 60 + 40,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create new shooting star occasionally
      if (Math.random() < 0.003) {
        createShootingStar()
      }

      shootingStars.forEach((star, index) => {
        star.life++
        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed

        // Fade out over time
        star.opacity = 1 - star.life / star.maxLife

        if (star.life >= star.maxLife || star.x > canvas.width || star.y > canvas.height) {
          shootingStars.splice(index, 1)
          return
        }

        // Draw shooting star trail
        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length,
        )

        gradient.addColorStop(0, `rgba(255, 215, 0, ${star.opacity})`)
        gradient.addColorStop(0.5, `rgba(255, 223, 0, ${star.opacity * 0.5})`)
        gradient.addColorStop(1, `rgba(255, 215, 0, 0)`)

        ctx.beginPath()
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.lineCap = "round"
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(star.x - Math.cos(star.angle) * star.length, star.y - Math.sin(star.angle) * star.length)
        ctx.stroke()

        // Add bright head
        ctx.beginPath()
        ctx.arc(star.x, star.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" style={{ background: "transparent" }} />
  )
}
