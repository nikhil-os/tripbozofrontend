"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useLoader } from "@/components/LoaderContext";

import NextImage from "next/image";
import {
  FaPlus,
  FaCheck,
  FaTimes,
  FaQrcode,
  FaGlobe,
  FaCaretDown, // Added for dropdown icon
} from "react-icons/fa";
import { initSession, saveSelectedApps } from "@/src/utils/api";

export default function CountryAppsPage({ countryCode, apps, countryInfo }) {
  const router = useRouter();
  const { setShow } = useLoader();
  const storageKey = `selectedAppIds_${countryCode}`;
  const [selectedApps, setSelectedApps] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(selectedApps));
  }, [selectedApps, storageKey]);

  const clearAll = () => {
    setSelectedApps([]);
    localStorage.removeItem(storageKey);
  };

  // Search + category + filter
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [filterType, setFilterType] = useState("ALL");
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State for filter dropdown

   // 1) Dynamically derive the list of categories from your apps:
   const categories = useMemo(() => {
     const cats = new Set(apps.map((a) => a.category || "Uncategorized"));
     return ["ALL", ...Array.from(cats)];
   }, [apps]);

  const filterOptions = [
    { value: "ALL", label: "All Filters" },
    { value: "FREE", label: "Free Apps" },
    { value: "PAID", label: "Paid Apps" },
    { value: "TOP_RATED", label: "Top Rated" },
  ];

  const toggleSelect = (appId) => {
    setSelectedApps((prev) =>
      prev.includes(appId)
        ? prev.filter((id) => id !== appId)
        : [...prev, appId]
    );
  };

  const handleGenerateQR = async () => {
    if (!selectedApps.length) {
      alert("Please select at least one app.");
      return;
    }
    
    setShow(true); // Show loader before navigation
    
    let sid = localStorage.getItem("sessionId") || (await initSession());
    if (!sid) {
      setShow(false);
      return alert("Could not initialize session.");
    }
    
    const { session_id } = await saveSelectedApps(selectedApps);
    sid = session_id || sid;
    localStorage.setItem("sessionId", sid);
    
    router.push(`/qr-bundle?country=${countryCode}`);
    // Loader will be hidden by LoaderRouteListener
  };

  const handleEssentialsClick = () => {
    setShow(true); // Show loader before navigation
    router.push(`/country/${countryCode}/Essentials`);
    // Loader will be hidden by LoaderRouteListener
  };

  const filteredApps = apps
    .filter(
      (app) =>
        (activeCategory === "ALL" || (app.category || "Uncategorized") === activeCategory) &&
        (app.name.toLowerCase().includes(search.toLowerCase()) ||
          (app.description || "")
            .toLowerCase()
            .includes(search.toLowerCase()))
    )
    .filter((app) => {
      if (filterType === "FREE") return !app.price || app.price === 0;
      if (filterType === "PAID") return app.price && app.price > 0;
      return true;
    })
    .sort((a, b) => {
      if (filterType === "TOP_RATED") {
        return (b.rating || 0) - (a.rating || 0);
      }
      return 0;
    });

  // Generate background gradients based on country code
  const getCountryGradient = (code) => {
    // Map country codes to color schemes
    const colorMap = {
      AU: ['#00843D', '#FFCD00'], // Australia: green and gold
      TH: ['#FF0000', '#FFFFFF', '#0038B8'], // Thailand: red, white, blue
      FR: ['#0055A4', '#FFFFFF', '#EF4135'], // France: blue, white, red
      IT: ['#008C45', '#F4F5F0', '#CD212A'], // Italy: green, white, red
      JP: ['#FFFFFF', '#BC002D'], // Japan: white and red
      US: ['#3C3B6E', '#FFFFFF', '#B22234'], // USA: blue, white, red
      IN: ['#FF9933', '#FFFFFF', '#138808'], // India: saffron, white, green
      // Default colors for other countries
      DEFAULT: ['#7b8794', '#f7fafc']
    };
    
    const colors = colorMap[code] || colorMap.DEFAULT;
    
    if (colors.length === 2) {
      return `linear-gradient(to bottom, ${colors[0]}, ${colors[1]})`;
    } else if (colors.length === 3) {
      return `linear-gradient(to bottom, ${colors[0]} 33%, ${colors[1]} 33%, ${colors[1]} 66%, ${colors[2]} 66%)`;
    }
    
    return `linear-gradient(to bottom, ${colors[0]}, #f7fafc)`;
  };
  
  const [activeBackgroundIndex, setActiveBackgroundIndex] = useState(0);
  const countryGradient = getCountryGradient(countryCode);
  
  useEffect(() => {
    const iv = setInterval(
      () => setActiveBackgroundIndex((i) => (i + 1) % 3),
      4000
    );
    return () => clearInterval(iv);
  }, []);

  return (
    <main className="bg-[#f7fafc] animate-fade-in">
     {/* Header Section */}
     <div className="relative w-full h-[340px] bg-gradient-to-b from-[#7b8794] to-[#f7fafc] flex flex-col justify-center rounded-b-3xl shadow-lg overflow-hidden animate-fade-in-up">
        <div className="absolute inset-0 w-full h-full z-0">
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: countryGradient,
              zIndex: 0,
            }}
          />
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(20,20,20,0.55) 0%, rgba(20,20,20,0.25) 40%, rgba(20,20,20,0.05) 70%, rgba(20,20,20,0) 100%)",
              zIndex: 1,
            }}
          />
        </div>
        <div className="relative w-[92vw] max-w-[1920px] mx-auto px-14 flex flex-col justify-center h-full z-10">
                 {/* ✅ Dynamically show code, name and description from `countryInfo` */}
         <div className="flex items-center gap-6 mb-2 mt-8">
           <span className="text-4xl font-bold text-white/80">
             {countryInfo.code}
           </span>
           <span className="text-6xl font-black text-white ml-3 drop-shadow-lg">
             {countryInfo.name}
           </span>
         </div>
         <p className="text-2xl max-w-4xl text-white/90 font-normal mb-4 mt-1 drop-shadow">
           {countryInfo.description}
         </p>
          <div
            className="h-1 w-28 bg-[#2ad2c9] rounded"
            style={{ width: "7rem" }}
          ></div>
        </div>
      </div>
      {/* Search & Filter (overlapping hero) */}
      <div className="relative z-20 -mt-8 w-full max-w-[1920px] mx-auto px-2 sm:px-6 md:px-14">
        <div className="flex flex-row gap-3 items-center justify-between">
          {/* Search Input */}
          <div className="flex-1 flex items-center h-12 sm:h-16 px-3 sm:px-6 bg-white rounded-xl sm:rounded-2xl shadow-md border border-[#e0e0e0] focus-within:ring-2 focus-within:ring-[#2ad2c9] transition min-w-[180px] sm:min-w-[300px]">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mr-2 sm:mr-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search apps..."
              className="flex-1 text-gray-800 text-base sm:text-lg bg-transparent focus:outline-none placeholder-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative h-12 sm:h-16 w-32 sm:w-36">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="h-full w-full rounded-xl sm:rounded-2xl border border-gray-300 bg-white px-3 sm:px-4 flex items-center justify-between text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-[#2ad2c9] transition"
            >
              {filterOptions.find((opt) => opt.value === filterType)?.label}
              <FaCaretDown className={`ml-2 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
            {isFilterOpen && (
              <div className="absolute top-full right-0 mt-1 w-full bg-white rounded-xl shadow-lg border border-gray-300 py-2 z-30">
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setFilterType(option.value);
                      setIsFilterOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 text-gray-700  hover:bg-gray-100 ${
                      filterType === option.value ? 'font-bold bg-gray-50' : ''
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 sm:gap-3 px-0 mt-5 mb-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-7 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all ${
                activeCategory === cat
                  ? "bg-[#e0ecec] text-[#222] shadow border border-[#d0e6e6]"
                  : "bg-[#f3f6f7] text-gray-500 border border-transparent hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <br />

      {/* Main content with apps grid and sidebar */}
      <div className="w-full max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-8 px-2 sm:px-6 md:px-14 pb-16">
        {/* Left: Apps Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-stretch">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="relative w-[75%] mx-auto sm:w-full h-[220px] sm:h-[240px] bg-white rounded-2xl sm:rounded-3xl border border-[#e0e0e0] p-4 sm:p-5 flex flex-col justify-between shadow-md transition-all"
            >
              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                {/* Header row: name + sponsored + select */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    {/* Icon */}
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gray-100 border border-[#e0e0e0] flex-shrink-0 overflow-hidden">
                      <NextImage
                        src={app.icon_url || "/file.svg"}
                        alt={app.name || "App icon"}
                        fill
                        sizes="(max-width: 640px) 48px, 64px"
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-[#222] truncate">
                      {app.name}
                    </h2>
                    {app.is_sponsored && (
                      <span className="px-2 py-0.5 rounded-full bg-[#fff6d6] text-[#e6b800] text-xs font-semibold whitespace-nowrap">
                        Sponsored
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => toggleSelect(app.id)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all ${
                      selectedApps.includes(app.id)
                        ? "bg-[#e6fcf7] border-[#2ad2c9] text-[#2ad2c9]"
                        : app.is_sponsored
                        ? "bg-[#fffbe6] border-[#ffe9b3] text-[#e6b800]"
                        : "bg-white border-[#e0e0e0] text-[#2ad2c9]"
                    }`}
                  >
                    {selectedApps.includes(app.id) ? <FaCheck /> : <FaPlus />}
                  </button>
                </div>
                {/* Description row (2 lines max) */}
                <p
                  className="text-gray-700 text-xs sm:text-sm mb-3"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {app.description || "No description available."}
                </p>
                {/* Bottom row: rating on left; category + platforms grouped bottom‑right */}
                <div className="mt-3 flex items-center justify-between w-full">
                  {/* Rating & Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-[#f7b500] text-base sm:text-lg">★</span>
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">
                      {app.rating || "4.5"}
                    </span>
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold ${
                        app.price ? "bg-gray-200 text-gray-800" : "bg-green-100 text-green-800"
                      }`}
                    >
                      {app.price ? "Paid" : "Free"}
                    </span>
                  </div>
                  {/* Category  Platforms */}
                  <div className="flex items-center gap-2">
                    {/* Category pill */}
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                      {app.category || "Uncategorized"}
                    </span>
                    {/* Platform pills */}
                {/* Android pill */}
                  {app.android_link && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      Android
                    </span>
                  )}

                  {/* iOS pill */}
                  {app.ios_link && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-200 text-gray-800">
                      iOS
                    </span>
                  )}
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Selected Apps Sidebar */}
        <div className="lg:w-[350px] bg-white rounded-2xl shadow-md border border-gray-200 p-6 h-fit sticky top-24">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Selected Apps ({selectedApps.length})</h2>
          
        {selectedApps.length === 0 ? (
         <div className="text-center py-8">
           <p className="text-gray-800 mb-2 font-medium">No apps selected yet</p>
           <p className="text-gray-600 text-sm">
             Pick some apps on the left to build your bundle.
           </p>
         </div>
       ) : (
         <div className="space-y-4 mb-6">
           {selectedApps.map(appId => {
             const app = apps.find(a => a.id === appId);
             return app ? (
               <div
                 key={app.id}
                 className="flex items-center gap-3 p-3 bg-gray-100 rounded-xl"
               >
                 <div className="w-10 h-10 relative flex-shrink-0">
                   <NextImage
                     src={app.icon_url || "/file.svg"}
                     alt={app.name}
                     fill
                     className="object-cover rounded-lg"
                   />
                 </div>
                 <span className="flex-1 text-gray-900 font-medium">
                   {app.name}
                 </span>
                 <button
                   onClick={() => toggleSelect(app.id)}
                   className="text-red-500 hover:text-red-700"
                   aria-label={`Remove ${app.name}`}
                 >
                   <FaTimes />
                 </button>
               </div>
             ) : null;
           })}
         </div>
       )}

          {/* Buttons group at bottom */}
        <div className="flex flex-col gap-3 mt-6">
          <button
            onClick={handleGenerateQR}
            disabled={!selectedApps.length}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition ${
              selectedApps.length
                ? "bg-teal-400 hover:bg-teal-500 shadow-lg"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <FaQrcode className="text-lg" />
            Generate QR Code
          </button>

          <button
            onClick={handleEssentialsClick}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-300 hover:bg-blue-400 text-blue-900 font-semibold shadow-lg transition"
          >
            <FaGlobe className="text-lg" />
            Essentials
          </button>

          <button
            onClick={clearAll}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-300 hover:bg-red-400 text-red-900 font-semibold shadow-lg transition"
          >
            Clear All
          </button>

          {selectedApps.length > 0 && (
            <p className="text-xs text-center text-gray-500 mt-1">
              Select at least 2 apps to generate a QR code
            </p>
          )}
        </div>
        </div>
      </div>
    </main>
  );
}