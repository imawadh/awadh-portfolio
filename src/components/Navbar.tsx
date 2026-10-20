'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { socials } from '@/utils/socials';
import { email, portraitUrl } from '@/utils/site';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Work', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Credentials', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Fixed header. At the top of a page it shows the wordmark and the pill nav;
 * once scrolled, both tuck away and only the Contact pill and the menu
 * button stay. The menu button opens a full-screen navy menu.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // While the menu is open: lock page scroll, close on Escape.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="site-header" data-scrolled={scrolled || undefined} data-open={open || undefined}>
      <div className="wrap header-row">
        <Link href="/" className="wordmark" aria-label="Awadh Kishor Singh, home">
          <span>Awadh</span>
          <span>Kishor Singh</span>
        </Link>

        <nav aria-label="Main" className="nav-pill">
          {navItems.slice(0, -1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="talk-pill">
            <span className="talk-avatar">
              <img src={portraitUrl} alt="" width={40} height={40} />
              <span className="talk-dot" />
            </span>
            Contact
          </Link>
          <button
            type="button"
            className="menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="siteMenu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="menu-bar menu-bar-top" />
            <span className="menu-bar menu-bar-bot" />
          </button>
        </div>
      </div>

      <div id="siteMenu" className="menu-panel on-navy" aria-hidden={!open}>
        <div className="wrap menu-inner">
          <nav aria-label="Menu">
            <ul className="menu-list">
              {navItems.map((item, i) => (
                <li key={item.href} style={{ '--i': i } as React.CSSProperties}>
                  <Link
                    href={item.href}
                    tabIndex={open ? undefined : -1}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className="menu-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="menu-foot">
            <a href={`mailto:${email}`} tabIndex={open ? undefined : -1} className="menu-email">
              {email}
            </a>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={open ? undefined : -1}
                  className="chip"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
