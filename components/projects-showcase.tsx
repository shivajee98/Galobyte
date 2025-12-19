"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Users, Award } from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "E-commerce", "Education", "FinTech", "Healthcare", "SaaS", "Mobile Apps"]

  const projects = [
    {
      id: 1,
      title: "Lynk Me",
      description: "AI-driven smart bio-link platform with premium creator tools.",
      category: "SaaS / Productivity",
      image: "/icon.png?height=400&width=600",
      technologies: ["Next.js", "Tailwind CSS", "React", "Node.js"],
      liveUrl: "https://lynkme.site",
      githubUrl: "#",
      completionDate: "2025",
      teamSize: 3,
      awards: ["University Project Recognition"],
      featured: true,
    },
    {
      id: 2,
      title: "Opexn",
      description: "Online platform for virtual exhibitions and creative showcases.",
      category: "E-commerce",
      image: "/opexn-logo.png?height=400&width=600",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      liveUrl: "https://opexn.com",
      githubUrl: "#",
      completionDate: "2024",
      teamSize: 6,
      awards: [],
      featured: true,
    },
    {
      id: 3,
      title: "Aamishrit",
      description: "Personal portfolio & blog built with Next.js.",
      category: "Education",
      image: "/logo.webp?height=400&width=600",
      technologies: ["Next.js", "TailwindCSS"],
      liveUrl: "https://aamishrit.com",
      githubUrl: "https://github.com/aamishrit/aamishrit.com",
      completionDate: "2024",
      teamSize: 1,
      awards: [],
      featured: false,
    },
    {
      id: 4,
      title: "ThinkAbout",
      description: "Ed-tech startup for programming and design education.",
      category: "Education",
      image: "/rtnm.png?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://thinkabout.in",
      githubUrl: "#",
      completionDate: "2023",
      teamSize: 10,
      awards: ["Startup India Seed Fund"],
      featured: true,
    },
  ]

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory || project.category.includes(selectedCategory))

  return (
    <section className="py-32 bg-background min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <span className="text-studio-blue font-semibold tracking-wider uppercase text-sm mb-4 block">
            Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tight mb-6">
            Selected Works
          </h1>
          <p className="text-xl text-studio-gray max-w-2xl leading-relaxed">
            A collection of digital products engineered for performance.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                  ? "bg-foreground text-background shadow-lg"
                  : "bg-studio-light text-studio-gray hover:bg-studio-gray/10 hover:text-foreground"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col h-full"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden rounded-[24px] bg-studio-light border border-black/5 aspect-[4/3] mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-1 group-hover:text-studio-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-studio-gray mb-3">
                      {project.category}
                    </p>
                  </div>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-studio-light hover:bg-studio-blue hover:text-white transition-all text-foreground">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-base text-studio-gray/80 leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-studio-light text-studio-gray border border-black/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty-state message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-studio-gray text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
