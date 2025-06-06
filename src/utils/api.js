// src/utils/api.js

import axios from "axios";
import { sampleApps } from "@/src/app/data/sampleApps";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8099/api";
const useApi = true;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

/** ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * 1) Initialize a new session (stores empty list in Redis, returns session_id)
 */
export async function initSession() {
  if (!useApi) {
    console.info("[TripBozo API] initSession disabled → returning dummy ID");
    return "dummy-session";
  }
  try {
    const res = await apiClient.post(`/personalized-list/init-session/`);
    return res.data.session_id;
  } catch (err) {
    console.warn("[TripBozo API] initSession failed:", err.message);
    return null;
  }
}

/** ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * 2) Save selected apps under a new session ID.
 *    POST /personalized-list/  { selected_apps: [1,2,3] }
 */
export async function saveSelectedApps(appIds = []) {
  if (!useApi) {
    console.info("[TripBozo API] saveSelectedApps disabled → skipping call");
    return { session_id: "dummy-session", selected_apps: [] };
  }
  try {
    const res = await apiClient.post(`/personalized-list/`, {
      selected_apps: appIds,
    });
    return res.data;
  } catch (err) {
    console.warn("[TripBozo API] saveSelectedApps failed:", err.message);
    return { session_id: null, selected_apps: [] };
  }
}

/** ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * 3) Fetch the Base64 QR code payload + serialized app data for a given session.
 *    GET /personalized-list/qr/{sessionId}/
 */
export async function fetchQRCode(sessionId) {
  if (!useApi) {
    console.info("[TripBozo API] fetchQRCode disabled → returning dummy QR");
    return { qr_code: "/dummy-qr.png", selected_apps: sampleApps };
  }
  try {
    const res = await apiClient.get(`/personalized-list/qr/${sessionId}/`);
    return {
      qr_code: res.data.qr_code,
      selected_apps: res.data.selected_apps,
      shareable_url: res.data.shareable_url,
    };
  } catch (err) {
    console.warn("[TripBozo API] fetchQRCode failed:", err.message);
    return { qr_code: null, selected_apps: [] };
  }
}

/** ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * 4) Fetch details for a list of app IDs.
 *    (fallback to sampleApps if no real bulk endpoint exists)
 */
export async function fetchAppsByIds(appIds = []) {
  if (!useApi) {
    return sampleApps.filter((app) => appIds.includes(app.id));
  }

  // If you have a real `/apps/bulk/` endpoint you would do:
  // const res = await apiClient.post(`/apps/bulk/`, { ids: appIds });
  // return res.data;

  console.warn(
    "[TripBozo API] No /apps/bulk endpoint—returning sampleApps for selected IDs"
  );
  return sampleApps.filter((app) => appIds.includes(app.id));
}

/** ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * 5) Fetch a list of countries matching the search query:
 *    GET /homepage/search/?query=...
 */
export async function searchCountries(query) {
  if (!useApi) {
    console.info("[TripBozo API] searchCountries disabled → returning empty");
    return [];
  }
  try {
    const res = await apiClient.get(`/homepage/search/`, {
      params: { query },
    });
    return res.data.results || [];
  } catch (err) {
    console.warn("[TripBozo API] Failed to search countries:", err.message);
    return [];
  }
}

/** ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * 6) NEW: Fetch apps for a given country code (e.g. “FR”, “CN”).
 *    GET /country/<countryCode>/apps/
 *    If no real data, fallback to sampleApps.
 */
export async function fetchAppsByCountry(countryCode) {
  if (!useApi) {
    console.info("[TripBozo API] Using sample apps for country:", countryCode);
    return sampleApps;
  }

  try {
    // We assume your Django endpoint is: GET /country/<countryCode>/apps/
    const res = await apiClient.get(`/country/${countryCode}/apps/`);
    // The endpoint returns an array of TravelApp objects; usage:
    const apps = res.data;
    return Array.isArray(apps) && apps.length > 0 ? apps : sampleApps;
  } catch (err) {
    console.warn(
      `[TripBozo API] Failed to fetch apps for country ${countryCode}:`,
      err.message
    );
    return sampleApps;
  }
}
