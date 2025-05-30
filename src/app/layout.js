import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Travel Buddy',
  description: 'Personalized travel experiences tailored just for you.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <Navbar />
        <div className="h-16 w-full" /> {/* Spacer for fixed navbar, 64px tall */}
        <main className="min-h-[calc(100vh-64px-200px)] pb-32">{/* 64px navbar, 200px footer, adjust as needed */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
