// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useLoader } from '@/components/LoaderContext';
// import Script from 'next/script';

// export default function AboutPageClient() {
//   const { setShow } = useLoader();
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [submitted, setSubmitted] = useState(false);

//   const handleStartNow = () => {
//     setShow(true);
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: send form to your backend / email service
//     console.log("Feedback submitted:", form);
//     setSubmitted(true);
//   };

//   return (
//     <>
//       {/* Schema.org structured data */}
//       <Script
//         id="about-schema"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             name: "Trip Bozo",
//             url: "https://tripbozo.com",
//             logo: "https://tripbozo.com/logo.png",
//             description:
//               "Trip Bozo curates the perfect app bundle for every traveler's needs, no matter where your journey takes you.",
//             sameAs: [
//               "https://twitter.com/tripbozo",
//               "https://facebook.com/tripbozo",
//               "https://instagram.com/tripbozo",
//             ],
//             contactPoint: {
//               "@type": "ContactPoint",
//               email: "support@tripbozo.com",
//               contactType: "customer service",
//             },
//           }),
//         }}
//       />

//       <main className="bg-gradient-to-br from-[#e0f7fa] via-[#f5fafd] to-[#e3f2fd] text-gray-800 w-full min-h-screen">
//         {/* Hero Section */}
//         <section className="w-full bg-gradient-to-r from-[#38bdf8] via-[#2ad2c9] to-[#5eead4] text-white py-16 sm:py-24 px-4 sm:px-8 text-center relative overflow-hidden">
//           <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg tracking-tight animate-fade-in-up relative z-10">
// +            Your Essential<br className="hidden sm:block" /> Travel Companion
// +          </h1>
// +          <p className="text-xl sm:text-2xl max-w-2xl mx-auto mb-8 text-white/90 font-medium drop-shadow animate-fade-in-up delay-200 relative z-10">
// +            Trip Bozo curates the perfect app bundle for every traveler&apos;s needs, no matter where your journey takes you.
// +          </p>
//         </section>

//         {/* Mission Section */}
//         <section className="w-[85%] sm:w-[90%] mx-auto -mt-8 relative z-20">
//           <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
//             <div className="p-8 sm:p-12 flex-1 flex flex-col justify-center">
//               <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
//                 Our Mission
//               </h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 We believe that{" "}
//                 <span className="text-teal-600 font-semibold">
//                   technology should enhance your travel experience
//                 </span>
//                 , not complicate it. Our mission is to help travelers discover
//                 the essential digital tools they need for each unique
//                 destination, creating a more connected, prepared, and enriching
//                 journey.
//               </p>
//               <Link
//                 href="/"
//                 onClick={handleStartNow}
//                 className="self-start inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-full transition shadow-md"
//               >
//                 Start Exploring
//               </Link>
//             </div>
//             <div className="md:w-1/3 bg-gradient-to-br from-teal-50 to-blue-50 p-8 flex items-center justify-center">
//               <span className="text-7xl">🌍</span>
//             </div>
//           </div>
//         </section>

//         {/* Key Features (unchanged) */}
//         {/* … your existing Key Features code … */}

//         {/* Stats Section (unchanged) */}
//         {/* … your existing Stats code … */}

//         {/* Feedback Form Section (replaces CTA) */}
//         <section className="w-full bg-gradient-to-r from-[#2ad2c9] via-[#38bdf8] to-[#5eead4] text-white py-16 px-4 sm:px-8 relative overflow-hidden">
//           <div className="max-w-4xl mx-auto relative z-10 text-center">
//             <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 drop-shadow-lg">
//               We’d Love Your Feedback
//             </h2>
//             {submitted ? (
//               <p className="text-xl">Thank you for your feedback! 🙏</p>
//             ) : (
//               <form
//                 onSubmit={handleSubmit}
//                 className="grid gap-4 sm:grid-cols-2 bg-white p-8 rounded-2xl shadow-lg text-gray-800"
//               >
//                 <input
//                   type="text"
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                   required
//                   className="col-span-2 sm:col-span-1 px-4 py-2 rounded-lg border focus:outline-none"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="Your Email"
//                   required
//                   className="col-span-2 sm:col-span-1 px-4 py-2 rounded-lg border focus:outline-none"
//                 />
//                 <textarea
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   placeholder="Your Feedback…"
//                   rows={4}
//                   required
//                   className="col-span-2 px-4 py-2 rounded-lg border focus:outline-none"
//                 />
//                 <button
//                   type="submit"
//                   className="col-span-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-full transition shadow-md"
//                 >
//                   Send Feedback
//                 </button>
//               </form>
//             )}
//           </div>

//           {/* decorative blobs */}
//           <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>
//           <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>
//         </section>
//       </main>
//     </>
//   );
// }
