"use client"

import { motion } from "framer-motion"
import { Palette, Music, Plane, Scissors, Sparkles, Code2, Zap } from 'lucide-react'

export default function AboutSection() {
  const hobbies = [
    {
      icon: Palette,
      title: "Drawing & Painting",
      description: "Expressing creativity through artistic visual mediums.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Music,
      title: "Listening Music",
      description: "Finding inspiration through diverse musical genres.",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      icon: Plane,
      title: "Traveling",
      description: "Exploring new places and cultures to broaden perspectives.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Scissors,
      title: "Hand Craft",
      description: "Creating tangible objects with precision and patience.",
      gradient: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[128px] -z-10" />

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
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Get to know me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A passionate developer with a strong foundation in computer technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Career objective */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Card */}
            <div className="glass glass-hover rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Career Objective</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  Highly motivated and detail-oriented student seeking an internship to apply academic knowledge in real-world projects.
                  Skilled in problem-solving, teamwork, and adapting to new technologies. Eager to gain hands-on experience and contribute
                  to innovative solutions in a professional environment.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass glass-hover rounded-2xl p-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-violet-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                    4+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">Years in Tech</div>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass glass-hover rounded-2xl p-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    5+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">Projects Done</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass glass-hover rounded-2xl p-6 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${hobby.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${hobby.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <hobby.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{hobby.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
