import CertCard from '@/components/CertCard';
import { pageMetadata } from '@/utils/metadata';

const certifications = [
  {
    date: 'Jan 2026',
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Dr. Angela Yu, Udemy',
    details: '70 hours of REST API design, backend architecture, and SQL and NoSQL databases.',
    url: 'https://www.udemy.com/certificate/UC-16b07d74-aa19-45d3-924c-41b9e7fae772/',
  },
  {
    date: 'Apr 2025',
    title: 'Python Certification',
    issuer: 'Intellipaat',
    details: 'Professional Python programming certification.',
    url: 'https://intellipaat.com/academy/certificate-link/?Yz0xNTQzJnU9MTY2Njk4JmV4dD0x',
  },
  {
    date: 'Mar 2025',
    title: 'Mathematics for Data Science & ML Bootcamp',
    issuer: 'Krish Naik, Udemy',
    details: 'Mathematical foundations for machine learning.',
    url: 'https://www.udemy.com/certificate/UC-d4ef6961-95f9-4912-be28-c2c0cf02974a/',
  },
  {
    date: 'Jan 2025',
    title: 'Complete Data Analysis Bootcamp',
    issuer: 'Krish Naik, Udemy',
    details: 'Comprehensive data analysis training.',
    url: 'https://www.udemy.com/certificate/UC-1590fb55-374f-406a-8285-014f7a1b1088/',
  },
];

const achievements = [
  {
    value: '1,000+',
    label: 'DSA problems solved',
    note: 'On LeetCode and Codeforces, across trees, graphs and dynamic programming.',
  },
  {
    value: '2,100+',
    label: 'GitHub commits',
    note: 'Across personal projects, freelance work and internship contributions.',
  },
];

export const metadata = pageMetadata({
  title: 'Certifications & Achievements — Awadh Kishor Singh',
  description: 'Certifications and achievements of Awadh Kishor Singh — full-stack web development, Python, data science, 1,000+ DSA problems, and 2,100+ GitHub commits.',
  path: '/certifications/',
});

export default function CertificationsPage() {
  return (
    <>
      <section className="page-hero wrap band-lead pb-12 md:pb-16">
        <h1 className="page-title reveal reveal-1 max-w-[12ch]">Proof of the work</h1>
        <p className="page-lede reveal reveal-2 mt-6 max-w-[44ch]">
          Verified certifications and measurable achievements from continuous learning across
          full-stack development, Python and data science.
        </p>
      </section>

      <section className="wrap band band-b">
        <div className="split">
          <div className="split-head">
            <h2 className="m-0">Achievements</h2>
            <p>Practice that adds up, counted.</p>
          </div>

          <div className="grid gap-x-12 border-t border-[var(--border-bright)] sm:grid-cols-2">
            {
              achievements.map((a, i) => (
                <div key={i} className="border-b border-[var(--border)] py-8">
                  <span className="numeral block text-[3.4rem] text-[var(--accent)] md:text-[4.4rem]">
                    {a.value}
                  </span>
                  <p className="ui m-0 mt-4 text-[1.15rem] font-semibold text-[var(--fg)]">{a.label}</p>
                  <p className="m-0 mt-1.5 max-w-[36ch] text-[1rem] text-[var(--muted)]">{a.note}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="wrap band band-a">
        <div className="split">
          <div className="split-head">
            <h2 className="m-0">Certifications</h2>
            <p>{certifications.length} verified, each linked to its issuer.</p>
          </div>

          <div className="flex flex-col">
            {
              certifications.map((cert, i) => (
                <CertCard key={i}
                  date={cert.date}
                  title={cert.title}
                  issuer={cert.issuer}
                  details={cert.details}
                  url={cert.url}
                />
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
}
