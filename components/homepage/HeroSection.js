'use client';

import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-teal-500 to-blue-600 h-[80vh] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-[5rem] font-bold mb-6">
          Discover the World with Trip Bozo
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
          Plan your perfect adventure with curated travel bundles and expert tips.
        </p>
        <button className="bg-white text-teal-600 font-medium text-base px-8 py-3 rounded-full hover:bg-teal-600 hover:text-white hover:scale-105 transition duration-300 flex items-center mx-auto">
          Start Exploring
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;