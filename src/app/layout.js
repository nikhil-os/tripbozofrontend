// src/app/layout.jsx
import "./globals.css";
import "@/styles/responsive.css";
import { Geist, Geist_Mono } from "next/font/google";
import RootWrapper from "@/components/RootWrapper";
import { Analytics } from "@vercel/analytics/next";
import { LoaderProvider } from "@/components/LoaderContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata = {
  metadataBase: new URL("https://tripbozo.com"),
  title: {
    default: "Trip Bozo | Your Essential Travel App Companion",
    template: "%s | Trip Bozo"
  },
  description:
    "Trip Bozo curates the perfect app bundle for every traveler's needs, no matter where your journey takes you.",
  keywords: [
    "travel apps",
    "trip planner",
    "travel companion",
    "destination guide",
    "travel essentials",
    "trip apps",
    "travel app bundle",
    "international travel",
    "travel tools"
  ],
  authors: [{ name: "Trip Bozo Team" }],
  creator: "Trip Bozo",
  publisher: "Trip Bozo",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tripbozo.com",
    siteName: "Trip Bozo",
    title: "Trip Bozo | Your Essential Travel App Companion",
    description:
      "Discover curated travel app bundles tailored to your destination. Navigate, communicate, and explore with confidence using the best local apps.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Trip Bozo – Your Travel App Companion"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Trip Bozo | Your Essential Travel App Companion",
    description:
      "Discover curated travel app bundles tailored to your destination.",
    images: ["/logo.png"],
    creator: "@tripbozo"
  },
  other: {
    viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
    "theme-color": "#2ad2c9"
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
    manifest: "/manifest.json"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Next.js will automatically inject all of the `metadata` above */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
               <LoaderProvider>
         <RootWrapper>{children}</RootWrapper>
       </LoaderProvider>
        <Analytics />
      </body>
    </html>
  );
}
