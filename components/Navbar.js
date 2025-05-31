'use client';

import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 shadow-sm transition-colors duration-300 ${
        scrolled ? 'bg-white' : 'bg-transparent'
      }`}
      style={{
        backgroundImage: !scrolled
          ? 'linear-gradient(to bottom, rgba(255,255,255,0) 70%, #fff 100%)'
          : 'none',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}
    >
      <div className="w-full h-16 flex items-center relative">
        {/* Left: Brand - with gap */}
        <div className="text-2xl font-semibold text-black whitespace-nowrap absolute left-8 top-1/2 -translate-y-1/2">
          Trip Bozo
        </div>
        {/* Center: Nav Links - absolutely centered */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-12 text-gray-600 text-base font-normal">
          <a href="/" className="relative group font-semibold tracking-wide transition text-gray-700 hover:text-teal-500 focus:text-teal-600 focus:outline-none">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full group-focus:w-full"></span>
          </a>
          <a href="/Onboarding" className="relative group font-semibold tracking-wide transition text-gray-700 hover:text-teal-500 focus:text-teal-600 focus:outline-none">
            Onboarding
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full group-focus:w-full"></span>
          </a>
          <a href="/About" className="relative group font-semibold tracking-wide transition text-gray-700 hover:text-teal-500 focus:text-teal-600 focus:outline-none">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full group-focus:w-full"></span>
          </a>
        </div>
        {/* Right: Login and Get Started - with gap */}
        <div className="flex items-center gap-2 absolute right-8 top-1/2 -translate-y-1/2" style={{ justifyContent: 'flex-end' }}>
          {isLoggedIn ? (
            <a
              href="/Profile"
              className="inline-flex items-center gap-2 bg-white border-2 border-teal-500 text-teal-600 px-6 py-2 rounded-full text-base font-bold shadow-md transition-all hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              style={{ minWidth: '120px', textAlign: 'center', letterSpacing: '0.03em' }}
            >
              <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>
              Profile
            </a>
          ) : (
            <a
              href="/Login"
              className="inline-flex items-center gap-2 bg-white border-2 border-teal-500 text-teal-600 px-6 py-2 rounded-full text-base font-bold shadow-md transition-all hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              style={{ minWidth: '120px', textAlign: 'center', letterSpacing: '0.03em' }}
            >
              <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8zm6 8v-2a6 6 0 00-12 0v2"/></svg>
              Login
            </a>
          )}
          <a
            href="/Onboarding"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full text-base font-semibold shadow-md transition-colors border border-teal-500"
            style={{ minWidth: '100px', textAlign: 'center' }}
            onClick={() => (window.location.href = '/Onboarding')}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;