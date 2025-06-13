import React from 'react';
import Image from 'next/image';
import AppLink from './AppLink';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-16 w-full">
      <div className="w-[92vw] max-w-[1800px] mx-auto px-6">
        {/* Grid layout with responsive changes */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-y-12 md:gap-x-12 items-start md:items-start text-center md:text-left">
          {/* Logo and Description - centered on mobile */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2">
            {/* <Image
                src="/logo.png" // Path to your logo in the public directory
                alt="Trip Bozo Logo"
                width={40}  // Adjust width as needed
                height={40} // Adjust height as needed
                className="rounded-full" // Optional: if your logo is circular
              /> */}
              <span className="font-display text-2xl sm:text-xl font-bold">Trip Bozo</span>
            </div>
            <p className="text-gray-400 text-sm italic -mt-2">Less googling, more going.</p>
            <p className="text-gray-300 text-sm">Your essential companion for seamless travel experiences worldwide.</p>
            <div className="flex space-x-4">
              {/* Social icons here */}
            </div>
            <div className="w-[70%] h-px bg-white/30 mt-4 md:hidden"></div>
          </div>

          {/* Quick Links - centered on mobile */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-display text-xl sm:text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/">Home</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/onboarding">Onboarding</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/about">About Us</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/essentials/us">Travel Essentials</AppLink></li>
            </ul>
            <div className="w-[70%] h-px bg-white/30 mt-6 md:hidden"></div>
          </div>

          {/* Popular Destinations - centered on mobile */}
          <div className="flex flex-col items-center md:items-start md:justify-self-end">
            <h4 className="font-display text-xl sm:text-lg font-bold mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/country/jp">Japan 🇯🇵</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/country/fr">France 🇫🇷</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/country/us">United States 🇺🇸</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/country/th">Thailand 🇹🇭</AppLink></li>
            </ul>
          </div>
        </div>
        
        {/* Border line moved up with reduced margin */}
        <div className="border-t border-gray-800 mt-8"></div>
        
        {/* Copyright and Legal - centered on mobile */}
        <div className="pt-6 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Trip Bozo. All rights reserved.</p>
          <div className="flex space-x-8">
            <AppLink href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</AppLink>
            <AppLink href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</AppLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;