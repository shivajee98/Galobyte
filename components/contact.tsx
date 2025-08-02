"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "@/constants";
import { motion } from "framer-motion";
import { Clock, Loader2, Send, Star } from "lucide-react";
import { useState } from "react";
import { Label } from "./ui/label";
import { toast } from "sonner";




const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const payload = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  const res = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
  if (result.success) {
    alert('Email sent!');
  } else {
    alert('Something went wrong.');
  }
};


export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
    email: "",
    subject: "",
    message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          honeypot: "" // Add honeypot field for spam protection
        }),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success("Email send successfully!")
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")

        // Handle different types of errors
        if (response.status === 429) {
            toast.error(`Rate limit exceeded. ${result.error} Please try again later.`)
          setErrorMessage(`Rate limit exceeded. ${result.error} Please try again later.`)
        } else if (response.status === 400) {
          // Handle validation errors
          if (result.details) {
            const errorDetails = Object.values(result.details).filter(Boolean).join(', ')
            setErrorMessage(`Validation error: ${errorDetails}`)
          } else {
            toast.error("Please check your input and try again.")
            setErrorMessage(result.error || "Please check your input and try again.")
          }
        } else {
            toast.error("Failed to send message. Please try again.")
          setErrorMessage(result.error || "Failed to send message. Please try again.")
        }
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
            Ready to transcend the boundaries of digital possibility? Connect
            with our cosmic crew and let's architect your journey to the stars.
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
                      <CardTitle className="text-white text-base">
                        {info.title}
                      </CardTitle>
                      <p className="text-gray-400 text-xs">
                        {info.description}
                      </p>
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
            <Card className="bg-transparent border-gray-800/50 backdrop-blur-sm p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-white text-xl mb-2">
                  Initiate Contact Protocol
                </CardTitle>
                <p className="text-gray-400 text-sm">
                  Share your vision and let's create something extraordinary
                  together.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field - hidden from users but visible to bots */}
                    <div style={{ display: 'none' }}>
                      <input
                        type="text"
                        name="honeypot"
                        tabIndex={-1}
                        autoComplete="off"
                        placeholder="Leave this field empty"
                      />
                    </div>

                    {/* Name and Email Row - Symmetrically Balanced */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-300 font-medium">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-yellow-400/20 h-12"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300 font-medium">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-yellow-400/20 h-12"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Subject Field - Full Width for Balance */}
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-300 font-medium">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-yellow-400/20 h-12"
                        placeholder="Project inquiry"
                      />
                    </div>

                    {/* Message Field - Proportionally Sized */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300 font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-yellow-400/20 resize-none"
                        placeholder="Tell us about your cosmic vision..."
                      />
                    </div>

                    {/* Submit Button - Centered and Prominent */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold py-4 group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/30 transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Launching Message...
                          </>
                        ) : (
                          <>
                            Launch Message
                            <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          </>
                        )}
                      </Button>
                    </div>
                </form>
              </CardContent>
            </Card>

            {/* Response Time Card - Balanced with form height */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 p-6 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-center mb-3">
                <Clock className="w-5 h-5 text-yellow-400 mr-3" />
                <h4 className="text-white font-semibold">Response Time</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                We typically respond to all inquiries within 24 hours. For
                urgent matters, please call us directly. Our cosmic crew is
                always ready to help you launch your next digital adventure.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
