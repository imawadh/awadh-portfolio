import Link from 'next/link';
import { projects } from '@/data/projects';

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

/** Shared frame for every case study: blue hero, live-site screenshot, body and closing links. */
export default function CaseStudy({ name, tagline, role, status, stackSummary, live, code, links, children }: Props) {
  const meta = [
    { key: 'Role', value: role },
    { key: 'Status', value: status },
    { key: 'Stack', value: stackSummary },
  ];
  const image = projects.find((p) => p.name === name)?.image;

  return (
    <>
      <section className={`page-hero wrap band-lead ${image ? 'pb-28 md:pb-40' : ''}`}>
        <Link href="/projects" className="back-link reveal reveal-1">
          All projects
        </Link>
        <h1 className="case-title reveal reveal-1 mt-6">{name}</h1>
        <p className="case-tagline reveal reveal-2 mt-6 max-w-[42ch]">{tagline}</p>

        <dl className="case-meta reveal reveal-3 mt-12">
          {meta.map((m) => (
            <div key={m.key}>
              <dt>{m.key}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {image && (
        <div className="wrap case-shot">
          <div className="browser reveal reveal-4">
            <div className="browser-bar">
              <span className="browser-dots">
                <span />
                <span />
                <span />
              </span>
            </div>
            <img src={image} alt={`${name} home page`} width={1280} height={800} />
          </div>
        </div>
      )}

      <article className="wrap band band-a">
        <div className="case-body flex flex-col gap-16 md:gap-24">{children}</div>

        <div className="mt-16 flex flex-wrap gap-3 border-t border-[var(--border-bright)] pt-10">
          {links && links.length > 0
            ? links.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  {l.label}
                </a>
              ))
            : live && (
                <a href={live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Visit the live site <span className="arrow">&#8599;</span>
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
          <p className="m-0 max-w-[48ch] text-[1.25rem] text-[var(--fg)]">
            Need something built like {name}? Tell me what you&rsquo;re working on.
          </p>
          <Link href="/contact" className="btn btn-primary shrink-0">
            Start a conversation <span className="arrow">&#8599;</span>
          </Link>
        </div>
      </article>
    </>
  );
}
