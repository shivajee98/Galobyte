import type React from "react";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Galobyte | Studio",
  description:
    "A premium digital studio engineering precision software and interface systems.",
  icons: "/logo_galobyte.png",
  keywords: [
    "product studio",
    "software engineering",
    "interface design",
    "premium development",
  ],
  authors: [{ name: "Galobyte Studio" }],
  creator: "Galobyte Studio",
  publisher: "Galobyte Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://galobyte.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Galobyte Studio",
    description:
      "Engineering precision software and interface systems.",
    url: "https://galobyte.site",
    siteName: "Galobyte Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Galobyte Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galobyte Studio",
    description:
      "Engineering precision software and interface systems.",
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
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className={`${inter.className} antialiased selection:bg-studio-blue/10 selection:text-studio-blue`}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
