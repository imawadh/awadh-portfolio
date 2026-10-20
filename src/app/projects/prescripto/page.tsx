import CaseStudy from '@/components/CaseStudy';
import Panel from '@/components/Panel';
import { pageMetadata } from '@/utils/metadata';

const frontendStack = [
  'Next.js 14',
  'React 18',
  'Tailwind CSS 3.4',
  'PostCSS',
  'Autoprefixer',
  'next-themes',
  'Axios',
  'react-icons',
  'Sharp',
  'ESLint',
  'Vercel',
];

const backendStack = [
  'Node.js 22',
  'Express 4',
  'MongoDB',
  'Mongoose 6',
  'JWT',
  'bcrypt',
  'express-validator',
  'Helmet',
  'express-rate-limit',
  'CORS',
  'dotenv',
  'Nodemon',
  'mongodb-memory-server',
  'Render',
];

const portals = [
  {
    name: 'Patient portal',
    url: 'https://awadh-patient-app.vercel.app/',
    cta: 'Open the patient app',
    desc: 'Book appointments, view issued prescriptions, and track visit history.',
  },
  {
    name: 'Doctor portal',
    url: 'https://awadh-doctor-app.vercel.app/',
    cta: 'Open the doctor app',
    desc: 'Manage appointment queues and issue digital prescriptions to patients.',
  },
  {
    name: 'Admin portal',
    url: 'https://awadh-hospital-admin-app.vercel.app/',
    cta: 'Open the admin app',
    desc: 'Hospital-wide administration: manage doctors, departments, and records.',
  },
];

const portalLinks = [
  { label: 'Open the patient app', url: 'https://awadh-patient-app.vercel.app/' },
  { label: 'Open the doctor app', url: 'https://awadh-doctor-app.vercel.app/' },
  { label: 'Open the admin app', url: 'https://awadh-hospital-admin-app.vercel.app/' },
];

const features = [
  'Three independent Next.js front ends on one shared API',
  'Role-based access control (RBAC) across every portal',
  'Appointment booking and scheduling workflow',
  'Digital prescription issuance from doctor to patient',
  'Hospital-wide administration and record management',
  'JWT authentication with bcrypt-hashed credentials',
];

export const metadata = pageMetadata({
  title: 'Prescripto — Awadh Kishor Singh',
  description: 'Case study of Prescripto, a multi-portal hospital prescription management system built with Next.js, Express, and MongoDB.',
  path: '/projects/prescripto/',
});

export default function PrescriptoPage() {
  return (
    <CaseStudy
      name="Prescripto"
      tagline="A full-stack, multi-portal hospital prescription management system: three independent Next.js portals for patients, doctors, and admins, all running on a single shared REST API."
      role="Solo Full Stack Developer"
      status="Live, three portals on Vercel"
      stackSummary="Next.js, Express, MongoDB"
      links={portalLinks}
      code="https://github.com/imawadh/Hospital-Prescripto"
    >
      <section>
        <h2>Overview</h2>
        <p>
          Prescripto is a healthcare platform that runs an entire hospital’s prescription workflow
          through three role-specific portals. Patients book appointments and receive prescriptions,
          doctors manage their queues and issue prescriptions, and admins oversee the whole system —
          every role working off the same backend, but never seeing more than it should.
        </p>
      </section>

      <section>
        <h2>The challenge</h2>
        <p>
          A hospital workflow has three very different kinds of users with very different needs and
          permission levels. Cramming them into one interface is confusing and insecure; building
          three disconnected apps means three sources of truth. The platform needed three tailored
          experiences that still shared one consistent, authoritative data layer.
        </p>
      </section>

      <section>
        <h2>Architecture</h2>
        <p>
          I architected the platform as three independent Next.js front ends (Patient, Doctor, and
          Admin) backed by a single shared Express REST API with MongoDB as the database. Each
          front end deploys separately on Vercel; the API runs on Render. Cross-origin requests between
          the portals and the API are handled with explicit CORS configuration and environment-scoped
          settings.
        </p>
        <Panel title="Three front ends, one API">
          <ol className="m-0 flex list-none flex-col p-0">
            <li className="grid gap-3 sm:grid-cols-3">
              {
                ['Patient', 'Doctor', 'Admin'].map((r, i) => (
                  <div key={i} className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3">
                    <p className="ui m-0 font-semibold text-[var(--fg)]">{r}</p>
                    <p className="ui m-0 text-[0.92rem] text-[var(--muted)]">Next.js on Vercel</p>
                  </div>
                ))
              }
            </li>
            <li className="ui ml-5 border-l-2 border-[var(--border-bright)] py-3 pl-4 text-[0.9rem] text-[var(--muted)]">
              REST over JSON
            </li>
            <li className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3">
              <p className="ui m-0 font-semibold text-[var(--fg)]">Express API</p>
              <p className="ui m-0 text-[0.92rem] text-[var(--muted)]">JWT auth and RBAC, deployed on Render</p>
            </li>
            <li className="ui ml-5 border-l-2 border-[var(--border-bright)] py-3 pl-4 text-[0.9rem] text-[var(--muted)]">
              Mongoose schemas
            </li>
            <li className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3">
              <p className="ui m-0 font-semibold text-[var(--fg)]">MongoDB</p>
              <p className="ui m-0 text-[0.92rem] text-[var(--muted)]">Patients, doctors, appointments, prescriptions</p>
            </li>
          </ol>
        </Panel>
      </section>

      <section>
        <h2>Three portals, one system</h2>
        <p>
          Each portal is a focused product in its own right — but they all read and write through the
          same API, so the data never forks.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {
            portals.map((p, i) => (
              <a key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portal card group flex flex-col p-5"
              >
                <h3 className="text-[1.15rem]">{p.name}</h3>
                <p className="m-0 mt-2 flex-1 text-base">{p.desc}</p>
                <span className="ui mt-4 font-semibold text-[var(--accent)] underline decoration-1 underline-offset-[0.2em] group-hover:decoration-2">
                  {p.cta}
                </span>
              </a>
            ))
          }
        </div>
      </section>

      <section>
        <h2>Role-based access control</h2>
        <p>
          RBAC is enforced at the API layer, not just hidden in the UI. Authentication runs on JWT, and
          every request is scoped to its role — a patient can never reach an admin endpoint, and a
          doctor can only issue prescriptions for their own appointments. This keeps appointment
          booking, prescription issuance, and hospital administration cleanly separated across all
          three portals.
        </p>
      </section>

      <section>
        <h2>Data modelling</h2>
        <p>
          Hospital records — patients, doctors, prescriptions, and appointments — are modelled in
          MongoDB through Mongoose schemas. Mongoose gives each collection a clear, validated shape
          while keeping records flexible enough to evolve, and the relationships between them (a
          prescription belongs to a doctor, an appointment to a patient) are linked by reference so
          the data stays consistent across every portal.
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
          Prescripto delivered a complete hospital prescription workflow as a single coherent system,
          built solo, end to end. The multi-portal architecture proved that role-specific front ends and
          a shared, secured API can scale together without the data ever drifting apart.
        </p>
      </section>
    </CaseStudy>
  );
}
