"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import StarField from "@/components/star-field"
import ShootingStars from "@/components/shooting-stars"
import BlackHole from "@/components/black-hole"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <StarField />
      <ShootingStars />
      <BlackHole />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
