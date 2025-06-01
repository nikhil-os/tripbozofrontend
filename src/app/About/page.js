'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-[#e0f7fa] via-[#f5fafd] to-[#e3f2fd] text-gray-800 w-full min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#38bdf8] via-[#2ad2c9] to-[#5eead4] text-white py-24 px-4 flex flex-col items-center justify-center text-center relative overflow-hidden animate-fade-in">
        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight animate-fade-in-up">Your Essential Travel Companion</h1>
        <p className="text-2xl max-w-3xl mx-auto mb-8 text-white/90 font-medium drop-shadow animate-fade-in-up delay-200">Travel Buddy curates the perfect app bundle for every traveler’s needs, no matter where your journey takes you.</p>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-white py-20 px-4 flex flex-col items-center justify-center text-center animate-fade-in-up">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6 tracking-tight animate-fade-in-up">Our Mission</h2>
        <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-medium animate-fade-in-up delay-200">We believe that technology should enhance your travel experience, not complicate it. Our mission is to help travelers discover the essential digital tools they need for each unique destination, creating a more connected, prepared, and enriching journey.</p>
      </section>

      {/* Divider */}
      <div className="w-full flex justify-center animate-fade-in"><div className="w-2/3 h-1 bg-gradient-to-r from-[#2ad2c9] via-[#38bdf8] to-[#5eead4] rounded-full opacity-40 my-0" /></div>

      {/* Key Features Section */}
      <section className="w-full bg-gradient-to-br from-[#e0f7fa] via-[#f5fafd] to-[#e3f2fd] py-24 px-4 flex flex-col items-center justify-center animate-fade-in stagger-children">
        <h2 className="text-5xl font-extrabold text-gray-800 text-center mb-20 tracking-tight animate-fade-in-up">Key Features</h2>
        <div className="grid gap-16 md:grid-cols-2 max-w-6xl mx-auto w-full">
          <div className="bg-white/90 p-14 rounded-3xl shadow-xl flex items-start space-x-8 min-h-[170px] border-l-8 border-[#38bdf8] card-hover">
            <span className="text-5xl">🏔️</span>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Dynamic Leg Suggestions</h3>
              <p className="text-lg text-gray-600">Receive app recommendations based on the type of stop in your journey, from beach destinations to mountain retreats.</p>
            </div>
          </div>
          <div className="bg-white/90 p-14 rounded-3xl shadow-xl flex items-start space-x-8 min-h-[170px] border-l-8 border-[#2ad2c9] card-hover">
            <span className="text-5xl">🧑‍💼</span>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Personalized Onboarding</h3>
              <p className="text-lg text-gray-600">Tell us about your travel style and destinations to get the most relevant app suggestions for your journey.</p>
            </div>
          </div>
          <div className="bg-white/90 p-14 rounded-3xl shadow-xl flex items-start space-x-8 min-h-[170px] border-l-8 border-[#5eead4] card-hover">
            <span className="text-5xl">📱</span>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Curated App Collections</h3>
              <p className="text-lg text-gray-600">Expert-vetted selections of the best travel apps for every destination, organized by category.</p>
            </div>
          </div>
          <div className="bg-white/90 p-14 rounded-3xl shadow-xl flex items-start space-x-8 min-h-[170px] border-l-8 border-[#facc15] card-hover">
            <span className="text-5xl">🚨</span>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Emergency Essentials PWA</h3>
              <p className="text-lg text-gray-600">Access critical information offline with our installable Progressive Web App for emergencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full flex justify-center animate-fade-in"><div className="w-2/3 h-1 bg-gradient-to-r from-[#2ad2c9] via-[#38bdf8] to-[#5eead4] rounded-full opacity-40 my-0" /></div>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#2ad2c9] via-[#38bdf8] to-[#5eead4] py-24 px-4 flex flex-col items-center justify-center text-center text-white animate-fade-in-up relative overflow-hidden">
        <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg animate-fade-in-up">Ready to Enhance Your Travels?</h2>
        <p className="text-2xl mb-10 max-w-2xl mx-auto text-white/90 font-medium drop-shadow animate-fade-in-up delay-200">Join thousands of travelers who use Travel Buddy to discover essential apps for their journeys.</p>
        <button className="bg-white text-teal-500 font-bold px-10 py-4 rounded-full text-xl hover:bg-gray-100 transition shadow-lg btn-animated">
          Start Now
        </button>
      </section>
    </main>
  );
}