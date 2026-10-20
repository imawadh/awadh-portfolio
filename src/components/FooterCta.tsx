'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { resumeUrl } from '@/utils/site';

/** The footer's call to action. The contact page already leads with the email, so it is hidden there. */
export default function FooterCta({ email }: { email: string }) {
  if (usePathname().startsWith('/contact')) return <div className="pt-4" />;

  return (
    <div className="wrap pb-14 pt-16 md:pb-20 md:pt-24">
      <h2 className="footer-title max-w-[16ch]">Have something to build?</h2>
      <p className="mt-6 max-w-[52ch]">
        I&rsquo;m open to software engineering, full-stack and AI/ML roles, and to internships and
        freelance work. Email is the quickest way to reach me.
      </p>
      <a href={`mailto:${email}`} className="footer-email mt-8 inline-block break-all">
        {email}
      </a>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href="/contact" className="btn btn-primary">
          Get in touch
        </Link>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn">
          Download résumé
        </a>
      </div>
    </div>
  );
}
