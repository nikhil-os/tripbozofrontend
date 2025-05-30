'use client';



import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaPlus, FaCheck, FaTimes, FaQrcode, FaGlobe, FaChevronDown } from 'react-icons/fa';

export default function CountryAppsPage({ countryCode, apps, countryInfo }) {
    const [selectedApps, setSelectedApps] = useState([]);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("ALL");
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

    // Filtered apps
    const filteredApps = apps.filter(app =>
        (activeCategory === 'ALL' || app.category === activeCategory) &&
        (app.name.toLowerCase().includes(search.toLowerCase()) || app.description.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <main className="min-h-screen bg-[#f7fafc] animate-fade-in">
            {/* Header Section */}
            <div className="relative w-full h-64 bg-gradient-to-b from-[#5eead4] via-[#38bdf8] to-[#f7fafc] flex flex-col justify-end rounded-b-3xl shadow-lg overflow-hidden animate-fade-in-up">
                {/* Decorative background image overlay */}
                <img src="/globe.svg" alt="globe" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-10 pointer-events-none select-none animate-fade-in" />
                <div className="max-w-6xl mx-auto flex items-end gap-8 px-8 pb-10 relative z-10">
                    {/* Glassmorphism card */}
                    <div className="flex items-center gap-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg px-8 py-6 border border-white/40 animate-slide-in-left">
                        <img src={`/Images/${countryCode.toLowerCase()}.png`} alt={countryCode} className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-lg bg-white" />
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <span className="text-5xl font-black text-white drop-shadow-lg tracking-tight">{countryInfo?.name}
                                    <sub className="align-sub text-lg text-[#0f766e] font-extrabold ml-2">({countryCode})</sub>
                                </span>
                            </div>
                            <div className="mt-1 text-white/90 text-lg font-medium max-w-2xl drop-shadow-sm">{countryInfo?.description || 'Explore the best travel apps for this country.'}</div>
                            <div className="mt-3 w-16 h-1 bg-gradient-to-r from-[#2ad2c9] to-[#38bdf8] rounded-full shadow" />
                        </div>
                    </div>
                </div>
                {/* Decorative accent bottom left */}
                <div className="absolute left-0 bottom-0 w-32 h-32 bg-gradient-to-tr from-[#2ad2c9] to-[#38bdf8] opacity-30 rounded-full blur-2xl -z-1 animate-bounce-slow" />
            </div>

            {/* Search & Filter Bar */}
            <div className="max-w-6xl mx-auto flex items-center gap-4 px-6 mt-[-32px] z-10 relative animate-fade-in-up">
                <div className="flex-1 flex items-center bg-white rounded-xl shadow border border-[#e0e0e0] px-4 h-14">
                    <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                    <input
                        type="text"
                        className="flex-1 bg-transparent outline-none text-gray-700 text-base placeholder-gray-400"
                        placeholder="Search apps..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <button className="flex items-center gap-2 px-5 h-14 rounded-xl border border-[#e0e0e0] bg-white text-gray-700 font-semibold shadow hover:bg-gray-50">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
                    Filter
                </button>
            </div>

            {/* Category Tabs */}
            <div className="max-w-6xl mx-auto flex gap-2 px-6 mt-6 mb-2 animate-fade-in-up">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-5 py-2 rounded-full font-semibold text-base transition-all ${activeCategory === category ? 'bg-[#e0ecec] text-[#222] shadow border border-[#d0e6e6]' : 'bg-[#f3f6f7] text-gray-500 border border-transparent'}`}
                    >
                        {category.charAt(0) + category.slice(1).toLowerCase()}
                    </button>
                ))}
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto flex gap-6 px-6 pb-12 animate-fade-in stagger-children">
                {/* Apps Grid */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                    {filteredApps.map((app) => (
                        <div
                            key={app.id}
                            className={`relative bg-white rounded-2xl border-2 p-6 flex gap-4 shadow-sm transition-all card-hover ${selectedApps.includes(app.id) ? 'border-[#2ad2c9] shadow-md' : app.sponsored ? 'border-[#ffe9b3] shadow-md' : 'border-[#e0e0e0]'}`}
                        >
                            <img src={app.icon || '/file.svg'} alt={app.name} className="w-14 h-14 rounded-lg object-cover bg-gray-100 border border-[#e0e0e0]" />
                            <div className="flex-1 min-w-0">
                                {/* App Card Header Row: Name, Sponsored, Plus Button */}
                                <div className="flex items-start justify-between gap-2 mb-1">
                                    <div className="flex items-center gap-2 min-w-0">
                                        <h2 className="text-xl text-[#222] truncate font-bold">{app.name}</h2>
                                        {app.sponsored && <span className="px-3 py-1 rounded-full bg-[#fff6d6] text-[#e6b800] text-xs font-semibold ml-1">Sponsored</span>}
                                    </div>
                                    <button
                                        onClick={() => toggleSelect(app.id)}
                                        className={`ml-2 w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all ${selectedApps.includes(app.id) ? 'bg-[#e6fcf7] border-[#2ad2c9] text-[#2ad2c9]' : app.sponsored ? 'bg-[#fffbe6] border-[#ffe9b3] text-[#e6b800]' : 'bg-white border-[#e0e0e0] text-[#2ad2c9]'} shadow`}
                                        title={selectedApps.includes(app.id) ? 'Remove from selection' : 'Add to selection'}
                                    >
                                        {selectedApps.includes(app.id) ? <FaCheck /> : <FaPlus />}
                                    </button>
                                </div>
                                <div className="text-gray-500 text-base mt-1 truncate">{app.description}</div>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-[#f7b500] text-lg">★</span>
                                    <span className="text-[#222] font-semibold text-base">{app.rating || '4.5'}</span>
                                    <span className="text-gray-400 text-base">{app.price ? `$${app.price}` : (app.premium ? 'Free / Premium' : 'Free')}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {app.ios && <span className="px-3 py-1 rounded-full border border-[#e0e0e0] text-xs font-semibold text-gray-700 bg-[#f7fafc]">iOS</span>}
                                    {app.android && <span className="px-3 py-1 rounded-full border border-[#e0e0e0] text-xs font-semibold text-gray-700 bg-[#f7fafc]">Android</span>}
                                    {app.web && <span className="px-3 py-1 rounded-full border border-[#e0e0e0] text-xs font-semibold text-gray-700 bg-[#f7fafc]">Web</span>}
                                    <span className="ml-auto text-xs text-gray-400 font-medium">{app.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sidebar for Selected Apps */}
                <div className="w-[340px] min-w-[320px] max-w-[360px] bg-white rounded-2xl shadow-md border border-[#e0e0e0] p-6 mt-2 animate-slide-in-left relative">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl  text-[#222]">Selected Apps <span className="text-[#2ad2c9]">({selectedApps.length})</span></h3>
                    </div>
                    <div className="space-y-3">
                        {selectedApps.length === 0 ? (
                            <div className="text-center py-8 text-gray-400 text-base">No apps selected yet</div>
                        ) : (
                            selectedApps.map((appId) => {
                                const app = apps.find((a) => a.id === appId);
                                return (
                                    <div key={app.id} className="flex items-center gap-3 bg-white border border-[#e0e0e0] rounded-xl px-3 py-2 shadow-sm">
                                        <img src={app.icon || '/file.svg'} alt={app.name} className="w-8 h-8 rounded object-cover bg-gray-100 border border-[#e0e0e0]" />
                                        <div className="flex-1 min-w-0">
                                            <div className="font-semibold text-[#222] truncate">{app.name}</div>
                                            <div className="text-xs text-gray-400 truncate">{app.category}</div>
                                        </div>
                                        <button
                                            className="ml-2 p-1 rounded-full hover:bg-[#ffeaea] hover:text-red-500 text-gray-400 transition"
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
                        className="mt-6 w-full py-3 rounded-xl font-semibold bg-white border border-[#e0e0e0] text-gray-500 hover:bg-[#f7fafc] transition btn-animated"
                        onClick={() => setSelectedApps([])}
                        disabled={selectedApps.length === 0}
                    >
                        Clear All
                    </button>
                    <button
                        disabled={selectedApps.length < 2}
                        onClick={handleGenerateQR}
                        className={`mt-3 w-full py-3 rounded-xl flex items-center justify-center gap-2 transition-all text-white text-lg btn-animated ${selectedApps.length >= 2 ? 'bg-[#2ad2c9] hover:bg-[#1bb3a7]' : 'bg-[#e0e0e0] text-gray-400 cursor-not-allowed'}`}
                    >
                        <FaQrcode className="mr-2" /> Generate QR Code
                    </button>
                    <button
                        className="mt-3 w-full py-3 rounded-xl flex items-center justify-center gap-2 transition-all text-white text-lg bg-[#38bdf8] hover:bg-[#0ea5e9] font-semibold shadow btn-animated"
                        onClick={() => router.push(`/country/${countryCode}/Essentials`)}
                    >
                        <FaGlobe className="mr-2" /> Essentials
                    </button>
                </div>
            </div>
        </main>
    );
}