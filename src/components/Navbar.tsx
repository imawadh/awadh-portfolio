'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { socials } from '@/utils/socials';

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
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // While the menu is open: lock page scroll, close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-[rgba(232,235,227,0.86)] backdrop-blur-md">
      <div className="wrap flex items-center justify-between gap-6 py-3.5">
        <Link href="/" className="wordmark shrink-0" aria-label="Awadh Kishor Singh, home">
          Awadh Kishor Singh
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`nav-link ${isActive(item.href) ? 'is-active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            aria-current={isActive('/contact') ? 'page' : undefined}
            className="btn btn-primary ml-4 !min-h-0 !px-5 !py-2 !text-[0.95rem]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="navMenu"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((o) => !o);
          }}
          className="nav-toggle inline-flex h-11 items-center gap-2.5 rounded-full border-[1.5px] border-[var(--fg)] px-4 text-[0.95rem] font-semibold text-[var(--fg)] lg:hidden"
        >
          <span className="toggle-label-closed">Menu</span>
          <span className="toggle-label-open">Close</span>
          <span className="relative flex h-3 w-4 flex-col items-center justify-center">
            <span className="bar bar-top absolute h-[1.5px] w-4 bg-current transition-transform duration-300"></span>
            <span className="bar bar-bot absolute h-[1.5px] w-4 bg-current transition-transform duration-300"></span>
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="navMenu"
        className={`nav-menu invisible absolute left-0 right-0 top-full max-h-[calc(100dvh-4.5rem)] -translate-y-2 overflow-y-auto bg-[var(--bg)] opacity-0 transition-all duration-300 ease-out lg:hidden ${open ? 'is-open' : ''}`}
      >
        <div className="wrap pb-10 pt-4">
          <ul className="flex flex-col">
            {[...navItems, { label: 'Contact', href: '/contact' }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={`menu-link block py-2 ${isActive(item.href) ? 'text-[var(--accent)]' : 'text-[var(--fg)]'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {socials.map((social) => (
              <a key={social.url} href={social.url} target="_blank" rel="noopener noreferrer" className="chip">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
