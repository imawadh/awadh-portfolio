import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { socials } from '@/utils/socials';
import { featuredProjects } from '@/data/projects';
import { resumeUrl } from '@/utils/site';
import { pageMetadata } from '@/utils/metadata';

const facts = [
  { key: 'Based in', value: 'Bengaluru, India. Happy to work remotely.' },
  { key: 'Studying', value: 'BS in Data Science, IIT Madras (CGPA 8.27)' },
  { key: 'Most recently', value: 'Full Stack Developer Intern at IAVerse' },
  { key: 'Works with', value: 'React, Next.js, NestJS, Node.js, PostgreSQL, AWS' },
  { key: 'Practice', value: '1,000+ DSA problems solved, 2,100+ GitHub commits' },
];

export const metadata = pageMetadata({
  title: 'Awadh Kishor Singh | Full Stack AI Developer',
  description: 'Awadh Kishor Singh — Full Stack AI Developer in Bengaluru building production-ready web apps with React, Next.js, NestJS and Node.js, with applied ML and LLM experience. Data Science undergraduate at IIT Madras, open to internships and freelance work.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="wrap band-lead pb-16 md:pb-24">
        <h1 className="hero-name" aria-label="Awadh Kishor Singh">
          <span className="hero-line"><span style={{ '--d': '0s' } as React.CSSProperties}>Awadh</span></span>
          <span className="hero-line hero-line-2">
            <span style={{ '--d': '0.09s' } as React.CSSProperties}>Kishor Singh</span>
            <figure className="hero-portrait" style={{ '--d': '0.25s' } as React.CSSProperties}>
              <img
                src="https://awadh-portfolio-website.s3.ap-south-1.amazonaws.com/images/awadh-about.webp"
                alt=""
                loading="eager"
                width="640"
                height="800" />
            </figure>
          </span>
        </h1>

        <div className="hero-foot mt-10 grid gap-10 md:mt-14 md:grid-cols-[7fr_5fr] md:gap-16">
          <div>
            <p className="hero-lede m-0 max-w-[34ch]">
              I build web apps end to end, from the interface to the API, the database and the deploy,
              and train the ML models some of them run on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="btn btn-primary">See my work</Link>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn">Download résumé</a>
            </div>
          </div>

          <div className="ui flex flex-col gap-4 md:pt-2">
            <p className="ui m-0 inline-flex items-center gap-2.5 text-[1.05rem] text-[var(--fg)]">
              <span className="pulse"></span>
              Open to internships and freelance work
            </p>
            <p className="m-0 text-[1rem] text-[var(--muted)]">
              Full Stack AI Developer in Bengaluru, studying Data Science at IIT Madras.
            </p>
            <div className="flex flex-wrap gap-2">
              {
                socials.map((social, i) => (
                  <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="chip">
                    {social.label}
                  </a>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── SELECTED WORK ───────────── */}
      <section className="wrap band band-b">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="m-0">Selected work</h2>
            <p className="m-0 mt-3 max-w-[48ch] text-[var(--muted)]">
              Products I built and shipped, for clients and for myself.
            </p>
          </div>
          <Link href="/projects" className="link ui text-[1.02rem] font-semibold">See all projects</Link>
        </div>

        <div className="mt-10 border-b border-[var(--border-bright)]">
          {
            featuredProjects.map((p, i) => (
              <ProjectCard key={i}
                name={p.name}
                tagline={p.tagline}
                role={p.role}
                description={p.description}
                tags={p.tags}
                live={p.live}
                code={p.code}
                caseStudy={p.caseStudy}
              />
            ))
          }
        </div>

        <div className="mt-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="m-0 max-w-[48ch]">
            Building something similar? Tell me what you&rsquo;re working on.
          </p>
          <Link href="/contact" className="btn btn-primary shrink-0">Start a conversation</Link>
        </div>
      </section>

      {/* ───────────── ABOUT, IN SHORT ───────────── */}
      <section className="wrap band band-a">
        <div className="split">
          <div className="split-head">
            <h2 className="m-0">In short</h2>
            <p>The background behind the work.</p>
          </div>

          <div>
            <p className="m-0 max-w-[60ch] text-[1.2rem] leading-[1.65] text-[var(--fg)]">
              I&rsquo;ve shipped production apps across internships and freelance work: a 1,200-page
              WordPress-to-Next.js migration, an ML scoring engine for a workforce platform, and an
              ed-tech site serving 1,500+ students a day. I care about clean architecture and the parts
              of a product users never see.
            </p>

            <dl className="mt-10 border-t border-[var(--border-bright)]">
              {
                facts.map((f, i) => (
                  <div key={i} className="grid gap-1 border-b border-[var(--border)] py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                    <dt className="ui text-[1rem] font-semibold text-[var(--fg)]">{f.key}</dt>
                    <dd className="serif m-0 text-[1.05rem] text-[var(--fg-dim)]">
                      {f.value}
                    </dd>
                  </div>
                ))
              }
            </dl>

            <Link href="/about" className="link ui mt-8 inline-block text-[1.02rem] font-semibold">More about me</Link>
          </div>
        </div>
      </section>

      {/* ───────────── RIGHT NOW ───────────── */}
      <section className="wrap band band-b">
        <div className="split">
          <div className="split-head">
            <h2 className="m-0">Right now</h2>
            <p>What I&rsquo;m working on outside client work.</p>
          </div>

          <div className="now-card card p-7 md:p-10">
            <p className="ui m-0 inline-flex items-center gap-2.5 text-[1rem] text-[var(--signal)]">
              <span className="pulse"></span>
              In development, releasing soon
            </p>
            <h3 className="mt-4 text-[2rem] md:text-[2.6rem]">My first mobile app</h3>
            <p className="m-0 mt-4 max-w-[56ch]">
              I&rsquo;m learning Android and iOS development and taking the same end-to-end approach I
              use on the web: interface, API, data and release.
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              <span className="chip">Android</span>
              <span className="chip">iOS</span>
              <span className="chip">Mobile UI</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
