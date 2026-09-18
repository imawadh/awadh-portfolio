# Portfolio Review — Edit List (localhost:4321)

Reviewed every source file in `src/pages`, `src/components`, `src/layouts`, `src/data`, `src/utils`
against your resume. The site is well-built and mostly accurate — the issues below are specific and
line-referenced so you (or I) can fix them directly in the code.

---

## 🔴 Priority 1 — "Full Stack Developer" should read "Full Stack AI Developer"

You flagged this — your brand/title everywhere on the site says plain "Full Stack Developer," but your
LinkedIn headline and outreach messaging use **"Full Stack AI Developer."** This is your personal title/
brand and appears in **17 places** across 8 files. I've split these into two groups:

### A. Your personal title/brand — change these
These describe *you*, not a specific job, so they should match your new positioning:

| File | Line | Current | Change to |
|---|---|---|---|
| `src/layouts/BaseLayout.astro` | 12 | `title = 'Awadh Kishor Singh \| Full Stack Developer'` | `... \| Full Stack AI Developer` |
| `src/layouts/BaseLayout.astro` | 13 | `description = '... Full Stack Developer in Bengaluru ...'` | `... Full Stack AI Developer in Bengaluru ...` |
| `src/layouts/BaseLayout.astro` | 27 | `jobTitle: 'Full Stack Developer'` (structured data / SEO schema) | `jobTitle: 'Full Stack AI Developer'` |
| `src/layouts/BaseLayout.astro` | 93 | meta keywords: `"... Full Stack Developer, Next.js Developer ..."` | add/replace with `"... Full Stack AI Developer, ..."` |
| `src/components/Navbar.astro` | 33 | masthead subtitle: `Full Stack Developer` | `Full Stack AI Developer` |
| `src/components/Footer.astro` | 51 | `Full Stack Developer building production-ready web applications...` | `Full Stack AI Developer building production-ready web applications...` |
| `src/pages/index.astro` | 18 | profile field `{ key: 'Role', value: 'Full Stack Developer' }` | `value: 'Full Stack AI Developer'` |
| `src/pages/index.astro` | 28 | page title: `"Awadh Kishor Singh \| Full Stack Developer"` | `\| Full Stack AI Developer` |
| `src/pages/index.astro` | 29 | meta description | `Full Stack AI Developer in Bengaluru ...` |
| `src/pages/index.astro` | 39 | Hero H1: `Full Stack Developer building production-ready web apps.` | `Full Stack AI Developer building production-ready web apps.` |
| `src/pages/about/index.astro` | 38 | meta description | `Full Stack AI Developer in Bengaluru ...` |
| `src/pages/about/index.astro` | 47 | subhead: `Full Stack Developer based in Bengaluru — building web apps...` | `Full Stack AI Developer based in Bengaluru — building web apps...` |
| `src/pages/about/index.astro` | 77 | body copy: `I'm a Full Stack Developer and a Data Science undergraduate...` | `I'm a Full Stack AI Developer and a Data Science undergraduate...` |
| `src/pages/contact.astro` | 24 | meta description: `... Full Stack Developer in Bengaluru ...` | `... Full Stack AI Developer in Bengaluru ...` |

### B. Actual job/role titles — these are factual, leave as-is (flagging so you don't over-correct)
These describe the literal title of a specific job or project role, not your personal brand — changing
them would misrepresent what the employer/client actually called the role:

- `src/pages/experience.astro:9` — `'Full Stack Developer Intern'` (IAVerse's actual internship title)
- `src/pages/experience.astro:39` — `'Full Stack Developer (Freelance)'` (SRS Classes engagement title)
- `src/pages/index.astro:22` and `src/pages/about/index.astro:8` — `"Full Stack Developer Intern @ IAVerse"` (referencing that same internship title)
- `src/components/Footer.astro:52` — `"Most recently Full Stack Developer Intern at IAVerse..."` (same)
- `src/pages/projects/*.astro` — `role="Full Stack Developer"` / `"Solo Full Stack Developer"` / `"Sole Full Stack Developer"` / `"Freelance Full Stack Developer"` on **cryptofolio, prescripto, prsnn, axiora-learning, srs-classes** — these describe your role *on that project*, which was full-stack (not AI-specific) work. Optional to leave or tweak per-project if any of them did involve ML work — only KaiKa AI did per your resume.

*(`src/pages/experience.astro:79` meta description says "Full Stack AI Engineer at KaiKa AI" — that one's already correct, since KaiKa AI's actual job title was "Full Stack AI Engineer.")*

---

## 🟡 Priority 2 — Content to verify (not on your resume)

The site includes richer project detail than your resume — that's good — but a few claims aren't
things I can verify against your resume and are worth double-checking before they stay live:

1. **`src/data/projects.ts` — Prsnn project** (line ~78): described as *"A peer-to-peer companion
   platform live across four Indian cities with a 4.9/5 rating"* with "verified profiles," "Comfort
   Zones," and Razorpay payments. This reads as a dating/companion marketplace app — confirm this is
   the correct framing you want publicly on your portfolio (career-facing sites sometimes soften this
   kind of client project, or you may want it exactly as-is if it's not sensitive). Same copy is
   duplicated in `src/pages/projects/prsnn.astro`.
2. **`src/pages/about/index.astro` (line ~90)** mentions *"a peer-to-peer marketplace live across four
   Indian cities"* in your bio paragraph — same project, confirm intentional.
3. **Phone number** is live on `src/pages/contact.astro:15` (`+91 79850 00241`) — confirm you're fine
   having this public (some people prefer email-only on a public portfolio).

---

## 🟢 Everything else — already accurate, no changes needed

- **`src/pages/experience.astro`** — IAVerse, KaiKa AI, SRS Classes entries all match your resume's dates, bullet points, and tech tags exactly.
- **`src/pages/skills.astro`** — comprehensive, matches resume, includes ML/AI as its own category (nice — this reinforces the "AI Developer" positioning you want).
- **`src/pages/certifications.astro`** — 4 certifications + 2 achievement stats, consistent with resume achievements section.
- **`src/data/projects.ts`** — fills in the freelance project descriptions your resume left blank (Axiora Learning, EVAA Enterprises, SRS Classes, Prsnn) — good, this closes the gap I flagged earlier from the resume-only context file.
- **`src/utils/socials.ts`** — GitHub, LinkedIn, Twitter/X, Instagram, email all present and correctly pointing to your handles.
- **`src/pages/index.astro` "Currently building" section** — mobile app teaser is present and well-written, matches your "learning Android/iOS" talking point.

---

## ⚪ One technical check (not a content issue)

`public/My-Resume.pdf` on the site is dated **Aug 31** and is 103,147 bytes; the resume you uploaded to
me was 100.7 KB. These may be the same file or a slightly newer version — worth confirming the PDF
served on the site is your latest resume before you next push a deploy.

---

## Suggested order of operations

1. Do the 14 "Full Stack AI Developer" swaps in Priority 1A — this is a global find-and-replace-style change but needs care since some instances of the phrase should NOT change (Priority 1B).
2. Decide on the Prsnn project framing (Priority 2, items 1–2) — this affects both `data/projects.ts` and `pages/projects/prsnn.astro`, and your About page bio.
3. Decide whether to keep the phone number public.
4. Swap in your latest resume PDF if the one in `public/` is stale.

Want me to go ahead and make the Priority 1A edits directly in the code?
