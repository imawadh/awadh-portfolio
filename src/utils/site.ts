/**
 * Site-wide configuration.
 *
 * Values that vary per environment come from `NEXT_PUBLIC_`-prefixed env vars
 * (see `.env.example`). They are read at build time and inlined into the
 * static output, so they are safe for non-secret values only.
 */

/**
 * URL to the résumé PDF.
 *
 * Defaults to the copy committed at `public/My-Resume.pdf`, so the download
 * links work with no configuration. Set `NEXT_PUBLIC_RESUME_URL` to override it
 * with a hosted copy (e.g. a Google Drive share link) without a code change.
 */
export const resumeUrl: string = process.env.NEXT_PUBLIC_RESUME_URL || '/My-Resume.pdf';
