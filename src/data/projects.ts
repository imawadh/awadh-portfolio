export type ProjectType = 'personal' | 'freelance';

export interface Project {
  slug: string;
  type: ProjectType;
  index: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  status: string;
  featured: boolean;
  live?: string;
  code?: string;
  caseStudy: string;
}

export const projects: Project[] = [
  /* ───────── PERSONAL ───────── */
  {
    slug: 'prescripto',
    type: 'personal',
    index: '01',
    name: 'Prescripto',
    tagline: 'Multi-portal hospital prescription system',
    description:
      'A full-stack healthcare platform with three independent Next.js portals — Patient, Doctor, and Admin — running on a shared Node/Express REST API, with role-based access control enforced across every portal.',
    tags: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    status: 'deployed',
    featured: true,
    caseStudy: '/projects/prescripto',
  },
  {
    slug: 'cryptofolio',
    type: 'personal',
    index: '02',
    name: 'Cryptofolio',
    tagline: 'Crypto portfolio management platform',
    description:
      'A decoupled MERN platform — Next.js 14 frontend, Express REST API — with live CoinGecko prices, TradingView charts, and a virtual demo-trading engine that computes holdings by replaying buy/sell history.',
    tags: ['Next.js 14', 'React 18', 'Express', 'MongoDB Atlas', 'JWT', 'CoinGecko API'],
    status: 'live',
    featured: true,
    live: 'https://task-cryptopolio-main-two.vercel.app/',
    code: 'https://github.com/imawadh/task-cryptopolio-main',
    caseStudy: '/projects/cryptofolio',
  },

  /* ───────── FREELANCE ───────── */
  {
    slug: 'axiora-learning',
    type: 'freelance',
    index: '01',
    name: 'Axiora Learning',
    tagline: 'System-driven academic coaching institute',
    description:
      'A marketing and information site for Axiora Learning, a Bengaluru coaching institute specialising in IGCSE, O Level, AS & A Level, and subject-mastery programs. Built with Next.js for a fast, structured experience.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Responsive Design', 'Vercel'],
    status: 'live',
    featured: false,
    live: 'https://www.axioralearning.com/',
    caseStudy: '/projects/axiora-learning',
  },
  {
    slug: 'evaa',
    type: 'freelance',
    index: '02',
    name: 'EVAA Enterprises',
    tagline: 'AI research & ventures holding company',
    description:
      'The corporate site for EVAA, a Singapore-based AI research and venture studio. It presents the parent brand and its four autonomous ventures — MetaKitchen, Omnis, Virtual Promoter, and OpenRift — under one identity.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Responsive Design', 'Vercel'],
    status: 'live',
    featured: true,
    live: 'https://www.evaa.enterprises/',
    caseStudy: '/projects/evaa',
  },
  {
    slug: 'srs-classes',
    type: 'freelance',
    index: '03',
    name: 'The SRS Classes',
    tagline: 'Ed-tech platform · 1,500+ daily users',
    description:
      'A responsive ed-tech web app built with Next.js and React for BPSC and competitive-exam aspirants, serving 1,500+ daily active users. SSR optimisations and asset compression cut page load times by ~30%.',
    tags: ['Next.js', 'React', 'Tailwind', 'Node.js', 'MongoDB'],
    status: 'live',
    featured: false,
    live: 'https://srsclasses.com/',
    code: 'https://github.com/imawadh/srs-website',
    caseStudy: '/projects/srs-classes',
  },
  {
    slug: 'prsnn',
    type: 'freelance',
    index: '04',
    name: 'Prsnn',
    tagline: 'Peer-to-peer companion marketplace',
    description:
      'A peer-to-peer companion platform live across four Indian cities with a 4.9/5 rating. Multi-mode discovery, verified profiles with Comfort Zones, availability booking, and secure Razorpay payments.',
    tags: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
    status: 'live',
    featured: true,
    live: 'https://www.prsnn.com/',
    caseStudy: '/projects/prsnn',
  },
];

export const personalProjects = projects.filter((p) => p.type === 'personal');
export const freelanceProjects = projects.filter((p) => p.type === 'freelance');
export const featuredProjects = projects.filter((p) => p.featured);
