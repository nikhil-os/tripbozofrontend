'use client';

import React from 'react';

const Navbar = () => {
  return (
    
<nav className="bg-transparent shadow-sm fixed w-full top-0 left-0 z-50">

  <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
    
    {/* Left: Brand */}
    <div className="text-2xl font-semibold text-black blackspace-nowrap">
      Trip Bozo
    </div>

    {/* Center: Nav Links */}
    <div className="hidden lg:flex gap-12 text-black text-base font-normal">
      <a href="/" className="hover:text-teal-300 transition">Home</a>
      <a href="/Onboarding" className="hover:text-teal-300 transition">Onboarding</a>
      <a href="/About" className="hover:text-teal-300 transition">About</a>
    </div>

    <input
      type="text"
      placeholder="Search..."
      className="border border-black bg-transparent text-black px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder:text-black/70"
    />
    <a
        href="/onboarding"
        className="inline-block bg-teal-400 hover:bg-teal-500 text-black px-8 py-4 rounded-full text-lg font-semibold mt-4 shadow-lg transition-colors"
        onClick={() => window.location.href = '/Onboarding'}>
        Get Started
      </a>
    
  </div>
</nav>
  );
};

export default Navbar;