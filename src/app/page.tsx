import Link from 'next/link';
import Carousel from '@/components/Carousel';
import WorkCard from '@/components/WorkCard';
import { featuredProjects, projects } from '@/data/projects';
import { socials } from '@/utils/socials';
import { portraitUrl, resumeUrl } from '@/utils/site';
import { pageMetadata } from '@/utils/metadata';

const facts = [
  { key: 'Based in', value: 'Bengaluru, India. Happy to work remotely.' },
  { key: 'Studying', value: 'BS in Data Science, IIT Madras (CGPA 8.27)' },
  { key: 'Most recently', value: 'Full Stack Developer Intern at IAVerse' },
  { key: 'Works with', value: 'React, Next.js, NestJS, Node.js, PostgreSQL, AWS' },
  { key: 'Practice', value: '1,000+ DSA problems solved, 2,100+ GitHub commits' },
];

// Screenshots fanned out behind the "In short" section — imagery only.
const fan = ['axiora-learning', 'prescripto', 'cryptofolio'].map((slug) => projects.find((p) => p.slug === slug)!);

export const metadata = pageMetadata({
  title: 'Awadh Kishor Singh | Full Stack AI Developer',
  description:
    'Awadh Kishor Singh — Full Stack AI Developer in Bengaluru building production-ready web apps with React, Next.js, NestJS and Node.js, with applied ML and LLM experience. Data Science undergraduate at IIT Madras, open to internships and freelance work.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="home-hero on-blue grid-bg">
        <div className="wrap grid gap-12 pb-24 pt-32 md:pb-32 md:pt-40 lg:grid-cols-[7fr_5fr] lg:items-end lg:gap-8">
          <div>
            <h1 className="hero-title reveal reveal-1">
              Awadh <span className="block">Kishor Singh</span>
            </h1>
            <svg className="scribble reveal reveal-2" viewBox="0 0 700 24" preserveAspectRatio="none" aria-hidden="true">
              <path d="M6 15 C 140 5, 300 19, 440 11 S 640 7, 694 12" />
            </svg>
            <p className="hero-lede reveal reveal-2 mt-8 max-w-[34ch]">
              I build web apps end to end, from the interface to the API, the database and the deploy, and train
              the ML models some of them run on.
            </p>
            <div className="reveal reveal-3 mt-10 flex flex-wrap gap-3">
              <Link href="/projects" className="btn btn-primary">
                See my work <span className="arrow">&#8599;</span>
              </Link>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Download résumé
              </a>
            </div>
          </div>

          <figure className="hero-figure reveal reveal-3">
            <div className="hero-shape" aria-hidden="true" />
            <div className="hero-photo">
              <img src={portraitUrl} alt="Awadh Kishor Singh" width={640} height={800} loading="eager" />
            </div>
            <figcaption className="hero-note">
              <span className="note">Open to internships and freelance work</span>
            </figcaption>
          </figure>
        </div>

        <div className="wrap hero-foot reveal reveal-4">
          <p className="m-0 text-[1.05rem] text-[var(--muted)]">
            Full Stack AI Developer in Bengaluru, studying Data Science at IIT Madras.
          </p>
          <div className="flex flex-wrap gap-2">
            {socials.map((social) => (
              <a key={social.url} href={social.url} target="_blank" rel="noopener noreferrer" className="chip">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── SELECTED WORK ───────────── */}
      <section className="sec on-navy sec-round">
        <div className="wrap" data-reveal>
          <span className="note">Products I built and shipped, for clients and for myself.</span>
          <h2 className="work-title mt-5">
            <span className="hl">Selected</span> work
          </h2>
        </div>
        <div className="mt-10">
          <Carousel
            label="Selected work"
            lead={
              <Link href="/projects" className="btn btn-primary">
                See all projects <span className="arrow">&#8599;</span>
              </Link>
            }
          >
            {featuredProjects.map((p) => (
              <WorkCard key={p.slug} project={p} />
            ))}
          </Carousel>
        </div>
        <div className="wrap mt-14 flex flex-col gap-5 md:flex-row md:items-center md:justify-between" data-reveal>
          <p className="m-0 max-w-[48ch] text-[1.3rem] text-[var(--fg)]">
            Building something similar? Tell me what you&rsquo;re working on.
          </p>
          <Link href="/contact" className="btn btn-primary shrink-0">
            Start a conversation <span className="arrow">&#8599;</span>
          </Link>
        </div>
      </section>

      {/* ───────────── IN SHORT ───────────── */}
      <section className="sec on-blue grid-bg sec-round statement">
        <div className="wrap split">
          <div className="split-head" data-reveal>
            <span className="note">The background behind the work.</span>
            <h2 className="mt-5">
              In <span className="hl">short</span>
            </h2>
          </div>

          <div data-reveal>
            <p className="m-0 max-w-[40ch] text-[clamp(1.35rem,2.2vw,1.75rem)] leading-[1.4] text-[var(--fg)]">
              I&rsquo;ve shipped production apps across internships and freelance work: a 1,200-page
              WordPress-to-Next.js migration, an ML scoring engine for a workforce platform, and an ed-tech site
              serving 1,500+ students a day. I care about clean architecture and the parts of a product users
              never see.
            </p>

            <dl className="facts mt-10">
              {facts.map((f) => (
                <div key={f.key}>
                  <dt>{f.key}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>

            <Link href="/about" className="btn btn-primary mt-10">
              More about me <span className="arrow">&#8599;</span>
            </Link>
          </div>
        </div>

        <div className="fan" aria-hidden="true">
          {fan.map((p, i) => (
            <div key={p.slug} className={`fan-card fan-${i}`} style={{ background: p.ground }}>
              <div className="browser">
                <div className="browser-bar">
                  <span className="browser-dots">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <img src={p.image} alt="" loading="lazy" width={1280} height={800} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── RIGHT NOW ───────────── */}
      <section className="sec sec-round bg-[var(--bg)] now">
        <div className="wrap split">
          <div className="split-head" data-reveal>
            <span className="note">What I&rsquo;m working on outside client work.</span>
            <h2 className="mt-5">
              <span className="hl">Right</span> now
            </h2>
          </div>

          <div className="now-card" data-reveal>
            <p className="m-0 inline-flex items-center gap-2.5 text-[1.05rem] font-medium text-[var(--signal)]">
              <span className="pulse"></span>
              In development, releasing soon
            </p>
            <h3 className="now-title mt-5">My first mobile app</h3>
            <p className="mt-5 max-w-[56ch] text-[1.2rem]">
              I&rsquo;m learning Android and iOS development and taking the same end-to-end approach I use on the
              web: interface, API, data and release.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
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
