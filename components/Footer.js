import React from 'react';
import Image from 'next/image';
import AppLink from './AppLink';
import { FiInstagram, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white pt-8 md:pt-10 pb-8 md:pb-10 w-full">
      <div className="w-[92vw] max-w-[1800px] mx-auto px-4 md:px-6">
        {/* Grid layout with responsive changes */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-y-8 md:gap-y-6 md:gap-x-8 items-start md:items-start text-center md:text-left">
          {/* Logo and Description - centered on mobile */}
          <div className="flex flex-col items-center md:items-start space-y-2">
=======
    <footer className="bg-gray-900 text-white pt-16 pb-16 w-full">
      <div className="w-[92vw] max-w-[1800px] mx-auto px-6">
        {/* Grid layout with responsive changes */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-y-12 md:gap-x-12 items-start md:items-start text-center md:text-left">
          {/* Logo and Description - centered on mobile */}
          <div className="flex flex-col items-center md:items-start space-y-4">
>>>>>>> 553d9aa (feat: SEO overhaul, bugfixes, and content improvements for all country/app pages)
            <div className="flex items-center space-x-2">
            {/* <Image
                src="/logo.png" // Path to your logo in the public directory
                alt="Trip Bozo Logo"
                width={40}  // Adjust width as needed
                height={40} // Adjust height as needed
                className="rounded-full" // Optional: if your logo is circular
              /> */}
<<<<<<< HEAD
              <span className="font-display text-xl sm:text-lg font-bold">Trip Bozo</span>
            </div>
            <p className="text-gray-400 text-xs italic -mt-1">Less googling, more going.</p>
            <p className="text-gray-300 text-xs">Your essential companion for seamless travel experiences worldwide.</p>
             {/* Contact Us Buttons */}
      <div className="mt-4 flex justify-center items-center space-x-5">
=======
              <span className="font-display text-2xl sm:text-xl font-bold">Trip Bozo</span>
            </div>
            <p className="text-gray-400 text-sm italic -mt-2">Less googling, more going.</p>
            <p className="text-gray-300 text-sm">Your essential companion for seamless travel experiences worldwide.</p>
             {/* Contact Us Buttons */}
             {/* <br></br>
             <br></br> */}
      <div className="mt-6 mb-4 flex justify-center items-center space-x-6 ">
>>>>>>> 553d9aa (feat: SEO overhaul, bugfixes, and content improvements for all country/app pages)
        <a
          href="https://www.instagram.com/tripbozo?utm_source=qr&igsh=MXRxcjFrMnA2Nmo2Yg=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-600 hover:text-teal-500 transition-colors"
        >
<<<<<<< HEAD
          <FiInstagram size={20} />
=======
          <FiInstagram size={24} />
>>>>>>> 553d9aa (feat: SEO overhaul, bugfixes, and content improvements for all country/app pages)
        </a>
        <a
          href="https://www.linkedin.com/company/107882785/admin/dashboard/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-600 hover:text-teal-500 transition-colors"
        >
<<<<<<< HEAD
          <FiLinkedin size={20} />
=======
          <FiLinkedin size={24} />
>>>>>>> 553d9aa (feat: SEO overhaul, bugfixes, and content improvements for all country/app pages)
        </a>
        <a
          href="mailto:bozotrip@gmail.com"
          aria-label="Email us"
          className="text-gray-600 hover:text-teal-500 transition-colors"
        >
<<<<<<< HEAD
          <FiMail size={20} />
=======
          <FiMail size={24} />
>>>>>>> 553d9aa (feat: SEO overhaul, bugfixes, and content improvements for all country/app pages)
        </a>
        <a
          href="https://x.com/tripbozo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-gray-600 hover:text-teal-500 transition-colors"
        >
<<<<<<< HEAD
          <FiTwitter size={20} />
=======
          <FiTwitter size={24} />
>>>>>>> 553d9aa (feat: SEO overhaul, bugfixes, and content improvements for all country/app pages)
        </a>
      </div>
          </div>

          {/* Quick Links - centered on mobile and desktop */}
          <div className="flex flex-col items-center md:flex md:justify-center md:items-center">
<<<<<<< HEAD
            <h4 className="font-display text-lg sm:text-base font-bold mb-2 text-center">Quick Links</h4>
            <ul className="space-y-1 text-center">
              <li><AppLink className="text-gray-300 hover:text-white transition-colors text-sm" href="/">Home</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors text-sm" href="/Onboarding">Onboarding</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors text-sm" href="/About">About Us</AppLink></li>
              {/* <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/essentials/us">Travel Essentials</AppLink></li> */}
            </ul>
            <div className="w-[70%] h-px bg-white/30 mt-4 md:hidden"></div>
=======
            <h4 className="font-display text-xl sm:text-lg font-bold mb-4 text-center">Quick Links</h4>
            <ul className="space-y-2 text-center">
              <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/">Home</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/onboarding">Onboarding</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/about">About Us</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/essentials/us">Travel Essentials</AppLink></li>
            </ul>
            <div className="w-[70%] h-px bg-white/30 mt-6 md:hidden"></div>
>>>>>>> 553d9aa (feat: SEO overhaul, bugfixes, and content improvements for all country/app pages)
          </div>

          {/* Popular Destinations - centered on mobile */}
          <div className="flex flex-col items-center md:items-start md:justify-self-end">
<<<<<<< HEAD
            <h4 className="font-display text-lg sm:text-base font-bold mb-2">Popular Destinations</h4>
            <ul className="space-y-1">
              <li><AppLink className="text-gray-300 hover:text-white transition-colors text-sm" href="/country/jp">Japan 🇯🇵</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors text-sm" href="/country/fr">France 🇫🇷</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors text-sm" href="/country/us">United States 🇺🇸</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors text-sm" href="/country/th">Thailand 🇹🇭</AppLink></li>
            </ul>
=======
            <h4 className="font-display text-xl sm:text-lg font-bold mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/country/jp">Japan 🇯🇵</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/country/fr">France 🇫🇷</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/country/us">United States 🇺🇸</AppLink></li>
              <li><AppLink className="text-gray-300 hover:text-white transition-colors" href="/country/th">Thailand 🇹🇭</AppLink></li>
            </ul>
            <div className="w-[70%] h-px bg-white/30 mt-6 md:hidden"></div>
>>>>>>> 553d9aa (feat: SEO overhaul, bugfixes, and content improvements for all country/app pages)
          </div>
        </div>
        
        {/* Copyright and Legal - centered on mobile */}
<<<<<<< HEAD
        <div className="mt-8 pt-4 border-t border-gray-800 text-gray-400 text-xs flex flex-col md:flex-row justify-between items-center w-full">
          <p className="mb-2 md:mb-0 text-center md:text-left">© {new Date().getFullYear()} Trip Bozo. All rights reserved.</p>
          
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-center md:text-right space-y-1 md:space-y-0">
            <p className="text-gray-400">Hero images via Pixabay</p>
=======
        <div className="mt-16 pt-8 border-t border-gray-800 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Trip Bozo. All rights reserved.</p>
          <div className="flex space-x-8">
>>>>>>> 553d9aa (feat: SEO overhaul, bugfixes, and content improvements for all country/app pages)
            <AppLink href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</AppLink>
            <AppLink href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</AppLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;