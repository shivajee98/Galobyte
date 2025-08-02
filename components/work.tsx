"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { featuredProjects } from "@/constants";
import { easeOut, motion } from "framer-motion";
import { ArrowRight, ExternalLink, Rocket } from "lucide-react";
import Link from "next/link";

export default function Work() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Heading */}
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-transparent border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6"
          >
            <Rocket className="w-4 h-4 mr-2" />
            Featured Work
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Stellar Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our constellation of premium digital solutions that have
            propelled businesses into the cosmic future of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Main featured project (first item) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <Card className="bg-transparent border-gray-800/50 hover:border-yellow-400/50 transition-all duration-500 backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-400/10 overflow-hidden group h-full">
              <div className="relative overflow-hidden">
                <img
                  src={featuredProjects[0].image || "/placeholder.svg"}
                  alt={featuredProjects[0].title}
                  className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-medium rounded-full border border-yellow-400/30">
                    {featuredProjects[0].category}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-white group-hover:text-yellow-400 transition-colors duration-300 text-2xl">
                  {featuredProjects[0].title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  {featuredProjects[0].description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredProjects[0].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  asChild
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold group/btn"
                >
                  <a
                    href={featuredProjects[0].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Project
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Side featured projects */}
          <div className="lg:col-span-4 space-y-6">
            {featuredProjects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-transparent border-gray-800/50 hover:border-yellow-400/50 transition-all duration-500 backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-400/10 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden bg-gray-300">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-32 object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs font-medium rounded-full border border-yellow-400/30">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white group-hover:text-yellow-400 transition-colors duration-300 text-lg">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm leading-relaxed">
                        <div className="relative">
                            <div className="line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                                {project.description}
                            </div>
                        </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies
                        .slice(0, 2)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-700/50">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400 group/btn bg-transparent hover:text-yellow-600/80"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Launch Your
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                {" "}
                Next Project
              </span>
              ?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the constellation of successful businesses that have
              transcended their digital boundaries with Galobyte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold"
              >
                <Link href="/work">
                  View All Wroks
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 bg-transparent hover:text-yellow-600/80"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
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
