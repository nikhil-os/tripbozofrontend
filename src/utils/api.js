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

/**
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

/**
 * 2) Save selected apps under a new session ID.
 *    This corresponds to POST /personalized-list/ with { selected_apps: [1,2,3] }
 *    It returns { session_id, message, selected_apps: [...] }
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

/**
 * 3) Fetch the Base64 QR code payload + serialized app data for a given session.
 *    GET /personalized-list/qr/{sessionId}/
 *    Returns { qr_code: "<base64>", selected_apps: [ {..}, ... ], shareable_url }
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

/**
 * Fetch details for a list of app IDs.
 * Ideally your backend would expose a bulk‐lookup endpoint, but if not, we fallback:
 *  - fetch all apps for each country (if you can guess the country), then filter by id
 *  - OR just return sampleApps if no real data is found
 */
export async function fetchAppsByIds(appIds = []) {
  if (!useApi) {
    return sampleApps.filter((app) => appIds.includes(app.id));
  }

  // If you had a real `/apps/bulk/` endpoint, you could do:
  // try {
  //   const res = await apiClient.post(`/apps/bulk/`, { ids: appIds });
  //   return res.data;
  // } catch (err) { ... fallback below ... }

  // Fallback strategy: if we know that all selected apps come from the same country,
  // you could fetch `/country/{code}/apps/` once and filter. For now, just return sampleApps.
  console.warn(
    "[TripBozo API] No apps/bulk endpoint—returning sampleApps for selected IDs"
  );
  return sampleApps.filter((app) => appIds.includes(app.id));
}

/**
 * Fetch a list of countries matching the search query.
 * GET /homepage/search/?query=...
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
