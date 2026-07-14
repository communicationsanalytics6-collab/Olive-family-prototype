/// <reference types="vite/client" />

// Clean URL paths for the brand logos.
// Using standard static assets instead of heavy base64 strings to keep the bundle small,
// prevent build compilation issues, and allow reliable loading across all hosting environments.

export const getBasePath = (): string => {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    const match = path.match(/\/olive-family-prototype/i);
    if (match) {
      return match[0] + '/';
    }
  }
  return '/';
};

const cleanBase = getBasePath();

export const SPUR_LOGO = `${cleanBase}images/spur-images/spur_logo.png`;
export const PANAROTTIS_LOGO = `${cleanBase}images/panarottis-images/panarottis_logo.png`;
export const PANAROTTIS_LOGO_WHITE = `${cleanBase}images/panarottis-images/panarottis_logo_white.png`;
export const OLIVE_FAMILY_LOGO = `${cleanBase}images/olive-images/olive_family_logo.png`;
