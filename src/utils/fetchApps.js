// src/utils/fetchApps.js
import { sampleApps } from "/src/app/data/sampleApps";

// 🔁 Toggle this flag to switch between sample data and API
const useApi = false;

/**
 * Fetch apps for a specific country.
 * Uses sampleApps by default unless `useApi` is set to true.
 *
 * @param {string} countryCode
 * @returns {Promise<Array>}
 */
export async function fetchAppsByCountry(countryCode) {
  if (!useApi) {
    console.info("Using sample apps (API disabled).");
    return sampleApps;
  }

  try {
    const res = await fetch(`/api/apps?country=${countryCode}`);
    if (!res.ok) throw new Error(`API error: ${res.statusText}`);

    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : sampleApps;
  } catch (err) {
    console.warn("API fetch failed. Using sample apps:", err.message);
    return sampleApps;
  }
}

export async function fetchAppsByIds(appIds) {
  // Ensure all IDs are numbers and filter
  const ids = appIds.map(Number);
    // const ids = appIds.map(String);

  return sampleApps.filter(app => ids.includes(app.id));
}
