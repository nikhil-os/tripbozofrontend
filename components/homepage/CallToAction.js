'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useLoader } from '../LoaderContext';

const CallToAction = () => {
  const router = useRouter();
  const { setShow } = useLoader();
  const handleGetStarted = () => {
    setShow(true);
    router.push('/Onboarding');
  };
  return (
    <section
      className="min-h-screen py-16 sm:py-20 text-center flex items-center justify-center bg-gradient-to-br from-white via-teal-50 to-blue-50"
    >
      <div className="max-w-3xl w-full flex flex-col items-center justify-center h-full mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center text-gray-900">
          Ready to Start Your Journey?
        </h1>
        <p className="text-xl text-gray-400 mb-8 text-center">
          Create your personalized travel app bundle in minutes
        </p>
        <p className="text-base md:text-lg text-gray-500 mb-8 text-center max-w-xl">
          Discover, select, and bundle the best travel apps for your next adventure. Enjoy seamless planning, offline access, and curated recommendations—tailored just for you.
        </p>
        <div className="flex flex-col items-center gap-4 mb-8">
          <span className="inline-flex items-center gap-2 text-teal-600 text-sm md:text-base">
            <svg className="h-5 w-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
            No sign-up required
          </span>
          <span className="inline-flex items-center gap-2 text-teal-600 text-sm md:text-base">
            <svg className="h-5 w-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
            Fast & easy onboarding
          </span>
          <span className="inline-flex items-center gap-2 text-teal-600 text-sm md:text-base">
            <svg className="h-5 w-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /></svg>
            Download your bundle as a QR code
          </span>
        </div>
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white h-11 bg-teal-400 hover:bg-teal-500 rounded-full px-8"
          onClick={handleGetStarted}
        >
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CallToAction;