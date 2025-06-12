'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useLoader } from '@/components/LoaderContext';

const CallToAction = () => {
  const router = useRouter();
  const { setShow } = useLoader();
  
  const handleGetStarted = () => {
    setShow(true); // Show loader before navigation
    router.push('/Onboarding');
    // Loader will be hidden by LoaderRouteListener
  };
  
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-teal-500 to-teal-700 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/5 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6">
              Find the perfect apps for your destination and travel with confidence.
            </p>
            <button
              onClick={handleGetStarted}
              className="px-8 py-3 bg-white text-teal-700 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </button>
          </div>
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <div className="bg-white/20 p-6 rounded-lg shadow-lg flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="180" 
                height="180" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-white"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;