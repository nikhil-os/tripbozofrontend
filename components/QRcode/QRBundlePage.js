// src/app/qr-bundle/page.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  initSession,
  saveSelectedApps,
  fetchQRCode,
  fetchAppsByIds,
} from "@/src/utils/api";

export default function QRBundlePage() {
  const [apps, setApps] = useState([]);
  const [qrBase64, setQrBase64] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // 1) Pull selected IDs from localStorage
      const stored = localStorage.getItem("selectedAppIds");
      let appIds = [];
      try {
        appIds = stored ? JSON.parse(stored) : [];
      } catch {
        appIds = [];
      }
      if (!Array.isArray(appIds) || appIds.length === 0) {
        setLoading(false);
        return; // no selected apps → nothing to do
      }

      // 2) Ensure we have a sessionId
      let sid = localStorage.getItem("sessionId");
      if (!sid) {
        sid = await initSession();
        if (sid) {
          localStorage.setItem("sessionId", sid);
        }
      }

      if (!sid) {
        console.error("Could not initialize session.");
        setLoading(false);
        return;
      }
      setSessionId(sid);

      // 3) POST selected IDs to /personalized-list/ → returns new session_id
      const saveResp = await saveSelectedApps(appIds);
      if (saveResp.session_id) {
        sid = saveResp.session_id;
        localStorage.setItem("sessionId", sid);
        setSessionId(sid);
      }

      // 4) GET /personalized-list/qr/{sid}/
      const qrResp = await fetchQRCode(sid);
      if (qrResp.qr_code) {
        setQrBase64(qrResp.qr_code);
      }

      // 5) Fetch each app’s full details (name, description, etc.)
      const detailedApps = await fetchAppsByIds(appIds);
      setApps(detailedApps);

      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading your bundle…</p>
      </div>
    );
  }

  // If no apps were found
  if (apps.length === 0) {
    return (
      <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <p className="text-red-500">
          No apps selected. Please go back and pick some apps first.
        </p>
      </main>
    );
  }

  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <header className="bg-white shadow-sm w-full">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center space-x-3">
          {/* You can put a logo or navigation here if desired */}
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 w-full flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full mx-auto px-4 py-12 flex flex-col items-center justify-center">
          {/* “Back to App List” Link */}
          <button
            onClick={() => {
              window.history.back();
            }}
            className="flex items-center text-teal-500 hover:text-teal-600 mb-8 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-5 w-5"
            >
              <path d="M15 18l-6-6 6-6"></path>
            </svg>
            <span className="text-blue-600">Back to App List</span>
          </button>

          {/* QR Code Box */}
          <div className="bg-white p-10 rounded-2xl shadow-lg w-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Your Travel Apps Bundle
            </h1>
            <p className="text-gray-600 mb-8 text-center">
              Scan this QR code to access your selected travel apps
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
              {/* Left: the QR Image + actions */}
              <div className="flex-1 flex flex-col items-center justify-center">
                {qrBase64 ? (
                  <Image
                    src={`data:image/png;base64,${qrBase64}`}
                    alt="QR for app bundle"
                    width={220}
                    height={220}
                    className="mx-auto border-8 border-white rounded-lg bg-white"
                  />
                ) : (
                  <div className="w-[220px] h-[220px] bg-gray-200 flex items-center justify-center text-gray-500">
                    QR Failed
                  </div>
                )}

                <div className="flex justify-center gap-4 mt-8">
                  {/* Copy Link */}
                  <button
                    className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-full font-semibold transition min-w-[120px] whitespace-nowrap"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(window.location.href);
                        alert("Link copied to clipboard!");
                      } catch (err) {
                        alert("Failed to copy link.");
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 flex-shrink-0"
                    >
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    </svg>
                    <span>Copy Link</span>
                  </button>

                  {/* Share */}
                  <button className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-full font-semibold transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5"
                    >
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                      <polyline points="16 6 12 2 8 6"></polyline>
                      <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                    Share
                  </button>

                  {/* Download */}
                  <button className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-full font-semibold transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download
                  </button>
                </div>
              </div>

              {/* Right: Display the selected apps with name + description */}
              <div className="flex-1 flex flex-col items-center justify-center w-full">
                <div className="flex space-x-4 mb-6">
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-full font-semibold">
                    Selected Apps
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                    Embed Code
                  </button>
                </div>
                <ul className="space-y-6 w-full max-w-md">
                  {apps.map((app) => (
                    <li
                      key={app.id}
                      className="flex items-start space-x-4 bg-gray-50 rounded-lg p-4"
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">
                          {app.name}
                        </span>
                        <p className="text-gray-500 text-sm">
                          {app.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
