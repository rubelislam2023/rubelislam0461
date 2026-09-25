import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, NOTES, type Filter } from "@/data/profile";

const FILTERS: Filter[] = ["All", ...CATEGORIES];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const notes = useMemo(
    () => (filter === "All" ? NOTES : NOTES.filter((note) => note.category === filter)),
    [filter],
  );

  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24 xl:pl-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="kicker text-accent">02 — Selected work</p>
            <h2 className="headline mt-4">Notes from the timeline.</h2>
            <p className="mt-4 text-muted">
              Published threads on an asymmetric grid — wide notes beside narrow ones. Hover a
              card for the lede. Filter, and the columns reflow. Each card links to the original post.
            </p>
          </div>
          <p className="font-serif text-5xl leading-none text-ink" aria-hidden="true">
            {String(notes.length).padStart(2, "0")}
          </p>
        </div>

        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-1"
          role="group"
          aria-label="Filter notes by category"
        >
          {FILTERS.map((item) => {
            const count = item === "All" ? NOTES.length : NOTES.filter((n) => n.category === item).length;
            const active = filter === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(item)}
                className={
                  "inline-flex min-h-11 shrink-0 items-center gap-2 border px-4 text-sm " +
                  (active
                    ? "border-ink bg-ink text-sheet"
                    : "border-line bg-sheet text-ink hover:border-ink")
                }
              >
                {item}
                <span className={active ? "text-sheet/80" : "text-muted"}>{count}</span>
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {notes.length} {notes.length === 1 ? "note" : "notes"}
          {filter === "All" ? "" : ` in ${filter}`}
        </p>

        <ul key={filter} className="note-grid mt-8">
          {notes.map((note) => (
            <li key={note.id} id={`note-${note.id}`} className="note-in h-full min-w-0 scroll-mt-24">
              <a
                href={note.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "group flex h-full flex-col border border-line no-underline " +
                  (note.ink ? "bg-ink text-sheet" : "bg-sheet text-ink")
                }
              >
                <div className="note-plate relative min-h-72 flex-1 overflow-hidden">
                  <div className="relative h-full">
                    <p
                      className={
                        "ghost-word pointer-events-none absolute top-14 left-5 text-6xl md:top-16 md:text-8xl " +
                        (note.ink ? "ghost-on-ink" : "ghost-on-paper")
                      }
                      aria-hidden="true"
                    >
                      {note.ghost}
                    </p>
                    <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 pt-5 md:px-6 md:pt-6">
                      <span className="font-serif text-sm">{note.index}</span>
                      <span className={"kicker " + (note.ink ? "text-sheet/70" : "text-muted")}>
                        {note.category}
                      </span>
                    </div>
                    <div
                      className={
                        "absolute inset-x-0 bottom-0 z-10 px-5 pt-4 pb-5 md:px-6 md:pb-6 " +
                        (note.ink ? "bg-ink" : "bg-sheet")
                      }
                    >
                      <h3 className="max-w-sm font-serif text-2xl leading-snug md:text-3xl">{note.title}</h3>
                      <p className={"mt-3 text-sm " + (note.ink ? "text-sheet/70" : "text-muted")}>
                        {note.date}
                        <span className="ml-3 hidden md:inline">Hover to read</span>
                      </p>
                    </div>
                  </div>

                  <div className="reveal-panel absolute inset-0 z-10 hidden flex-col justify-between bg-accent p-6 text-sheet md:flex">
                    <div className="flex items-center justify-between">
                      <span className="kicker text-sheet/80">{note.category}</span>
                      <span className="text-sm text-sheet/80">{note.date}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl leading-snug">{note.title}</h3>
                      <p className="mt-4 max-w-md text-base leading-relaxed text-sheet">{note.lede}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium">
                      Read the original on X
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </span>
                  </div>
                </div>

                <div className="space-y-4 border-t border-line bg-sheet p-5 text-ink md:hidden">
                  <p className="text-base leading-relaxed">{note.lede}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Read on X
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
