"use client";
import React from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/header"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
const StarField = dynamic(() => import("@/components/star-field"), {
  ssr: false,
});
const ShootingStars = dynamic(() => import("@/components/shooting-stars"), {
  ssr: false,
});
const BlackHole = dynamic(() => import("@/components/black-hole"), {
  ssr: false,
});

const SemiRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-dvh bg-black overflow-x-hidden">
      <StarField />
      <ShootingStars />
      <BlackHole />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default SemiRootLayout;
