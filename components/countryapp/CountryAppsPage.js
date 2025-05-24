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
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Apps in {countryCode}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            className={`relative border rounded-xl p-4 shadow-md transition ${
              selectedApps.includes(app.id) ? 'ring-2 ring-green-500' : ''
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">{app.name}</h2>
            <p className="text-sm text-gray-600">{app.description}</p>
            <button
              onClick={() => toggleSelect(app.id)}
              className={`absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-black p-2 rounded-full transition ${
                selectedApps.includes(app.id) ? 'bg-green-500 text-white' : ''
              }`}
              title="Select app"
            >
              <FaPlus />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center">
        <button
          className="mb-6 px-8 py-3 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white transition-colors"
          onClick={() => router.push(`/country/${countryCode}/Essentials`)}
        >
          Essentials
        </button>
        <button
          disabled={selectedApps.length < 2}
          onClick={handleGenerateQR}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            selectedApps.length >= 2
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Generate QR Code
        </button>
      </div>
    </div>
  );
}
