"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Users, Award, Rocket, Star, Globe } from "lucide-react"
import { achievements, stats } from "@/constants"

export default function About() {


  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              About Galobyte
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Architects of the
              </span>
              <br />
              <span className="text-white">Digital Universe</span>
            </h2>

            <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-6">
              <p>
                We are cosmic pioneers, charting unexplored territories in the vast expanse of digital technology. Our
                mission transcends conventional boundaries—we craft premium solutions that exist at the intersection of
                innovation and infinity.
              </p>
              <p>
                With a constellation of expert developers, visionary designers, and strategic architects, we transform
                ambitious ideas into stellar digital experiences. Every project is a voyage into uncharted digital
                territories, guided by our commitment to excellence.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"></div>
                  <p className="text-gray-300 text-base">{achievement}</p>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold px-6 py-3 shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/30 transition-all duration-300"
            >
              Explore Our Universe
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="text-center p-5 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 hover:border-yellow-400/50 transition-all duration-500 backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-400/10"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="mx-auto mb-3 p-3 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 w-fit border border-yellow-500/20"
                >
                  <stat.icon className="h-6 w-6 text-yellow-400" />
                </motion.div>
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-1 text-sm">{stat.label}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
