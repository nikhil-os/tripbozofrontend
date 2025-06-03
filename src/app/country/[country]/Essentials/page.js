// src/app/country/[country]/essentials/page.js
"use client"; // We’ll do a client‐side fetch so we can easily catch/network-failover

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8990/api";

export default function EssentialsPage({ params }) {
  const pathname = usePathname();
  // Extract country slug from URL (e.g. "france", "india", etc.)
  const country = pathname.split("/")[2] || params.country;

  // Hard-coded fallback data
  const FALLBACK_EMERGENCY_CONTACTS = [
    { name: "Police", phone: "100", email: "", description: "" },
    { name: "Fire Brigade", phone: "101", email: "", description: "" },
    { name: "Ambulance", phone: "102", email: "", description: "" },
    { name: "Women Safety Helpline", phone: "1091", email: "", description: "" },
    { name: "Child Helpline", phone: "1098", email: "", description: "" },
    { name: "Disaster Management", phone: "108", email: "", description: "" },
    { name: "Tourist Helpline", phone: "1363", email: "", description: "" },
    { name: "Road Assistance", phone: "1073", email: "", description: "" },
    { name: "Coast Guard", phone: "1554", email: "", description: "" },
    { name: "Cyber Crime", phone: "155260", email: "", description: "" },
    { name: "Anti Poison", phone: "1066", email: "", description: "" },
    { name: "Railway Enquiry", phone: "139", email: "", description: "" },
    { name: "Airline Enquiry", phone: "1800-180-1407", email: "", description: "" },
    { name: "Taxi Services", phone: "1800-123-4567", email: "", description: "" },
    { name: "General Emergency", phone: "112", email: "", description: "" },
  ];

  const FALLBACK_EMBASSY_CONTACTS = [
    {
      name: "US Embassy",
      address: "24 Rue Gabriel, 75008 Paris, France",
      phone: "+33 1 43 12 22 22",
      email: "paris@usembassy.gov",
      hours: "Mon-Fri 9am-5pm",
    },
    {
      name: "UK Embassy",
      address: "35 Rue du Faubourg Saint-Honoré, 75008 Paris, France",
      phone: "+33 1 44 51 31 00",
      email: "info.paris@fco.gov.uk",
      hours: "Mon-Fri 9am-5pm",
    },
    {
      name: "Indian Embassy",
      address: "15 Rue Alfred Dehodencq, 75016 Paris, France",
      phone: "+33 1 40 50 70 70",
      email: "cons.paris@mea.gov.in",
      hours: "Mon-Fri 9am-5pm",
    },
  ];

  // Country-specific safety concerns
  const SAFETY_CONCERNS_MAP = {
    france: [
      "Beware of pickpockets, especially in tourist areas and public transport.",
      "Protests and strikes can disrupt travel; check local news.",
      "Watch for scams around major landmarks (e.g., fake petitions, friendship bracelets).",
      "Emergency sirens are tested the first Wednesday of each month at noon.",
      "Some areas may have heightened security due to terrorism alerts.",
    ],
    india: [
      "Traffic can be chaotic; use official taxis or ride-shares.",
      "Drink only bottled or filtered water.",
      "Beware of scams at tourist sites and transport hubs.",
      "Women travelers should avoid isolated areas after dark.",
      "Air quality can be poor in major cities during winter.",
    ],
    japan: [
      "Earthquakes are possible; know evacuation routes.",
      "Crime is low, but take care with valuables in crowded places.",
      "Typhoon season is June to October; monitor weather alerts.",
      "Smoking is restricted in many public areas.",
      "Always carry cash, as some places do not accept cards.",
    ],
    usa: [
      "Gun violence can occur; follow local advice in emergencies.",
      "Healthcare is expensive; ensure you have travel insurance.",
      "Natural disasters (hurricanes, wildfires, tornadoes) are possible depending on region.",
      "Petty theft can occur in tourist hotspots.",
      "Obey all traffic laws and signals strictly.",
    ],
  };

  const [emergencies, setEmergencies] = useState(FALLBACK_EMERGENCY_CONTACTS);
  const [safetyConcerns, setSafetyConcerns] = useState(
    SAFETY_CONCERNS_MAP[country.toLowerCase()] || [
      "Stay aware of your surroundings, especially in crowded places.",
      "Keep emergency numbers handy.",
      "Follow local laws and customs.",
      "Monitor local news for any travel advisories.",
    ]
  );

  // Attempt to fetch from backend; fallback if error or empty
  useEffect(() => {
    async function loadEmergencyContacts() {
      try {
        const resp = await fetch(
          `${API_BASE_URL}/country/${country.toUpperCase()}/emergency/`
        );
        if (!resp.ok) throw new Error("Network response not ok");

        const json = await resp.json();
        if (Array.isArray(json.emergencies) && json.emergencies.length > 0) {
          setEmergencies(json.emergencies);
        } else {
          // keep fallback
          console.warn("No data returned; using fallback emergencies");
        }
      } catch (err) {
        console.warn("Failed to fetch emergency contacts:", err.message);
        // keep fallback
      }
    }
    loadEmergencyContacts();
  }, [country]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#f5fafd] to-[#e3f2fd] py-0 animate-fade-in">
      {/* Hero Header */}
      <div className="w-full bg-gradient-to-r from-[#38bdf8] via-[#2ad2c9] to-[#5eead4] text-white px-0 py-12 flex flex-col items-center justify-center shadow-xl relative animate-fade-in-up overflow-hidden">
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
          <div className="flex items-center justify-center w-24 h-24 rounded-2xl bg-white/20 border-4 border-white/30 shadow-lg mb-4">
            <span className="text-6xl">🌏</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display mb-3 drop-shadow text-center animate-fade-in-up">
            Travel Essentials
          </h1>
          <p className="text-white/90 max-w-2xl text-lg font-medium drop-shadow-sm text-center animate-fade-in-up delay-200">
            Offline emergency information, embassy contacts, and safety tips for{" "}
            <span className="capitalize font-bold underline underline-offset-4">
              {country}
            </span>
            .
          </p>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="w-full max-w-4xl mx-auto px-2 md:px-8 py-10 flex flex-col gap-10 animate-fade-in stagger-children">
        {/* Emergency Contacts Section */}
        <section className="bg-white/90 p-8 rounded-3xl shadow-md border-l-8 border-teal-400 animate-fade-in-up card-hover">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-teal-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              className="mr-3 h-7 w-7 text-teal-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Emergency Contacts
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {emergencies.map((e, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-4 shadow-sm hover:bg-teal-50 transition border border-gray-100"
              >
                <span className="font-semibold capitalize text-gray-800 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 7h2v2h-2v-2zm0-4h2v3h-2V7z" />
                  </svg>
                  {e.name}
                </span>
                <div className="flex flex-col items-end">
                  <a
                    href={`tel:${e.phone}`}
                    className="text-teal-600 font-bold text-lg hover:underline"
                  >
                    {e.phone}
                  </a>
                  {e.email && (
                    <a
                      href={`mailto:${e.email}`}
                      className="text-teal-500 text-sm hover:underline"
                    >
                      {e.email}
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Divider */}
        <div className="w-full flex justify-center animate-fade-in">
          <div className="w-2/3 h-0.5 bg-gradient-to-r from-[#2ad2c9] via-[#38bdf8] to-[#5eead4] rounded-full opacity-40" />
        </div>

        {/* Embassy Contacts Section */}
        <section className="bg-white/90 p-8 rounded-3xl shadow-md border-l-8 border-blue-400 animate-fade-in-up card-hover">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              className="mr-3 h-7 w-7 text-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z" />
            </svg>
            Embassy Contacts
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {FALLBACK_EMBASSY_CONTACTS.map((embassy, idx) => (
              <li
                key={idx}
                className="bg-gray-50 rounded-xl px-5 py-4 flex flex-col gap-2 shadow-sm hover:bg-blue-50 transition border border-gray-100"
              >
                <div className="font-bold text-gray-800 text-lg flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12h2v2H9v-2zM9 8h2v3H9V8z" />
                  </svg>
                  {embassy.name}
                </div>
                <div className="text-gray-500 text-sm mb-1">
                  {embassy.address}
                </div>
                <div className="text-gray-500 text-sm">Hours: {embassy.hours}</div>
                <div className="flex flex-col gap-1 mt-1">
                  <a
                    href={`tel:${embassy.phone}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    {embassy.phone}
                  </a>
                  <a
                    href={`mailto:${embassy.email}`}
                    className="text-blue-500 text-sm hover:underline"
                  >
                    {embassy.email}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Divider */}
        <div className="w-full flex justify-center animate-fade-in">
          <div className="w-2/3 h-0.5 bg-gradient-to-r from-[#facc15] via-[#fde68a] to-[#fef9c3] rounded-full opacity-40" />
        </div>

        {/* Safety Concerns Section */}
        <section className="bg-yellow-50/90 p-8 rounded-3xl shadow-md border-l-8 border-yellow-400 animate-fade-in-up card-hover">
          <h2 className="text-2xl font-bold mb-6 flex items-center text-yellow-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              className="mr-3 h-7 w-7 text-yellow-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Safety Concerns
          </h2>
          <ul className="space-y-4">
            {safetyConcerns.map((tip, idx) => (
              <li
                key={idx}
                className="text-yellow-900 text-base flex items-start gap-3"
              >
                <svg
                  className="w-5 h-5 mt-1 text-yellow-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 11h2v2H9v-2zM9 7h2v3H9V7z" />
                </svg>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
