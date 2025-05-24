'use client';

import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-blue-600 py-20 px-6 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Create your personalized travel app bundle in minutes
        </p>
        <button className="bg-white text-blue-600 font-medium text-sm md:text-base px-6 py-2 rounded-full hover:bg-gray-100   cursor-pointer transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CallToAction;