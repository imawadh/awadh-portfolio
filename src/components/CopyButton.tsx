'use client';

import { useEffect, useRef, useState } from 'react';

/** Copies `text` to the clipboard and briefly confirms with "Copied". */
export default function CopyButton({ text, children }: { text: string; children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <button type="button" className="btn btn-ghost" onClick={copy}>
      {copied ? 'Copied' : children}
    </button>
  );
}
