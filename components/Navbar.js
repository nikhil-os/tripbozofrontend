'use client';

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Brand */}
        <div className="text-2xl font-semibold text-gray-900 whitespace-nowrap">
          Travel Buddy Wanderlust Kit
        </div>

        {/* Center: Nav Links */}
        <div className="hidden lg:flex gap-12 text-gray-700 text-base font-normal">
          <a href="/" className="hover:text-blue-600 transition">Home</a>
          <a href="/Onboarding" className="hover:text-blue-600 transition">Onboarding</a>
          <a href="/About" className="hover:text-blue-600 transition">About</a>
        </div>

        {/* Right: Search + Get Started */}
<div className="flex items-center space-x-4">
  <input
    type="text"
    placeholder="Search..."
    className="border border-gray-700 rounded-full !text-black px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button
    className="bg-blue-600 !text-gray-700 px-4 py-1 rounded-full hover:bg-blue-700 transition"
    onClick={() => window.location.href = '/Onboarding'}
  >
    Get Started
  </button>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
