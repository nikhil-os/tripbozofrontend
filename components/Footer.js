'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
        
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-xl font-bold mb-3">Travel Buddy</h3>
          <p className="text-sm text-gray-600">
            Your trusted companion for unforgettable journeys.
          </p>
        </div>

        {/* Column 2: Company */}
        <div>
          <h4 className="text-md font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Careers</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Press</a></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h4 className="text-md font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Connect */}
        <div>
          <h4 className="text-md font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500 transition">Facebook</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Twitter</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4 text-center text-xs text-gray-500">
        © 2025 Travel Buddy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
