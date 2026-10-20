import Link from 'next/link';

export const metadata = { title: '404: This page could not be found.' };

export default function NotFound() {
  return (
    <section className="page-hero wrap band-lead">
      <h1 className="page-title reveal reveal-1">404</h1>
      <p className="page-lede reveal reveal-2 mt-6">This page could not be found.</p>
      <div className="reveal reveal-3 mt-10">
        <Link href="/projects" className="btn btn-primary">
          See my work <span className="arrow">&#8599;</span>
        </Link>
      </div>
    </section>
  );
}
