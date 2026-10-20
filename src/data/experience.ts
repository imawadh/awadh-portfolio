export interface Experience {
  type: 'work' | 'education';
  title: string;
  company: string;
  meta: string;
  date: string;
  current: boolean;
  points: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    type: 'work',
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
    type: 'work',
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
    type: 'work',
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
    type: 'education',
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
    type: 'education',
    title: 'Intermediate (Higher Secondary)',
    company: 'Central Hindu Boys’ School (B.H.U)',
    meta: 'Varanasi, India',
    date: 'Apr 2021 – Jun 2023',
    current: false,
    points: ['Higher secondary education with a focus on mathematics and science.'],
    tags: [],
  },
];

export const work = experiences.filter((e) => e.type === 'work');
export const education = experiences.filter((e) => e.type === 'education');
