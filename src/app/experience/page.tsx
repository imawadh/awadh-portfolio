import Link from 'next/link';
import TimelineItem from '@/components/TimelineItem';
import { resumeUrl } from '@/utils/site';
import { pageMetadata } from '@/utils/metadata';

const experiences = [
  {
    type: 'work' as const,
    title: 'Full Stack Developer Intern',
    company: 'IAVerse',
    meta: 'Remote',
    date: 'Feb 2026 – Aug 2026',
    current: false,
    points: [
      'Migrated a 1,200+ page WordPress site to a custom-built Next.js application, rebuilding content architecture, routing and UI components from scratch with zero data loss.',
      'Engineered a scalable page and component system to support 1,200+ content pages, delivering measurable gains in performance, SEO and long-term maintainability over the WordPress baseline.',
      'Instrumented the platform with Mixpanel and Sentry, using step-level error tracking to resolve 5–6 recurring production issues and drive data-informed product decisions.',
      'Developed a doctor–patient booking and management module with supporting REST APIs, handling appointment scheduling, patient records and provider workflows.',
      'Led SEO, GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) work, increasing organic traffic by 5–6%.',
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'NestJS', 'Mixpanel', 'Sentry'],
  },
  {
    type: 'work' as const,
    title: 'Full Stack AI Engineer',
    company: 'KaiKa AI',
    meta: 'Remote',
    date: 'Nov 2025 – Feb 2026',
    current: false,
    points: [
      'Engineered the full-stack web application for KaiKa AI’s workforce alignment platform, from the React front end through to the Node.js and Express API layer.',
      'Trained a machine learning model in Python and scikit-learn to generate employee alignment scores, powering the platform’s core scoring engine.',
      'Deployed the application across AWS Amplify (frontend) and AWS EC2 (backend), handling environment configuration for production.',
    ],
    tags: ['Next.js', 'React', 'Node.js', 'Express.js', 'Python', 'scikit-learn', 'AWS'],
  },
  {
    type: 'work' as const,
    title: 'Full Stack Developer (Freelance)',
    company: 'SRS Classes',
    meta: 'Remote',
    date: 'Nov 2024 – Dec 2024',
    current: false,
    points: [
      'Built and shipped a responsive educational web application with Next.js and React, supporting 1,500+ daily active users with stable cross-device performance.',
      'Reduced page load times by ~30% through server-side rendering optimisations, asset compression and SEO best practices.',
      'Owned the full product lifecycle, from feature development and cloud deployment to monitoring and post-launch maintenance, as a solo contractor over one month.',
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'MongoDB', 'Vercel'],
  },
  {
    type: 'education' as const,
    title: 'BS in Data Science & Applications',
    company: 'IIT Madras',
    meta: 'Chennai, India',
    date: 'Apr 2024 – Jun 2028',
    current: true,
    points: [
      'Undergraduate degree focused on data science, statistics, programming and applied machine learning.',
      'Current CGPA: 8.27.',
    ],
    tags: ['Python', 'Statistics', 'Machine Learning', 'DSA'],
  },
  {
    type: 'education' as const,
    title: 'Intermediate (Higher Secondary)',
    company: 'Central Hindu Boys’ School (B.H.U)',
    meta: 'Varanasi, India',
    date: 'Apr 2021 – Jun 2023',
    current: false,
    points: ['Higher secondary education with a focus on mathematics and science.'],
    tags: [],
  },
];

const work = experiences.filter((e) => e.type === 'work');
const education = experiences.filter((e) => e.type === 'education');

export const metadata = pageMetadata({
  title: 'Experience & Education — Awadh Kishor Singh',
  description: 'Work experience and education of Awadh Kishor Singh — Full Stack Developer Intern at IAVerse, Full Stack AI Engineer at KaiKa AI, freelance work for SRS Classes, and a BS in Data Science at IIT Madras.',
  path: '/experience/',
});

export default function ExperiencePage() {
  return (
    <>
      {/* ───────────── LEAD ───────────── */}
      <section className="wrap band-lead pb-12 md:pb-16">
        <h1 className="page-title reveal reveal-1">Experience</h1>
        <p className="page-lede reveal reveal-2 mt-6 max-w-[40ch]">
          A record of shipped work: professional roles and academic background, most recent first.
        </p>
        <div className="reveal reveal-3 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <p className="ui m-0 inline-flex items-center gap-2.5 text-[1.05rem] text-[var(--fg)]">
            <span className="pulse"></span>
            Open to internships and freelance work in software engineering, full-stack and AI/ML.
          </p>
          <Link href="/contact" className="link ui shrink-0 text-[1.02rem] font-semibold">Get in touch</Link>
        </div>
      </section>

      {/* ───────────── WORK ───────────── */}
      <section className="wrap band band-b">
        <h2 className="m-0">Work</h2>
        <p className="m-0 mt-3 max-w-[48ch] text-[var(--muted)]">
          Internships and freelance roles where I built and shipped production software.
        </p>
        <div className="mt-10 border-b border-[var(--border-bright)]">
          {
            work.map((exp, i) => (
              <TimelineItem key={i}
                type={exp.type}
                title={exp.title}
                company={exp.company}
                meta={exp.meta}
                date={exp.date}
                current={exp.current}
                points={exp.points}
                tags={exp.tags}
              />
            ))
          }
        </div>
      </section>

      {/* ───────────── EDUCATION ───────────── */}
      <section className="wrap band band-a">
        <h2 className="m-0">Education</h2>
        <p className="m-0 mt-3 max-w-[48ch] text-[var(--muted)]">
          Where the fundamentals came from.
        </p>
        <div className="mt-10 border-b border-[var(--border-bright)]">
          {
            education.map((exp, i) => (
              <TimelineItem key={i}
                type={exp.type}
                title={exp.title}
                company={exp.company}
                meta={exp.meta}
                date={exp.date}
                current={exp.current}
                points={exp.points}
                tags={exp.tags}
              />
            ))
          }
        </div>
      </section>

      {/* ───────────── RÉSUMÉ ───────────── */}
      <section className="wrap band band-b">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="m-0">Résumé</h2>
            <p className="m-0 mt-3 max-w-[48ch] text-[var(--muted)]">
              Want the full picture on one page? Grab the PDF.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Download résumé
            </a>
            <Link href="/projects" className="btn btn-ghost">See my work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
