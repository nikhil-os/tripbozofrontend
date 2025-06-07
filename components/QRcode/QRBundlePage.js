"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  initSession,
  saveSelectedApps,
  fetchQRCode,
} from "@/src/utils/api";
import { FiCopy, FiDownload, FiShare2, FiLink } from "react-icons/fi";

export default function QRBundlePage() {
  const [apps, setApps] = useState([]);
  const [qrBase64, setQrBase64] = useState(null);
  const [shareUrl, setShareUrl] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const stored = localStorage.getItem("selectedAppIds");
      let appIds = [];
      try {
        appIds = stored ? JSON.parse(stored) : [];
      } catch {}
      if (!appIds.length) { setLoading(false); return; }

      let sid = localStorage.getItem("sessionId");
      if (!sid) {
        sid = await initSession();
        sid && localStorage.setItem("sessionId", sid);
      }
      if (!sid) { setLoading(false); return; }
      setSessionId(sid);

      const saveResp = await saveSelectedApps(appIds);
      if (saveResp.session_id) {
        sid = saveResp.session_id;
        localStorage.setItem("sessionId", sid);
        setSessionId(sid);
      }

      const qrResp = await fetchQRCode(sid);
      qrResp.qr_code && setQrBase64(qrResp.qr_code);
      qrResp.shareable_url && setShareUrl(qrResp.shareable_url);
      setApps(qrResp.selected_apps || []);
      setLoading(false);
    })();
  }, []);

  const handleEmbedCopy = () => {
    const code = `<iframe src="${shareUrl}" width="360" height="480" frameborder="0" style="border:none;"></iframe>`;
    navigator.clipboard.writeText(code);
    alert("Embed code copied!");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading your bundle…</p>
      </div>
    );
  }

  if (!apps.length) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-red-500">No apps selected. Please go back.</p>
      </div>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <button
          onClick={() => history.back()}
          className="text-teal-600 hover:underline mb-6 flex items-center gap-2"
        >
          ← Back to Apps
        </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Your Travel Apps Bundle
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Scan the QR or copy/share your bundle below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* QR & Actions */}
          <div className="bg-white p-8 rounded-xl shadow flex flex-col items-center justify-between">
            {qrBase64 ? (
              <Image
                src={`data:image/png;base64,${qrBase64}`}
                alt="Bundle QR"
                width={280}
                height={280}
                className="rounded-lg border mb-6"
              />
            ) : (
              <div className="w-72 h-72 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <span className="text-gray-400">QR failed</span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 w-full">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                  alert("Link copied!");
                }}
                className="flex items-center justify-center gap-2 py-2 bg-gray-200 hover:bg-gray-400 rounded-lg  text-black"
              >
                <FiCopy /> Copy Link
              </button>
              <button
                onClick={() =>
                  navigator.share?.({ url: shareUrl }).catch(() => {})
                }
                className="flex items-center justify-center gap-2 py-2 bg-gray-200 hover:bg-gray-400 rounded-lg  text-black"
              >
                <FiShare2 /> Share
              </button>
              <a
                href={`/api/personalized-list/download-text/${sessionId}/`}
                className="flex items-center justify-center gap-2 py-2 bg-gray-200 hover:bg-gray-400 rounded-lg  text-black"
                download
              >
                <FiDownload /> List
              </a>
              <a
                href={`/api/personalized-list/download-qr/${sessionId}/`}
                className="flex items-center justify-center gap-2 py-2 bg-gray-200 hover:bg-gray-400 rounded-lg  text-black "
                download
              >
                <FiDownload /> QR
              </a>
            </div>
          </div>

          {/* Embed + Apps */}
          <div className="space-y-6">
            {/* Embed Code */}
            <div className="bg-white p-4 rounded-xl shadow">
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center gap-2 text-gray-700 font-medium">
                  <FiLink /> Embed Code
                </label>
                <button
                  onClick={handleEmbedCopy}
                  className="text-gray-600 hover:text-gray-800 flex items-center gap-1"
                >
                  <FiCopy /> Copy
                </button>
              </div>
              <textarea
                readOnly
                rows={3}
                value={`<iframe src="${shareUrl}" width="360" height="480" frameborder="0" style="border:none;"></iframe>`}
                className="w-full rounded-lg border border-gray-300 p-2 font-mono text-sm text-gray-800 bg-gray-50"
              />
            </div>

            {/* App List */}
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Selected Apps
              </h2>
              <ul className="space-y-3 max-h-72 overflow-y-auto">
                {apps.map((app) => (
                  <li
                    key={app.id}
                    className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition"
                  >
                    <div className="w-10 h-10 relative">
                      <Image
                        src={app.icon_url || "/file.svg"}
                        alt={app.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{app.name}</p>
                      <p className="text-gray-500 text-sm">{app.category}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
