"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, MapPin, Sparkles } from 'lucide-react'

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      institution: "Coimbatore Institute of Engineering and Technology",
      duration: "2023 - 2026",
      grade: "CGPA: 6.87",
      status: "Currently Pursuing",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      degree: "Diploma in Computer Technology",
      field: "Computer Technology",
      institution: "Kongu Polytechnic College",
      duration: "2020 - 2023",
      grade: "Percentage: 91%",
      status: "Completed",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      degree: "Higher Secondary School (HSC)",
      field: "Secondary Education",
      institution: "Sree Ganga Higher Secondary School",
      duration: "Completed 2021",
      grade: "Percentage: 76.5%",
      status: "Completed",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      degree: "Secondary School (SSLC)",
      field: "Secondary Education",
      institution: "SKL Public Matric Higher Secondary School",
      duration: "Completed 2019",
      grade: "Percentage: 68.2%",
      status: "Completed",
      gradient: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <section id="education" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] -z-10" />

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
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Academic background</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Educational{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A strong academic foundation in technology and computer science
          </p>
        </motion.div>

        {/* Education timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line - vertical on mobile, stays vertical on desktop */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 to-amber-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-background transform md:-translate-x-1/2 z-10">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${edu.gradient} animate-ping opacity-75`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${edu.gradient}`} />
                </div>

                {/* Education card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ml-20 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="glass glass-hover rounded-3xl p-8 relative overflow-hidden group"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <GraduationCap className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-right">
                          <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold ${
                            edu.status === "Currently Pursuing"
                              ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white"
                              : "bg-white/10 text-gray-300"
                          }`}>
                            {edu.status}
                          </div>
                          <div className="text-sm text-gray-400 mt-2">{edu.duration}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">{edu.field}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className={`w-4 h-4 bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`} />
                          <span className={`text-sm font-bold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                            {edu.grade}
                          </span>
                        </div>
                      </div>

                      {/* Progress bar for current education */}
                      {edu.status === "Currently Pursuing" && (
                        <div className="mt-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-400">Progress</span>
                            <span className="text-sm text-violet-400 font-medium">In Progress</span>
                          </div>
                          <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "60%" }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              viewport={{ once: true }}
                              className={`h-full bg-gradient-to-r ${edu.gradient}`}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 mt-20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                91%
              </div>
              <div className="text-gray-400">Diploma Grade</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                76.5%
              </div>
              <div className="text-gray-400">HSC Percentage</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">
                6.87
              </div>
              <div className="text-gray-400">Current CGPA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
  