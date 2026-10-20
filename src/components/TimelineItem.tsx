interface Props {
  type: 'work' | 'education';
  title: string;
  company: string;
  meta: string;
  date: string;
  current?: boolean;
  points?: string[];
  tags?: string[];
}

export default function TimelineItem({
  title,
  company,
  meta,
  date,
  current = false,
  points = [],
  tags = [],
}: Props) {
  return (
    <article className="grid gap-x-12 gap-y-4 border-t border-[var(--border-bright)] py-9 md:grid-cols-[13rem_1fr] md:py-11">
      {/* Left rail: when */}
      <div className="md:sticky md:top-24 md:self-start ui">
        <p className="m-0 text-[1rem] font-semibold text-[var(--fg)] ui">{date}</p>
        {current && (
          <p className="m-0 mt-3 inline-flex items-center gap-2 text-[0.95rem] text-[var(--signal)] ui">
            <span className="pulse" />
            Current
          </p>
        )}
      </div>

      {/* The entry itself */}
      <div className="min-w-0">
        <h3 className="m-0 text-[1.9rem] md:text-[2.2rem]">{title}</h3>
        <p className="m-0 mt-2 text-[1.08rem] text-[var(--fg)] ui">
          {company}
          <span className="text-[var(--muted)]">, {meta}</span>
        </p>

        {points.length > 0 && (
          <ul className="prose-serif mt-5 flex max-w-[66ch] list-disc flex-col gap-2.5 pl-5 marker:text-[var(--accent)]">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        {tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
