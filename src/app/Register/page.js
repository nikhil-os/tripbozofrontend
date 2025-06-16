"use client";

import React, { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900/80 via-blue-900/40 to-teal-400/20">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">Register</h1>
        <p className="text-gray-500 mb-8 text-center">Create your TravelBuddy account</p>
        <form className="w-full flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Full Name</label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800"
              placeholder="Your full name"
              autoComplete="name"
              required
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-1">Username</label>
            <input
              id="username"
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800"
              placeholder="Choose a username"
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800"
              placeholder="you@email.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800 pr-12"
              placeholder="Create a password"
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-9 transform -translate-y-1/2 text-gray-400 hover:text-teal-500 focus:outline-none"
              tabIndex={-1}
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.403-3.22 1.125-4.575M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.875-4.575A9.956 9.956 0 0122 9c0 5.523-4.477 10-10 10a9.956 9.956 0 01-4.575-1.125M3 3l18 18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm7.5 0a9.77 9.77 0 01-1.69 5.5A9.956 9.956 0 0112 19c-5.523 0-10-4.477-10-10a9.956 9.956 0 011.125-4.575A9.77 9.77 0 016.5 12a9.77 9.77 0 0011 0z" />
                </svg>
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-teal-500 text-white font-bold text-lg shadow-md hover:bg-teal-600 transition"
          >
            Register
          </button>
        </form>
        <button
          type="button"
          className="mt-3 w-full py-2 rounded-full bg-gray-100 text-teal-600 font-semibold text-base hover:bg-teal-50 transition"
          onClick={() => window.location.href = '/Login'}
        >
          Already have an account? Login
        </button>
      </div>
    </main>
  );
}
