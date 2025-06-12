// src/components/ui/HeroSection.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { fetchAppsByCountry } from "@/src/utils/api";
import { useLoader } from "@/components/LoaderContext";

// Custom hook for scroll‐based animation
function useScrollReveal(ref, options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);
  return isVisible;
}

const heroImages = [
  "/IMG1.jpg",
  "/IMG2.avif",
  "/IMG3.jpg",
  "/IMG4.jpg",
  "/IMG5.jpg",
  "/IMG6.jpg",
  "/IMG7.avif",
  "/IMG8.webp",
  "/IMG9.jpg",
  "/IMG10.jpg",
  "/IMG11.jpg",
  "/IMG12.jpg",
];

const HeroSection = () => {
  const router = useRouter();
  const { setShow } = useLoader();

  // ――― Search Bar State & Handlers ―――
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setErrorMsg("");
  };

  const handleSearch = async () => {
    const trimmed = query.trim();
    if (!trimmed) {
      setErrorMsg("Please enter a country name or code.");
      return;
    }

    setLoading(true);
    setShow(true);
    setErrorMsg("");

    // We assume the user typed either a country ISO code (e.g. "FR" or "jp")
    // or a full country name. We'll just normalize to lowercase and try.
    const countryCode = trimmed.toLowerCase();

    // 1) Try fetching apps for that country code
    const apps = await fetchAppsByCountry(countryCode);
    setLoading(false);
    setShow(false);

    if (!apps.length) {
      // No apps returned => likely invalid country code (or no apps exist)
      setErrorMsg(`No travel apps found for "${trimmed}".`);
      return;
    }

    // 2) Redirect to /country/<countryCode>
    router.push(`/country/${countryCode}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  // ――― End Search Bar Logic ―――

  const [bgIndex, setBgIndex] = useState(0);
  const howItWorksRef = useRef(null);
  const popularDestRef = useRef(null);
  const ctaRef = useRef(null);

  const howItWorksVisible = useScrollReveal(howItWorksRef);
  const popularDestVisible = useScrollReveal(popularDestRef);
  const ctaVisible = useScrollReveal(ctaRef);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pb-16 scroll-smooth homepage-scroll">
      {/* Background slideshow with parallax effect */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Travel destination"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              bgIndex === idx ? "opacity-100 scale-105" : "opacity-0 scale-100"
            } z-0 will-change-transform`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              imageRendering: "auto",
              willChange: "opacity, transform",
              filter:
                bgIndex === idx
                  ? "contrast(1.12) saturate(1.12) brightness(0.97)"
                  : "blur(0px)",
            }}
            draggable={false}
            loading="eager"
            decoding="async"
          />
        ))}
        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
        {/* Fade‐out gradient at bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 md:h-48 pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 60%, #fff 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/50 to-white/30 z-20"></div>
      </div>

      <div className="container mx-auto relative z-30 flex flex-col items-center justify-center h-[70vh] px-4">
        <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
          {/* Content */}
          <div className="relative z-10 text-white w-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 animate-fade-in-up transition-all duration-700 leading-tight drop-shadow-xl">
              Discover the Perfect Apps for Your Journey
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl mb-12 animate-fade-in-up delay-200 transition-all duration-700 font-semibold drop-shadow-lg">
              Find essential travel apps curated for your destination
            </p>

            {/* ――― Search Bar Start ――― */}
            <div className="w-2/3 sm:w-full max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center bg-white rounded-lg shadow-xl border border-gray-200 overflow-visible group transition-all duration-300 hover:shadow-2xl py-2 px-2
              sm:py-2 sm:px-2
              md:py-2 md:px-2
              ">
              <div className="relative flex-grow w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6 sm:h-7 sm:w-7"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input
                  type="text"
                  aria-label="Search country"
                  placeholder="Eg. France or FR"
                  value={query}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  className="h-12 w-full pl-14 pr-4 rounded-lg text-gray-800 text-base font-medium placeholder-gray-400 focus:outline-none transition-all duration-300 group-hover:shadow-md group-hover:scale-105 bg-transparent
                    sm:h-14 sm:pl-16 sm:pr-6 sm:text-xl"
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={loading}
                className={`bg-teal-500 text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-teal-600 transition-all duration-300 whitespace-nowrap flex-shrink-0 min-w-fit mt-3 sm:mt-0 w-full sm:w-auto shadow-lg
                  sm:px-8 sm:py-4 sm:text-xl
                  ${loading ? "opacity-50 cursor-not-allowed" : "group-hover:scale-105 group-hover:shadow-xl"}
                `}
              >
                {loading ? "Searching…" : "Search"}
              </button>
            </div>

            {errorMsg && (
              <p className="mt-4 text-red-500 font-bold text-lg drop-shadow-lg">{errorMsg}</p>
            )}
            {/* ――― Search Bar End ――― */}
          </div>
        </div>
      </div>

      {/* Animated sections below Hero */}
      <div
        ref={howItWorksRef}
        className={`transition-all duration-1000 ease-out ${
          howItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* <HowItWorks /> or content here */}
      </div>
      <div
        ref={popularDestRef}
        className={`transition-all duration-1000 ease-out delay-200 ${
          popularDestVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        {/* <PopularDestinations /> or content here */}
      </div>
      <div
        ref={ctaRef}
        className={`transition-all duration-1000 ease-out delay-300 ${
          ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* <CallToAction /> or content here */}
      </div>
    </section>
  );
};

export default HeroSection;
