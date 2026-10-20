import Link from 'next/link';
import type { Project } from '@/data/projects';

/**
 * A project as a card: its live site in a browser frame on a coloured ground,
 * then name, Personal/Freelance label, tagline, role, description, tags and links.
 */
export default function WorkCard({ project }: { project: Project }) {
  const { name, tagline, role, description, tags, type, image, ground, caseStudy, live, code } = project;

  return (
    <article className="work-card">
      <Link href={caseStudy} className="work-hit" aria-label={`${name} case study`}>
        <div className="work-ground" style={{ background: ground }}>
          {image ? (
            <div className="browser work-shot">
              <div className="browser-bar">
                <span className="browser-dots">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <img src={image} alt={`${name} home page`} loading="lazy" width={1280} height={800} />
            </div>
          ) : (
            <div className="work-type" aria-hidden="true">
              {name}
            </div>
          )}
        </div>
      </Link>
      <div className="work-meta">
        <h3 className="work-name">{name}</h3>
        <span className="chip">{type === 'personal' ? 'Personal' : 'Freelance'}</span>
      </div>
      <p className="work-line">{tagline}</p>
      <p className="work-role">{role}</p>
      <p className="work-desc">{description}</p>
      <ul className="work-tags">
        {tags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>
      <div className="work-links">
        <Link href={caseStudy} className="work-link work-link-main">
          Read the case study
        </Link>
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="work-link">
            Visit the site
          </a>
        )}
        {code && (
          <a href={code} target="_blank" rel="noopener noreferrer" className="work-link">
            Source on GitHub
          </a>
        )}
      </div>
    </article>
  );
}
