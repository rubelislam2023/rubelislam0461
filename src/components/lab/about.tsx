import { ABOUT_NOTES } from "@/data/site";

export function About() {
  return (
    <section id="about" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Research notes</p>
        <h2 className="section-title mt-3">About me</h2>
        <div className="notes mt-8 grid gap-4 md:grid-cols-2">
          {ABOUT_NOTES.map((note) => (
            <div key={note.slice(0, 24)} className="reveal h-full">
              <article className="note-card h-full">
                <div className="note-float glass h-full p-6">
                  <p className="kicker">Note</p>
                  <p className="mt-3 text-base leading-relaxed text-chalk">{note}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
