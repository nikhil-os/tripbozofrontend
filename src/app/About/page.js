'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useLoader } from '@/components/LoaderContext';
import Script from 'next/script';

// Static metadata for this page (for crawlers)
export const metadata = {
  title: 'About Trip Bozo | Your Essential Travel App Companion',
  description: 'Learn about Trip Bozo, the app that curates travel app bundles tailored to your destination. Discover our mission, features, and how we help travelers worldwide.',
  alternates: {
    canonical: 'https://tripbozo.com/About',
  },
  openGraph: {
    title: 'About Trip Bozo | Your Essential Travel App Companion',
    description: 'Learn about Trip Bozo, the app that curates travel app bundles tailored to your destination. Discover our mission, features, and how we help travelers worldwide.',
  }
};

export default function AboutPage() {
  const router = useRouter();
  const { setShow } = useLoader();

  const handleStartNow = () => {
    setShow(true); // Show loader before navigation
    router.push('/Onboarding');
    // Loader will be hidden by LoaderRouteListener
  };

  return (
    <>
      {/* Schema.org structured data */}
      <Script id="about-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Trip Bozo",
        "url": "https://tripbozo.com",
        "logo": "https://tripbozo.com/logo.png",
        "description": "Trip Bozo curates the perfect app bundle for every traveler's needs, no matter where your journey takes you.",
        "sameAs": [
          "https://twitter.com/tripbozo",
          "https://facebook.com/tripbozo",
          "https://instagram.com/tripbozo"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@tripbozo.com",
          "contactType": "customer service"
        }
      })}} />

      <main className="bg-gradient-to-br from-[#e0f7fa] via-[#f5fafd] to-[#e3f2fd] text-gray-800 w-full min-h-screen">
        {/* Hero Section - Full width, bigger padding */}
        <section className="w-full bg-gradient-to-r from-[#38bdf8] via-[#2ad2c9] to-[#5eead4] text-white py-16 sm:py-24 px-4 sm:px-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mt-20 -mr-20 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full -mb-32 -ml-32 blur-2xl"></div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg tracking-tight animate-fade-in-up relative z-10">
            Your Essential<br className="hidden sm:block" /> Travel Companion
          </h1>
          <p className="text-xl sm:text-2xl max-w-2xl mx-auto mb-8 text-white/90 font-medium drop-shadow animate-fade-in-up delay-200 relative z-10">
            Trip Bozo curates the perfect app bundle for every traveler&apos;s needs, no matter where your journey takes you.
          </p>
          <button
            className="bg-white text-teal-500 font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-lg hover:bg-gray-100 transition shadow-lg btn-animated relative z-10 mt-4"
            onClick={handleStartNow}
          >
            Get Started
          </button>
        </section>

        {/* Mission Section - Offset design */}
        <section className="w-[85%] sm:w-[90%] mx-auto -mt-8 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 tracking-tight">
                Our Mission
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <p className="text-lg text-gray-600 md:w-2/3">
                  We believe that <span className="text-teal-600 font-semibold">technology should enhance your travel experience</span>, not complicate it. Our mission is to help travelers discover the essential digital tools they need for each unique destination, creating a more connected, prepared, and enriching journey.
                </p>
                <div className="md:w-1/3 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 flex items-center justify-center">
                  <span className="text-7xl">🌍</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section - No white box, varied design */}
        <section className="w-full py-16 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 text-center mb-8 sm:mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500">
                Key Features
              </span>
            </h2>
            
            {/* Feature 1 - Left aligned */}
            <div className="mb-16 sm:mb-24">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-100 flex items-center justify-center shadow-lg">
                    <span className="text-5xl md:text-6xl">🏔️</span>
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Dynamic Leg Suggestions</h3>
                  <p className="text-lg text-gray-600">
                    Receive app recommendations based on the type of stop in your journey, from beach destinations to mountain retreats. Our AI-powered system learns your preferences to suggest exactly what you need.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature 2 - Right aligned */}
            <div className="mb-16 sm:mb-24">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-teal-100 flex items-center justify-center shadow-lg">
                    <span className="text-5xl md:text-6xl">🧑‍💼</span>
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-right">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Personalized Onboarding</h3>
                  <p className="text-lg text-gray-600">
                    Tell us about your travel style and destinations to get the most relevant app suggestions for your journey. We tailor recommendations based on your unique preferences.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature 3 - Left aligned */}
            <div className="mb-16 sm:mb-24">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-cyan-100 flex items-center justify-center shadow-lg">
                    <span className="text-5xl md:text-6xl">📱</span>
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Curated App Collections</h3>
                  <p className="text-lg text-gray-600">
                    Expert-vetted selections of the best travel apps for every destination, organized by category. Save time researching and focus on enjoying your trip.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature 4 - Right aligned */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-yellow-100 flex items-center justify-center shadow-lg">
                    <span className="text-5xl md:text-6xl">🚨</span>
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-right">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Emergency Essentials PWA</h3>
                  <p className="text-lg text-gray-600">
                    Access critical information offline with our installable Progressive Web App for emergencies. Stay prepared for anything during your travels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - New addition */}
        <section className="w-full py-12 bg-gradient-to-r from-[#2ad2c9]/10 via-[#38bdf8]/10 to-[#5eead4]/10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-bold text-teal-500 mb-2">50+</span>
                <p className="text-gray-600">Countries Covered</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-bold text-teal-500 mb-2">1000+</span>
                <p className="text-gray-600">Curated Apps</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-bold text-teal-500 mb-2">15k+</span>
                <p className="text-gray-600">Happy Travelers</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-bold text-teal-500 mb-2">4.8</span>
                <p className="text-gray-600">Average Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Full width with angle design */}
        <section className="w-full bg-gradient-to-r from-[#2ad2c9] via-[#38bdf8] to-[#5eead4] text-white py-16 px-4 sm:px-8 relative overflow-hidden">
          {/* Decorative angle overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-xl"></div>
            <svg className="absolute bottom-0 left-0 w-full text-white/5" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="currentColor" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 drop-shadow-lg">Ready to Enhance Your Travels?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90 font-medium">
              Join thousands of travelers who use Trip Bozo to discover essential apps for their journeys.
            </p>
            <button
              className="bg-white text-teal-500 font-bold px-10 py-4 rounded-full text-xl hover:bg-gray-100 transition shadow-lg transform hover:scale-105"
              onClick={handleStartNow}
            >
              Start Now
            </button>
          </div>
        </section>
      </main>
    </>
  );
}