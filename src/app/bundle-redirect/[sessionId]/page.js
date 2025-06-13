// app/bundle-redirect/[sessionId]/page.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function BundleRedirectPage({ params }) {
  const { sessionId } = params;
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextIdx, setNextIdx] = useState(0);
  const [popupMsg, setPopupMsg] = useState("");

  // Fetch the bundle URLs
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/personalized-list/bundle-urls/${sessionId}/`
        );
        if (!res.ok) throw new Error();
        const { urls = [] } = await res.json();
        setUrls(urls);
      } catch {
        setUrls([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [sessionId]);

  const openAll = () => {
    urls.forEach((u) => window.open(u, "_blank"));
  };

  const openNext = () => {
    if (nextIdx < urls.length) {
      window.open(urls[nextIdx], "_blank");
      setNextIdx(nextIdx + 1);
    }
  };

  const testPopups = () => {
    setPopupMsg("");
    const w = window.open("", "_blank", "width=100,height=100");
    if (!w) {
      setPopupMsg(
        "Pop‑ups are blocked. Please enable pop‑ups for this site in your browser settings."
      );
    } else {
      w.close();
      setPopupMsg("Pop‑ups allowed 👍 You’re all set to use “Open All.”");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
        <p className="text-gray-600">Loading your bundle…</p>
      </div>
    );
  }

  if (!urls.length) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
        <p className="text-red-500">No apps found in your bundle.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ——— Mini Header ——— */}
      <header className="w-full py-2 px-4 bg-gray-100 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-teal-600">TripBozo</a>
        </Link>
        <Link href="/">
          <a className="text-sm text-gray-600 hover:underline">Home</a>
        </Link>
      </header>

      {/* ——— Main Content ——— */}
      <main className="flex-grow flex flex-col items-center p-8 space-y-12">
        <h1 className="text-3xl font-semibold text-gray-800">Your Travel App Bundle</h1>

        {/* Section 1: Open All */}
        <section className="w-full max-w-md text-center space-y-3">
          <h2 className="text-xl font-medium">Quick Launch</h2>
          <button
            onClick={openAll}
            className="w-full px-6 py-3 bg-teal-500 text-white rounded-lg text-lg hover:bg-teal-600 transition"
          >
            Open All {urls.length} Apps
          </button>
          <button
            onClick={testPopups}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            Test “Allow Pop‑ups”
          </button>
          {popupMsg && <p className="text-sm text-gray-500">{popupMsg}</p>}
        </section>

        {/* Section 2: One‑by‑One */}
        <section className="w-full max-w-md text-center space-y-3">
          <h2 className="text-xl font-medium">One‑by‑One</h2>
          <button
            onClick={openNext}
            disabled={nextIdx >= urls.length}
            className={`w-full px-6 py-3 rounded-lg text-white text-lg transition ${
              nextIdx < urls.length
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            {nextIdx < urls.length
              ? `Open Next App (${nextIdx + 1}/${urls.length})`
              : "All Apps Opened"}
          </button>
          <p className="text-sm text-gray-500">
            Click “Open Next App” each time to open one tab without pop‑up blocks.
          </p>
        </section>

        {/* Section 3: Manual Links */}
        <section className="w-full max-w-md text-center space-y-3">
          <h2 className="text-xl font-medium">Manual Links</h2>
          <ul className="grid gap-2">
            {urls.map((u, i) => (
              <li key={u}>
                <a
                  href={u}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 border rounded hover:bg-gray-50 text-teal-700"
                >
                  Open App {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* ——— Mini Footer ——— */}
      <footer className="w-full py-4 px-4 bg-gray-100 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} TripBozo — All rights reserved.
      </footer>
    </div>
  );
}
