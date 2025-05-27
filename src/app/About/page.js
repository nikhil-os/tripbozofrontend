'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <main className="bg-gray-100 text-gray-800">
      {/* Header Section (Navigation Bar) */}
      <header className="bg-white shadow-sm">
        
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
          </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-600 to-gray-500 text-white py-16 px-4 flex flex-col items-center justify-center text-center min-h-[350px]">
  <h1 className="text-5xl font-bold mb-4">Your Essential Travel Companion</h1>
  <p className="text-lg max-w-2xl mx-auto">
    Travel Buddy curates the perfect app bundle for every traveler’s needs, no matter where your journey takes you.
  </p>
</section>
      {/* Mission Section */}
      <section className="bg-white py-20 px-6 flex flex-col items-center justify-center text-center min-h-[350px]">
  <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
    We believe that technology should enhance your travel experience, not complicate it. Our mission is to help travelers discover the essential digital tools they need for each unique destination, creating a more connected, prepared, and enriching journey.
  </p>
</section>

    {/* Key Features Section */}
<section className="bg-gray-100 py-24 px-8 flex flex-col items-center justify-center min-h-[450px]">
  <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-20 tracking-tight">Key Features</h1>
  <div className="grid gap-16 md:grid-cols-2 max-w-6xl mx-auto w-full">
    <div className="bg-white p-14 rounded-2xl shadow-lg flex items-start space-x-8 min-h-[150px]">
      <span className="text-4xl">🏔️</span>
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Dynamic Leg Suggestions</h3>
        <p className="text-lg text-gray-600">Receive app recommendations based on the type of stop in your journey, from beach destinations to mountain retreats.</p>
      </div>
    </div>
    <div className="bg-white p-14 rounded-2xl shadow-lg flex items-start space-x-8 min-h-[150px]">
      <span className="text-4xl">🧑‍💼</span>
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Personalized Onboarding</h3>
        <p className="text-lg text-gray-600">Tell us about your travel style and destinations to get the most relevant app suggestions for your journey.</p>
      </div>
    </div>
    <div className="bg-white p-14 rounded-2xl shadow-lg flex items-start space-x-8 min-h-[150px]">
      <span className="text-4xl">📱</span>
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Curated App Collections</h3>
        <p className="text-lg text-gray-600">Expert-vetted selections of the best travel apps for every destination, organized by category.</p>
      </div>
    </div>
    <div className="bg-white p-14 rounded-2xl shadow-lg flex items-start space-x-8 min-h-[150px]">
      <span className="text-4xl">🚨</span>
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Emergency Essentials PWA</h3>
        <p className="text-lg text-gray-600">Access critical information offline with our installable Progressive Web App for emergencies.</p>
      </div>
    </div>
  </div>
</section>
{/* Our Team Section */}
<section className="bg-white py-20 px-6 flex flex-col items-center justify-center text-center min-h-[350px]">
  <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
  <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
    Passionate travelers and technologists dedicated to enhancing your journey
  </p>
  <div className="grid gap-10 md:grid-cols-4 max-w-5xl mx-auto w-full">
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Suryansh Sharma</h3>
      <p className="text-gray-600">Founder & CEO</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Nikhil Sahu</h3>
      <p className="text-gray-600">Head of App Curation</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Harsh Singh Lodhi</h3>
      <p className="text-gray-600">UX Designer</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Akshat Jain</h3>
      <p className="text-gray-600">Lead Developer</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold justify-center text-center text-gray-800 mb-2">Manraj Gupta</h3>
      <p className="text-gray-600">Lead Developer</p>
    </div>
  </div>
</section>

      

{/* CTA Section */}
<section className="bg-teal-500 py-20 px-6 flex flex-col items-center justify-center text-center text-white min-h-[300px]">
  <h2 className="text-4xl font-bold mb-4">Ready to Enhance Your Travels?</h2>
  <p className="text-lg mb-6 max-w-2xl mx-auto">
    Join thousands of travelers who use Travel Buddy to discover essential apps for their journeys.
  </p>
  <button className="bg-white text-teal-500 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
    Start Now
  </button>
</section>

 
</main>
);
}