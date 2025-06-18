// src/app/country/[country]/page.jsx
import CountryAppsPage from "@/components/countryapp/CountryAppsPage";
import { fetchAppsByCountry, fetchCountryInfo } from "@/src/utils/api";
import { notFound } from "next/navigation";

export default async function CountryPage({ params }) {
  const countryCode = params.country.toUpperCase();

  // 1) Fetch country metadata
  const countryInfo = await fetchCountryInfo(countryCode);

  // 2) Fetch apps list
  const apps = await fetchAppsByCountry(countryCode);

  // 3) Fetch hero images (we call it here, passing countryCode)
  async function fetchCountryImages(code) {
    try {
      const res = await fetch(`/api/country/${code}`);
      if (!res.ok) {
        console.error("Country images API returned", res.status);
        return [];
      }
      return await res.json();
    } catch (err) {
      console.error("fetchCountryImages failed:", err);
      return [];
    }
  }
  const images = await fetchCountryImages(countryCode);

  // If no country or no apps, 404:
  if (!countryInfo.name || apps.length === 0) {
    return notFound();
  }

  return (
    <CountryAppsPage
      countryCode={countryInfo.code}
      countryInfo={countryInfo}
      apps={apps}
      heroImages={images}
    />
  );
}
