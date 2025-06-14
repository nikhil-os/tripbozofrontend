// src/utils/countryUtils.js

// List of supported countries with their codes and names
export const supportedCountries = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'UK', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' }, // Alternative code for UK
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'CN', name: 'China', flag: '🇨🇳' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
];

/**
 * Finds a country code from a country name or code input
 * @param {string} input - Country name or code to search for
 * @returns {string|null} - The country code if found, null otherwise
 */
export function findCountryCode(input) {
  if (!input) return null;
  
  // Normalize input: trim and convert to lowercase
  const normalizedInput = input.trim().toLowerCase();
  
  // First check if the input is a direct match for a country code
  const codeMatch = supportedCountries.find(
    country => country.code.toLowerCase() === normalizedInput
  );
  if (codeMatch) return codeMatch.code;
  
  // Then check if the input is a match for a country name
  const nameMatch = supportedCountries.find(
    country => country.name.toLowerCase() === normalizedInput
  );
  if (nameMatch) return nameMatch.code;
  
  // If no exact match, try partial name match
  const partialNameMatch = supportedCountries.find(
    country => country.name.toLowerCase().includes(normalizedInput)
  );
  if (partialNameMatch) return partialNameMatch.code;
  
  // No match found
  return null;
}

/**
 * Checks if a country is supported by the application
 * @param {string} countryCodeOrName - Country code or name to check
 * @returns {boolean} - True if the country is supported, false otherwise
 */
export function isCountrySupported(countryCodeOrName) {
  return findCountryCode(countryCodeOrName) !== null;
}

/**
 * Gets the country name from a country code
 * @param {string} countryCode - Country code to get the name for
 * @returns {string} - The country name if found, or the original code if not found
 */
export function getCountryName(countryCode) {
  if (!countryCode) return '';
  
  const country = supportedCountries.find(
    c => c.code.toLowerCase() === countryCode.toLowerCase()
  );
  
  return country ? country.name : countryCode;
} 