"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import { FC } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/constants";

const Services: FC = () => {
  return (
    <section id="services" className="py-32 relative bg-studio-light/50">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        {/* ---------------- Header ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 max-w-3xl"
        >
          <span className="text-studio-blue font-semibold tracking-wider uppercase text-sm mb-4 block">
            Our Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-foreground tracking-tight">
            Comprehensive Digital Architecture.
          </h2>

          <p className="text-xl text-studio-gray leading-relaxed">
            We architect high-performance digital ecosystems designed for scale,
            security, and unparalleled user engagement.
          </p>
        </motion.div>

        {/* ---------------- Grid ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

const ServiceCard: FC<{ service: any; index: number }> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="studio-card h-full p-8 flex flex-col justify-between group border-transparent hover:border-black/5">
        <div>
          <div className="mb-6 w-12 h-12 rounded-2xl bg-studio-light flex items-center justify-center text-studio-blue group-hover:bg-studio-blue group-hover:text-white transition-colors duration-300">
            <service.icon className="w-6 h-6" strokeWidth={1.5} />
          </div>

          <CardTitle className="text-2xl font-semibold mb-4 text-foreground group-hover:text-studio-blue transition-colors">
            {service.title}
          </CardTitle>

          <p className="text-studio-gray text-base leading-relaxed mb-8">
            {service.description}
          </p>

          {service.technologies && (
            <div className="flex flex-wrap gap-2 mb-8">
              {service.technologies.slice(0, 3).map((tech: string) => (
                <span key={tech} className="text-xs font-medium text-studio-gray bg-studio-light px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="pt-6 border-t border-black/5">
          <ul className="space-y-3">
            {service.benefits.slice(0, 3).map((benefit: string) => (
              <li key={benefit} className="flex items-start gap-3 text-sm text-foreground/80">
                <CheckCircle className="w-4 h-4 text-studio-blue mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  )
}
