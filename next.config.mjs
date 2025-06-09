// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "is1-ssl.mzstatic.com",              // App Store icons
        "play-lh.googleusercontent.com",     // Play Store icons
        "play.google.com",                   // play store pages (if you ever fetch pages)
        "lh3.googleusercontent.com",         // another Google host you might hit
      ],
    },
    // ...any other Next.js settings you have
  };
  
  export default nextConfig;
  


