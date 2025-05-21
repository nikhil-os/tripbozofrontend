"use client";


import React, { useState } from 'react';

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [selectedTraveler, setSelectedTraveler] = useState(null);

  const travelerOptions = [
    { id: 'solo', title: 'Solo Adventurer', desc: 'Independent traveler seeking authentic experiences', emoji: '🎒' },
    { id: 'family', title: 'Family Trip', desc: 'Travel with kids and focus on family-friendly activities', emoji: '👨‍👩‍👧‍👦' },
    { id: 'business', title: 'Business Traveler', desc: 'Efficient travel focused on work and productivity', emoji: '💼' },
    { id: 'adventure', title: 'Adventure Seeker', desc: 'Outdoor experiences and adrenaline-pumping activities', emoji: '⛰️' },
  ];

  const destinationOptions = [
    { code: 'JP', name: 'Japan' },
    { code: 'FR', name: 'France' },
    { code: 'TH', name: 'Thailand' },
    { code: 'US', name: 'United States' },
    { code: 'IT', name: 'Italy' },
    { code: 'AU', name: 'Australia' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">Set Up Your Travel Profile</h1>
      <p className="text-center text-gray-500 mb-8">Let's personalize your travel app recommendations</p>

      {/* Step Indicator */}
      <div className="flex justify-center items-center mb-10">
        <div className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${step > 1 ? 'bg-teal-400' : 'bg-gray-300'}`}>{step > 1 ? '✓' : '1'}</div>
        <div className="w-8 h-1 bg-teal-400 mx-2" />
        <div className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${step === 2 ? 'bg-teal-400' : 'bg-gray-300'}`}>2</div>
      </div>

      {step === 1 && (
        <>
          <h2 className="text-xl font-semibold text-center mb-6">What type of traveler are you?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {travelerOptions.map(opt => (
              <div
                key={opt.id}
                className={`border rounded-xl p-4 cursor-pointer text-center transition-all ${selectedTraveler === opt.id ? 'border-teal-400 bg-teal-50' : 'border-gray-200'}`}
                onClick={() => setSelectedTraveler(opt.id)}
              >
                <div className="text-3xl mb-2">{opt.emoji}</div>
                <h3 className="font-semibold text-lg">{opt.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{opt.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button
              className="bg-teal-400 text-white px-6 py-2 rounded-full disabled:opacity-50"
              onClick={() => selectedTraveler && setStep(2)}
              disabled={!selectedTraveler}
            >
              Next Step →
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-xl font-semibold text-center mb-6">Where are you traveling to?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {destinationOptions.map(dest => (
              <div
                key={dest.code}
                className="border rounded-xl p-4 text-center hover:bg-teal-50 cursor-pointer"
              >
                <h3 className="text-xl font-bold">{dest.code}</h3>
                <p className="text-gray-500 mt-1">{dest.name}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-teal-400 text-white px-6 py-2 rounded-full">View Apps →</button>
          </div>
        </>
      )}
    </div>
  );
}
