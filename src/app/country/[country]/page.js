// src/app/country/[country]/page.js

import CountryAppsPage from '@/components/countryapp/CountryAppsPage';
import { fetchAppsByCountry } from '@/src/utils/api';
import { notFound } from "next/navigation";

export default async function CountryPage({ params }) {
  // "params" must be awaited before using its properties:
  const { country: rawCountry } = await params;
  const countryCode = String(rawCountry).toUpperCase();

  // Now fetch the apps for this country code
  const apps = await fetchAppsByCountry(countryCode);

  if (!apps.length) {
    // trigger next.js’s not-found.js
    return notFound();
  }


  // Create country info object with basic details
  const countryInfo = {
    name: countryCode === "AU" ? "Australia" :
          countryCode === "TH" ? "Thailand" :
          countryCode === "FR" ? "France" :
          countryCode === "IT" ? "Italy" :
          countryCode === "JP" ? "Japan" :
          countryCode === "US" ? "United States" :
          countryCode,
    shortDescription: 
          countryCode === "AU" ? "Discover Australia's vibrant cities, stunning beaches, and unique wildlife with the best travel apps." :
          countryCode === "IN" ? "Experience the colors, culture, and diversity of India—find the perfect apps for your journey." :
          countryCode === "FR" ? "Explore France's art, cuisine, and romance—your essential travel apps for every region." :
          countryCode === "IT" ? "Uncover Italy's history, food, and beauty—travel smarter with curated apps." :
          countryCode === "JP" ? "Navigate Japan's traditions and technology—apps to enhance your adventure." :
          countryCode === "US" ? "From coast to coast, discover the USA's wonders with top travel apps." :
          "Find the best travel apps for your next destination."
  };




   return (
       <CountryAppsPage
         countryCode={countryCode}
         apps={apps}
         countryInfo={countryInfo}
       />
     );
}
