import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Galobyte - Navigating the Digital Cosmos",
  description:
    "Premium technology agency specializing in app development, cloud solutions, AI-driven innovations, and digital transformation services.",
  keywords: ["technology agency", "app development", "cloud solutions", "AI solutions", "digital transformation"],
  authors: [{ name: "Galobyte" }],
  creator: "Galobyte",
  publisher: "Galobyte",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://galobyte.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Galobyte - Navigating the Digital Cosmos",
    description: "Premium technology agency specializing in cutting-edge digital solutions.",
    url: "https://galobyte.com",
    siteName: "Galobyte",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Galobyte - Digital Technology Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galobyte - Navigating the Digital Cosmos",
    description: "Premium technology agency specializing in cutting-edge digital solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased select-none`}>{children}</body>
    </html>
  )
}
