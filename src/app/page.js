'use client';

import React from 'react';
import PopularDestinations from '/components/homepage/PopularDestinations';

import HeroSection from '/components/homepage/HeroSection';
import HowItWorks from '/components/homepage/HowItWorks';
import CallToAction from '/components/homepage/CallToAction';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <PopularDestinations />
      <HowItWorks />
      <CallToAction />
    </main>
  );
};

export default HomePage;
