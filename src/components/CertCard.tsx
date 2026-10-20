interface Props {
  date: string;
  title: string;
  issuer: string;
  details: string;
  url: string;
}

export default function CertCard({ date, title, issuer, details, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="cert-row group grid items-baseline gap-x-10 gap-y-2 border-t border-[var(--border-bright)] py-8 last:border-b"
    >
      <div className="min-w-0">
        <h3 className="m-0 text-[1.6rem] transition-colors duration-200 group-hover:text-[var(--accent)]">
          {title}
        </h3>
        <p className="m-0 mt-1 text-[1.02rem] text-[var(--fg)] ui">{issuer}</p>
        <p className="m-0 mt-2 max-w-[60ch] text-[1rem]">{details}</p>
      </div>

      <div className="flex items-baseline justify-between gap-4 md:flex-col md:items-end md:gap-1.5 ui">
        <span className="text-[0.95rem] text-[var(--muted)]">{date}</span>
        <span className="text-[0.98rem] font-semibold text-[var(--accent)] underline decoration-1 underline-offset-[0.22em] group-hover:decoration-2">
          Verify the certificate
        </span>
      </div>
    </a>
  );
}
