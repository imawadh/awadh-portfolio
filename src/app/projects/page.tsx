import Link from 'next/link';
import WorkCard from '@/components/WorkCard';
import { personalProjects, freelanceProjects, projects } from '@/data/projects';
import { pageMetadata } from '@/utils/metadata';

const tally = [
  { label: 'Projects', value: projects.length, accent: false },
  { label: 'Personal', value: personalProjects.length, accent: false },
  { label: 'Freelance', value: freelanceProjects.length, accent: false },
  { label: 'Live now', value: projects.filter((p) => p.status === 'live').length, accent: true },
];

export const metadata = pageMetadata({
  title: 'Projects — Awadh Kishor Singh',
  description: 'Projects by Awadh Kishor Singh — personal builds (Prescripto, Cryptofolio) and freelance client work (Axiora Learning, EVAA Enterprises, The SRS Classes, Prsnn).',
  path: '/projects/',
});

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero wrap band-lead pb-12 md:pb-16">
        <h1 className="page-title reveal reveal-1 max-w-[12ch]">Products, shipped end to end</h1>
        <p className="page-lede reveal reveal-2 mt-6 max-w-[44ch]">
          Full-stack applications and client websites built end to end, most of them live in production
          with real users. Each has its own architecture, build and deployment story.
        </p>

        <dl
          className="reveal reveal-3 mt-12 grid grid-cols-2 gap-y-6 border-t border-[var(--border-bright)] pt-6 sm:grid-cols-4"
        >
          {
            tally.map((t, i) => (
              <div key={i} className="flex flex-col-reverse">
                <dt className="ui mt-1.5 text-[0.98rem] text-[var(--muted)]">{t.label}</dt>
                <dd
                  className={[
                    'numeral m-0 text-[4.5rem]',
                    t.accent ? 'text-[var(--accent)]' : 'text-[var(--fg)]',
                  ].filter(Boolean).join(' ')}
                >
                  {t.value}
                </dd>
              </div>
            ))
          }
        </dl>
      </section>

      {/* ───────────── PERSONAL ───────────── */}
      <section className="wrap band band-b">
        <h2 className="m-0">Built to learn and ship</h2>
        <p className="m-0 mt-3 max-w-[52ch] text-[var(--muted)]">
          Personal projects: self-directed full-stack builds where I owned every architectural decision.
        </p>

        <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2">
          {
            personalProjects.map((p) => (
              <WorkCard key={p.slug} project={p} />
            ))
          }
        </div>
      </section>

      {/* ───────────── FREELANCE ───────────── */}
      <section className="wrap band band-a">
        <h2 className="m-0">Shipped for clients</h2>
        <p className="m-0 mt-3 max-w-[52ch] text-[var(--muted)]">
          Freelance and contract work: production websites and platforms delivered for real businesses
          and live users.
        </p>

        <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2">
          {
            freelanceProjects.map((p) => (
              <WorkCard key={p.slug} project={p} />
            ))
          }
        </div>

        <div className="mt-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="m-0 max-w-[52ch]">
            Have something to build? I&rsquo;m open to internships and freelance engagements across
            full-stack and AI/ML work.
          </p>
          <Link href="/contact" className="btn btn-primary shrink-0">Start a conversation</Link>
        </div>
      </section>
    </>
  );
}
