"use client";

import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/constants";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Work() {
  // Limiting to 5 projects as per design goal
  const displayProjects = featuredProjects?.slice(0, 5) || [];

  return (
    <section id="work" className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8"
        >
          <div className="max-w-3xl">
            <span className="text-studio-blue font-semibold tracking-wider uppercase text-sm mb-4 block">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              Designed for Impact.
            </h2>
          </div>

          <Button
            asChild
            variant="ghost"
            className="text-foreground hover:bg-studio-light group text-lg p-0 h-auto hover:bg-transparent"
          >
            <Link href="/work" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-32 border-t border-black/5 pt-12 flex justify-center">
          <Button
            asChild
            className="bg-studio-dark hover:bg-studio-dark/90 text-white rounded-full px-8 py-6 text-lg font-medium"
          >
            <Link href="/work">
              Explore Full Portfolio
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className={`flex flex-col gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        {/* Image Side */}
        <div className="flex-1 w-full lg:w-7/12 aspect-[16/10] bg-studio-light rounded-3xl overflow-hidden shadow-sm group cursor-pointer relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        </div>

        {/* Content Side */}
        <div className="flex-1 w-full lg:w-5/12 flex flex-col justify-center">
          <span className="text-studio-blue font-semibold tracking-wider uppercase text-xs mb-4">
            {project.category}
          </span>
          <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            {project.title}
          </h3>
          <p className="text-lg text-studio-gray leading-relaxed mb-8 max-w-md">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.technologies?.slice(0, 4).map((tech: string) => (
              <span key={tech} className="text-xs text-foreground/60 border border-black/10 px-3 py-1.5 rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                className="flex items-center gap-2 text-foreground font-medium hover:text-studio-blue transition-colors group/link"
              >
                Live Demo
                <ArrowUpRight className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                className="flex items-center gap-2 text-studio-gray font-medium hover:text-foreground transition-colors"
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
