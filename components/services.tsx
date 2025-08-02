"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Rocket as RocketIcon,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import { FC } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/constants";
import { Service } from "@/lib/types";

const Services: FC = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* ---------------- Header ---------------- */}
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

        {/* ---------------- Grid ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* ---------- Featured card (index 0) ---------- */}
          <div className="md:col-span-6 lg:col-span-6 flex gap-4">
            <div className="flex-1">
              <FeaturedCard service={services[0]} />
            </div>
            <div className="flex-1">
              <FeaturedCard service={services[1]} />
            </div>
          </div>
          {/* ---------- Medium cards (index 2-3) ---------- */}
          {services.slice(2, 4).map((srv, i) => (
            <MediumCard key={srv.title} service={srv} delay={i + 2} />
          ))}

          {/* ---------- Wide card (index 4) ---------- */}
          <WideCard service={services[4]} />

          {/* ---------- Remaining small cards (index 5+) ---------- */}
          {services.slice(5).map((srv, i) => (
            <SmallCard key={srv.title} service={srv} delay={i + 5} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

/* ================================================================== */
/*  Re-usable card components                                         */
/* ================================================================== */

interface CardProps {
  service: Service;
  delay?: number;
}

/* ---------- 1. FeaturedCard ---------- */
const FeaturedCard: FC<CardProps> = ({ service }) => (
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
        {/* --- icon + badges --- */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-full bg-gradient-to-br from-cosmic-gold-500/20 to-cosmic-gold-600/10 border border-cosmic-gold-500/20"
          >
            <service.icon className="h-10 w-10 text-cosmic-gold-400" />
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

        {/* --- title + desc --- */}
        <CardTitle className="text-white group-hover:text-cosmic-gold-400 transition-colors duration-300 text-3xl mb-3">
          {service.title}
        </CardTitle>

        <CardDescription className="text-gray-400 text-lg leading-relaxed mb-4">
          {service.description}
        </CardDescription>

        {/* --- technologies --- */}
        {service.technologies?.length && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-cosmic-gold-400 mb-2">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-cosmic-gold-500/30 text-cosmic-gold-300 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* --- metrics --- */}
        {service.metrics?.length && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {service.metrics.map((m) => (
              <div
                key={m.label}
                className="text-center p-3 rounded-lg bg-cosmic-gold-500/5 border border-cosmic-gold-500/10"
              >
                <div className="text-lg font-bold text-cosmic-gold-400">
                  {m.value}
                </div>
                <div className="text-xs text-gray-400">{m.label}</div>
              </div>
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="pt-0">
        {/* --- features --- */}
        {service.features?.length && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
              <Zap className="w-4 h-4 mr-2 text-cosmic-gold-400" />
              Core Features:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {service.features.map((f) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-2"
                >
                  <CheckCircle className="w-4 h-4 text-cosmic-gold-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-400 leading-relaxed">{f}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* --- benefits --- */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
            <RocketIcon className="w-4 h-4 mr-2 text-cosmic-gold-400" />
            Key Benefits:
          </h4>
          {service.benefits.map((b) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-cosmic-gold-500/5 to-transparent border-l-2 border-cosmic-gold-400/30"
            >
              <Shield className="w-4 h-4 text-cosmic-gold-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-300 leading-relaxed">{b}</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

/* ---------- 2. MediumCard ---------- */
const MediumCard: FC<CardProps> = ({ service, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay * 0.1 }}
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
                    <service.icon className="h-8 w-8 text-yellow-400" />
                </motion.div>

                <CardTitle className="text-white group-hover:text-yellow-400 transition-colors duration-300 text-xl mb-2">
                    {service.title}
                </CardTitle>

                <CardDescription className="text-gray-400 text-base leading-relaxed mb-2">
                    {service.description}
                </CardDescription>

                <p className="text-sm text-yellow-400/80 font-medium">
                    {service.details}
                </p>
            </CardHeader>

            <CardContent className="pt-0">
                <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                        Key Benefits:
                    </h4>
                    {service.benefits.slice(0, 2).map((b) => (
                        <motion.div
                            key={b}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-2"
                        >
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm text-gray-400 leading-relaxed">{b}</p>
                        </motion.div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </motion.div>
);

/* ---------- 3. WideCard ---------- */
const WideCard: FC<CardProps> = ({ service }) => (
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
                        <service.icon className="h-8 w-8 text-yellow-400" />
                    </motion.div>

                    <div className="flex-1">
                        <CardTitle className="text-white group-hover:text-yellow-400 transition-colors duration-300 text-xl mb-1">
                            {service.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400 text-base leading-relaxed mb-2">
                            {service.description}
                        </CardDescription>
                        <p className="text-sm text-yellow-400/80 font-medium">
                            {service.details}
                        </p>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.benefits.map((b) => (
                        <motion.div
                            key={b}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-2"
                        >
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm text-gray-400 leading-relaxed">{b}</p>
                        </motion.div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </motion.div>
);

/* ---------- 4. SmallCard ---------- */
const SmallCard: FC<CardProps> = ({ service, delay = 0 }) => (
    <motion.div
        key={service.title}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay * 0.1 }}
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
                    <service.icon className="h-8 w-8 text-yellow-400" />
                </motion.div>

                <CardTitle className="text-white group-hover:text-yellow-400 transition-colors duration-300 text-xl mb-2">
                    {service.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed mb-2">
                    {service.description}
                </CardDescription>
                <p className="text-sm text-yellow-400/80 font-medium">
                    {service.details}
                </p>
            </CardHeader>

            <CardContent className="pt-0">
                <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                        Key Benefits:
                    </h4>
                    {service.benefits.slice(0, 2).map((b) => (
                        <motion.div
                            key={b}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-2"
                        >
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm text-gray-400 leading-relaxed">{b}</p>
                        </motion.div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </motion.div>
);
