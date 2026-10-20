import CaseStudy from '@/components/CaseStudy';
import Panel from '@/components/Panel';
import { pageMetadata } from '@/utils/metadata';

const frontendStack = [
  'Next.js 14',
  'React 18',
  'Tailwind CSS 3.4',
  'PostCSS',
  'Autoprefixer',
  'Axios',
  'next-themes',
  'react-icons',
  'Sharp',
  'ESLint',
  'Vercel',
];

const backendStack = [
  'Node.js 22',
  'Express 4',
  'Mongoose 6',
  'MongoDB',
  'bcrypt',
  'jsonwebtoken',
  'Helmet',
  'express-rate-limit',
  'express-validator',
  'CORS',
  'dotenv',
  'Nodemon',
  'mongodb-memory-server',
  'Render',
];

const security = [
  { k: 'JWT', v: 'Stateless token-based authentication' },
  { k: 'bcrypt', v: 'Salted password hashing at rest' },
  { k: 'Helmet', v: 'Hardened HTTP security headers' },
  { k: 'Rate limiting', v: 'express-rate-limit guards against API abuse' },
  { k: 'Validation', v: 'express-validator sanitises every input' },
  { k: 'CORS', v: 'Scoped cross-origin access control' },
];

const features = [
  'Live cryptocurrency prices via the CoinGecko API',
  'Interactive TradingView charts embedded client-side',
  'Virtual demo trading, with every user starting at $10,000',
  'Holdings replayed from buy and sell transaction history',
  'JWT auth with bcrypt-hashed credentials',
  'Light and dark theme support via next-themes',
];

export const metadata = pageMetadata({
  title: 'Cryptofolio — Awadh Kishor Singh',
  description: 'Case study of Cryptofolio, a cryptocurrency portfolio management platform built with Next.js 14, Express, MongoDB, and the CoinGecko API.',
  path: '/projects/cryptofolio/',
});

export default function CryptofolioPage() {
  return (
    <CaseStudy
      name="Cryptofolio"
      tagline="A decoupled MERN-stack crypto portfolio platform: a Next.js 14 front end, an Express REST API, and a virtual demo-trading engine that computes holdings by replaying transaction history."
      role="Full Stack Developer"
      status="Live on Vercel and Render"
      stackSummary="Next.js 14, Express, MongoDB"
      live="https://crytofolio.vercel.app/"
      code="https://github.com/imawadh/crytofolio"
    >
      <section>
        <h2>Overview</h2>
        <p>
          Cryptofolio is a cryptocurrency portfolio platform where users track digital assets and
          practise trading without risking real money. It pairs live market data with a virtual
          trading engine — every account starts with a $10,000 balance, and holdings are derived
          entirely from the user’s recorded buy and sell history.
        </p>
      </section>

      <section>
        <h2>The challenge</h2>
        <p>
          Crypto investors juggling holdings across exchanges had no single, calm view of their
          position — and no safe way to test a strategy before committing capital. The product needed
          live prices, a clean portfolio view, and a trading sandbox, all without a heavy backend or
          the risk of stale, drifting balances.
        </p>
      </section>

      <section>
        <h2>Architecture</h2>
        <p>
          Cryptofolio is a monorepo with separate <code>client/</code> and <code>server/</code>
          directories. The client is a Next.js 14 App Router front end on Vercel; the server is an
          Express REST API on Render following an MVC structure (models, routes, controllers), with
          MongoDB accessed through Mongoose. The two talk over HTTP/JSON via Axios, while CoinGecko
          prices and TradingView charts are pulled straight into the browser to keep the backend lean.
        </p>
        <Panel title="Monorepo layout">
          <ol className="m-0 flex list-none flex-col p-0">
            <li className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3">
              <p className="ui m-0 font-semibold text-[var(--fg)]">client/: Next.js 14, App Router</p>
              <p className="ui m-0 text-[0.92rem] text-[var(--muted)]">
                Deployed on Vercel. CoinGecko prices and TradingView charts load in the browser.
              </p>
            </li>
            <li className="ui ml-5 border-l-2 border-[var(--border-bright)] py-3 pl-4 text-[0.9rem] text-[var(--muted)]">
              HTTP and JSON via Axios
            </li>
            <li className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3">
              <p className="ui m-0 font-semibold text-[var(--fg)]">server/: Express REST API</p>
              <p className="ui m-0 text-[0.92rem] text-[var(--muted)]">
                Deployed on Render. MVC structure: models, routes, controllers.
              </p>
            </li>
            <li className="ui ml-5 border-l-2 border-[var(--border-bright)] py-3 pl-4 text-[0.9rem] text-[var(--muted)]">
              Mongoose schemas
            </li>
            <li className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3">
              <p className="ui m-0 font-semibold text-[var(--fg)]">MongoDB</p>
              <p className="ui m-0 text-[0.92rem] text-[var(--muted)]">Users and immutable transactions</p>
            </li>
          </ol>
        </Panel>
      </section>

      <section>
        <h2>The demo trading engine</h2>
        <p>
          Rather than storing a mutable balance that can drift out of sync, the engine treats every
          buy and sell as an immutable transaction in MongoDB. A user’s current coin holdings and
          portfolio value are computed dynamically by replaying that transaction history — so the
          portfolio is always a provable function of what the user actually did, and never a number
          that can quietly go wrong.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>The API is treated as a public surface and hardened accordingly.</p>
        <Panel title="API hardening">
          <div className="flex flex-col gap-3.5">
            {
              security.map((s, i) => (
                <div key={i} className="spec">
                  <span className="spec-key">{s.k}</span>
                  <span className="spec-val">{s.v}</span>
                </div>
              ))
            }
          </div>
        </Panel>
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
          Cryptofolio is deployed and used for portfolio tracking and risk-free practice trading. The
          replay-based engine and offloaded third-party calls keep the backend lean while the platform
          stays accurate — a focused tool that does one thing, dependably.
        </p>
      </section>
    </CaseStudy>
  );
}
