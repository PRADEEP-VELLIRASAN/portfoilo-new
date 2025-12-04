import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Angeshkumar P - Full Stack Developer",
  description:
    "Full Stack Developer specializing in web development, AI, IoT, and modern JavaScript frameworks. Computer Engineering student with expertise in building scalable applications.",
  keywords: "full stack developer, web development, JavaScript, React, Node.js, AI, IoT, computer engineering, software developer, India",
  authors: [{ name: "Angeshkumar P" }],
  openGraph: {
    title: "Angeshkumar P - Full Stack Developer",
    description: "Full Stack Developer specializing in web development, AI, IoT, and modern technologies. Computer Engineering student from India.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
