// src/app/country/[country]/essentials/page.jsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchEssentials } from "@/src/utils/api";
import { useLoader } from "@/components/LoaderContext";

export default function EssentialsPage() {
  const { country } = useParams();
  const { setShow } = useLoader();

  const FALLBACK = {
    emergencies: [
      { name: "Police", phone: "100" },
      { name: "Fire Brigade", phone: "101" },
      { name: "Ambulance", phone: "102" },
      { name: "Women Safety Helpline", phone: "1091" },
      { name: "Child Helpline", phone: "1098" },
      { name: "Disaster Management", phone: "108" },
      { name: "Tourist Helpline", phone: "1363" },
      { name: "Road Assistance", phone: "1073" },
      { name: "Coast Guard", phone: "1554" },
      { name: "Cyber Crime", phone: "155260" },
      { name: "Anti Poison", phone: "1066" },
      { name: "Railway Enquiry", phone: "139" },
      { name: "Airline Enquiry", phone: "1800-180-1407" },
      { name: "Taxi Services", phone: "1800-123-4567" },
      { name: "General Emergency", phone: "112" },
    ],
    phrases: [
      { original: "Hello", translation: "Hola" },
      { original: "Thank you", translation: "Gracias" },
      { original: "Where is…?", translation: "¿Dónde está…?" },
    ],
    tips: [
      { tip: "Keep emergency numbers handy." },
      { tip: "Carry some local currency." },
      { tip: "Save a copy of your passport in your phone." },
    ],
  };

  const [data, setData] = useState({
    emergencies: [],
    phrases: [],
    tips: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setShow(true); // Show the loader
      const json = await fetchEssentials(country.toUpperCase());
      setData({
        emergencies:
          json.emergencies?.length > 0
            ? json.emergencies
            : FALLBACK.emergencies,
        phrases:
          json.phrases?.length > 0 ? json.phrases : FALLBACK.phrases,
        tips: json.tips?.length > 0 ? json.tips : FALLBACK.tips,
      });
      setLoading(false);
      setShow(false); // Hide the loader
    })();
  }, [country, setShow]);

  if (loading) {
    return <p className="p-8 text-center text-gray-600">Loading…</p>;
  }

  const { emergencies, phrases, tips } = data;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#f5fafd] to-[#e3f2fd] animate-fade-in">
      {/* Hero Header */}
      <div className="w-full bg-gradient-to-r from-[#38bdf8] via-[#2ad2c9] to-[#5eead4] text-white py-12 flex flex-col items-center shadow-xl animate-fade-in-up">
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center w-24 h-24 rounded-2xl bg-white/20 border-4 border-white/30 shadow-lg mb-4">
            <span className="text-6xl">🌏</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow text-center">
            Travel Essentials
          </h1>
          <p className="text-white/90 max-w-2xl text-lg font-medium drop-shadow-sm text-center">
            Offline emergency info, key phrases & safety tips for{" "}
            <span className="capitalize font-bold underline underline-offset-4">
              {country}
            </span>
            .
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Emergency Contacts */}
        <section className="bg-white p-8 rounded-3xl shadow-md border-l-8 border-teal-400 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-6 text-teal-700 flex items-center gap-2">
            {/* phone icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-teal-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.07 4.18 2 2 0 015.18 2h3a2 2 0 011.72 2.18 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            Emergency Contacts
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {emergencies.map((e, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-xl shadow-sm hover:bg-teal-50 transition"
              >
                <span className="font-semibold text-gray-800">{e.name}</span>
                <a
                  href={`tel:${e.phone}`}
                  className="text-teal-600 font-bold hover:underline"
                >
                  {e.phone}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#2ad2c9] via-[#38bdf8] to-[#5eead4] opacity-40" />

        {/* Local Phrases */}
        <section className="bg-white p-8 rounded-3xl shadow-md border-l-8 border-blue-400 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">
            Local Phrases
          </h2>
          <ul className="space-y-4">
            {phrases.map((p, i) => (
              <li
                key={i}
                className="bg-gray-50 p-4 rounded-xl shadow-sm"
              >
                <div className="font-medium text-gray-800">{p.original}</div>
                {p.translation && (
                  <div className="text-gray-500 italic ml-2">
                    — {p.translation}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#facc15] via-[#fde68a] to-[#fef9c3] opacity-40" />

        {/* Useful Tips */}
        <section className="bg-yellow-50 p-8 rounded-3xl shadow-md border-l-8 border-yellow-400 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-6 text-yellow-800">
            Useful Tips
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {tips.map((t, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 text-yellow-600">•</span>
                {t.tip}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
