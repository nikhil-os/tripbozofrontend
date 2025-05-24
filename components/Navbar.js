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
        <div className="hidden lg:flex gap-12 text-gray-700 text-base font-normal">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">Onboarding</a>
          <a href="#" className="hover:text-blue-600 transition">Essentials</a>
          <a href="#" className="hover:text-blue-600 transition">About</a>
        </div>

        {/* Right: Search + Get Started */}
<div className="flex items-center space-x-4">
  <input
    type="text"
    placeholder="Search..."
    className="border border-gray-700 rounded-full !text-black px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button className="bg-blue-600 !text-gray-700 px-4 py-1 rounded-full hover:bg-blue-700 transition">
    Get Started
  </button>
</div>

      </div>
    </nav>
  );
};

export default Navbar;