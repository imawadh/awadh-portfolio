'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  label: string;
  children: React.ReactNode;
  /** Optional content placed left of the arrow buttons (e.g. a CTA). */
  lead?: React.ReactNode;
}

/**
 * Horizontal scroll-snap track with prev/next buttons and a progress bar.
 * The track scrolls natively (touch, trackpad, keyboard); the buttons just
 * step it by one card.
 */
export default function Carousel({ label, children, lead }: Props) {
  const track = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 1);
    setAtStart(el.scrollLeft < 4);
    setAtEnd(el.scrollLeft > max - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(':scope > *');
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? el.clientWidth) + gap), behavior: 'smooth' });
  };

  return (
    <div className="carousel">
      <div className="carousel-controls wrap">
        <div className="carousel-lead">{lead}</div>
        <div className="carousel-buttons">
          <button type="button" className="round-btn" aria-label="Previous" disabled={atStart} onClick={() => step(-1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 12H5m6-6-6 6 6 6" />
            </svg>
          </button>
          <button type="button" className="round-btn" aria-label="Next" disabled={atEnd} onClick={() => step(1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div ref={track} className="carousel-track" role="region" aria-label={label} tabIndex={0} onScroll={update}>
        {children}
      </div>

      <div className="wrap">
        <div className="carousel-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${Math.max(progress, 0.08)})` }} />
        </div>
      </div>
    </div>
  );
}
