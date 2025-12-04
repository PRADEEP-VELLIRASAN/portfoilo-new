"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Code, Sparkles } from 'lucide-react'
import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Analysis And Prevention Of AI-Based Phishing Email Attacks",
      year: "2025",
      description:
        "Developed a system to classify email messages as spam or not spam using the XG-Boost algorithm for effective detection. My role involved handling the back-end processes using Python, Flask, and Pandas to ensure smooth data handling and functionality.",
      technologies: ["Python", "Flask", "Pandas", "XG-Boost", "HTML", "CSS"],
      github: "https://github.com/ANGESHKUMAR123",
      image: "/ai-phishing-detection-dashboard.jpg",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Login Using Face Recognition",
      year: "2023",
      description:
        "Developed a secure login page using face recognition technology on Ubuntu to enhance security and eliminate the issue of forgotten passwords. I led the team and developed the front-end components for a seamless user interface.",
      technologies: ["Python", "PHP", "OpenCV", "Ubuntu"],
      github: "https://github.com/ANGESHKUMAR123",
      image: "/face-recognition-security-system.jpg",
      gradient: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">My work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Innovative solutions showcasing technical skills and problem-solving abilities
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="glass glass-hover rounded-3xl overflow-hidden group relative"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10`} />
              
              {/* Project image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                
                {/* Year badge */}
                <div className={`absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} backdrop-blur-sm`}>
                  <span className="text-white font-bold text-sm">{project.year}</span>
                </div>
              </div>

              {/* Project content */}
              <div className="p-8 relative z-20">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 text-xs font-medium hover:bg-gray-300 dark:hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${project.gradient} text-white font-semibold hover:shadow-glow transition-all`}
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Bottom gradient line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.gradient}`}
              />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/ANGESHKUMAR123"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/10 transition-all"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
