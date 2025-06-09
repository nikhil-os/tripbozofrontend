"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import LoadingBar from '../../components/LoadingBar';
import { LoaderProvider, useLoader } from '../../components/LoaderContext';
import LoaderRouteListener from '../../components/LoaderRouteListener';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function LoaderConsumerContent({ children }) {
  const { show } = useLoader();
  return (
    <>
      <LoadingBar show={show} />
      {children}
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <LoaderProvider>
          {/* Listen for route changes and hide loader when navigation completes */}
          <LoaderRouteListener />
          {/* LoaderConsumerContent wraps only the content that needs loader context */}
          <LoaderConsumerContent>
            <Navbar />
            <div className="h-16 w-full" /> {/* Spacer for fixed navbar, 64px tall */}
            <main className="min-h-[calc(100vh-64px-200px)] pb-32">{/* 64px navbar, 200px footer, adjust as needed */}
              {children}
            </main>
            <Footer />
          </LoaderConsumerContent>
        </LoaderProvider>
      </body>
    </html>
  );
}
