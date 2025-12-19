"use client"

import { motion } from "framer-motion"
import { achievements, stats } from "@/constants"

export default function About() {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-studio-blue font-semibold tracking-wider uppercase text-sm mb-4 block">
              The Studio
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-foreground tracking-tight">
              Architects of <br />
              Digital Infrastructure.
            </h2>

            <div className="space-y-6 text-xl text-studio-gray leading-relaxed mb-12 font-medium">
              <p>
                We build the technical foundation for modern digital experiences. Our approach goes
                beyond aesthetics—we focus on engineering excellence, scalability, and performance-driven design.
              </p>
              <p>
                With a collective of senior developers and strategic thinkers, we transform complex
                business requirements into streamlined, high-impact digital products.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 group"
                >
                  <div className="w-1.5 h-1.5 bg-studio-blue rounded-full" />
                  <p className="text-foreground/80 text-base font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid - Minimal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-8 rounded-3xl bg-studio-light/50 border border-black/5 flex flex-col items-start justify-between min-h-[220px]"
              >
                <div className="mb-6 w-10 h-10 rounded-full bg-white flex items-center justify-center text-studio-blue shadow-sm">
                  <stat.icon className="h-5 w-5" strokeWidth={2} />
                </div>

                <div>
                  <div className="text-4xl font-semibold text-foreground mb-2 tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-studio-gray font-medium text-xs uppercase tracking-widest mb-2">
                    {stat.label}
                  </div>
                  <div className="text-studio-gray/60 text-sm leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
