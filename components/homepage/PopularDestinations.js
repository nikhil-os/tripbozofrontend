'use client';

import React from 'react';

const destinations = [
{ name: 'India', image: '/flags/Agra.png' },
{ name: 'France', image: '/flags/paris.png' },
{ name: 'USA', image: '/flags/usa.png' },
{ name: 'Japan', image: '/flags/japan.png' },
{ name: 'Australia', image: '/Images/australia.png' },
{ name: 'Italy', image: '/flags/italy.png' },



];

const PopularDestinations = () => {
return (
<main className="min-h-screen bg-gray-100 flex items-center justify-center">
  
  

  {/* Popular Destinations Section */}
  <section className="py-16 px-2 sm:px-4 md:px-8 bg-gray-100">
  <div className="max-w-6xl mx-auto">
    <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
      Popular Destinations
    </h1>
    <h1 className="text-3xl  text-gray-800 mb-8 text-center">
      Explore apps tailored for these trending destinations
    </h1>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Destination Card 1 */}
      <div className="relative rounded-xl shadow-md overflow-hidden h-80 transition-transform transform hover:scale-105 border border-gray-200 bg-white"> 
          <div className="absolute inset-0">
            <img
              src="/Images/india.png"
              alt="India"
              className="absolute inset-0 w-full h-full object-cover"
    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
          </div>
          <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
            <h3 className="text-2xl font-semibold mb-2">IN INDIA</h3>
            <p className="text-sm mb-4">
              Explore the city of love with apps for navigating the metro, finding the best bistros, and more.
            </p>
            <button className="bg-sky-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-sky-600 transition self-start">
  Explore Apps
</button>
          </div>
        </div>

        {/* Destination Card 2 */}
        <div className="relative rounded-lg shadow-md overflow-hidden h-80 transition-transform transform hover:scale-105">
          <div className="absolute inset-0">
            <img
              src="/Images/france.png"
              alt="Paris"
              className="absolute inset-0 w-full h-full object-cover"
    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
          </div>
          <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
            <h3 className="text-2xl font-semibold mb-2">FR France</h3>
            <p className="text-sm mb-4">
              Navigate the bustling streets of Tokyo with apps for public transit, language translation, and more.
            </p>
            <button className="bg-sky-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-sky-600 transition self-start">
  Explore Apps
</button>
          </div>
        </div>

        {/* Destination Card 3 */}
        <div className="relative rounded-lg shadow-md overflow-hidden h-80 transition-transform transform hover:scale-105">
   
          <div className="absolute inset-0">
            <img
              src="/Images/usa.png"
              alt="New York"
              className="absolute inset-0 w-full h-full object-cover"
    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
          </div>
          <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
            <h3 className="text-2xl font-semibold mb-2">US USA</h3>
            <p className="text-sm mb-4">
              Discover apps to help you explore the Big Apple, from subway maps to event guides.
            </p>
            <button className="bg-sky-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-sky-600 transition self-start">
  Explore Apps
</button>
          </div>
        </div>
        {/* Destination Card 4 */}
        <div className="relative rounded-lg shadow-md overflow-hidden h-80 transition-transform transform hover:scale-105">
          <div className="absolute inset-0">
            <img
              src="/Images/japan.png"
              alt="Tokyo"
              className="absolute inset-0 w-full h-full object-cover"
    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
          </div>
          <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
            <h3 className="text-2xl font-semibold mb-2">JP Japan</h3>
            <p className="text-sm mb-4">
              Discover apps to help you explore the Big Apple, from subway maps to event guides.
            </p>
            <button className="bg-sky-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-sky-600 transition self-start">
  Explore Apps
</button>
          </div>
        </div>
        {/* Destination Card 5 */}
        <div className="relative rounded-lg shadow-md overflow-hidden h-80 transition-transform transform hover:scale-105">
          <div className="absolute inset-0">
            <img
              src="/Images/australia.png"
              alt="Australia"
              className="absolute inset-0 w-full h-full object-cover"
    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
          </div>
          <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
            <h3 className="text-2xl font-semibold mb-2">AU Australia</h3>
            <p className="text-sm mb-4">
              Discover apps to help you explore the Big Apple, from subway maps to event guides.
            </p>
            <button className="bg-sky-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-sky-600 transition self-start">
  Explore Apps
</button>
          </div>
        </div>
        {/* Destination Card 6 */}
        <div className="relative rounded-lg shadow-md overflow-hidden h-80 transition-transform transform hover:scale-105">
          <div className="absolute inset-0">
            <img
            src="/Images/italy.png"
  alt="italy"
  className="absolute inset-0 w-full h-full object-cover"
  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
/>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
          </div>
          <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
            <h3 className="text-2xl font-semibold mb-2">IT Italy</h3>
            <p className="text-sm mb-4">
              Discover apps to help you explore the Big Apple, from subway maps to event guides.
            </p>
           <button className="bg-sky-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-sky-600 transition self-start">
  Explore Apps
</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
);
};

export default PopularDestinations; 