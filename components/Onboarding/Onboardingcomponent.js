'use client';

import React from 'react';

const Onboarding = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-6  pt-[100px] pb-20 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Progress */}
        <div className="flex justify-center items-center mb-8">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-400 text-white font-medium">
            1
          </div>
          <div className="w-8 h-1 bg-teal-300 mx-1 rounded"></div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-600 font-medium">
            2
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 ">
          Choose Your Travel Style
        </h1>
        <p className="text-gray-600 text-lg mb-10 ">
          Let us help you match with the best travel apps for your needs
        </p>

        {/* Travel Style Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[
            {
              emoji: '🗺️',
              title: 'Explorer',
              desc: 'Loves discovering hidden gems and offbeat paths'
            },
            {
              emoji: '💼',
              title: 'Digital Nomad',
              desc: 'Travels while working remotely and staying connected'
            },
            {
              emoji: '🎒',
              title: 'Backpacker',
              desc: 'Budget-conscious and adventure-ready explorer'
            },
            {
              emoji: '🍷',
              title: 'Luxury Traveler',
              desc: 'Seeks premium experiences, fine dining and comfort'
            }
          ].map((option, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-4xl mb-4">{option.emoji}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {option.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {option.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-teal-400 text-white font-medium text-sm md:text-base px-6 py-2 rounded-full hover:bg-teal-500 transition">
          Next Step
        </button>
      </div>
    </main>
  );
};

export default Onboarding;
