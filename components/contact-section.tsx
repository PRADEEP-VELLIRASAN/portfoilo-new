"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Sparkles, ArrowUpRight } from 'lucide-react'

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9345106980",
      href: "tel:9345106980",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email",
      value: "angeshkumar499@gmail.com",
      href: "mailto:angeshkumar499@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pachampalayam, Tirupur",
      href: "#",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      handle: "@ANGESHKUMAR123",
      href: "https://github.com/ANGESHKUMAR123",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "angeshkumar-p",
      href: "https://www.linkedin.com/in/angeshkumar-p-99ab92302",
      gradient: "from-blue-600 to-blue-800",
    },
  ]

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] -z-10" />

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
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Let's connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on exciting projects? Let's create something amazing together
          </p>
        </motion.div>

        {/* Contact grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass glass-hover rounded-3xl p-8 relative overflow-hidden group block"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{info.title}</div>
                <div className="text-gray-900 dark:text-white font-semibold text-lg">{info.value}</div>
              </div>

              {/* Arrow indicator */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-white/50" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Connect on Social Media</h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-900 dark:text-white font-semibold">{social.name}</div>
                    <div className="text-gray-400 text-sm">{social.handle}</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="mailto:angeshkumar499@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:shadow-glow-cyan transition-all"
          >
            <Send className="w-5 h-5" />
            <span>Send me an email</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
