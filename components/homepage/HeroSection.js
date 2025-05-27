'use client';

import React from 'react';

const HeroSection = () => {
  return (
<section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pb-16">
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/50 to-white/30 z-20"></div>
    <div className="relative w-full h-full">
      <img
        src="/Images/home.jpg"
        alt="Travel destination"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-teal-400/20 mix-blend-overlay z-10"></div>
  </div>
  <div className="container mx-auto relative z-30 flex flex-col items-center justify-center min-h-[60vh]">
    <div className="max-w-3xl w-full mx-auto text-center flex flex-col items-center justify-center">
      {/* Content */}
  <div className="relative z-10 text-white">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Discover the Perfect Apps for Your Journey
    </h1>
    <p className="text-lg md:text-xl mb-8">
      Find essential travel apps curated for your destination
    </p>

    {/* Search Bar */}
    <div className="max-w-2xl mx-auto flex items-center bg-white rounded-full shadow-lg overflow-visible">
      <div className="relative flex-grow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <input
          type="text"
          placeholder="Tokyo, Japan..."
          className="h-12 w-full pl-12 pr-4 rounded-l-full text-gray-800 text-base placeholder-gray-400 focus:outline-none"
        />
      </div>
      <button className="bg-teal-500 text-white px-6 py-3 rounded-r-full font-semibold hover:bg-teal-600 transition whitespace-nowrap flex-shrink-0 min-w-fit">
        Search
      </button>
</div>
        </div>
      </div>
      
    </div>
  
</section>
  );
};

export default HeroSection;