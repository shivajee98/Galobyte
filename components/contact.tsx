"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Star, Clock } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Cosmic Communication",
      details: "info.galobyte@gmail.com",
      link: "mailto:info.galobyte@gmail.com",
      description: "Direct line to our mission control",
    },
    {
      icon: Phone,
      title: "Stellar Hotline",
      details: "+91 8102140440",
      link: "tel:+918102140440",
      description: "24/7 premium support available",
    },
    {
      icon: MapPin,
      title: "Galactic Headquarters",
      details: "Digital Galaxy, Sector 7",
      link: "#",
      description: "Where innovation meets infinity",
    },
    {
      icon: Clock,
      title: "Mission Hours",
      details: "24/7 Across All Time Zones",
      link: "#",
      description: "Always ready for your next launch",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
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
            Mission Control
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Launch Your
            </span>
            <br />
            <span className="text-white">Digital Odyssey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transcend the boundaries of digital possibility? Connect with our cosmic crew and let's architect
            your journey to the stars.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Card className="bg-transparent border-gray-800/50 hover:border-yellow-400/50 transition-all duration-500 backdrop-blur-sm hover:shadow-lg hover:shadow-yellow-400/10 p-3">
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="p-2 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 mr-3 border border-yellow-500/20"
                    >
                      <info.icon className="h-4 w-4 text-yellow-400" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-white text-base">{info.title}</CardTitle>
                      <p className="text-gray-400 text-xs">{info.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <a
                      href={info.link}
                      className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-medium"
                    >
                      {info.details}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Card className="bg-transparent border-gray-800/50 backdrop-blur-sm p-4">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-xl mb-1">Initiate Contact Protocol</CardTitle>
                <p className="text-gray-400 text-sm">
                  Share your vision and let's create something extraordinary together.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <Input
                        placeholder="Your Name"
                        className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300 h-10"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300 h-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      placeholder="Project Subject"
                      className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:ring-yellow-400/20 transition-all duration-300 h-10"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Describe your cosmic vision..."
                      rows={5}
                      className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:ring-yellow-400/20 resize-none transition-all duration-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold py-3 group shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/30 transition-all duration-300"
                  >
                    Launch Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
