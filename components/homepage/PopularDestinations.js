'use client';

import React from 'react';

const destinations = [
{ name: 'India', image: '/flags/india.png' },
{ name: 'Japan', image: '/flags/japan.png' },
{ name: 'Italy', image: '/flags/italy.png' },
{ name: 'Thailand', image: '/flags/thailand.png' },
{ name: 'Australia', image: '/flags/australia.png' },
{ name: 'France', image: '/flags/france.png' },
];

const PopularDestinations = () => {
return (
<section
className="bg-gradient-to-br from-teal-50 to-blue-100 mx-auto my-16 rounded-3xl border-4 border-teal-200 flex items-center justify-center shadow-xl"
style={{ width: 1520, height: 1000, padding: 0 }}
>
<div className="max-w-7xl w-full h-full mx-auto text-center py-16 px-8 flex flex-col justify-center">
<h2 className="text-3xl md:text-4xl font-semibold mb-4 text-black">Popular Destinations</h2>
<p className="text-black text-base md:text-lg mb-10">
Explore apps tailored for these trending destinations
</p>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
{destinations.map((country, index) => (
<div key={index} className="bg-white shadow-xl rounded-3xl p-12 flex flex-col items-center justify-between hover:shadow-2xl transition duration-300 border border-blue-200 min-h-[380px] min-w-[260px] w-full" >
<div className="flex flex-col items-center w-full flex-1">
<img src={country.image} alt={country.name} className="w-28 h-28 object-cover mb-6 rounded-full border-4 border-teal-200 shadow" />
<p className="text-teal-800 font-bold text-2xl mb-4 text-center">{country.name}</p>
</div>
<button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white text-base px-8 py-3 mt-6 rounded-xl font-semibold shadow hover:from-teal-600 hover:to-blue-700 hover:scale-105 transition duration-300 w-full">
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