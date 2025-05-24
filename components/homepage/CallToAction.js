'use client';

import React from 'react';

const CallToAction = () => {
  return (
    <section
  className="bg-white text-black text-center rounded-3xl shadow-xl border-4 border-teal-200 mx-auto my-16 flex items-center justify-center"
  style={{ width: 1496, height: 400, padding: 0 }}
>
      <div className="w-full h-full flex items-center justify-center px-8">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-left">
              READY TO START YOUR JOURNEY?
            </h2>
            <p className="text-lg md:text-xl mb-0 text-gray-700 font-medium text-left">
              Create your personalized travel app bundle in minutes
            </p>
          </div>
          <button className="bg-teal-500 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-teal-600 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-teal-700 transition duration-300 flex items-center ml-0 md:ml-8 mt-6 md:mt-0">
            Get Started
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;