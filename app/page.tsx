"use client"
import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import EducationSection from "@/components/education-section"
import AchievementsSection from "@/components/achievements-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null)

  useEffect(() => {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDark = savedTheme === "dark" || (savedTheme === null && prefersDark)
    
    setDarkMode(isDark)
    
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  // Don't render until theme is loaded to prevent flash
  if (darkMode === null) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* Light mode background */}
      {!darkMode && (
        <>
          <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
          <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] pointer-events-none"></div>
        </>
      )}
      
      {/* Dark mode background */}
      {darkMode && (
        <>
          <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
          <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pointer-events-none"></div>
        </>
      )}
      
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pb-20 md:pb-0 space-y-24 md:space-y-32 overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
