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

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">QR Codes for Selected Apps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            className="p-4 rounded-xl shadow-md border text-center bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">{app.name}</h2>
            <p className="text-gray-600 mb-4">{app.description}</p>
            {/* Dummy QR Code */}
            <Image
              src="/dummy-qr.png"
              alt={`Dummy QR for ${app.name}`}
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
