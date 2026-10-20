/**
 * A bordered figure block — the editorial replacement for the old terminal
 * window. Used for stack breakdowns, architecture notes, and spec tables.
 */
interface Props {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Panel({ title = 'Detail', className = '', children }: Props) {
  return (
    <figure className={`panel ${className}`}>
      <figcaption className="panel-head">
        <span className="panel-title">{title}</span>
      </figcaption>
      <div className="panel-body">{children}</div>
    </figure>
  );
}
