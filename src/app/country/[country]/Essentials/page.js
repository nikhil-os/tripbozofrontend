// src/app/country/[country]/essentials/page.jsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchEssentials, fetchCountryInfo } from "@/src/utils/api";
import { useLoader } from "@/components/LoaderContext";

export default function EssentialsPage() {
  const { country } = useParams();
  const router = useRouter();
  const { setShow } = useLoader();

  const [countryName, setCountryName] = useState("");
  const [data, setData] = useState({ emergencies: [], phrases: [], tips: [] });
  const [loading, setLoading] = useState(true);

  // Only get the pretty name once
  useEffect(() => {
    fetchCountryInfo(country.toUpperCase())
      .then((info) => setCountryName(info.name || country.toUpperCase()))
      .catch(() => setCountryName(country.toUpperCase()));
  }, [country]);

  // Fetch the essentials, but DO NOT touch the loader here
  useEffect(() => {
    fetchEssentials(country.toUpperCase())
      .then((json) => {
        setData({
          emergencies: json.emergencies.length ? json.emergencies : [],
          phrases: json.phrases.length ? json.phrases : [],
          tips: json.tips.length ? json.tips : [],
        });
      })
      .catch(() => {
        // on error, set your fallback
      })
      .finally(() => setLoading(false));
  }, [country]);

  const { emergencies, phrases, tips } = data;

// Sample fallbacks
const sampleInsurance = [
  { name: "World Nomads", link: "https://www.worldnomads.com" },
  { name: "Allianz Travel", link: "https://www.allianztravelinsurance.com" },
  { name: "InsureMyTrip", link: "https://www.insuremytrip.com" },
];
const sampleEsim = [
  { name: "Airalo", link: "https://www.airalo.com" },
  { name: "GigSky", link: "https://www.gigsky.com" },
  { name: "Nomad", link: "https://www.getnomad.app" },
];


  if (loading) {
    return <p className="p-8 text-center">Loading…</p>;
  }


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
            {countryName}
            </span>
            .
          </p>
        </div>
      </div>

     
      {/* ── New Services Section ── */}
      <div className="max-w-4xl mx-auto px-4 mt-8 grid gap-6 animate-fade-in-up
                      grid-cols-1 md:grid-cols-2">
        {/* Insurance Services */}
        <div className="bg-white p-6 rounded-3xl shadow-md border-l-8 border-red-400">
          <h3 className="text-xl font-semibold text-red-600 mb-4">
            Insurance & Assistance
          </h3>
          <p className="text-gray-700 text-sm mb-4">
            Trusted travel insurance providers and 24/7 assistance services.
          </p>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {sampleInsurance.map((svc) => (
              <a
                key={svc.name}
                href={svc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center
                  px-4 py-3
                  bg-red-50
                  border border-red-200
                  rounded-xl
                  shadow-sm
                  transition
                  hover:shadow-md hover:bg-red-100
                  text-red-600 font-medium
                "
              >
                {svc.name}
              </a>
            ))}
          </div>
        </div>

        {/* eSIM Services */}
        <div className="bg-white p-6 rounded-3xl shadow-md border-l-8 border-green-400">
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            eSIM & Connectivity
          </h3>
          <p className="text-gray-700 text-sm mb-4">
            Browse eSIM plans and local data options to stay connected abroad.
          </p>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {sampleEsim.map((svc) => (
              <a
                key={svc.name}
                href={svc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center
                  px-4 py-3
                  bg-green-50
                  border border-green-200
                  rounded-xl
                  shadow-sm
                  transition
                  hover:shadow-md hover:bg-green-100
                  text-green-600 font-medium
                "
              >
                {svc.name}
              </a>
            ))}
          </div>
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
