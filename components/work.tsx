"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { featuredProjects } from "@/constants";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Rocket } from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Work() {
  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-transparent border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6"
          >
            <Rocket className="w-4 h-4 mr-2" />
            Work
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A selection of shipped products and experiments across web, mobile, and AI—built with performance and craft.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {featuredProjects?.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="bg-transparent border-gray-800/50 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-yellow-400/10 overflow-hidden group">
                <div className="relative w-full h-48 overflow-hidden bg-gray-900/40">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title || "Project image"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {project.category && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-medium rounded-full border border-yellow-400/30">
                        {project.category}
                      </span>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-white group-hover:text-yellow-400 transition-colors duration-200 text-xl">
                    {project.title}
                  </CardTitle>
                  {project.description && (
                    <CardDescription className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </CardDescription>
                  )}
                </CardHeader>

                <CardContent className="pt-0">
                  {Array.isArray(project.technologies) && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech: string, i: number) => (
                        <span
                          key={`${project.id}-tech-${i}`}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-700/50">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live`}>
                          Live
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}

                    {project.repoUrl && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 bg-transparent hover:text-yellow-600/80"
                      >
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} repository`}>
                          Code
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <motion.div variants={item}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to build your
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent"> next project</span>?
            </h3>

            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Collaborations open for full‑stack, AI features, and performance work across web and mobile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold"
              >
                <Link href="/work" aria-label="View all works">
                  View All Works
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 bg-transparent hover:text-yellow-600/80"
                onClick={() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                aria-label="Start your journey"
              >
                Start Your Journey
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
