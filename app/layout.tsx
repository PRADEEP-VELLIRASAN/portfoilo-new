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
  title: "Patrick Bradley - Video Blogger & Filmmaker",
  description:
    "Professional filmmaker and content creator specializing in compelling visual storytelling, documentaries, and commercial video production.",
  keywords: "filmmaker, video blogger, content creator, documentary, commercial video, Los Angeles",
  authors: [{ name: "Patrick Bradley" }],
  openGraph: {
    title: "Patrick Bradley - Video Blogger & Filmmaker",
    description: "Professional filmmaker and content creator specializing in compelling visual storytelling.",
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
