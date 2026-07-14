/// <reference types="vite/client" />

// Clean URL paths for the brand logos.
// Using standard static assets instead of heavy base64 strings to keep the bundle small,
// prevent build compilation issues, and allow reliable loading across all hosting environments.

const base = import.meta.env.BASE_URL || '/';
const cleanBase = base.endsWith('/') ? base : `${base}/`;

export const SPUR_LOGO = `${cleanBase}images/spur-images/spur_logo.png`;
export const PANAROTTIS_LOGO = `${cleanBase}images/panarottis-images/panarottis_logo.png`;
export const PANAROTTIS_LOGO_WHITE = `${cleanBase}images/panarottis-images/panarottis_logo_white.png`;
export const OLIVE_FAMILY_LOGO = `${cleanBase}images/olive-images/olive_family_logo.png`;
