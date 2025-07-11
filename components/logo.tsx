"use client"

import { motion } from "framer-motion"

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center space-x-3"
    >
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-12 h-12 rounded-full border-2 border-cosmic-gold-400/40 relative"
        >
          {/* Inner glow */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cosmic-gold-400/20 to-cosmic-gold-600/10"></div>

          {/* Inner rotating ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-cosmic-gold-500/60"
          >
            {/* Orbital dots */}
            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-cosmic-gold-400 rounded-full transform -translate-x-1/2 shadow-lg shadow-cosmic-gold-400/50"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-cosmic-gold-300 rounded-full transform -translate-x-1/2 shadow-md shadow-cosmic-gold-300/50"></div>
          </motion.div>

          {/* Center core */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cosmic-gold-400 to-cosmic-gold-600 shadow-lg shadow-cosmic-gold-400/30"></div>
        </motion.div>

        {/* Outer glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cosmic-gold-400/10 to-cosmic-gold-600/5 blur-md"></div>
      </div>

      <div>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl font-bold bg-gradient-to-r from-cosmic-gold-400 via-cosmic-gold-300 to-cosmic-gold-500 bg-clip-text text-transparent"
        >
          Galobyte
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xs text-cosmic-gold-400/70 font-light tracking-wider uppercase"
        >
          Digital Cosmos
        </motion.p>
      </div>
    </motion.div>
  )
}
