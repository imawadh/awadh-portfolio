/**
 * Site-wide configuration.
 *
 * Values that vary per environment come from `PUBLIC_`-prefixed env vars
 * (see `.env.example`). They are read at build time and inlined into the
 * static output, so they are safe for non-secret values only.
 */

/**
 * Public URL to the résumé PDF.
 * Set `PUBLIC_RESUME_URL` in your environment (e.g. a Google Drive share link).
 * Falls back to `#` when unset so the build never fails.
 */
export const resumeUrl: string = import.meta.env.PUBLIC_RESUME_URL || '#';
