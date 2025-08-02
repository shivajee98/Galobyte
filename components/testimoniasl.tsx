"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Varun Kaushik",
      position: "CEO",
      company: "Opexn",
      image: "/varun.jpeg?height=80&width=80",
      rating: 4,
      text: "Galobyte transformed our digital presence beyond our wildest expectations. Their cosmic approach to technology solutions propelled our business into a new dimension of success. The team's expertise in AI and cloud solutions is truly stellar.",
      project: "Opexn",
    },
    {
      id: 2,
      name: "Ratan Mehta",
      position: "Co-Founder",
      company: "Think About",
      image: "/ratan.jpeg?height=80&width=80",
      rating: 4,
      text: "The CosmicLMS platform revolutionized our educational delivery. Students are more engaged, teachers love the interface, and our administrative efficiency has increased by 300%. Galobyte's attention to detail is phenomenal.",
      project: "Think About LMS",
    },
    {
      id: 3,
      name: "Anita Reddy",
      position: "Director of Digital Initiatives",
      company: "Medira Clinics",
      image: "/anita.jpeg?height=80&width=80",
      rating: 5,
      text: "We approached Galobyte to modernize our patient engagement portal. They delivered a responsive, HIPAA-compliant platform that reduced appointment no-shows by over 40%. The communication and delivery timelines were spot on.",
      project: "Medira Patient Portal",
    },
    {
      id: 4,
      name: "Amit Grover",
      position: "Product Head",
      company: "FinNexa",
      image: "/amit.jpeg?height=80&width=80",
      rating: 5,
      text: "The dashboard and analytics platform Galobyte built for us gave our product a much-needed edge. Real-time reporting and streamlined user flows helped us onboard 3x more users within the first month post-launch.",
      project: "FinNexa Insights Dashboard",
    },
    {
      id: 5,
      name: "Priya Narang",
      position: "COO",
      company: "Zocta Technologies",
      image: "/priya.jpeg?height=80&width=80",
      rating: 5,
      text: "We were scaling fast and needed a reliable team to revamp our internal tools. Galobyte not only built what we needed, but also suggested better architecture decisions. Their delivery was clean and ahead of schedule.",
      project: "Zocta Ops Suite",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            Client Testimonials
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Stellar Reviews
            </span>
            <br />
            <span className="text-white">From Our Clients</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover what our clients say about their journey with us through the digital cosmos. Their success stories
            illuminate our path to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Testimonial */}
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-800/50 backdrop-blur-sm p-8 relative overflow-hidden">
              <div className="absolute top-6 left-6 text-yellow-400/20">
                <Quote className="w-16 h-16" />
              </div>
              <CardContent className="pt-0 relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400/30"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 to-transparent" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-400">
                      {testimonials[currentTestimonial].position} at {testimonials[currentTestimonial].company}
                    </p>
                    <p className="text-yellow-400 text-sm font-medium mt-1">
                      Project: {testimonials[currentTestimonial].project}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Testimonial Navigation */}
          <div className="lg:col-span-4 space-y-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setCurrentTestimonial(index)}
                className={`cursor-pointer transition-all duration-300 ${index === currentTestimonial ? "opacity-100" : "opacity-50 hover:opacity-75"
                  }`}
              >
                <Card
                  className={`p-4 transition-all duration-300 ${index === currentTestimonial
                    ? "bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-yellow-400/30"
                    : "bg-gradient-to-br from-gray-900/30 to-black/30 border-gray-800/30 hover:border-gray-700/50"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-white font-medium text-sm truncate">{testimonial.name}</h5>
                      <p className="text-gray-400 text-xs truncate">{testimonial.company}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: "98%", label: "Client Satisfaction" },
            { number: "15+", label: "Projects Completed" },
            { number: "10+", label: "Happy Clients" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
