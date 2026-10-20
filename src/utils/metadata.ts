import type { Metadata } from 'next';

export const siteUrl = 'https://awadh.tech';
export const siteName = 'Awadh Kishor Singh — Portfolio';

interface PageMeta {
  title: string;
  description: string;
  /** Route path with a trailing slash, e.g. `/about/`. Used for the canonical URL. */
  path: string;
  ogImage?: string;
}

/**
 * Per-page metadata. Next.js replaces (rather than merges) nested objects such
 * as `openGraph` from the root layout, so every page gets the full set here.
 */
export function pageMetadata({ title, description, path, ogImage = '/og-default.png' }: PageMeta): Metadata {
  const images = [{ url: ogImage, width: 1200, height: 630, alt: title }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: 'website',
      siteName,
      locale: 'en_US',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@im_awadh_',
      creator: '@im_awadh_',
      title,
      description,
      images: [{ url: ogImage, alt: title }],
    },
  };
}
