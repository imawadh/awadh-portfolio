'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { email, resumeUrl } from '@/utils/site';

/** The footer's call to action. The contact page already leads with the email, so it is hidden there. */
export default function FooterCta() {
  if (usePathname().startsWith('/contact')) return null;

  return (
    <div className="pb-6">
      <h2 className="footer-shout">Have something to build?</h2>
      <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="m-0 max-w-[52ch] text-[1.2rem]">
            I&rsquo;m open to software engineering, full-stack and AI/ML roles, and to internships and freelance
            work. Email is the quickest way to reach me.
          </p>
          <a href={`mailto:${email}`} className="footer-email mt-5 inline-block">
            {email}
          </a>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Get in touch <span className="arrow">&#8599;</span>
          </Link>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Download résumé
          </a>
        </div>
      </div>
    </div>
  );
}
