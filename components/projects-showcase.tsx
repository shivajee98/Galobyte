"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Star, Github, Calendar, Users, Award } from "lucide-react"
import { useState } from "react"

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "E-commerce", "Education", "FinTech", "Healthcare", "SaaS", "Mobile Apps"]

  /* --------------------------------------------------------------------
     PROJECTS -– real data for the first three, plus two extra real picks
  ---------------------------------------------------------------------*/
  const projects = [
    {
      id: 1,
      title: "Opexn",
      description: "Online platform for virtual exhibitions, art galleries and creative showcases.",
      category: "E-commerce",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      liveUrl: "https://opexn.com",
      githubUrl: "#",              // private / not public
      completionDate: "2024",
      teamSize: 6,
      awards: [],
      featured: true,
    },
    {
      id: 2,
      title: "Aamishrit",
      description: "Personal portfolio & blog built with Next.js — fast, minimalist and SEO-friendly.",
      category: "Education",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "TailwindCSS"],
      liveUrl: "https://aamishrit.com",
      githubUrl: "https://github.com/aamishrit/aamishrit.com",
      completionDate: "2024",
      teamSize: 1,
      awards: [],
      featured: false,
    },
    {
      id: 3,
      title: "ThinkAbout",
      description: "Indian ed-tech startup helping students learn programming, design and digital marketing.",
      category: "Education",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://thinkabout.in",
      githubUrl: "#",              // private / not public
      completionDate: "2023",
      teamSize: 10,
      awards: ["Startup India Seed Fund"],
      featured: true,
    },
    /* ---------------- additional real-world open-source projects ---------------- */
    {
      id: 4,
      title: "FreeCodeCamp",
      description: "Open-source community for learning to code and building projects together.",
      category: "Education",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["JavaScript", "React", "Node.js"],
      liveUrl: "https://www.freecodecamp.org",
      githubUrl: "https://github.com/freeCodeCamp/freeCodeCamp",
      completionDate: "ongoing",
      teamSize: 150,
      awards: [],
      featured: false,
    },
    {
      id: 5,
      title: "Next.js",
      description: "The React Framework for Production maintained by Vercel.",
      category: "SaaS",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "Vercel"],
      liveUrl: "https://nextjs.org",
      githubUrl: "https://github.com/vercel/next.js",
      completionDate: "ongoing",
      teamSize: 50,
      awards: ["Most Popular React Framework"],
      featured: true,
    },
    /* ---------------- original demo placeholders kept for variety ---------------- */
    {
      id: 6,
      title: "QuantumHealth",
      description: "Telemedicine platform connecting patients with healthcare providers globally.",
      category: "Healthcare",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React Native", "Node.js", "PostgreSQL", "WebRTC"],
      liveUrl: "https://quantumhealth.demo",
      githubUrl: "https://github.com/galobyte/quantumhealth",
      completionDate: "2023",
      teamSize: 7,
      awards: ["Healthcare Innovation Award"],
      featured: false,
    },
    {
      id: 7,
      title: "OrbitSaaS",
      description: "Multi-tenant SaaS platform for business process automation and workflow management.",
      category: "SaaS",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Angular", "Django", "PostgreSQL", "Kubernetes"],
      liveUrl: "https://orbitsaas.demo",
      githubUrl: "https://github.com/galobyte/orbitsaas",
      completionDate: "2023",
      teamSize: 8,
      awards: ["SaaS Platform of the Year"],
      featured: false,
    },
    {
      id: 8,
      title: "GalaxyMobile",
      description: "Cross-platform mobile app for social networking with AR features.",
      category: "Mobile Apps",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React Native", "Firebase", "ARKit", "ARCore"],
      liveUrl: "https://galaxymobile.demo",
      githubUrl: "https://github.com/galobyte/galaxymobile",
      completionDate: "2022",
      teamSize: 4,
      awards: ["Mobile App Excellence"],
      featured: false,
    },
  ]

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            Complete Portfolio
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Our Works
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Journey through our constellation of digital masterpieces, each crafted with precision and innovation to
            propel businesses beyond the event horizon of success.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold"
                  : "border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-800/50 hover:border-yellow-400/50 transition-all duration-500 backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-400/10 overflow-hidden h-full">
                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-medium rounded-full border border-yellow-400/30">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 bg-red-400/20 text-red-400 text-xs font-medium rounded-full border border-red-400/30">
                        Featured
                      </span>
                    )}
                  </div>
                  {project.awards.length > 0 && (
                    <div className="absolute top-4 right-4">
                      <Award className="w-5 h-5 text-yellow-400" />
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <CardHeader className="pb-3">
                  <CardTitle className="text-white group-hover:text-yellow-400 transition-colors duration-300 text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 flex-1 flex flex-col">
                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-700/50">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.completionDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {project.teamSize} members
                    </div>
                  </div>

                  {/* Awards */}
                  {project.awards.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-yellow-400 font-medium">🏆 {project.awards[0]}</p>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <Button
                      asChild
                      size="sm"
                      className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold flex-1 group/btn"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live&nbsp;Demo
                        <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      </a>
                    </Button>
                    {project.githubUrl !== "#" && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 bg-transparent"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty-state message */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
