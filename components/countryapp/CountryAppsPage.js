'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaPlus } from 'react-icons/fa';

export default function CountryAppsPage({ countryCode, apps }) {
  const [selectedApps, setSelectedApps] = useState([]);
  const router = useRouter();

  const toggleSelect = (appId) => {
    setSelectedApps((prev) =>
      prev.includes(appId)
        ? prev.filter((id) => id !== appId)
        : [...prev, appId]
    );
  };

  const handleGenerateQR = () => {
    const selectedAppIds = selectedApps.join(",");
    router.push(`/qr-bundle?apps=${selectedAppIds}`);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header Section (Navigation Bar) */}
      

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex">
        {/* Apps Section */}
        <div className="flex-1">
          {/* Search and Filter Bar */}
          <div className="my-6 flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
              <input
                type="text"
                className="h-12 w-full rounded-md border border-gray-300 bg-gray-100 px-4 pl-10 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Search apps..."
              />
            </div>
            <button className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 rounded-md px-4 py-2 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
              Filter
            </button>
          </div>

          {/* Category Tabs */}
         <div className="flex space-x-3 mb-8 mt-2 overflow-x-auto bg-gray-100 rounded-full px-4 py-3 shadow-inner border border-gray-200">
  <button className="px-5 py-2 rounded-full bg-teal-500 text-black font-semibold whitespace-nowrap transition">
    ALL
  </button>
  <button className="px-5 py-2 rounded-full bg-gray-200 text-black hover:bg-gray-300 whitespace-nowrap transition">
    Communication
  </button>
  <button className="px-5 py-2 rounded-full bg-gray-200 text-black hover:bg-gray-300 whitespace-nowrap transition">
    Dining
  </button>
  <button className="px-5 py-2 rounded-full bg-gray-200 text-black hover:bg-gray-300 whitespace-nowrap transition">
    Navigation
  </button>
  <button className="px-5 py-2 rounded-full bg-gray-200 text-black hover:bg-gray-300 whitespace-nowrap transition">
    Finance
  </button>
  <button className="px-5 py-2 rounded-full bg-gray-200 text-black hover:bg-gray-300 whitespace-nowrap transition">
    Safety
  </button>
  <button className="px-5 py-2 rounded-full bg-gray-200 text-black hover:bg-gray-300 whitespace-nowrap transition">
    Accommodation
  </button>
</div>
{/* Apps Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-1 md:px-2">
  {apps.map((app) => (
    <div
      key={app.id}
      className={`relative border rounded-xl p-6 bg-white shadow-md transition-all hover:shadow-lg min-h-[210px] ${
        selectedApps.includes(app.id) ? 'border-teal-400' : 'border-gray-200'
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-2xl">📱</span> {/* Placeholder for app icon */}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{app.name}</h2>
          <p className="text-base text-gray-600">{app.description}</p>
          <div className="flex items-center space-x-1 mt-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-600">{app.rating || '4.5'}</span>
          </div>
          <div className="flex space-x-2 mt-2">
            <span className="text-xs text-gray-500">iOS</span>
            <span className="text-xs text-gray-500">Android</span>
            {app.web && <span className="text-xs text-gray-500">Web</span>}
          </div>
          <div className="mt-1">
            <span className="text-xs text-gray-500">{app.price || 'Free'}</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => toggleSelect(app.id)}
        className={`absolute top-4 right-4 bg-gray-200 hover:bg-teal-400 text-black p-2 rounded-full transition ${
          selectedApps.includes(app.id) ? 'bg-teal-400 text-white' : ''
        }`}
        title="Select app"
      >
        <FaPlus className="h-4 w-4" />
      </button>
    </div>
  ))}
</div>
        </div>

        {/* Sidebar for Selected Apps */}
        <div className="w-80 ml-6 p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Selected Apps ({selectedApps.length})
          </h3>
          {selectedApps.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-600">No apps selected yet</p>
              <p className="text-gray-500 text-sm mt-1">
                Add apps to create your personalized travel apps bundle
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {selectedApps.map((appId) => {
                const app = apps.find((a) => a.id === appId);
                return (
                  <li key={app.id} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xl">📱</span> {/* Placeholder for app icon */}
                    </div>
                    <div>
                      <span className="font-medium text-gray-800">{app.name}</span>
                      <p className="text-gray-500 text-sm">{app.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          <button
            disabled={selectedApps.length < 2}
            onClick={handleGenerateQR}
            className={`mt-6 w-full py-2 rounded-full font-semibold transition-colors ${
              selectedApps.length >= 2
                ? 'bg-teal-500 text-white hover:bg-teal-600'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Generate QR Code
          </button>
          {selectedApps.length < 2 && (
            <p className="text-xs text-gray-500 mt-2 text-center">
              Select at least 2 apps to generate a QR code
            </p>
          )}
        </div>
      </div>
    </main>
  );
}