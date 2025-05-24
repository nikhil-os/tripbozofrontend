// /src/app/about/page.js
'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 px-6 py-12">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Wanderlust</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Discover hidden gems, connect with fellow travelers, and embark on unforgettable journeys with Wanderlust.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="p-6 border rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Insider Tips</h2>
          <p>Get recommendations from travelers who have been there before, including the best places to stay, eat, and explore.</p>
        </div>
        <div className="p-6 border rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Personalized Recommendations</h2>
          <p>Discover suggestions tailored to your travel interests and preferences, shared by fellow adventurers.</p>
        </div>
        <div className="p-6 border rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Connect with Like-Minded Adventurers</h2>
          <p>Join a community of travelers who share your passion for exploration and adventure.</p>
        </div>
      </section>

      ...
{/* Testimonials Section */}
<section className="bg-gray-100 p-8 rounded-lg mb-12">
  <blockquote className="italic text-center max-w-xl mx-auto">
    "I can't imagine traveling without Wanderlust's community feature. It's amazing to connect with other travelers who share my passion for adventure and to get insider tips from those who have been there before."
  </blockquote>
  <p className="text-center mt-4 font-semibold">— Michael S.</p>
</section>

{/* 🔽🔽 INSERT NEW SECTION HERE 🔽🔽 */}
<section className="bg-white py-16 px-4 text-center">
  <h2 className="text-4xl font-bold text-gray-800 mb-2">How Travel Buddy Works</h2>
  <p className="text-lg text-gray-600 mb-12">
    Your companion for discovering essential travel applications
  </p>

  {/* Three Blocks */}
  <div className="grid gap-8 md:grid-cols-3">
    <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Select Your Country</h3>
      <p className="text-gray-600">Choose your destination to get tailored app recommendations.</p>
    </div>
    <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Explore Essential Apps</h3>
      <p className="text-gray-600">View curated apps for navigation, communication, money, and more.</p>
    </div>
    <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Build Your Travel Kit</h3>
      <p className="text-gray-600">Save or download all apps in one go for offline access and ease.</p>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="bg-gradient-to-r from-blue-600 to-blue-500 py-16 px-4 text-center text-white">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
  <p className="text-lg md:text-xl mb-6">Create your personalized travel app bundle in minutes</p>
  <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
    Start Now
  </button>
</section>
{/* 🔼🔼 END NEW SECTION 🔼🔼 */}

{/* Call to Action */}
<section className="text-center">
  <h2 className="text-2xl font-bold mb-4">Ready to dive in?</h2>
  <a
    href="/get-started"
    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
  >
    Start Exploring
  </a>
</section>

    </main>
  );
}
