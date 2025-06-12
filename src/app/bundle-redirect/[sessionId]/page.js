"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic"; // ensure client rendering

export default function BundleRedirectPage({ params }) {
  const { sessionId } = params;
  const [urls, setUrls]       = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/bundle-urls/${sessionId}/`
        );
        if (!res.ok) throw new Error();
        const json = await res.json();
        setUrls(json.urls || []);
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

  if (loading) {
    return <p className="p-8 text-center">Loading your apps…</p>;
  }

  if (!urls.length) {
    return <p className="p-8 text-center text-red-500">No apps found.</p>;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">Your Travel App Bundle</h1>
      <button
        onClick={openAll}
        className="px-6 py-3 bg-teal-500 text-white rounded-lg text-lg hover:bg-teal-600 transition"
      >
        Open All {urls.length} Apps
      </button>

      <h2 className="mt-8 mb-2 font-medium">Or click each manually:</h2>
      <ul className="space-y-2">
        {urls.map((u) => (
          <li key={u}>
            <a
              href={u}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 hover:underline"
            >
              {u}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
