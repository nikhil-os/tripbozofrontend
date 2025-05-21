// components/Footer.js
'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Travel Buddy</h3>
          <p className="text-gray-600">
            Your trusted companion for unforgettable journeys.
          </p>
        </div>

        {/* Column 2: Company */}
        <div>
          <h4 className="text-md font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Press</a></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h4 className="text-md font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Social */}
        <div>
          <h4 className="text-md font-semibold mb-4">Connect</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition">Facebook</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Twitter</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center py-6 text-gray-500 text-xs">
        © 2025 Travel Buddy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
