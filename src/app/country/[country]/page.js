// src/app/country/[country]/page.js

import { redirect } from 'next/navigation';
import CountryAppsPage from '@/components/countryapp/CountryAppsPage';
import { fetchAppsByCountry } from '@/src/utils/api';
import { findCountryCode, isCountrySupported } from '@/src/utils/countryUtils';

export default async function CountryPage({ params }) {
  // Get the country parameter from the URL
  const { country: rawCountry } = await params;
  
  // Check if this is a supported country
  const countryCode = findCountryCode(rawCountry);
  
  // If country is not supported, redirect to not-found page
  if (!countryCode) {
    redirect(`/country-not-found?q=${encodeURIComponent(rawCountry)}`);
  }
  
  // Fetch apps for this country code
  const apps = await fetchAppsByCountry(countryCode.toLowerCase());
  
  // If no apps found (which shouldn't happen for supported countries, but just in case)
  if (!apps || apps.length === 0) {
    redirect(`/country-not-found?q=${encodeURIComponent(rawCountry)}`);
  }

  return <CountryAppsPage countryCode={countryCode} apps={apps} />;
}
