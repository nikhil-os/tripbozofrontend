// src/components/RootWrapper.jsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootWrapper({ children }) {
  const pathname = usePathname();
  const isBundle = pathname.startsWith("/bundle-redirect");

  return (
    <>
      {/* only show Navbar + footer on non‑bundle pages */}
      {!isBundle && <Navbar />}
      {!isBundle && <div className="h-16 w-full" />} {/* navbar spacer */}
      <main
        className={
          isBundle
            ? "min-h-screen"
            : "min-h-[calc(100vh-64px-200px)] pb-32"
        }
      >
        {children}
      </main>
      {!isBundle && <Footer />}
    </>
  );
}
