"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2 cursor-pointer group"
    >
      <div className="w-8 h-8 bg-studio-blue rounded-lg flex items-center justify-center text-white font-bold text-lg">
        G
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-lg font-bold text-foreground leading-none tracking-tight group-hover:text-studio-blue transition-colors">
          Galobyte
        </h1>
      </div>
    </motion.div>
  );
}
