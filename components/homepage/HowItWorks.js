'use client';

import React from 'react';
import { FaMapMarkedAlt, FaThList, FaPlaneDeparture } from 'react-icons/fa';

const steps = [
  {
    title: 'Pick a Destination',
    description: 'Choose a country you’re traveling to and unlock local travel apps.',
    icon: <FaMapMarkedAlt className="text-teal-500 text-4xl mb-6" />,
  },
  {
    title: 'Explore App Bundles',
    description: 'Find curated apps tailored for navigation, communication, and safety.',
    icon: <FaThList className="text-teal-500 text-4xl mb-6" />,
  },
  {
    title: 'Travel Smarter',
    description: 'Access essential tools and explore confidently wherever you go.',
    icon: <FaPlaneDeparture className="text-teal-500 text-4xl mb-6" />,
  },
];

const HowItWorks = () => {
  return (
    <section
      className="bg-gradient-to-br from-blue-50 to-teal-100 mx-auto my-12 rounded-3xl border-4 border-teal-200 flex items-center justify-center shadow-xl"
      style={{ width: 1496, height: 348, padding: 0 }}
    >
      <div className="container mx-auto text-center max-w-6xl py-12 px-8 w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-tight">
          How Travel Buddy Works
        </h2>
        <p className="text-teal-800 text-lg md:text-xl mb-10">
          Your companion for discovering essential travel applications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 p-8 flex flex-col items-center border border-teal-100 hover:border-teal-400"
            >
              <div className="flex flex-col items-center">
                {step.icon}
                <h3 className="text-2xl font-bold text-teal-700 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;