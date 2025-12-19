"use client";

import { motion } from "framer-motion";
import Logo from "@/components/logo";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:info.galobyte@gmail.com", label: "Email" },
  ];

  const footerLinks = [
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="py-20 bg-background border-t border-black/5">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-sm"
          >
            <Logo />
            <p className="text-studio-gray mt-6 leading-relaxed">
              Architecting the digital future with precision, clarity, and purpose.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-8 flex-wrap"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-studio-blue font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-studio-gray text-sm">
            © {new Date().getFullYear()} Galobyte Studios. All rights reserved.
          </p>

          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-studio-gray hover:text-studio-blue transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
