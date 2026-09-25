import { ArrowUpRight } from "lucide-react";
import { ISSUE, PROFILE } from "@/data/profile";

export function Hero() {
  return (
    <section className="border-b border-line" id="top">
      <div className="hero-grid mx-auto max-w-6xl px-5 py-14 md:py-20 xl:pl-16">
        <div className="hero-mast">
          <p className="kicker text-accent">Vol. 01 — Base ecosystem</p>
          <h1 className="display mt-5 text-ink">
            Rubel
            <span className="block italic text-accent">Islam</span>
          </h1>
          <p className="mt-8 max-w-xl font-serif text-2xl leading-snug text-ink">
            {PROFILE.role}. I keep a public record of tokenized stocks, wallets, and the
            products that appear once equities can live onchain.
          </p>
          <p className="mt-5 max-w-xl text-muted">
            {PROFILE.followers} readers on X. Blue verified. The work is the archive — daily
            notes, not a pitch deck.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex min-h-11 items-center bg-ink px-5 text-sm font-medium text-sheet no-underline hover:bg-accent"
            >
              Read the notes
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center border border-ink px-5 text-sm font-medium text-ink no-underline hover:bg-ink hover:text-sheet"
            >
              Write to me
            </a>
          </div>
        </div>
        <aside className="hero-issue border border-line bg-sheet">
          <div className="flex items-baseline justify-between border-b border-line px-5 py-3">
            <p className="kicker text-muted">In this issue</p>
            <p className="font-serif text-sm italic text-muted">Four from September</p>
          </div>
          <ol>
            {ISSUE.map((note) => (
              <li key={note.id} className="border-b border-line last:border-b-0">
                <a
                  href={`#note-${note.id}`}
                  className="group flex items-start gap-4 px-5 py-4 no-underline"
                >
                  <span className="font-serif text-sm text-accent">{note.index}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-lg leading-snug text-ink group-hover:text-accent">
                      {note.title}
                    </span>
                    <span className="kicker mt-1 block text-muted">{note.category}</span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1 size-4 shrink-0 text-muted group-hover:text-accent"
                  />
                </a>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
