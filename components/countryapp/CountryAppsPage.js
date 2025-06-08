'use client';



import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { FaPlus, FaCheck, FaTimes, FaQrcode, FaGlobe, FaChevronDown } from 'react-icons/fa';

export default function CountryAppsPage({ countryCode, apps, countryInfo }) {
    const [selectedApps, setSelectedApps] = useState([]);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("ALL");
    const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
    const [filterType, setFilterType] = useState(null); // 'topRated', 'paid', 'free' or null
    const router = useRouter();

    // Load selected apps from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem('selectedAppIds');
        if (stored) {
            setSelectedApps(JSON.parse(stored));
        }
    }, []);

    // Persist selected apps to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('selectedAppIds', JSON.stringify(selectedApps));
    }, [selectedApps]);

    const categories = [
        'ALL', 'Communication', 'Dining', 'Navigation', 'Finance', 'Safety', 'Accommodation'
    ];

    const toggleSelect = (appId) => {
        setSelectedApps((prev) =>
            prev.includes(appId)
                ? prev.filter((id) => id !== appId)
                : [...prev, appId]
        );
    };

    const handleGenerateQR = () => {
        const selectedAppIds = selectedApps.join(",");
        router.push(`/qr-bundle?apps=${selectedAppIds}`);
    };

    // Enhanced filtered apps logic
    const filteredApps = apps
        .filter(app =>
            (activeCategory === 'ALL' || app.category === activeCategory) &&
            (app.name.toLowerCase().includes(search.toLowerCase()) || app.description.toLowerCase().includes(search.toLowerCase()))
        )
        .filter(app => {
            if (filterType === 'paid') return !!app.price && app.price > 0;
            if (filterType === 'free') return !app.price || app.price === 0;
            return true;
        })
        .sort((a, b) => {
            if (filterType === 'topRated') return (b.rating || 0) - (a.rating || 0);
            return 0;
        });

    // Country image slideshow logic
    const countryImageFolder = countryCode && countryCode.length === 2 ? countryCode.toUpperCase() : countryCode;
    const countryImages = useMemo(() => {
        // Only use IMG01-IMG10 with .jpg and .avif extensions (UPPERCASE, inside /public/{countryCode}/)
        let images = [];
        for (let i = 1; i <= 10; i++) {
            let num = i.toString().padStart(2, '0');
            images.push(`/${countryImageFolder}/IMG${num}.jpg`);
            
        }
        return images;
    }, [countryImageFolder]);

    // Track which image is currently active
    const [activeImageIdx, setActiveImageIdx] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImageIdx(idx => (idx + 1) % 10);
        }, 4000);
        return () => clearInterval(interval);
    }, [countryImageFolder]);

    return (
        <main className="min-h-screen bg-[#f7fafc] animate-fade-in">
            {/* Header Section with animated country images */}
            <div className="relative w-full h-[340px] bg-gradient-to-b from-[#7b8794] to-[#f7fafc] flex flex-col justify-center rounded-b-3xl shadow-lg overflow-hidden animate-fade-in-up">
              {/* Animated country images as background */}
              <div className="absolute inset-0 w-full h-full z-0">
                {countryImages.map((img, i) => (
                  <img
                    key={img}
                    src={img}
                    alt="country bg"
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${i === activeImageIdx ? 'opacity-40' : 'opacity-0'}`}
                    style={{
                      pointerEvents: 'none',
                      zIndex: 0,
                      transition: 'opacity 1s',
                      imageRendering: 'auto', // Use browser default for best quality
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                ))}
                {/* Gradient overlay for left-to-right fade */}
                <div className="absolute inset-0 w-full h-full" style={{
                  background: 'linear-gradient(90deg, rgba(20,20,20,0.55) 0%, rgba(20,20,20,0.25) 40%, rgba(20,20,20,0.05) 70%, rgba(20,20,20,0) 100%)',
                  zIndex: 1
                }} />
              </div>
              <div className="relative w-[92vw] max-w-[1920px] mx-auto px-14 flex flex-col justify-center h-full z-10">
                <div className="flex items-center gap-6 mb-2 mt-8">
                  <span className="text-4xl font-bold text-white/80">{countryCode}</span>
                  <span className="text-6xl font-black text-white ml-3 drop-shadow-lg">
                    {countryInfo && countryInfo.name
                      ? countryInfo.name
                      : countryCode === 'AU' ? 'Australia'
                      : countryCode === 'TH' ? 'Thailand'
                      : countryCode === 'FR' ? 'France'
                      : countryCode === 'IT' ? 'Italy'
                      : countryCode === 'JP' ? 'Japan'
                      : countryCode === 'US' ? 'United States'
                      : countryCode}
                  </span>
                </div>
                <p className="text-2xl max-w-4xl text-white/90 font-normal mb-4 mt-1 drop-shadow">
                  {countryInfo?.shortDescription ||
                    (countryCode === 'AU' ? 'Discover Australia’s vibrant cities, stunning beaches, and unique wildlife with the best travel apps.' :
                    countryCode === 'IN' ? 'Experience the colors, culture, and diversity of India—find the perfect apps for your journey.' :
                    countryCode === 'FR' ? 'Explore France’s art, cuisine, and romance—your essential travel apps for every region.' :
                    countryCode === 'IT' ? 'Uncover Italy’s history, food, and beauty—travel smarter with curated apps.' :
                    countryCode === 'JP' ? 'Navigate Japan’s traditions and technology—apps to enhance your adventure.' :
                    countryCode === 'USA' ? 'From coast to coast, discover the USA’s wonders with top travel apps.' :
                    'Find the best travel apps for your next destination.')}
                </p>
                <div className="h-1 w-28 bg-[#2ad2c9] rounded" style={{ width: '7rem' }}></div>
              </div>
            </div>

            {/* Search & Filter Bar */}
            <div className="w-[92vw] max-w-[1920px] mx-auto flex items-center gap-6 px-14 mt-[-32px] z-10 relative animate-fade-in-up">
                <div className="flex-1 flex items-center bg-white rounded-2xl shadow border border-[#e0e0e0] px-6 h-16">
                    <svg className="w-6 h-6 text-gray-400 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                    <input
                        type="text"
                        className="flex-1 bg-transparent outline-none text-gray-700 text-lg placeholder-gray-400"
                        placeholder="Search apps..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <div className="relative">
                  <button
                    className="flex items-center gap-2 px-7 h-16 rounded-2xl border border-[#e0e0e0] bg-white text-gray-700 font-semibold shadow hover:bg-gray-50 text-lg focus:outline-none"
                    onClick={() => setFilterDropdownOpen(v => !v)}
                    type="button"
                  >
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
                    Filter
                    <FaChevronDown className={`ml-2 transition-transform ${filterDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {filterDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-[#e0e0e0] rounded-xl shadow-lg z-20 animate-fade-in-up">
                      <button
                        className={`w-full text-left px-5 py-3 hover:bg-[#f3f6f7] text-gray-700 font-medium rounded-t-xl ${filterType === 'topRated' ? 'bg-[#e0ecec] text-[#2ad2c9]' : ''}`}
                        onClick={() => { setFilterType('topRated'); setFilterDropdownOpen(false); }}
                      >
                        Top Rated
                      </button>
                      <button
                        className={`w-full text-left px-5 py-3 hover:bg-[#f3f6f7] text-gray-700 font-medium ${filterType === 'paid' ? 'bg-[#e0ecec] text-[#2ad2c9]' : ''}`}
                        onClick={() => { setFilterType('paid'); setFilterDropdownOpen(false); }}
                      >
                        Paid
                      </button>
                      <button
                        className={`w-full text-left px-5 py-3 hover:bg-[#f3f6f7] text-gray-700 font-medium rounded-b-xl ${filterType === 'free' ? 'bg-[#e0ecec] text-[#2ad2c9]' : ''}`}
                        onClick={() => { setFilterType('free'); setFilterDropdownOpen(false); }}
                      >
                        Free
                      </button>
                      <button
                        className="w-full text-left px-5 py-2 text-gray-400 hover:bg-[#f3f6f7] font-normal rounded-b-xl border-t border-[#e0e0e0]"
                        onClick={() => { setFilterType(null); setFilterDropdownOpen(false); }}
                      >
                        Clear Filter
                      </button>
                    </div>
                  )}
                </div>
            </div>

            {/* Category Tabs */}
            <div className="w-[92vw] max-w-[1920px] mx-auto flex gap-3 px-14 mt-8 mb-3 animate-fade-in-up">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-7 py-3 rounded-full font-semibold text-lg transition-all ${activeCategory === category ? 'bg-[#e0ecec] text-[#222] shadow border border-[#d0e6e6]' : 'bg-[#f3f6f7] text-gray-500 border border-transparent'}`}
                    >
                        {category.charAt(0) + category.slice(1).toLowerCase()}
                    </button>
                ))}
            </div>

            {/* Main Content */}
            <div className="w-[92vw] max-w-[1920px] mx-auto flex gap-8 px-14 pb-16 animate-fade-in stagger-children">
                {/* Apps Grid */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 mt-2">
                    {filteredApps.map((app) => (
                        <div
                            key={app.id}
                            className={`relative bg-white rounded-3xl border-2 p-6 flex gap-6 shadow-md transition-all card-hover ${selectedApps.includes(app.id) ? 'border-[#2ad2c9] shadow-lg' : app.sponsored ? 'border-[#ffe9b3] shadow-lg' : 'border-[#e0e0e0]'} min-h-[160px] md:min-h-[180px]`}
                            style={{ minWidth: 0 }}
                        >
                            <img src={app.icon || '/file.svg'} alt={app.name} className="w-16 h-16 rounded-xl object-cover bg-gray-100 border border-[#e0e0e0]" />
                            <div className="flex-1 min-w-0 flex flex-col justify-between">
                                {/* App Card Header Row: Name, Sponsored, Plus Button */}
                                <div className="flex items-start justify-between gap-3 mb-1">
                                    <div className="flex items-center gap-2 min-w-0">
                                        <h2 className="text-lg text-[#222] font-bold whitespace-normal break-words leading-tight" style={{wordBreak:'break-word'}}>{app.name}</h2>
                                        {app.sponsored && <span className="px-2 py-0.5 rounded-full bg-[#fff6d6] text-[#e6b800] text-xs font-semibold ml-1">Sponsored</span>}
                                    </div>
                                    <button
                                        onClick={() => toggleSelect(app.id)}
                                        className={`ml-2 w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all ${selectedApps.includes(app.id) ? 'bg-[#e6fcf7] border-[#2ad2c9] text-[#2ad2c9]' : app.sponsored ? 'bg-[#fffbe6] border-[#ffe9b3] text-[#e6b800]' : 'bg-white border-[#e0e0e0] text-[#2ad2c9]'} shadow`}
                                        title={selectedApps.includes(app.id) ? 'Remove from selection' : 'Add to selection'}
                                    >
                                        {selectedApps.includes(app.id) ? <FaCheck /> : <FaPlus />}
                                    </button>
                                </div>
                                <div className="text-gray-500 text-sm mt-0.5 truncate">{app.description}</div>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-[#f7b500] text-base">★</span>
                                    <span className="text-[#222] font-semibold text-sm">{app.rating || '4.5'}</span>
                                    <span className="text-gray-400 text-sm">{app.price ? `$${app.price}` : (app.premium ? 'Free / Premium' : 'Free')}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {app.ios && <span className="px-2 py-0.5 rounded-full border border-[#e0e0e0] text-xs font-semibold text-gray-700 bg-[#f7fafc]">iOS</span>}
                                    {app.android && <span className="px-2 py-0.5 rounded-full border border-[#e0e0e0] text-xs font-semibold text-gray-700 bg-[#f7fafc]">Android</span>}
                                    {app.web && <span className="px-2 py-0.5 rounded-full border border-[#e0e0e0] text-xs font-semibold text-gray-700 bg-[#f7fafc]">Web</span>}
                                    <span className="ml-auto text-xs text-gray-400 font-medium">{app.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sidebar for Selected Apps */}
                <div className="w-[320px] min-w-[260px] max-w-[340px] bg-white rounded-3xl shadow-lg border border-[#e0e0e0] p-6 mt-2 animate-slide-in-left relative flex-shrink-0">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl  text-[#222]">Selected Apps <span className="text-[#2ad2c9]">({selectedApps.length})</span></h3>
                    </div>
                    <div className="space-y-4">
                        {selectedApps.length === 0 ? (
                            <div className="text-center py-12 text-gray-400 text-lg">No apps selected yet</div>
                        ) : (
                            selectedApps.map((appId) => {
                                const app = apps.find((a) => a.id === appId);
                                return (
                                    <div key={app.id} className="flex items-center gap-4 bg-white border border-[#e0e0e0] rounded-xl px-4 py-3 shadow-sm">
                                        <img src={app.icon || '/file.svg'} alt={app.name} className="w-10 h-10 rounded object-cover bg-gray-100 border border-[#e0e0e0]" />
                                        <div className="flex-1 min-w-0">
                                            <div className="font-semibold text-[#222] truncate">{app.name}</div>
                                            <div className="text-sm text-gray-400 truncate">{app.category}</div>
                                        </div>
                                        <button
                                            className="ml-2 p-2 rounded-full hover:bg-[#ffeaea] hover:text-red-500 text-gray-400 transition"
                                            title="Remove"
                                            onClick={() => setSelectedApps(selectedApps.filter(id => id !== app.id))}
                                        >
                                            <FaTimes />
                                        </button>
                                    </div>
                                );
                            })
                        )}
                    </div>
                    <button
                        type="button"
                        className="mt-8 w-full py-4 rounded-xl font-semibold bg-red-100 text-red-600 border border-[#e0e0e0] transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 hover:bg-red-500 hover:text-white text-lg"
                        onClick={() => setSelectedApps([])}
                        disabled={selectedApps.length === 0}
                        style={{ backgroundColor: selectedApps.length === 0 ? '' : undefined, color: selectedApps.length === 0 ? '' : undefined }}
                    >
                        Clear All
                    </button>
                    <button
                        disabled={selectedApps.length < 2}
                        onClick={handleGenerateQR}
                        className={`mt-4 w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-all text-white text-xl btn-animated ${selectedApps.length >= 2 ? 'bg-[#2ad2c9] hover:bg-[#1bb3a7]' : 'bg-[#e0e0e0] text-gray-400 cursor-not-allowed'}`}
                    >
                        <FaQrcode className="mr-2" /> Generate QR Code
                    </button>
                    <button
                        className="mt-4 w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-all text-white text-xl bg-[#38bdf8] hover:bg-[#0ea5e9] font-semibold shadow btn-animated"
                        onClick={() => router.push(`/country/${countryCode}/Essentials`)}
                    >
                        <FaGlobe className="mr-2" /> Essentials
                    </button>
                </div>
            </div>
        </main>
    );
}