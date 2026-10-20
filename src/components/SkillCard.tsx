interface Props {
  category: string;
  note: string;
  skills: string[];
}

export default function SkillCard({ category, note, skills }: Props) {
  return (
    <div className="grid gap-x-12 gap-y-4 border-t border-[var(--border-bright)] py-8 md:grid-cols-[5fr_7fr] md:py-10">
      <div>
        <h3 className="m-0 text-[1.7rem]">{category}</h3>
        <p className="m-0 mt-2 max-w-[36ch] text-[1rem] text-[var(--muted)]">{note}</p>
      </div>

      <ul className="skill-list m-0 flex flex-wrap content-start gap-x-1 gap-y-1">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
