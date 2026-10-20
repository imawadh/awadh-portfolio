import CopyButton from '@/components/CopyButton';
import { socials } from '@/utils/socials';
import { resumeUrl } from '@/utils/site';
import { pageMetadata } from '@/utils/metadata';

const email = 'awadhkishorsingh241@gmail.com';

const channels = [
  { key: 'Phone', value: '+91 79850 00241', href: 'tel:+917985000241' },
  { key: 'Location', value: 'Bengaluru, Karnataka, India', href: null },
];

const mailtoCompose = `mailto:${email}?subject=Let%27s%20work%20together&body=Hi%20Awadh%2C%0A%0A`;

export const metadata = pageMetadata({
  title: 'Contact — Awadh Kishor Singh',
  description: 'Get in touch with Awadh Kishor Singh — Full Stack AI Developer in Bengaluru — for full-stack roles, freelance projects, or collaborations.',
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <>
      <section className="wrap band-lead pb-14 md:pb-20">
        <h1 className="page-title reveal reveal-1">Say hello</h1>
        <p className="page-lede reveal reveal-2 mt-6 max-w-[44ch]">
          Open to internships, freelance work and good conversations across full-stack, software
          engineering and AI/ML. Email is the fastest way to reach me; I usually reply within a day.
        </p>

        <div className="reveal reveal-3 mt-12 md:mt-16">
          <a href={`mailto:${email}`} className="contact-email">{email}</a>
        </div>

        <div className="reveal reveal-4 mt-8 flex flex-wrap items-center gap-3">
          <a href={mailtoCompose} className="btn btn-primary">Open mail client</a>
          <CopyButton text={email}>Copy address</CopyButton>
          <p className="ui m-0 inline-flex items-center gap-2.5 text-[1rem] text-[var(--signal)] sm:ml-3">
            <span className="pulse"></span>
            Accepting messages
          </p>
        </div>
      </section>

      <section className="wrap band band-b">
        <div className="split">
          <div className="split-head">
            <h2 className="m-0">Other ways to reach me</h2>
            <p>If email isn&rsquo;t your thing.</p>
          </div>

          <dl className="m-0 border-t border-[var(--border-bright)]">
            {
              channels.map((c, i) => (
                <div key={i} className="grid gap-1 border-b border-[var(--border)] py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <dt className="ui text-[1rem] font-semibold text-[var(--fg)]">{c.key}</dt>
                  <dd className="ui m-0 text-[1.05rem] text-[var(--fg-dim)]">
                    {c.href ? (
                      <a href={c.href} className="channel-link">
                        {c.value}
                      </a>
                    ) : (
                      c.value
                    )}
                  </dd>
                </div>
              ))
            }
            <div className="grid gap-1 border-b border-[var(--border)] py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <dt className="ui text-[1rem] font-semibold text-[var(--fg)]">Elsewhere</dt>
              <dd className="ui m-0">
                <ul className="flex flex-wrap gap-x-6 gap-y-1">
                  {
                    socials.map((social, i) => (
                      <li key={i}>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="channel-link text-[1.05rem]"
                        >
                          {social.label}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </dd>
            </div>
            <div className="grid gap-1 border-b border-[var(--border)] py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <dt className="ui text-[1rem] font-semibold text-[var(--fg)]">Résumé</dt>
              <dd className="ui m-0 text-[1.05rem]">
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="channel-link">
                  Download my résumé
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="wrap band band-a">
        <div className="split">
          <div className="split-head">
            <h2 className="m-0">Availability</h2>
            <p>What I&rsquo;m open to right now.</p>
          </div>

          <p className="m-0 max-w-[56ch] text-[1.2rem] leading-[1.65] text-[var(--fg)]">
            Currently available for internships and freelance work across full-stack, software
            engineering and AI/ML. Based in Bengaluru and happy to work remotely.
          </p>
        </div>
      </section>
    </>
  );
}
