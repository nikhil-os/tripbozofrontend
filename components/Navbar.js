'use client';

import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          TravelBuddy
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex space-x-10 text-base font-medium">
          <a href="#" className="text-cyan-400">Home</a>
          <a href="#" className="text-gray-800 hover:text-cyan-400 transition">Onboarding</a>
          <a href="#" className="text-gray-800 hover:text-cyan-400 transition">Essentials</a>
          <a href="#" className="text-gray-800 hover:text-cyan-400 transition">About</a>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-1.5 bg-white text-gray-900 rounded-full text-sm border shadow-sm hover:shadow transition">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
            </svg>
            Search
          </button>
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-1.5 rounded-full text-sm font-medium transition">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
