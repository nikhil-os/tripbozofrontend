'use client';
import Image from 'next/image';
import AppLink from './AppLink';
import React, { useEffect, useState, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(!!localStorage.getItem('profileData'));
    }
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-sm">
      <div className="w-[98%] mx-auto py-4 flex justify-between items-center relative">
        {/* Left: Brand - pushed to extreme left */}
        <div className="flex items-center z-20 pl-1">
          <AppLink href="/">
            <Image
              src="/logo.png" // Path to your logo in the public directory
              alt="Trip Bozo Logo"
              width={150}  // Adjust width as needed
              height={150} // Adjust height as needed
              priority // Optional: for images above the fold
              className="rounded-full cursor-pointer" // Optional: if your logo is circular
            />
          </AppLink>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <div className="lg:hidden z-20 relative pr-1">
          <button 
            className="text-gray-700 hover:text-teal-500 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu Popup */}
          {mobileMenuOpen && (
            <div 
              ref={menuRef}
              className="absolute right-0 top-12 w-64 bg-white rounded-lg shadow-lg py-3 z-30"
            >
              <div className="flex flex-col">
                <AppLink 
                  href="/" 
                  className="px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-teal-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </AppLink>
                <AppLink 
                  href="/Onboarding" 
                  className="px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-teal-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Onboarding
                </AppLink>
                <AppLink 
                  href="/About" 
                  className="px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-teal-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </AppLink>
                
                <div className="w-full h-px bg-gray-200 my-2"></div>
                
                {isLoggedIn ? (
                  <AppLink
                    href="/Profile"
                    className="px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-teal-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>
                      Profile
                    </div>
                  </AppLink>
                ) : (
                  <div className="px-5 py-3 text-gray-400 cursor-not-allowed">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8zm6 8v-2a6 6 0 00-12 0v2"/></svg>
                      Login
                    </div>
                  </div>
                )}
                
                <AppLink
                  href="/Onboarding"
                  className="mx-5 my-3 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full text-center font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </AppLink>
              </div>
            </div>
          )}
        </div>

        {/* Center: Nav Links - absolutely centered (Desktop Only) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center space-x-10">
          <AppLink href="/" className="relative group font-semibold tracking-wide transition text-gray-700 hover:text-teal-500 focus:text-teal-600 focus:outline-none">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full group-focus:w-full"></span>
          </AppLink>
          <AppLink href="/Onboarding" className="relative group font-semibold tracking-wide transition text-gray-700 hover:text-teal-500 focus:text-teal-600 focus:outline-none">
            Onboarding
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full group-focus:w-full"></span>
          </AppLink>
          <AppLink href="/About" className="relative group font-semibold tracking-wide transition text-gray-700 hover:text-teal-500 focus:text-teal-600 focus:outline-none">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full group-focus:w-full"></span>
          </AppLink>
        </div>

        {/* Right: Login and Get Started - pushed to extreme right (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-4 pr-1">
          {isLoggedIn ? (
            <AppLink
              href="/Profile"
              className="inline-flex items-center gap-2 bg-white border-2 border-teal-500 text-teal-600 px-6 py-2 rounded-full text-base font-bold shadow-md transition-all hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              style={{ minWidth: '120px', textAlign: 'center', letterSpacing: '0.03em' }}
            >
              <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>
              Profile
            </AppLink>
          ) : (
            <AppLink
              href="/Login"
              className="inline-flex items-center gap-2 bg-gray-200 border-2 border-gray-300 text-gray-400 px-6 py-2 rounded-full text-base font-bold shadow-md transition-all opacity-60 cursor-not-allowed pointer-events-none select-none"
              style={{ minWidth: '120px', textAlign: 'center', letterSpacing: '0.03em' }}
              tabIndex={-1}
              aria-disabled="true"
            >
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8zm6 8v-2a6 6 0 00-12 0v2"/></svg>
              Login
            </AppLink>
          )}
          <AppLink
            href="/Onboarding"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full text-base font-semibold shadow-md transition-colors border border-teal-500"
            style={{ minWidth: '100px', textAlign: 'center' }}
          >
            Get Started
          </AppLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;