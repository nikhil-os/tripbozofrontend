// src/app/country/[country]/page.js
// "use client";

// import { useEffect, useState } from "react";
import { fetchAppsByCountry } from "/src/utils/fetchApps";

// import CountryAppsPage from "@/components/CountryAppsPage";




// Server Component

// Server Component

import CountryAppsPage from '@/components/countryapp/CountryAppsPage';
// import { fetchAppsByCountry } from '@/utils/fetchApps';

export default async function Page({ params }) {
    const resolvedParams = await params;
  const countryCode = resolvedParams.country;
  const apps = await fetchAppsByCountry(countryCode);

  return <CountryAppsPage countryCode={countryCode} apps={apps} />;
}
