import Link from 'next/link';

/**
 * A project as one wide row: name and tagline on the left, what it is and
 * the links on the right. Rows stack into a list with a rule between them.
 */
interface Props {
  name: string;
  tagline: string;
  role?: string;
  description: string;
  tags: string[];
  live?: string;
  code?: string;
  caseStudy?: string;
}

export default function ProjectCard({ name, tagline, role, description, tags, live, code, caseStudy }: Props) {
  return (
    <article className="project-row group grid gap-x-12 gap-y-5 border-t border-[var(--border-bright)] py-9 md:grid-cols-[5fr_7fr] md:py-12">
      <div>
        <h3 className="project-name m-0">
          {caseStudy ? (
            <Link href={caseStudy} className="project-hit">
              {name}
            </Link>
          ) : (
            <a href={live ?? code ?? '#'} className="project-hit">
              {name}
            </a>
          )}
        </h3>
        <p className="m-0 mt-3 max-w-[30ch] text-[1.1rem] leading-snug text-[var(--fg)] ui">{tagline}</p>
        {role && <p className="m-0 mt-2 text-[0.95rem] text-[var(--muted)] ui">{role}</p>}
      </div>

      <div className="relative z-[1] flex flex-col gap-5">
        <p className="m-0 max-w-[60ch]">{description}</p>

        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1">
          {caseStudy && (
            <Link href={caseStudy} className="row-link row-link-main">
              Read the case study
            </Link>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="row-link">
              Visit the site
            </a>
          )}
          {code && (
            <a href={code} target="_blank" rel="noopener noreferrer" className="row-link">
              Source on GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
