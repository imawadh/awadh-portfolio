import Link from 'next/link';
import FooterCta from './FooterCta';
import { socials } from '@/utils/socials';

const navItems = [
  { label: 'Work', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Credentials', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer on-blue grid-bg sec-round">
      <div className="wrap pt-20 md:pt-28">
        {/* CTA */}
        <FooterCta />

        {/* Colophon */}
        <div className="mt-14 grid gap-10 border-t border-[var(--border)] py-12 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr]">
          <div className="sm:col-span-2 md:col-span-1">
            <p className="m-0 inline-flex items-center gap-2.5 text-[1rem] text-[var(--fg)]">
              <span className="pulse"></span>
              Open to internships and freelance work
            </p>
            <p className="mt-3 max-w-sm text-[1rem]">
              Full Stack AI Developer in Bengaluru. Data Science undergraduate at IIT Madras, building my first
              mobile app.
            </p>
          </div>

          <div>
            <p className="kicker mb-4">Pages</p>
            <ul className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="foot-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker mb-4">Elsewhere</p>
            <ul className="flex flex-col gap-1.5">
              {socials.map((social) => (
                <li key={social.url}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="foot-link">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-1 border-t border-[var(--border)] py-6 text-[0.9rem] text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {year} Awadh Kishor Singh</span>
          <span>Set in Big Shoulders Display and Inter Tight</span>
        </div>
      </div>
    </footer>
  );
}
