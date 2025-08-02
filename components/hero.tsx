"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { meetingOptions } from "@/constants";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ExternalLink, Rocket, Sparkles } from "lucide-react";

export default function Hero() {

  const handleMeetingSelect = (calendlyUrl: string) => {
    window.open(calendlyUrl, '_blank');
  };

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
                <Sparkles className="w-4 h-4 mr-2 animate-pulse drop-shadow-md" />
                Navigating the Digital Cosmos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-9xl font-bold mb-8 leading-tight text-balance"
          >
            <span className="bg-gradient-to-br from-gray-200 via-gray-100 to-gray-400 bg-clip-text text-transparent block mb-4 drop-shadow-2xl">
              Welcome to
            </span>
            <span className="bg-gradient-to-r from-cosmic-gold-400 via-cosmic-gold-300 to-cosmic-gold-500 bg-clip-text text-transparent">
              Galobyte
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cosmic-gold-500 to-cosmic-gold-600 hover:from-cosmic-gold-400 hover:to-cosmic-gold-500 text-black px-10 py-4 text-lg font-semibold group shadow-lg shadow-cosmic-gold-500/25 hover:shadow-cosmic-gold-400/30 transition-all duration-300 cosmic-glow"
                >
                  Launch Your Vision
                  <Rocket className="ml-3 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-80 bg-black/90 backdrop-blur-md border-cosmic-gold-500/30 shadow-2xl shadow-cosmic-gold-500/10"
                align="center"
                sideOffset={8}
              >
                <DropdownMenuLabel className="text-cosmic-gold-400 font-semibold text-base px-4 py-3">
                  Schedule Your Cosmic Journey
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-cosmic-gold-500/20" />
                {meetingOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <DropdownMenuItem
                      key={index}
                      onClick={() => handleMeetingSelect(option.calendlyUrl)}
                      className="px-4 py-4 cursor-pointer hover:bg-cosmic-gold-500/10 focus:bg-cosmic-gold-500/10 transition-colors group"
                    >
                      <div className="flex items-start space-x-3 w-full">
                        <div className="flex-shrink-0 mt-1">
                          <IconComponent className="h-5 w-5 text-cosmic-gold-400 group-hover:text-cosmic-gold-300 transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-white font-medium text-sm group-hover:text-cosmic-gold-100 transition-colors">
                              {option.title}
                            </h4>
                            <div className="flex items-center text-cosmic-gold-400/70 text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              {option.duration}
                            </div>
                          </div>
                          <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                            {option.description}
                          </p>
                        </div>
                        <ExternalLink className="h-3 w-3 text-cosmic-gold-400/50 group-hover:text-cosmic-gold-400 transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </DropdownMenuItem>
                  );
                })}
                <DropdownMenuSeparator className="bg-cosmic-gold-500/20" />
                <div className="px-4 py-3">
                  <p className="text-xs text-gray-500 text-center">
                    Choose the perfect meeting type for your project needs
                  </p>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Explore Our Work Button */}
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400/50 px-8 py-4 text-lg group backdrop-blur-sm transition-all duration-300 bg-transparent hover:text-yellow-600/90"
              onClick={() => {
                const workSection = document.getElementById("work");
                if (workSection) {
                  workSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
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
