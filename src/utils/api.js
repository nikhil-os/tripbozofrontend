// src/utils/api.js
import axios from 'axios';
import { sampleApps } from '@/app/data/sampleApps';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8990/api';
const useApi = true; // Set to false to use sample data instead of API

// 🔁 Generic Axios instance (can customize headers, interceptors etc. here)
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

/**
 * Fetch apps by country code (e.g. "FR", "CN")
 */
export async function fetchAppsByCountry(countryCode) {
  if (!useApi) {
    console.info('[TripBozo API] Using sample apps');
    return sampleApps;
  }

  try {
    const res = await apiClient.get(`/apps/`, {
      params: { country: countryCode }
    });
    return res.data?.length ? res.data : sampleApps;
  } catch (err) {
    console.warn('[TripBozo API] Failed to fetch apps:', err.message);
    return sampleApps;
  }
}

/**
 * Fetch multiple apps by a list of IDs
 */
export async function fetchAppsByIds(appIds = []) {
  if (!useApi) {
    return sampleApps.filter(app => appIds.includes(app.id));
  }

  try {
    const res = await apiClient.post(`/apps/bulk/`, { ids: appIds });
    return res.data;
  } catch (err) {
    console.warn('[TripBozo API] Failed to fetch apps by IDs:', err.message);
    return sampleApps;
  }
}
