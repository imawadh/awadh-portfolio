import CaseStudy from '@/components/CaseStudy';
import Panel from '@/components/Panel';
import { pageMetadata } from '@/utils/metadata';

const techStack = ['Next.js', 'React', 'Tailwind CSS', 'Responsive Web Design', 'SEO', 'Vercel'];

const ventures = [
  { name: 'MetaKitchen', area: 'Food tech', desc: 'Engineered food products and an AI health companion.' },
  { name: 'Omnis', area: 'Health tech', desc: 'A research platform for metabolic and longevity science.' },
  { name: 'Virtual Promoter', area: 'Conversational commerce', desc: 'A voice-first, multilingual AI sales assistant.' },
  { name: 'OpenRift', area: 'AI operations', desc: 'Slack-integrated automation for small, specialised teams.' },
];

const built = [
  'Corporate site presenting EVAA as a unified parent brand',
  'Dedicated sections for each of the four ventures',
  'A clean, research-led visual identity',
  'Fast, SEO-friendly pages built on Next.js',
  'Fully responsive layout across devices',
];

export const metadata = pageMetadata({
  title: 'EVAA Enterprises — Awadh Kishor Singh',
  description: 'Case study of the EVAA Enterprises website — a Next.js corporate site for a Singapore-based AI research and venture studio housing four ventures.',
  path: '/projects/evaa/',
});

export default function EvaaPage() {
  return (
    <CaseStudy
      name="EVAA Enterprises"
      tagline="The corporate website for EVAA, a Singapore-based AI research and venture studio, presenting the parent brand and its four autonomous ventures under one cohesive identity."
      role="Freelance Web Developer"
      status="Live at evaa.enterprises"
      stackSummary="Next.js, React, Tailwind"
      live="https://www.evaa.enterprises/"
    >
      <section>
        <h2>Overview</h2>
        <p>
          EVAA is a Singapore-based AI research and venture studio — a holding company that builds
          “what doesn’t exist yet.” I built its corporate website: the public face that ties the
          parent brand together with its four independent ventures and communicates a single,
          research-driven identity.
        </p>
      </section>

      <section>
        <h2>The brief</h2>
        <p>
          A venture studio has a hard story to tell: one parent brand, several very different
          products, none of which should look like an afterthought. The site needed to present EVAA
          as a credible research-led company, give each venture room to stand on its own, and still
          feel like one coherent whole rather than a directory of links.
        </p>
      </section>

      <section>
        <h2>The four ventures</h2>
        <p>The site gives each EVAA venture its own clearly defined space.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {
            ventures.map((v, i) => (
              <div key={i} className="card p-5 md:p-6">
                <span className="kicker">{v.area}</span>
                <h3 className="mt-1 text-[1.15rem]">{v.name}</h3>
                <p className="m-0 mt-2 text-base">{v.desc}</p>
              </div>
            ))
          }
        </div>
      </section>

      <section>
        <h2>What I built</h2>
        <p>
          I designed and developed the corporate site with Next.js and React, balancing a unified
          brand layer with distinct, well-structured venture sections.
        </p>
        <ul className="prose-serif grid gap-x-8 sm:grid-cols-2">
          {built.map((b, i) => <li key={i} className="border-t border-[var(--border)] py-3">{b}</li>)}
        </ul>
      </section>

      <section>
        <h2>Tech stack</h2>
        <ul className="flex flex-wrap gap-2">
          {techStack.map((t, i) => <li key={i} className="chip">{t}</li>)}
        </ul>
        <Panel title="Deployment">
          <div className="flex flex-col gap-3.5">
            <div className="spec">
              <span className="spec-key">Framework</span>
              <span className="spec-val">Next.js, React, Tailwind CSS</span>
            </div>
            <div className="spec">
              <span className="spec-key">Scope</span>
              <span className="spec-val">One parent brand, four ventures</span>
            </div>
            <div className="spec">
              <span className="spec-key">Status</span>
              <span className="spec-val inline-flex items-center gap-2.5">
                <span className="pulse" aria-hidden="true"></span>
                Live in production
              </span>
            </div>
          </div>
        </Panel>
      </section>

      <section>
        <h2>Outcome</h2>
        <p>
          EVAA now has a corporate site that reads as a single, confident research company while still
          letting MetaKitchen, Omnis, Virtual Promoter, and OpenRift each tell their own story — a
          clean home base for an ambitious, multi-venture brand.
        </p>
      </section>
    </CaseStudy>
  );
}
