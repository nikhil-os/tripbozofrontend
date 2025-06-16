// src/components/ui/HeroSection.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { fetchAppsByCountry, searchCountries } from "@/src/utils/api";
import { useLoader } from "@/components/LoaderContext";
import Image from "next/image";

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

// Hero images with descriptive alt text for better SEO
const heroImages = [
  { src: "/IMG1.jpg", alt: "Beautiful beach destination for travelers" },
  { src: "/IMG2.avif", alt: "Scenic mountain landscape for adventure travelers" },
  { src: "/IMG3.jpg", alt: "Historic European city architecture" },
  { src: "/IMG4.jpg", alt: "Tropical island paradise destination" },
  { src: "/IMG5.jpg", alt: "Urban cityscape with iconic landmarks" },
  { src: "/IMG6.jpg", alt: "Cultural heritage site for tourists" },
  { src: "/IMG7.avif", alt: "Serene natural landscape for nature lovers" },
  { src: "/IMG8.webp", alt: "Remote wilderness destination for explorers" },
  { src: "/IMG9.jpg", alt: "Local cuisine and dining experience" },
  { src: "/IMG10.jpg", alt: "Family-friendly travel destination" },
  { src: "/IMG11.jpg", alt: "Ancient historical monument for history enthusiasts" },
  { src: "/IMG12.jpg", alt: "Breathtaking waterfall in exotic location" },
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
    // const countryCode = trimmed.toLowerCase();

  //   // 1) Try fetching apps for that country code
  //   const apps = await fetchAppsByCountry(countryCode);
  //   setLoading(false);
  //   setShow(false);

  //   if (!apps.length) {
  //     // No apps returned => likely invalid country code (or no apps exist)
  //     setErrorMsg(`No travel apps found for "${trimmed}".`);
  //     return;
  //   }

  //   // 2) Redirect to /country/<countryCode>
  //   router.push(`/country/${countryCode}`);
  // };

    // 1) search by name/code
    const results = await searchCountries(trimmed);
    setLoading(false);
    setShow(false);
  
    if (!results.length) {
      setErrorMsg(`No country found for "${trimmed}".`);
      return;
    }
  
    // pick the first match
    const countryCode = results[0].code.toLowerCase();
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pb-16 scroll-smooth homepage-scroll" id="hero-section">
      {/* Background slideshow with parallax effect */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, idx) => (
          <div 
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              bgIndex === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              className={`transition-transform duration-1000 ${
                bgIndex === idx ? "scale-105" : "scale-100"
            } z-0 will-change-transform`}
              fill
              sizes="100vw"
              priority={idx < 2}
            style={{
              objectFit: "cover",
                filter: bgIndex === idx ? "contrast(1.12) saturate(1.12) brightness(0.97)" : "blur(0px)",
            }}
            draggable={false}
          />
          </div>
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
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold mb-8 animate-fade-in-up transition-all duration-700 leading-tight drop-shadow-xl">
              Discover the Perfect Apps for Your Journey
            </h1>
            <p className="text-2xl sm:text-3xl md:text-2xl mb-12 animate-fade-in-up delay-200 transition-all duration-700 font-semibold drop-shadow-lg">
              Find essential travel apps curated for your destination
            </p>

            {/* ――― Search Bar Start ――― */}
            <div className="w-2/3 sm:w-full max-w-2xl mx-auto relative rounded-full sm:rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center w-full bg-white border border-gray-300 rounded-full sm:rounded-xl overflow-hidden p-1 sm:p-2">
                <div className="flex-grow flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                    className="ml-4 text-gray-500 h-5 w-5 sm:h-6 sm:w-6"
                    aria-hidden="true"
                >
                    <circle cx="14" cy="14" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input
                  type="text"
                  aria-label="Search country"
                    placeholder="Eg. France or FR"
                  value={query}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                    className="h-10 sm:h-12 w-full pl-3 pr-4 text-gray-800 text-base sm:text-lg font-medium placeholder-gray-400 focus:outline-none bg-transparent"
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={loading}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-1 sm:px-3 py-6 font-semibold text-sm sm:text-base h-10 sm:h-12 flex items-center justify-center transition-colors duration-300 rounded-full sm:rounded-xl w-[12%] min-w-[60px] mx-1 active:scale-95 active:shadow-inner transform transition-transform"
                  aria-label="Search for travel apps by country"
              >
                  {loading ? "..." : "Search"}
              </button>
              </div>
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
