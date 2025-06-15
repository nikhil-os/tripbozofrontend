// src/app/country/[country]/page.js

import { redirect } from 'next/navigation';
import CountryAppsPage from '@/components/countryapp/CountryAppsPage';
import { fetchAppsByCountry } from '@/src/utils/api';

export default async function CountryPage({ params }) {
  // "params" must be awaited before using its properties:
  const { country: rawCountry } = await params;
  const countryCode = String(rawCountry).toUpperCase();

  // Now fetch the apps for this country code
  const apps = await fetchAppsByCountry(countryCode);

  // If no apps found, redirect to the country-not-found page
  if (!apps || apps.length === 0) {
    redirect(`/country-not-found?q=${encodeURIComponent(rawCountry)}`);
  }

  return <CountryAppsPage countryCode={countryCode} apps={apps} />;
}
