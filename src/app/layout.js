import './globals.css';
import '@/styles/responsive.css';
import { LoaderProvider } from '@/components/LoaderContext';
import LoaderRouteListener from '@/components/LoaderRouteListener';
import LoaderConsumerContent from '@/components/LoaderConsumerContent';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata = {
  metadataBase: new URL('https://tripbozo.com'),
  title: {
    default: 'Trip Bozo | Your Essential Travel App Companion',
    template: '%s | Trip Bozo'
  },
  description: 'Trip Bozo curates the perfect app bundle for every traveler\'s needs, no matter where your journey takes you. Discover essential travel apps for navigation, communication, and local experiences.',
  keywords: ['travel apps', 'trip planner', 'travel companion', 'destination guide', 'travel essentials', 'trip apps', 'travel app bundle', 'international travel', 'travel tools'],
  authors: [{ name: 'Trip Bozo Team' }],
  creator: 'Trip Bozo',
  publisher: 'Trip Bozo',
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tripbozo.com',
    siteName: 'Trip Bozo',
    title: 'Trip Bozo | Your Essential Travel App Companion',
    description: 'Discover curated travel app bundles tailored to your destination. Navigate, communicate, and explore with confidence using the best local apps.',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Trip Bozo - Your Travel App Companion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trip Bozo | Your Essential Travel App Companion',
    description: 'Discover curated travel app bundles tailored to your destination. Navigate, communicate, and explore with confidence.',
    images: ['/logo.png'],
    creator: '@tripbozo',
  },
  verification: {
    google: 'google-site-verification-code', // Replace with your actual verification code
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://tripbozo.com',
    languages: {
      'en-US': 'https://tripbozo.com',
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#2ad2c9" />
      </head>
      <body className={`${geistSans.variable} antialiased bg-white`}>
        <LoaderProvider>
          <LoaderRouteListener />
          <LoaderConsumerContent>
            <Navbar />
            <main className="min-h-screen pt-16">
              {children}
              <Analytics />
            </main>
            <Footer />
          </LoaderConsumerContent>
        </LoaderProvider>
      </body>
    </html>
  );
}
