'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useLoader } from '@/components/LoaderContext';

const destinations = [
{ name: 'India', image: '/flags/Agra.png' },
{ name: 'France', image: '/flags/paris.png' },
{ name: 'USA', image: '/flags/usa.png' },
{ name: 'Japan', image: '/flags/japan.png' },
{ name: 'Australia', image: '/Images/australia.png' },
{ name: 'Italy', image: '/flags/italy.png' },



];

const PopularDestinations = () => {
  const router = useRouter();
  const { setShow } = useLoader();

  const handleExploreClick = (countryCode) => {
    setShow(true); // Show loader before navigation
    router.push(`/country/${countryCode}`);
    // Loader will be hidden by LoaderRouteListener
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 text-center font-sans drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
          Popular Destinations
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-12 text-center italic font-sans tracking-wide animate-fade-in">
          <span className="inline-block px-2 py-1 bg-white/80 rounded-xl shadow-sm border border-teal-100">
            Explore apps tailored for these trending destinations
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Destination Card 1 */}
          <div className="relative rounded-3xl shadow-md overflow-hidden h-44 transition-transform transform hover:scale-105 border border-gray-200 bg-white"> 
            <div className="absolute inset-0">
              <img
                src="/Images/Thailand.jpg"
                alt="Thailand"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
            </div>
            <div className="relative z-10 p-4 flex flex-col justify-end h-full text-white">
              <h3 className="text-xl font-semibold mb-1">TH Thailand</h3>
              <p className="text-xs mb-2">
                Discover Thailand's vibrant culture, street food, and stunning temples with the best travel apps for your trip.
              </p>
              <button 
                className="text-teal-500 hover:text-teal-700 transition self-start bg-transparent px-0 py-0 rounded-none shadow-none border-none text-xs font-normal tracking-tight"
                onClick={() => handleExploreClick('TH')}
              >
                Explore Apps
              </button>
            </div>
          </div>

          {/* Destination Card 2 */}
          <div className="relative rounded-3xl shadow-md overflow-hidden h-44 transition-transform transform hover:scale-105 border border-gray-200 bg-white">
            <div className="absolute inset-0">
              <img
                src="/Images/france.png"
                alt="France"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
            </div>
            <div className="relative z-10 p-4 flex flex-col justify-end h-full text-white">
              <h3 className="text-xl font-semibold mb-1">FR France</h3>
              <p className="text-xs mb-2">
                Navigate the romantic streets of Paris with apps for public transit, language translation, and more.
              </p>
              <button 
                className="text-teal-500 hover:text-teal-700 transition self-start bg-transparent px-0 py-0 rounded-none shadow-none border-none text-xs font-normal tracking-tight"
                onClick={() => handleExploreClick('FR')}
              >
                Explore Apps
              </button>
            </div>
          </div>

          {/* Destination Card 3 */}
          <div className="relative rounded-3xl shadow-md overflow-hidden h-44 transition-transform transform hover:scale-105 border border-gray-200 bg-white">
            <div className="absolute inset-0">
              <img
                src="/Images/usa.png"
                alt="USA"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
            </div>
            <div className="relative z-10 p-4 flex flex-col justify-end h-full text-white">
              <h3 className="text-xl font-semibold mb-1">US USA</h3>
              <p className="text-xs mb-2">
                Discover apps to help you explore the United States, from subway maps to event guides.
              </p>
              <button 
                className="text-teal-500 hover:text-teal-700 transition self-start bg-transparent px-0 py-0 rounded-none shadow-none border-none text-xs font-normal tracking-tight"
                onClick={() => handleExploreClick('US')}
              >
                Explore Apps
              </button>
            </div>
          </div>
          
          {/* Destination Card 4 */}
          <div className="relative rounded-3xl shadow-md overflow-hidden h-44 transition-transform transform hover:scale-105 border border-gray-200 bg-white">
            <div className="absolute inset-0">
              <img
                src="/Images/japan.png"
                alt="Japan"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
            </div>
            <div className="relative z-10 p-4 flex flex-col justify-end h-full text-white">
              <h3 className="text-xl font-semibold mb-1">JP Japan</h3>
              <p className="text-xs mb-2">
                Navigate Japan's blend of tradition and technology with the perfect travel apps.
              </p>
              <button 
                className="text-teal-500 hover:text-teal-700 transition self-start bg-transparent px-0 py-0 rounded-none shadow-none border-none text-xs font-normal tracking-tight"
                onClick={() => handleExploreClick('JP')}
              >
                Explore Apps
              </button>
            </div>
          </div>
          
          {/* Destination Card 5 */}
          <div className="relative rounded-3xl shadow-md overflow-hidden h-44 transition-transform transform hover:scale-105 border border-gray-200 bg-white">
            <div className="absolute inset-0">
              <img
                src="/Images/australia.png"
                alt="Australia"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
            </div>
            <div className="relative z-10 p-4 flex flex-col justify-end h-full text-white">
              <h3 className="text-xl font-semibold mb-1">AU Australia</h3>
              <p className="text-xs mb-2">
                Explore Australia's vast landscapes and vibrant cities with essential travel apps.
              </p>
              <button 
                className="text-teal-500 hover:text-teal-700 transition self-start bg-transparent px-0 py-0 rounded-none shadow-none border-none text-xs font-normal tracking-tight"
                onClick={() => handleExploreClick('AU')}
              >
                Explore Apps
              </button>
            </div>
          </div>
          
          {/* Destination Card 6 */}
          <div className="relative rounded-3xl shadow-md overflow-hidden h-44 transition-transform transform hover:scale-105 border border-gray-200 bg-white">
            <div className="absolute inset-0">
              <img
                src="/Images/italy.png"
                alt="Italy"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
            </div>
            <div className="relative z-10 p-4 flex flex-col justify-end h-full text-white">
              <h3 className="text-xl font-semibold mb-1">IT Italy</h3>
              <p className="text-xs mb-2">
                Discover the best apps for exploring Italy's rich history, art, and cuisine.
              </p>
              <button 
                className="text-teal-500 hover:text-teal-700 transition self-start bg-transparent px-0 py-0 rounded-none shadow-none border-none text-xs font-normal tracking-tight"
                onClick={() => handleExploreClick('IT')}
              >
                Explore Apps
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;