import { SKILL_GROUPS } from "@/data/profile";

export function Skills() {
  return (
    <section id="practice" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24 xl:pl-16">
        <div className="max-w-xl">
          <p className="kicker text-accent">03 — Practice</p>
          <h2 className="headline mt-4">What the notes are made of.</h2>
          <p className="mt-4 text-muted">
            Not a stack of logos. The craft is reading a market carefully and publishing the
            useful version before the day moves on.
          </p>
        </div>
        <div className="practice-grid mt-12">
          {SKILL_GROUPS.map((group) => (
            <article key={group.label} className="border-t border-ink pt-5">
              <header className="flex items-baseline justify-between">
                <h3 className="font-serif text-3xl">{group.label}</h3>
                <span className="kicker text-muted">{group.index}</span>
              </header>
              <ul className="mt-4">
                {group.items.map((item) => (
                  <li key={item.name} className="border-b border-line py-4">
                    <p className="font-medium">{item.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
