import React from 'react';

const Footer = () => {
    return (
        <footer
            className="bg-gray-800 text-white rounded-3xl shadow-xl border-4 border-teal-200 mx-auto my-12 flex flex-col justify-between"
            style={{ width: 1496, height: 252.8, padding: 0 }}
        >
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pt-8">
                {/* TravelBuddy Logo and Description */}
                <div>
                    <div className="flex items-center mb-4">
                        <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" stroke="#00C4B4"/>
                            <path d="M12 2a15 15 0 0 0 0 20 15 15 0 0 0 0-20" stroke="#00C4B4"/>
                        </svg>
                        <span className="text-xl font-bold">Trip Bozo</span>
                    </div>
                    <p className="text-sm mb-4">Your essential companion for seamless travel experiences worldwide.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 3.58 8.06 8.14 9.5v-6.7H7.76v-2.8h2.42V9.82c0-2.4 1.46-3.7 3.6-3.7.72 0 1.44.04 2.16.12v2.5h-1.2c-1.18 0-1.4.56-1.4 1.38v1.8h2.8l-.36 2.8h-2.44v6.7c4.56-1.44 8.14-5.1 8.14-9.5 0-5.5-4.46-9.96-9.96-9.96z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16.98 0H7.02C3.14 0 0 3.14 0 7.02v9.96C0 20.86 3.14 24 7.02 24h9.96c3.88 0 7.02-3.14 7.02-7.02V7.02C24 3.14 20.86 0 16.98 0zM20 9.6h-2.64c.36-.84.6-1.8.6-2.76 0-3.12-2.52-5.64-5.64-5.64-2.28 0-4.2 1.32-5.04 3.36H4.8v2.4h2.4v9.6h2.4v-9.6h2.4l.36-2.4h-2.76c.48-1.2 1.68-2.04 3-2.04 1.68 0 3.12 1.44 3.12 3.12 0 .96-.36 1.92-.96 2.64H20V9.6z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Onboarding</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Travel Essentials</a></li>
                    </ul>
                </div>

                {/* Popular Destinations */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">POPULAR DESTINATIONS</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Japan JP</a></li>
                        <li><a href="#" className="hover:underline">France FR</a></li>
                        <li><a href="#" className="hover:underline">United States US</a></li>
                        <li><a href="#" className="hover:underline">Thailand TH</a></li>
                    </ul>
                </div>

                {/* Newsletter Subscription */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">STAY UPDATED</h3>
                    <p className="text-sm mb-4">Subscribe to our newsletter for travel tips and app recommendations.</p>
                    <div className="flex">
                        <input type="email" placeholder="Your email" className="w-full p-2 rounded-l-md text-black focus:outline-none"/>
                        <button className="bg-teal-500 text-white px-4 py-2 rounded-r-md hover:bg-teal-600">Subscribe</button>
                    </div>
                </div>
            </div>

            {/* Copyright and Legal Links */}
            <div className="container mx-auto px-4 mt-4 flex justify-between items-center border-t border-gray-700 pt-2 text-sm">
                <p>© 2025 TRAVELBUDDY. ALL RIGHTS RESERVED.</p>
                <div className="space-x-4">
                    <a href="#" className="hover:underline">PRIVACY POLICY</a>
                    <span>•</span>
                    <a href="#" className="hover:underline">TERMS OF SERVICE</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;