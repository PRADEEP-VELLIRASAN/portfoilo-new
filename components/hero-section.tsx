"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, ArrowRight } from 'lucide-react'
import Image from "next/image"

export default function HeroSection() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ANGESHKUMAR123", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/angeshkumar-p-99ab92302", label: "LinkedIn" },
    { icon: Mail, href: "mailto:angeshkumar499@gmail.com", label: "Email" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 backdrop-blur-md mb-8 hover:bg-gray-300 dark:hover:bg-white/10 transition-colors cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Available for Internship</span>
            </motion.div>

            {/* Main heading */}
            <div className="relative mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Angeshkumar
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 font-light"
            >
              Computer Engineering Student & <span className="text-gray-900 dark:text-white font-medium">Full Stack Developer</span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed text-base lg:text-lg"
            >
              Crafting digital experiences with code. Specialized in building scalable web applications and exploring the frontiers of AI and IoT.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-semibold flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download Resume <Download className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Social Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex items-center justify-center lg:justify-start gap-8 border-t border-gray-300 dark:border-white/10 pt-8"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
              <div className="h-8 w-px bg-gray-300 dark:bg-white/10" />
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 text-violet-400" />
                Tirupur, India
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Glowing Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-violet-500/20 border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-cyan-500/20 border-dashed"
              />
              
              {/* Main Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm z-10">
                <Image
                  src="/professional-student-portrait.png"
                  alt="Angeshkumar "
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Floating Tech Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-10 z-20 bg-black/50 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-mono text-green-400">System Online</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-0 z-20 bg-black/50 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl"
              >
                <div className="text-xs font-mono text-gray-400 mb-1">Current Focus</div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">AI & IoT Security</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
