// src/app/layout.jsx
import "./globals.css";
import "@/styles/responsive.css";
import { Geist, Geist_Mono } from "next/font/google";
import { LoaderProvider } from "@/components/LoaderContext";
import LoaderRouteListener from "@/components/LoaderRouteListener";
import LoaderConsumerContent from "@/components/LoaderConsumerContent";
import RootWrapper from "@/components/RootWrapper";
import { Analytics } from "@vercel/analytics/next";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
  icons: {
    icon: '/favicon.ico', // Standard favicon
  },
  title: {
    default: "tripbozo | Your Essential Travel App Companion",
    template: "%s | tripbozo"
  },
  description:
    "tripbozo curates the perfect app bundle for every traveler's needs, no matter where your journey takes you.",
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
  authors: [{ name: "tripbozo Team" }],
  creator: "tripbozo",
  publisher: "tripbozo",
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
    siteName: "tripbozo",
    title: "tripbozo | Your Essential Travel App Companion",
    description:
      "Discover curated travel app bundles tailored to your destination. Navigate, communicate, and explore with confidence using the best local apps.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "tripbozo – Your Travel App Companion"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "tripbozo | Your Essential Travel App Companion",
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

 // ← NEW: on client mount, read any saved token and
  //     configure Axios so all requests use it
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const isJwt = token.split(".").length === 3;
      axios.defaults.headers.common["Authorization"] = isJwt
        ? `Bearer ${token}`
        : `Token ${token}`;
    }
  }, []);


  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
         {/* Google AdSense */}
         <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8457921153251875"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <LoaderProvider>
          {/* this listens and hides the loader on every route-change */}
          <LoaderRouteListener />
          {/* this actually renders the loader spinner */}
          <LoaderConsumerContent>
            <RootWrapper>{children}</RootWrapper>
          </LoaderConsumerContent>
        </LoaderProvider>
        </GoogleOAuthProvider>
        <Analytics />
      </body>
    </html>
  );
}