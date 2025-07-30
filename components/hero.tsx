"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden select-none"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cosmic-gold-500/10 to-cosmic-gold-600/10 border border-cosmic-gold-500/30 text-cosmic-gold-400 text-sm font-medium mb-6 backdrop-blur-sm glass">
              <Sparkles className="w-4 h-4 mr-2" />
              Navigating the Digital Cosmos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-balance"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent block mb-4">
              Beyond the
            </span>
            <span className="bg-gradient-to-r from-cosmic-gold-400 via-cosmic-gold-300 to-cosmic-gold-500 bg-clip-text text-transparent">
              Event Horizon
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed text-pretty"
          >
            Where stellar innovation meets infinite possibilities. We architect
            premium digital solutions that transcend the boundaries of
            technology, propelling your business into the cosmic future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cosmic-gold-500 to-cosmic-gold-600 hover:from-cosmic-gold-400 hover:to-cosmic-gold-500 text-black px-10 py-4 text-lg font-semibold group shadow-lg shadow-cosmic-gold-500/25 hover:shadow-cosmic-gold-400/30 transition-all duration-300 cosmic-glow"
            >
              Launch Your Vision
              <Rocket className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cosmic-gold-400/50 text-cosmic-gold-400 hover:bg-cosmic-gold-400/10 hover:text-cosmic-gold-500 hover:border-cosmic-gold-400 px-10 py-4 text-lg group bg-transparent backdrop-blur-sm transition-all duration-300"
            >
              Explore the Galaxy
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating cosmic elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 w-3 h-3 bg-cosmic-gold-400 rounded-full opacity-60 shadow-lg shadow-cosmic-gold-400/50 animate-pulse-glow"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-10 w-2 h-2 bg-cosmic-gold-300 rounded-full opacity-80 shadow-md shadow-cosmic-gold-300/50"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 left-1/4 w-2.5 h-2.5 bg-cosmic-gold-500 rounded-full opacity-70 shadow-lg shadow-cosmic-gold-500/50"
        />
      </div>
    </section>
  );
}
