// app/country/[country]/page.jsx
import CountryAppsPage from "@/components/countryapp/CountryAppsPage";
import { fetchAppsByCountry, fetchCountryInfo } from "@/src/utils/api";
import { notFound } from "next/navigation";

async function fetchCountryImages(code) {
  const res = await fetch(`/api/country/${countryCode}/images`);
  if (!res.ok) return [];
  return res.json();
}

export default async function CountryPage({ params }) {
  const countryCode = params.country.toUpperCase();

  const [countryInfo, apps, images] = await Promise.all([
    fetchCountryInfo(countryCode),
    fetchAppsByCountry(countryCode),
    fetchCountryImages(countryCode),
  ]);

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
