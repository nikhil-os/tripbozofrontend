// src/app/country/[country]/page.js

import { fetchAppsByCountry } from '@/utils/api';
import CountryAppsPage from '@/components/countryapp/CountryAppsPage';

/**
 * Server Component for rendering apps by country
 */
export default async function CountryPage({ params }) {
  const countryCode = params.country.toUpperCase(); // Ensure ISO code like "FR", "CN"
  const apps = await fetchAppsByCountry(countryCode);

  return <CountryAppsPage countryCode={countryCode} apps={apps} />;
}

