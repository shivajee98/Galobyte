"use client";

import { motion } from "framer-motion";
import Logo from "@/components/logo";
import { Github, Twitter, Linkedin, Mail, Star } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "info.galobyte@gmail.com", label: "Email" },
  ];

  const footerLinks = {
    "Cosmic Services": [
      "App Development",
      "Cloud Solutions",
      "DevOps Excellence",
      "AI Solutions",
    ],
    // "Mission Control": ["About Universe", "Our Crew", "Careers", "Contact"],
    // "Knowledge Base": ["Blog", "Case Studies", "Documentation", "Support"],
  };

  return (
    <footer className="relative py-20 border-t border-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 md:col-span-2"
          >
            <Logo />
            <p className="text-gray-400 mt-6 mb-8 max-w-md leading-relaxed">
              Navigating digital frontiers and exploring the infinite cosmos of
              technology to architect stellar solutions that transcend the
              boundaries of possibility.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-3 rounded-full bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 hover:border-yellow-400/50 text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="lg:col-span-1 md:col-span-1"
              >
                <h3 className="text-white font-semibold mb-6 text-lg">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href="#"
                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Galobyte. All rights reserved across
              the digital cosmos.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">Crafted with cosmic precision</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
