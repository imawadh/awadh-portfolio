import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { siteUrl } from '@/utils/metadata';

// Generated once at build time for the static export.
export const dynamic = 'force-static';

const pages = ['/', '/about/', '/projects/', '/experience/', '/skills/', '/certifications/', '/contact/'];

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = projects.map((p) => `${p.caseStudy}/`);
  return [...pages, ...caseStudies].map((path) => ({ url: `${siteUrl}${path}` }));
}
