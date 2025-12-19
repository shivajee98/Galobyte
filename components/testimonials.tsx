"use client"

import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/constants"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Using a simpler auto-rotate or just manual navigation could fit minimalist theme better.
  // We'll keep auto-rotate but make it slower.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-32 bg-studio-light/30">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <Quote className="w-12 h-12 text-studio-blue mb-8 opacity-80" />

          <div className="relative min-h-[300px] w-full flex items-center justify-center">
            <AnimateTestimonial
              key={currentTestimonial}
              testimonial={testimonials[currentTestimonial]}
            />
          </div>

          <div className="flex gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentTestimonial
                    ? "w-8 bg-studio-blue"
                    : "w-2 bg-studio-gray/30 hover:bg-studio-gray/50"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

        </motion.div>

        {/* Statistics - Minimalist */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-32 pt-16 border-t border-black/5">
          {[
            { number: "98%", label: "Satisfaction Rate" },
            { number: "15+", label: "Elite Projects" },
            { number: "10+", label: "Strategic Partners" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-foreground mb-2 tracking-tight">
                {stat.number}
              </div>
              <div className="text-studio-gray text-xs font-semibold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimateTestimonial({ testimonial }: { testimonial: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      <blockquote className="text-3xl md:text-5xl font-medium text-foreground leading-tight tracking-tight mb-8">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      <div className="flex items-center gap-4">
        <img
          src={testimonial.image || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover bg-studio-light"
        />
        <div className="text-left">
          <div className="text-base font-semibold text-foreground">{testimonial.name}</div>
          <div className="text-sm text-studio-gray">{testimonial.position}, {testimonial.company}</div>
        </div>
      </div>
    </motion.div>
  )
}
