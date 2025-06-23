'use client';
import Image from 'next/image';
import AppLink from './AppLink';
import Link from 'next/link'
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
      setIsLoggedIn(!!localStorage.getItem('authToken'));
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
    <nav
    className={`
      fixed inset-x-0 top-0 z-50 h-16 flex items-center
      transition-colors duration-300
      ${scrolled
        ? "bg-white/30 backdrop-blur-md shadow-sm"
        : "bg-transparent"}
    `}
    >
      <div className="w-[98%] mx-auto py-1 sm:py-4 flex justify-between items-center relative">

        {/* Left: Brand - pushed to extreme left */}
        <div className="flex items-center z-20 pl-1">
          <Link href="/">
            <div className="w-30 sm:w-32"> {/* responsive wrapper width */}
              <Image
                src="/icons/icon.png"
                alt="trip Logo"
                width={150} // Keep full resolution
                height={150}
                priority
                className="rounded-full w-full h-auto" // scale visually
              />
            </div>
          </Link>

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
              className="
              absolute right-4 top-full mt-2
              w-64
              bg-white/80 backdrop-blur-md
              rounded-lg shadow-lg py-3
              ">
            
              <div className="flex flex-col">
                <Link 
                  href="/" 
                  className="px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-teal-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/Onboarding" 
                  className="px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-teal-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Onboarding
                </Link>
                <Link 
                  href="/About" 
                  className="px-5 py-3 text-gray-800 hover:bg-gray-100 hover:text-teal-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                
                <div className="w-full h-px bg-gray-200 my-2"></div>
                
                {isLoggedIn ? (
  <Link
    href="/profile/"
    className="px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-teal-500"
    onClick={() => setMobileMenuOpen(false)}
  >
    <div className="flex items-center">
      <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>
      Profile
    </div>
  </Link>
) : (
  <Link
    href="/login/"
    className="px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-teal-500"
    onClick={() => setMobileMenuOpen(false)}
  >
    <div className="flex items-center">
      <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8zm6 8v-2a6 6 0 00-12 0v2"/></svg>
      Login
    </div>
  </Link>
)}

                
                <Link
                  href="/Onboarding"
                  className="mx-5 my-3 bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-full text-center font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Center: Nav Links - absolutely centered (Desktop Only) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center space-x-10">
          <Link href="/" className="relative group font-semibold tracking-wide transition text-gray-700 hover:text-teal-500 focus:text-teal-600 focus:outline-none">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full group-focus:w-full"></span>
          </Link>
          <Link href="/Onboarding" className="relative group font-semibold tracking-wide transition text-gray-700 hover:text-teal-500 focus:text-teal-600 focus:outline-none">
            Onboarding
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full group-focus:w-full"></span>
          </Link>
          <Link href="/About" className="relative group font-semibold tracking-wide transition text-gray-700 hover:text-teal-500 focus:text-teal-600 focus:outline-none">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full group-focus:w-full"></span>
          </Link>
        </div>

        {/* Right: Login and Get Started - pushed to extreme right (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-4 pr-1">
          {isLoggedIn ? (
            <Link
              href="/Profile/"
              className="inline-flex items-center gap-2 bg-white border-2 border-teal-500 text-teal-600 px-6 py-2 rounded-full text-base font-bold shadow-md transition-all hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              style={{ minWidth: '120px', textAlign: 'center', letterSpacing: '0.03em' }}
            >
              <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>
              Profile
            </Link>
          ) : (
            <Link
  href="/login/"
  className="inline-flex items-center gap-2 bg-white border-2 border-teal-500 text-teal-600 px-6 py-2 rounded-full text-base font-bold shadow-md transition hover:bg-teal-50"
  style={{ minWidth: '120px', textAlign: 'center', letterSpacing: '0.03em' }}
>
  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8zm6 8v-2a6 6 0 00-12 0v2"/>
  </svg>
  Login
</Link>
          )}
          <Link
            href="/Onboarding"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full text-base font-semibold shadow-md transition-colors border border-teal-500"
            style={{ minWidth: '100px', textAlign: 'center' }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;