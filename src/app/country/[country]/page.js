// src/app/country/[country]/page.jsx
import CountryAppsPage from '@/components/countryapp/CountryAppsPage';
import { fetchAppsByCountry, fetchCountryInfo } from '@/src/utils/api';
import { notFound } from 'next/navigation';




export default async function CountryPage({ params }) {
  const countryCode = params.country.toUpperCase();

  // 1) Fetch country metadata
  const countryInfo = await fetchCountryInfo(countryCode);

  // 2) Fetch apps list
  const apps = await fetchAppsByCountry(countryCode);

  // If no apps *and* maybe no country name, treat as not found
  if (!countryInfo.name || apps.length === 0) {
    return notFound();
  }


  async function fetchCountryImages(code) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/country/${countryCode}/images/`);
      if (!res.ok) return [];
      return res.json();
    } catch {
      return [];
    }
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
