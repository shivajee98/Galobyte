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
import { ArrowRight, ChevronRight, Play } from "lucide-react";

export default function Hero() {

  const handleMeetingSelect = (calendlyUrl: string) => {
    window.open(calendlyUrl, '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-semibold tracking-tighter leading-[1.05] text-foreground mb-8">
            Precision in
            <br />
            <span className="text-studio-blue">Digital Engineering.</span>
          </h1>

          <p className="text-xl md:text-2xl text-studio-gray font-medium max-w-2xl mx-auto leading-relaxed mb-12">
            We conceptualize and build premium digital interfaces.
            Simple, powerful, and intentionally designed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="lg"
                  className="bg-studio-blue hover:bg-studio-blue/90 text-white rounded-full px-8 py-7 text-lg font-medium transition-transform active:scale-95 shadow-sm"
                >
                  Start a Project
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-80 bg-white/80 backdrop-blur-xl border border-black/5 shadow-xl rounded-2xl p-2"
                align="center"
                sideOffset={10}
              >
                <DropdownMenuLabel className="text-studio-gray text-xs font-semibold uppercase tracking-wider px-4 py-2">
                  Strategy Session
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-black/5" />
                {meetingOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <DropdownMenuItem
                      key={index}
                      onClick={() => handleMeetingSelect(option.calendlyUrl)}
                      className="px-4 py-3 cursor-pointer hover:bg-studio-blue hover:text-white rounded-xl transition-colors group focus:bg-studio-blue focus:text-white"
                    >
                      <div className="flex items-center gap-3 w-full">
                        <IconComponent className="h-4 w-4 text-studio-blue group-hover:text-white transition-colors" />
                        <div className="flex-1">
                          <span className="font-medium block">{option.title}</span>
                          <span className="text-xs text-studio-gray group-hover:text-white/80">{option.duration}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-studio-gray/50 group-hover:text-white/50" />
                      </div>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              size="lg"
              variant="ghost"
              className="text-foreground hover:bg-studio-light rounded-full px-8 py-7 text-lg font-medium group"
              onClick={() => {
                const workSection = document.getElementById("work");
                if (workSection) {
                  workSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Our Work
              <ChevronRight className="ml-1 h-5 w-5 text-studio-gray group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
