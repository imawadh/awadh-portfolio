import Link from 'next/link';
import SkillCard from '@/components/SkillCard';
import { pageMetadata } from '@/utils/metadata';

const skillsData = [
  {
    category: 'Languages',
    note: 'The languages I write day to day, across web, systems and data work.',
    skills: ['Python', 'C++', 'Java', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    note: 'Component systems, routing and interface work that stays fast on real devices.',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Responsive Web Design',
    ],
  },
  {
    category: 'Backend',
    note: 'APIs, services and the server-side architecture products actually run on.',
    skills: [
      'Node.js',
      'Express.js',
      'NestJS',
      'Django',
      'Flask',
      'Socket.io',
      'REST API Development',
    ],
  },
  {
    category: 'Databases',
    note: 'Relational and document stores, modelled for the queries a product needs.',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Prisma', 'Mongoose'],
  },
  {
    category: 'Core CS',
    note: 'The fundamentals behind every architectural decision I make.',
    skills: [
      'Data Structures & Algorithms',
      'OOP',
      'System Design',
      'Scalable Architecture',
      'API Security',
    ],
  },
  {
    category: 'Machine Learning & AI',
    note: 'Applied machine learning: training and shipping models that drive product features.',
    skills: ['Python', 'scikit-learn', 'Applied ML model training', 'LLMs'],
  },
  {
    category: 'Monitoring & Analytics',
    note: 'How I know a product works once it leaves my machine.',
    skills: ['Mixpanel', 'PostHog', 'Google Analytics', 'Sentry'],
  },
  {
    category: 'Tools & Platforms',
    note: 'Where the code is written, deployed, paid for and kept alive.',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Linux',
      'VS Code',
      'Vercel',
      'Render',
      'AWS Amplify',
      'AWS EC2',
      'Razorpay',
    ],
  },
  {
    category: 'Currently learning',
    note: 'Extending the same end-to-end approach to mobile, with a first app in development.',
    skills: ['Android', 'iOS', 'Mobile development'],
  },
];

export const metadata = pageMetadata({
  title: 'Skills & Technologies — Awadh Kishor Singh',
  description: 'The full tech stack of Awadh Kishor Singh — React, Next.js, TypeScript, Node.js, Express, NestJS, MongoDB, PostgreSQL, Python, scikit-learn, AWS, and the tools behind production web apps.',
  path: '/skills/',
});

export default function SkillsPage() {
  return (
    <>
      {/* ───────────── LEAD ───────────── */}
      <section className="wrap band-lead pb-12 md:pb-16">
        <h1 className="page-title reveal reveal-1">Skills</h1>
        <p className="page-lede reveal reveal-2 mt-6 max-w-[40ch]">
          The languages, frameworks and tools I reach for across full-stack development, from shipping
          UI to securing APIs to monitoring what happens in production.
        </p>
      </section>

      {/* ───────────── THE WORKING STACK ───────────── */}
      <section className="wrap band band-b">
        <h2 className="m-0">The working stack</h2>
        <p className="m-0 mt-3 max-w-[48ch] text-[var(--muted)]">
          Grouped by where each one sits in a product.
        </p>
        <div className="mt-10 border-b border-[var(--border-bright)]">
          {
            skillsData.map((group, i) => (
              <SkillCard key={i} category={group.category} note={group.note} skills={group.skills} />
            ))
          }
        </div>
      </section>

      {/* ───────────── NEXT ───────────── */}
      <section className="wrap band band-a">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="m-0 max-w-[48ch]">
            See these tools at work in shipped products, or tell me what you&rsquo;re building.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">Start a conversation</Link>
            <Link href="/projects" className="btn btn-ghost">See my work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
