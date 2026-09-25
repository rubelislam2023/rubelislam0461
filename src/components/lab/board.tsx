const DOORS = [
  { id: "about", label: "About", hint: "Research notes" },
  { id: "experience", label: "Experience", hint: "Since 2016" },
  { id: "ecosystems", label: "Ecosystems", hint: "Layer 1 and Layer 2" },
  { id: "skills", label: "Skills", hint: "Practice" },
  { id: "creative-work", label: "Creative work", hint: "Art and motion" },
  { id: "contributions", label: "Contributions", hint: "Startale, Soneium, Base" },
  { id: "research", label: "Research console", hint: "Demo readout" },
] as const;

export function SectionDoors({ active }: { active: string | null }) {
  return (
    <section aria-label="Open a section" className="px-5 pb-8">
      <div className="mx-auto max-w-5xl">
        <p className="kicker">Board</p>
        <h2 className="section-title mt-3">Open what you need</h2>
        <p className="mt-3 max-w-xl text-muted">
          The page stays short. Choose a section and it opens below.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {DOORS.map((door) => (
            <li key={door.id}>
              <a
                href={`#${door.id}`}
                aria-current={active === door.id ? "true" : undefined}
                className="door glass flex min-h-24 flex-col justify-between p-4 no-underline"
              >
                <span className="font-display text-lg text-chalk">{door.label}</span>
                <span className="mt-3 text-sm text-muted">{door.hint}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
