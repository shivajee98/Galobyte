"use client";
import React from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/header"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

const SemiRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-dvh bg-background overflow-x-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default SemiRootLayout;
