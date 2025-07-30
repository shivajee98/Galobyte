"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Cloud,
  GraduationCap,
  Settings,
  Code,
  Brain,
  Search,
  Wrench,
  Star,
  RocketIcon,
  CheckCircle,
  Shield,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Stellar mobile & web applications that transcend digital boundaries",
      details:
        "iOS, Android, React Native, Progressive Web Apps, Cross-Platform Solutions",
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "PWA",
        "Ionic",
      ],
      features: [
        "Native iOS & Android Development",
        "Cross-Platform Solutions",
        "Progressive Web Applications",
        "Real-time Synchronization",
        "Offline-First Architecture",
        "Push Notifications & Analytics",
      ],
      benefits: [
        "Cross-platform compatibility ensuring maximum reach across all devices",
        "Premium UI/UX design that captivates users and drives engagement",
        "Scalable architecture designed for future growth and feature expansion",
        "App Store optimization and seamless deployment processes",
        "Advanced security protocols protecting user data and transactions",
        "Real-time analytics and performance monitoring for continuous optimization",
      ],
      metrics: [
        { label: "Apps Deployed", value: "150+" },
        { label: "App Store Rating", value: "4.8★" },
        { label: "User Retention", value: "85%" },
        { label: "Performance Score", value: "98/100" },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Infinite scalability in the digital cosmos",
      details: "AWS, Azure, Google Cloud, Serverless Architecture",
      benefits: [
        "99.9% uptime with enterprise-grade reliability",
        "Auto-scaling infrastructure that grows with demand",
        "Cost optimization through intelligent resource management",
        "Advanced security and compliance protocols",
      ],
    },
    {
      icon: GraduationCap,
      title: "Learning Management Systems",
      description: "Educational platforms that expand minds across galaxies",
      details: "Custom LMS, E-learning Solutions, Training Portals",
      benefits: [
        "Interactive learning experiences with gamification",
        "Advanced analytics and progress tracking",
        "Multi-device accessibility for seamless learning",
        "Integration with existing educational tools",
      ],
    },
    {
      icon: Settings,
      title: "DevOps Excellence",
      description: "Automated workflows orbiting in perfect harmony",
      details: "CI/CD, Docker, Kubernetes, Infrastructure as Code",
      benefits: [
        "Reduced deployment time by up to 90%",
        "Automated testing and quality assurance",
        "Zero-downtime deployments and rollbacks",
        "Enhanced collaboration between development teams",
      ],
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Complete solutions from frontend nebulae to backend black holes",
      details: "React, Node.js, Python, Database Design, API Development",
      benefits: [
        "End-to-end development with unified architecture",
        "Modern frameworks ensuring peak performance",
        "RESTful and GraphQL API development",
        "Database optimization and security implementation",
      ],
    },
    {
      icon: Brain,
      title: "AI-Driven Solutions",
      description: "Intelligent systems powered by cosmic algorithms",
      details: "Machine Learning, Natural Language Processing, Computer Vision",
      benefits: [
        "Predictive analytics for data-driven decisions",
        "Automated processes reducing operational costs",
        "Custom AI models tailored to your business needs",
        "Integration with existing systems and workflows",
      ],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Visibility that outshines distant stars",
      details: "Technical SEO, Content Strategy, Performance Optimization",
      benefits: [
        "Increased organic traffic by up to 300%",
        "Higher search engine rankings and visibility",
        "Improved website performance and user experience",
        "Comprehensive analytics and reporting",
      ],
    },
    {
      icon: Wrench,
      title: "Application Maintenance",
      description: "Continuous support keeping systems in perfect orbit",
      details: "Bug Fixes, Updates, Performance Monitoring, 24/7 Support",
      benefits: [
        "Proactive monitoring preventing critical issues",
        "Regular updates ensuring security and performance",
        "Dedicated support team available around the clock",
        "Performance optimization and scaling recommendations",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 mr-2" />
            Premium Services
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Cosmic Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our constellation of premium technology services, each
            crafted to propel your business beyond the event horizon of digital
            transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
          {/* Large featured service - App Development */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="md:col-span-6 lg:col-span-8 lg:row-span-3 group"
          >
            <Card className="bg-transparent border-gray-800/50 hover:border-yellow-400/50 transition-all duration-500 h-full backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-400/10 p-4">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-full bg-gradient-to-br from-cosmic-gold-500/20 to-cosmic-gold-600/10 border border-cosmic-gold-500/20"
                  >
                    <Smartphone className="h-10 w-10 text-cosmic-gold-400" />
                  </motion.div>
                  <div className="flex gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-cosmic-gold-500/10 text-cosmic-gold-400 border-cosmic-gold-500/20"
                    >
                      Featured
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-green-500/10 text-green-400 border-green-500/20"
                    >
                      Most Popular
                    </Badge>
                  </div>
                </div>

                <CardTitle className="text-white group-hover:text-cosmic-gold-400 transition-colors duration-300 text-3xl mb-3">
                  {services[0].title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-lg leading-relaxed mb-4">
                  {services[0].description}
                </CardDescription>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cosmic-gold-400 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {services[0]?.technologies?.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-cosmic-gold-500/30 text-cosmic-gold-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {services[0]?.metrics?.map((metric, index) => (
                    <div
                      key={index}
                      className="text-center p-3 rounded-lg bg-cosmic-gold-500/5 border border-cosmic-gold-500/10"
                    >
                      <div className="text-lg font-bold text-cosmic-gold-400">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-cosmic-gold-400" />
                    Core Features:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {services[0]?.features?.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-cosmic-gold-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                    <RocketIcon className="w-4 h-4 mr-2 text-cosmic-gold-400" />
                    Key Benefits:
                  </h4>
                  {services[0].benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: benefitIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-cosmic-gold-500/5 to-transparent border-l-2 border-cosmic-gold-400/30"
                    >
                      <Shield className="w-4 h-4 text-cosmic-gold-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {benefit}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Medium services */}
          {services.slice(1, 3).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="md:col-span-3 lg:col-span-3 group"
            >
              <Card className="bg-transparent border-gray-800/50 hover:border-yellow-400/50 transition-all duration-500 h-full backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-400/10 p-3">
                <CardHeader className="text-center pb-2">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mx-auto mb-3 p-3 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 w-fit border border-yellow-500/20"
                  >
                    <service.icon className="h-6 w-6 text-yellow-400" />
                  </motion.div>
                  <CardTitle className="text-white group-hover:text-yellow-400 transition-colors duration-300 text-lg mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed mb-2">
                    {service.description}
                  </CardDescription>
                  <p className="text-xs text-yellow-400/80 font-medium">
                    {service.details}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold text-gray-300 mb-2">
                      Key Benefits:
                    </h4>
                    {service.benefits
                      .slice(0, 2)
                      .map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefitIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: benefitIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-1 h-1 bg-yellow-400 rounded-full mt-1.5 flex-shrink-0"></div>
                          <p className="text-xs text-gray-400 leading-relaxed">
                            {benefit}
                          </p>
                        </motion.div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Wide service - DevOps */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="md:col-span-6 lg:col-span-6 group"
          >
            <Card className="bg-transparent border-gray-800/50 hover:border-yellow-400/50 transition-all duration-500 h-full backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-400/10 p-4">
              <CardHeader className="pb-3">
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/20 flex-shrink-0"
                  >
                    <Settings className="h-6 w-6 text-yellow-400" />
                  </motion.div>
                  <div className="flex-1">
                    <CardTitle className="text-white group-hover:text-yellow-400 transition-colors duration-300 text-lg mb-1">
                      {services[3].title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm leading-relaxed mb-2">
                      {services[3].description}
                    </CardDescription>
                    <p className="text-xs text-yellow-400/80 font-medium">
                      {services[3].details}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {services[3].benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: benefitIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-2"
                    >
                      <div className="w-1 h-1 bg-yellow-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {benefit}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Remaining services in smaller cards */}
          {services.slice(4).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 5) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="md:col-span-3 lg:col-span-3 group"
            >
              <Card className="bg-transparent border-gray-800/50 hover:border-yellow-400/50 transition-all duration-500 h-full backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-400/10 p-3">
                <CardHeader className="text-center pb-2">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mx-auto mb-3 p-3 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 w-fit border border-yellow-500/20"
                  >
                    <service.icon className="h-6 w-6 text-yellow-400" />
                  </motion.div>
                  <CardTitle className="text-white group-hover:text-yellow-400 transition-colors duration-300 text-lg mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed mb-2">
                    {service.description}
                  </CardDescription>
                  <p className="text-xs text-yellow-400/80 font-medium">
                    {service.details}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold text-gray-300 mb-2">
                      Key Benefits:
                    </h4>
                    {service.benefits
                      .slice(0, 2)
                      .map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefitIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: benefitIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-1 h-1 bg-yellow-400 rounded-full mt-1.5 flex-shrink-0"></div>
                          <p className="text-xs text-gray-400 leading-relaxed">
                            {benefit}
                          </p>
                        </motion.div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
