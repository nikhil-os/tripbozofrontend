'use client';

import React from 'react';
import { FaMapMarkedAlt, FaThList, FaPlaneDeparture } from 'react-icons/fa';

const steps = [
  {
    title: 'Pick a Destination',
    description: 'Choose a country you’re traveling to and unlock local travel apps.',
    icon: <FaMapMarkedAlt className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: 'Explore App Bundles',
    description: 'Find curated apps tailored for navigation, communication, and safety.',
    icon: <FaThList className="text-blue-600 text-3xl mb-4" />,
  },
  {
    title: 'Travel Smarter',
    description: 'Access essential tools and explore confidently wherever you go.',
    icon: <FaPlaneDeparture className="text-blue-600 text-3xl mb-4" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
          How Travel Buddy Works
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Your companion for discovering essential travel applications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-md transition"
            >
              <div className="flex flex-col items-center">
                {step.icon}
                <h3 className="text-xl font-medium text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
