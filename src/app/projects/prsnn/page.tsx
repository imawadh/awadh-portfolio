import CaseStudy from '@/components/CaseStudy';
import Panel from '@/components/Panel';
import { pageMetadata } from '@/utils/metadata';

const frontendStack = [
  'Next.js 16',
  'React 19',
  'Tailwind CSS v4',
  'PostCSS',
  'Axios',
  'Socket.io Client',
  'Sentry',
  'Vitest',
  'Testing Library',
  'ESLint v9',
];

const backendStack = [
  'Node.js (ESM)',
  'Express 5',
  'MongoDB',
  'Mongoose 9',
  'JWT',
  'Bcrypt',
  'Socket.io',
  'Razorpay',
  'Multer',
  'Cloudinary',
  'Resend',
  'Zod',
  'Helmet',
  'CORS',
  'express-rate-limit',
  'Sentry',
  'Vitest',
  'Supertest',
  'Nodemon',
  'Morgan',
];

const modes = [
  { name: 'Don’t Go Alone', desc: 'Find a companion for an outing you’d rather not do solo.' },
  { name: 'Sit With Me', desc: 'Quiet company: someone to simply be present alongside you.' },
  { name: 'Be Around', desc: 'Low-key presence nearby without a structured plan.' },
  { name: 'Explore Together', desc: 'Pair up to discover places and experiences in the city.' },
];

const stats = [
  { value: '4', label: 'Cities live' },
  { value: '500+', label: 'Users' },
  { value: '4.9/5', label: 'User rating' },
];

const bookingFlow = [
  { step: 'Discover by mode', note: 'The user picks one of the four discovery modes.' },
  { step: 'Open a verified profile', note: 'Only vetted companions are bookable.' },
  { step: 'Pick a live slot', note: 'Slots reflect current availability.' },
  { step: 'Pay with Razorpay', note: 'Payment runs inside a secure, compliant flow.' },
  { step: 'Availability updates in real time', note: 'Socket.io removes the slot for everyone.' },
  { step: 'Booking confirmed', note: 'Both sides see the confirmed booking.' },
];

const features = [
  'Four discovery modes for different companionship needs',
  'Verified companion profiles to build trust',
  'Availability booking with a real-time slot system',
  'Secure payments integrated through Razorpay',
  'End-to-end companion onboarding flow',
  'User authentication and account management',
];

export const metadata = pageMetadata({
  title: 'Prsnn — Awadh Kishor Singh',
  description: 'Case study of Prsnn, a peer-to-peer companion marketplace built with Next.js, Node.js, MongoDB, and Razorpay — live across Mumbai, Bangalore, Delhi, and Hyderabad.',
  path: '/projects/prsnn/',
});

export default function PrsnnPage() {
  return (
    <CaseStudy
      name="Prsnn"
      tagline="A peer-to-peer companion marketplace live across four Indian cities, with 500+ users, a 4.9/5 rating, and a real-time availability system, built end to end as the sole developer."
      role="Sole Full Stack Developer"
      status="Live in four cities"
      stackSummary="Next.js, Node, MongoDB, Razorpay"
      live="https://www.prsnn.com/"
    >
      <section>
        <h2>Overview</h2>
        <p>
          Prsnn is a peer-to-peer companion marketplace. It connects people who want company for an
          outing, an errand, or simply for presence with verified companions available near them. It
          is live across four Indian cities (Mumbai, Bangalore, Delhi, and Hyderabad) and has grown
          to 500+ users with a 4.9/5 rating.
        </p>
      </section>

      <section>
        <h2>By the numbers</h2>
        <dl className="grid grid-cols-3 gap-4 border-t border-[var(--border-bright)] pt-5">
          {
            stats.map((s, i) => (
              <div key={i} className="flex flex-col-reverse justify-end">
                <dt className="ui mt-2 text-[0.95rem] text-[var(--muted)]">{s.label}</dt>
                <dd className="numeral m-0 text-[clamp(1.9rem,6vw,3.2rem)] text-[var(--fg)]">{s.value}</dd>
              </div>
            ))
          }
        </dl>
      </section>

      <section>
        <h2>The challenge</h2>
        <p>
          “Companionship” is not one need. Sometimes people want an active partner to explore a
          city, sometimes just quiet presence. A single generic “book a person” flow flattens all of
          that. Prsnn needed discovery that respects those different intents, and — because it puts
          strangers in contact — trust and safety built in from the first screen.
        </p>
      </section>

      <section>
        <h2>Multi-mode discovery</h2>
        <p>
          Instead of one search box, Prsnn offers four distinct modes, each shaping how companions are
          matched and presented.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {
            modes.map((m, i) => (
              <div key={i} className="card p-5 md:p-6">
                <h3 className="text-[1.15rem]">{m.name}</h3>
                <p className="m-0 mt-2 text-base">{m.desc}</p>
              </div>
            ))
          }
        </div>
      </section>

      <section>
        <h2>Real-time availability</h2>
        <p>
          Bookings only work if availability is honest. I built a real-time availability system on
          Socket.io so companion slots reflect the current state — when a slot is taken it disappears
          for everyone instantly, and users book against live data rather than a stale calendar.
          Verified profiles sit on top of this, so every bookable companion has been vetted.
        </p>
        <Panel title="Booking flow">
          <ol className="m-0 flex list-none flex-col p-0">
            {
              bookingFlow.map((b, i) => (
                <li key={i} className="flex gap-4 border-t border-[var(--border)] py-3 first:border-t-0 first:pt-0 last:pb-0">
                  <span className="numeral w-6 shrink-0 text-[1.25rem] text-[var(--accent)]">{i + 1}</span>
                  <div>
                    <p className="ui m-0 font-semibold text-[var(--fg)]">{b.step}</p>
                    <p className="ui m-0 text-[0.92rem] text-[var(--muted)]">{b.note}</p>
                  </div>
                </li>
              ))
            }
          </ol>
        </Panel>
      </section>

      <section>
        <h2>Payments and onboarding</h2>
        <p>
          Payments are handled through a secure Razorpay integration, so money changes hands inside a
          trusted, compliant flow. On the supply side, I built the full companion onboarding journey
          end to end (sign-up, verification, and going live) alongside user authentication for the
          people booking them.
        </p>
      </section>

      <section>
        <h2>Key features</h2>
        <ul className="prose-serif grid gap-x-8 sm:grid-cols-2">
          {features.map((f, i) => <li key={i} className="border-t border-[var(--border)] py-3">{f}</li>)}
        </ul>
      </section>

      <section>
        <h2>Tech stack</h2>
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-[1.05rem]">Front end</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {frontendStack.map((t, i) => <li key={i} className="chip">{t}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-[1.05rem]">Back end</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {backendStack.map((t, i) => <li key={i} className="chip">{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Outcome</h2>
        <p>
          Built solo and shipped to production, Prsnn reached 500+ users across four cities with a
          4.9/5 rating — evidence that thoughtful, intent-aware discovery and trust-first design
          resonate with real people, not just in a spec.
        </p>
      </section>
    </CaseStudy>
  );
}
