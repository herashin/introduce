const LEGACY_DOMAIN_PATTERN = /https?:\/\/jh940810\.shop(?=\/|$)/gi;
const CURRENT_DOMAIN = "https://jh940810.store";

// Existing board records contain absolute image URLs. Keep them usable after
// the domain migration without changing relative URLs or third-party images.
export function normalizeLegacyDomain(value) {
  return typeof value === "string"
    ? value.replace(LEGACY_DOMAIN_PATTERN, CURRENT_DOMAIN)
    : value;
}
