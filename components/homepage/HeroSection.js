'use client';

import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-[80vh]" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
          <p className="text-xl mb-6">Personalized travel experiences tailored just for you.</p>

           {/* 🔍 Search Bar Below Hero Text */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Where to?"
            className="w-full max-w-md px-5 py-3 rounded-full text-black text-base border border-white-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
          />
        </div>
          <a href="/Onboarding" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
