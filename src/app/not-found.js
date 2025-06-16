"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#e0f7fa] via-[#f5fafd] to-[#e3f2fd] p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="text-8xl mb-6">😕</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Country Not Found!</h1>
        <p className="text-lg text-gray-600 mb-6">
          We couldn&apos;t find apps for the country you searched.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          But don&apos;t worry — we&apos;re constantly adding new countries and their must-have apps!
        </p>
        
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <p className="text-blue-800 font-medium">
              👉 Stay tuned! Your destination might be next on our radar.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <Link 
              href="/"
              className="inline-flex justify-center items-center px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors"
            >
              Explore Other Destinations
            </Link>
            
            <a 
              href="mailto:support@tripbozo.com"
              className="inline-flex justify-center items-center px-6 py-3 border border-teal-500 text-teal-500 font-medium rounded-lg hover:bg-teal-50 transition-colors"
            >
              Send Us a Suggestion
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 