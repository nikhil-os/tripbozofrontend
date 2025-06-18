// app/country/[country]/page.jsx
import CountryAppsPage from "@/components/countryapp/CountryAppsPage";
import { fetchAppsByCountry, fetchCountryInfo } from "@/src/utils/api";
import { notFound } from "next/navigation";


export default async function CountryPage({ params }) {
  const countryCode = params.country.toUpperCase();

  const [countryInfo, apps, images] = await Promise.all([
    fetchCountryInfo(countryCode),
    fetchAppsByCountry(countryCode),
    
  ]);

  if (!countryInfo.name || apps.length === 0) {
    return notFound();
  }

  return (
    <CountryAppsPage
      countryCode={countryInfo.code}
      countryInfo={countryInfo}
      apps={apps}
      
    />
  );
}
