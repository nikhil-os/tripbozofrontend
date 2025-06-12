// src/app/country/[country]/page.js

import CountryAppsPage from '@/components/countryapp/CountryAppsPage';
import { fetchAppsByCountry } from '@/src/utils/api';

export default async function CountryPage({ params }) {
  // “params” must be awaited before using its properties:
  const { country: rawCountry } = await params;
  const countryCode = String(rawCountry).toUpperCase();

  // Now fetch the apps for this country code
  const apps = await fetchAppsByCountry(countryCode);

  return <CountryAppsPage countryCode={countryCode} apps={apps} />;
}
