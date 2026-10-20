import Link from 'next/link';

interface Props {
  name: string;
  tagline: string;
  role: string;
  status: string;
  stackSummary: string;
  live?: string;
  code?: string;
  links?: { label: string; url: string }[];
  children: React.ReactNode;
}

/** Shared frame for every case study: title block, meta strip, body and closing links. */
export default function CaseStudy({ name, tagline, role, status, stackSummary, live, code, links, children }: Props) {
  const meta = [
    { key: 'Role', value: role },
    { key: 'Status', value: status },
    { key: 'Stack', value: stackSummary },
  ];

  return (
    <article className="wrap band-lead">
      <Link href="/projects" className="back-link ui">
        All projects
      </Link>

      <h1 className="case-title reveal reveal-1 mt-6">{name}</h1>
      <p className="case-tagline reveal reveal-2 mt-5 max-w-[30ch]">{tagline}</p>

      <dl className="reveal reveal-3 mt-12 grid gap-y-6 rounded-[var(--radius)] bg-[var(--surface)] p-6 sm:grid-cols-3 sm:gap-x-8 md:p-8">
        {meta.map((m) => (
          <div key={m.key}>
            <dt className="ui text-[0.95rem] text-[var(--muted)]">{m.key}</dt>
            <dd className="ui m-0 mt-1 text-[1.08rem] font-medium leading-snug text-[var(--fg)]">{m.value}</dd>
          </div>
        ))}
      </dl>

      <div className="case-body mt-16 flex flex-col gap-16 md:mt-20 md:gap-20">{children}</div>

      <div className="mt-16 flex flex-wrap gap-3 border-t border-[var(--border-bright)] pt-10">
        {links && links.length > 0
          ? links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {l.label}
              </a>
            ))
          : live && (
              <a href={live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Visit the live site
              </a>
            )}
        {code && (
          <a href={code} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Source on GitHub
          </a>
        )}
        <Link href="/projects" className="btn btn-ghost">
          All projects
        </Link>
      </div>

      <div className="mt-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p className="m-0 max-w-[48ch]">
          Need something built like {name}? Tell me what you&rsquo;re working on.
        </p>
        <Link href="/contact" className="btn btn-primary shrink-0">
          Start a conversation
        </Link>
      </div>
    </article>
  );
}
