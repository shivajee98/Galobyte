"use client";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/hero"), { ssr: false });
const Services = dynamic(() => import("@/components/services"), { ssr: false });
const About = dynamic(() => import("@/components/about"), { ssr: false });
const Contact = dynamic(() => import("@/components/contact"), { ssr: false });
const Work = dynamic(() => import("@/components/work"), { ssr: false })
const Testimonials = dynamic(() => import("@/components/testimonials"), { ssr: false })


export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
