import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-16 w-full">
      <div className="w-[92vw] max-w-[1800px] mx-auto px-6">
        {/* Changed grid-cols-3 to use custom column widths and added md:justify-between */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-y-12 md:gap-x-12 items-start text-left md:justify-between">
          {/* Logo and Description - remains the first item, takes 'auto' width */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-2">
            {/* <Image
                src="/logo.png" // Path to your logo in the public directory
                alt="Trip Bozo Logo"
                width={40}  // Adjust width as needed
                height={40} // Adjust height as needed
                className="rounded-full" // Optional: if your logo is circular
              /> */}
              <span className="font-display text-xl font-bold">Trip Bozo</span>
            </div>
            <p className="text-gray-400 text-sm italic -mt-2">Less googling, more going.</p>
            <p className="text-gray-300 text-sm">Your essential companion for seamless travel experiences worldwide.</p>
            <div className="flex space-x-4">
              {/* Social icons here */}
            </div>
          </div>

          {/* Quick Links - now explicitly in the middle, using 1fr to take remaining space */}
          {/* Removed md:col-start-2 as it's not needed with md:grid-cols-[auto_1fr_auto] */}
          <div className="flex flex-col items-start md:justify-self-center"> {/* Added md:justify-self-center */}
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link className="text-gray-300 hover:text-white transition-colors" href="/">Home</Link></li>
              <li><Link className="text-gray-300 hover:text-white transition-colors" href="/onboarding">Onboarding</Link></li>
              <li><Link className="text-gray-300 hover:text-white transition-colors" href="/about">About Us</Link></li>
              <li><Link className="text-gray-300 hover:text-white transition-colors" href="/essentials/us">Travel Essentials</Link></li>
            </ul>
          </div>

          {/* Popular Destinations - remains the last item, takes 'auto' width */}
          {/* Removed md:col-start-3 */}
          <div className="flex flex-col items-start md:justify-self-end"> {/* Added md:justify-self-end */}
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