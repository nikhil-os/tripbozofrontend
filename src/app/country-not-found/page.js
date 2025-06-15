"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaEnvelope } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

export default function CountryNotFoundPage() {
  const searchParams = useSearchParams();
  const [searchedCountry, setSearchedCountry] = useState("");
  
  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      // Capitalize first letter of each word for display
      const formattedCountry = query
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
      setSearchedCountry(formattedCountry);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 py-16">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-teal-400">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/world-map.svg"
              alt="World map background"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-7xl mb-2">😕</div>
            </div>
          </div>
        </div>
        
        <div className="p-8 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
            Country Not Found!
          </h1>
          
          <p className="text-lg text-center text-gray-600 mb-8">
            {searchedCountry ? (
              <>
                We couldn't find apps for <span className="font-semibold text-teal-600">{searchedCountry}</span>.
                <br /><br />
              </>
            ) : (
              <>
                We couldn't find apps for the country you searched.
                <br /><br />
              </>
            )}
            But don't worry — we're constantly adding new countries and their must-have apps!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center p-4 bg-blue-50 rounded-xl">
              <div className="text-2xl text-blue-500 mr-4">👉</div>
              <p className="text-blue-700">
                Stay tuned! Your destination might be next on our radar.
              </p>
            </div>
            
            <div className="flex items-center p-4 bg-teal-50 rounded-xl">
              <div className="text-2xl text-teal-500 mr-4">💬</div>
              <p className="text-teal-700">
                Want us to add this country next?{" "}
                <a 
                  href={`mailto:contact@tripbozo.com?subject=Country%20Request%20-%20${encodeURIComponent(searchedCountry || "New Country")}`}
                  className="font-medium underline hover:text-teal-900 transition-colors"
                >
                  Send us a suggestion
                </a>
              </p>
            </div>
          </div>
          
          <div className="mt-10 flex justify-center">
            <Link 
              href="/"
              className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <FaArrowLeft className="text-sm" />
              Explore Other Destinations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 