'use client';

import React from 'react';
import PopularDestinations from '/components/homepage/PopularDestinations';

import Navbar from '/components/Navbar';
import HeroSection from '/components/homepage/HeroSection';
import HowItWorks from '/components/homepage/HowItWorks';
import CallToAction from '/components/homepage/CallToAction';
import Footer from '/components/Footer';




const HomePage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PopularDestinations />
      <HowItWorks />
      <CallToAction />
      <Footer />
      
      

    </main>
  );
};

export default HomePage;
