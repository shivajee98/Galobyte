"use client";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/hero"), { ssr: false });
const Services = dynamic(() => import("@/components/services"), { ssr: false });
const About = dynamic(() => import("@/components/about"), { ssr: false });
const Contact = dynamic(() => import("@/components/contact"), { ssr: false });

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}
