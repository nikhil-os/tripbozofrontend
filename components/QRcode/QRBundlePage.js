'use client';
import { useEffect, useState } from 'react';
import Image from "next/image";
import { fetchAppsByIds } from "src/utils/fetchApps"; // create this util or reuse your existing logic

export default function QRBundlePage() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('selectedAppIds');
    if (stored) {
      const appIds = JSON.parse(stored);
      fetchAppsByIds(appIds).then(setApps);
    }
  }, []);
  console.log("Selected Apps:", apps);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">QR Code for Your App Bundle</h1>
      <div className="flex flex-col items-center mb-8">
        {/* Single QR Code */}
        <Image
          src="/dummy-qr.png"
          alt="QR for app bundle"
          width={160}
          height={160}
          className="mx-auto mb-4 border-2 border-gray-300 rounded-lg bg-white"
        />
        <div className="flex gap-4 mt-2">
          <button className="bg-green-600 hover:bg-green-700 text-black
           px-4 py-2 rounded-lg font-semibold transition">Copy Link</button>
          <button className="bg-green-600 hover:bg-green-700 text-black
           px-4 py-2 rounded-lg font-semibold transition">Share</button>
          <button className="bg-green-600 hover:bg-green-700 text-black
           px-4 py-2 rounded-lg font-semibold transition">Download</button>
        </div>
      </div>
      <div className="bg-gray-50 border rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-center text-black">Selected Apps</h2>
        <ul className="divide-y divide-gray-200">
          {apps.map((app) => (
            <li key={app.id} className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium text-gray-800">{app.name}</span>
              <span className="text-gray-500 text-sm mt-1 sm:mt-0">{app.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
