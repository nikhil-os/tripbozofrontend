'use client';

import React from 'react';

const destinations = [
  { name: 'Japan', image: '/flags/japan.png' },
  { name: 'Italy', image: '/flags/italy.png' },
  { name: 'Thailand', image: '/flags/thailand.png' },
  { name: 'Australia', image: '/flags/australia.png' },
  { name: 'France', image: '/flags/france.png' },
  { name: 'India', image: '/flags/india.png' },
];

const PopularDestinations = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
          Popular Destinations
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Explore apps tailored for these trending destinations
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((country, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl p-6 flex flex-col items-center hover:shadow-md transition"
            >
              <img
                src={country.image}
                alt={country.name}
                className="w-16 h-16 object-cover mb-4"
              />
              <p className="text-gray-800 font-medium mb-3">{country.name}</p>
              <button className="bg-blue-600 text-white text-sm px-4 py-2 mt-4 rounded-full hover:bg-blue-700 transition cursor-pointer">
  Explore Apps
</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
