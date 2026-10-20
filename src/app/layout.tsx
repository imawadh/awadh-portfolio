import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { pageMetadata, siteUrl } from '@/utils/metadata';
import '@/styles/global.css';
import '@/styles/components.css';
import '@/styles/pages.css';

const GTM_ID = 'GTM-MP8BCT3J';

const defaultDescription =
  'Awadh Kishor Singh — Full Stack AI Developer in Bengaluru building production-ready web apps with React, Next.js, NestJS and Node.js, with applied ML and LLM experience. Data Science undergraduate at IIT Madras.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata({
    title: 'Awadh Kishor Singh | Full Stack AI Developer',
    description: defaultDescription,
    path: '/',
  }),
  authors: [{ name: 'Awadh Kishor Singh' }],
  keywords:
    'Awadh Kishor Singh, imawadh, im_awadh_, Full Stack AI Developer, Full Stack Developer, AI Developer, Next.js Developer, React Developer, Node.js, NestJS, Bengaluru Developer, IIT Madras, Software Engineer',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#e8ebe3',
  colorScheme: 'light',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Awadh Kishor Singh',
  alternateName: ['imawadh', 'im_awadh_'],
  url: siteUrl,
  jobTitle: 'Full Stack AI Developer',
  description: defaultDescription,
  email: 'mailto:awadhkishorsingh241@gmail.com',
  telephone: '+91-79850-00241',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Indian Institute of Technology Madras',
  },
  knowsAbout: [
    'Full Stack Development',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Express.js',
    'NestJS',
    'Python',
    'scikit-learn',
    'MongoDB',
    'PostgreSQL',
    'REST API Development',
    'System Design',
    'Machine Learning',
    'Large Language Models',
    'Android Development',
    'iOS Development',
    'Data Structures and Algorithms',
  ],
  sameAs: [
    'https://github.com/imawadh',
    'https://in.linkedin.com/in/imawadh',
    'https://x.com/im_awadh_',
    'https://www.instagram.com/im_awadh_/',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Awadh Kishor Singh — Portfolio',
  url: siteUrl,
  author: { '@type': 'Person', name: 'Awadh Kishor Singh' },
  inLanguage: 'en',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,300..800&family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..500&display=swap"
        />

        {/* Structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
