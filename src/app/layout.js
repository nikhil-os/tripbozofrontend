// No "use client" here!
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import RootWrapper from "@/components/RootWrapper"; // see below

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <RootWrapper>{children}</RootWrapper>
        <Analytics />
      </body>
    </html>
  );
}
