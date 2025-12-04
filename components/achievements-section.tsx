"use client"

import { motion } from "framer-motion"
import { Cloud, Code, Star, Sparkles, Award } from 'lucide-react'

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Cloud,
      title: "Internet of Things Internship",
      description:
        "Successfully completed a 5-day offline internship program at VIT College focused on developing cloud-based intelligent edge-powered IoT solutions.",
      organization: "Internpe",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "Python Programming Internship",
      description: "Completed a 1-month online internship in Python Basics at Digilabs, gaining hands-on experience in core programming concepts.",
      organization: "Digilabs",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Star,
      title: "WEEB QUEST Participation",
      description: "Participated in WEEB QUEST at KAISER 2025 organized by Hindusthan College, demonstrating technical knowledge and problem-solving skills.",
      organization: "Hindusthan College",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="achievements" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[128px] -z-10" />

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
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Experience & recognition</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Internships &{" "}
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Practical experience through internships and technical events
          </p>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass glass-hover rounded-3xl p-8 relative overflow-hidden group"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Icon */}
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>

                {/* Organization badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/10 mb-4">
                  <Award className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-400">{achievement.organization}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-rose-400 group-hover:bg-clip-text transition-all duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Bottom gradient line */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${achievement.gradient}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 mt-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                2
              </div>
              <div className="text-gray-400 text-sm">Internships</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                8+
              </div>
              <div className="text-gray-400 text-sm">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">
                2
              </div>
              <div className="text-gray-400 text-sm">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
                1
              </div>
              <div className="text-gray-400 text-sm">Tech Events</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
