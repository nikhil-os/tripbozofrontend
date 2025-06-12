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
  title: 'Trip Bozo',
  description: 'Your essential companion for seamless travel experiences worldwide.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
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
