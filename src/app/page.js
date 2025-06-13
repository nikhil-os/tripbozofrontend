'use client';

import React from 'react';
import PopularDestinations from '/components/homepage/PopularDestinations';
import HeroSection from '/components/homepage/HeroSection';
import HowItWorks from '/components/homepage/HowItWorks';
import CallToAction from '/components/homepage/CallToAction';
import SEO from '/components/SEO';

// Static metadata for this page (for crawlers)
export const metadata = {
  title: 'Trip Bozo | Your Essential Travel App Companion',
  description: 'Trip Bozo curates the perfect app bundle for every traveler\'s needs. Discover essential travel apps for navigation, communication, and local experiences.',
  alternates: {
    canonical: 'https://tripbozo.com',
  },
  openGraph: {
    title: 'Trip Bozo | Your Essential Travel App Companion',
    description: 'Discover curated travel app bundles tailored to your destination. Navigate, communicate, and explore with confidence.',
  }
};

const HomePage = () => {
  // Homepage specific schema data
  const homeSchemaData = {
    "@type": "WebSite",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://tripbozo.com/country/{country}"
      },
      "query-input": "required name=country"
    },
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "Trip Bozo",
      "applicationCategory": "TravelApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  };

  return (
    <>
      <SEO 
        type="WebSite"
        title="Trip Bozo | Your Essential Travel App Companion"
        description="Discover curated travel app bundles tailored to your destination. Navigate, communicate, and explore with confidence."
        url="https://tripbozo.com"
        image="https://tripbozo.com/logo.png"
        additionalData={homeSchemaData}
      />
      <main>
        <HeroSection />
        <PopularDestinations />
        <HowItWorks />
        <CallToAction />
      </main>
    </>
  );
};

export default HomePage;
