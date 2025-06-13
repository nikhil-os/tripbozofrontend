// src/app/layout.js
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "tripbozo",
  description: "Personalized travel experiences tailored just for you.",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  // Hide global chrome on our bundle‑redirect pages:
  const isBundleRedirect = pathname?.startsWith("/bundle-redirect");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {/* only show these on non‑bundle pages */}
        {!isBundleRedirect && <Navbar />}
        {!isBundleRedirect && <div className="h-16 w-full" />} {/* spacer */}

        <main
          className={
            !isBundleRedirect
              ? "min-h-[calc(100vh-64px-200px)] pb-32"
              : "min-h-screen"
          }
        >
          {children}
          <Analytics />
        </main>

        {!isBundleRedirect && <Footer />}
      </body>
    </html>
  );
}
