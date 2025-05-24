import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent shadow-sm fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="flex items-center">
          <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" stroke="#00C4B4"/>
            <path d="M12 2a15 15 0 0 0 0 20 15 15 0 0 0 0-20" stroke="#00C4B4"/>
          </svg>
          <span className="text-xl font-bold text-blue-900">Trip Bozo</span>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden lg:flex gap-8 text-gray-700 text-base font-normal">
          <a href="#" className="hover:text-teal-500 transition">Home</a>
          <a href="#" className="hover:text-teal-500 transition">Onboarding</a>
          <a href="#" className="hover:text-teal-500 transition">Essentials</a>
          <a href="#" className="hover:text-teal-500 transition">About</a>
        </div>

        {/* Right: Search + Get Started */}
        <div className="flex items-center space-x-4">
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search box"
              className="pl-10 pr-5 py-2 border border-gray-300 rounded-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-teal-500 hover:bg-gray-100 hover:shadow-sm transition duration-300"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z"/>
              </svg>
            </span>
          </div>
          {/* Get Started Button */}
          <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-800 hover:shadow-lg hover:scale-105 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;