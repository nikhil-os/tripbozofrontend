/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "is1-ssl.mzstatic.com",              // App Store icons
        "play-lh.googleusercontent.com",     // Play Store icons
        "play.google.com",                   // play store pages (if you ever fetch pages)
        "lh3.googleusercontent.com",         // another Google host you might hit
        "source.unsplash.com",           // Unsplash Source API
      ],
    },
    // Automatically copy logo.png to favicon.ico on build if it doesn't exist
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Only run in the server build
      if (isServer) {
        const fs = require('fs');
        const path = require('path');
        
        // Check if favicon.ico exists, if not, use logo.png
        const faviconPath = path.join(__dirname, 'public', 'favicon.ico');
        const logoPath = path.join(__dirname, 'public', 'logo.png');
        
        // If favicon doesn't exist but logo does, use logo as favicon
        if (!fs.existsSync(faviconPath) && fs.existsSync(logoPath)) {
          console.log('Creating favicon.ico from logo.png (favicon not required but helpful for browsers)');
          // We can't actually convert here, but we can at least copy the file
          // For production, you should create a proper favicon.ico
          try {
            fs.copyFileSync(logoPath, faviconPath);
          } catch (e) {
            console.log('Failed to copy logo to favicon, not critical:', e.message);
          }
        }
      }
      
      return config;
    },
    // Generate the app icon files if they don't exist at build time
    // This is just a placeholder, as we're using static files in public/icons
  };
  
  module.exports = nextConfig; 