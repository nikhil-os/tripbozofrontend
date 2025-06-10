import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-16 w-full">
      <div className="w-[92vw] max-w-[1800px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-left">
          {/* Logo and Description */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              <span className="font-display text-xl font-bold">Trip Bozo</span>
            </div>
            <p className="text-gray-300 text-sm">Your essential companion for seamless travel experiences worldwide.</p>
            <div className="flex space-x-4">
              {/* Social icons here */}
            </div>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a className="text-gray-300 hover:text-white transition-colors" href="/">Home</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors" href="/onboarding">Onboarding</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors" href="/about">About Us</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors" href="/essentials/us">Travel Essentials</a></li>
            </ul>
          </div>
          {/* Popular Destinations */}
          <div className="flex flex-col items-start">
            <h4 className="font-display text-lg font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li><a className="text-gray-300 hover:text-white transition-colors" href="/countries/jp">Japan 🇯🇵</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors" href="/countries/fr">France 🇫🇷</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors" href="/countries/us">United States 🇺🇸</a></li>
              <li><a className="text-gray-300 hover:text-white transition-colors" href="/countries/th">Thailand 🇹🇭</a></li>
            </ul>
          </div>
        </div>
        {/* Copyright and Legal */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row sm:justify-between gap-4 text-gray-300 text-sm">
          <p>© 2025 TravelBuddy. All rights reserved.</p>
          <div className="flex space-x-4">
            <a className="hover:text-white transition-colors" href="/privacy">Privacy Policy</a>
            <span>•</span>
            <a className="hover:text-white transition-colors" href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
