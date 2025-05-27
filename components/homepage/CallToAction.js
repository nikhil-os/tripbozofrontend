'use client';

import React from 'react';

const CallToAction = () => {
  return (
    <section
  className="py-16 sm:py-20 text-center flex items-center justify-center"
  style={{ width: 1520, height: 168, padding: 0 }}
>
  <div className="max-w-3xl w-full flex flex-col items-center justify-center h-full mx-auto">
    <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center text-gray-900">
  Ready to Start Your Journey?
</h1>
    <p className="text-xl text-gray-400 mb-8 text-center">
      Create your personalized travel app bundle in minutes
    </p>
    <a href="/onboarding">
      <button
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white h-11 bg-teal-400 hover:bg-teal-500 rounded-full px-8"
      >
        Get Started
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </a>
  </div>
</section>
  );
};

export default CallToAction;