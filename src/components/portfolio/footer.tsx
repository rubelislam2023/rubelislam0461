import { PROFILE } from "@/data/profile";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Selected work" },
  { href: "#practice", label: "Practice" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-sheet">
      <div className="mx-auto max-w-6xl px-5 py-16 xl:pl-16">
        <div className="flex flex-col gap-10 border-b border-sheet/15 pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker text-sheet/60">Colophon</p>
            <p className="mt-4 font-serif text-5xl leading-none md:text-7xl">
              Rubel
              <span className="block italic text-sheet/80">Islam</span>
            </p>
          </div>
          <p className="max-w-sm font-serif text-xl italic leading-snug text-sheet/80">
            {PROFILE.motto}
          </p>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-3">
          <div>
            <p className="kicker text-sheet/50">Navigate</p>
            <ul className="mt-4 space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sheet no-underline hover:text-sheet/70">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker text-sheet/50">Elsewhere</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={PROFILE.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sheet no-underline hover:text-sheet/70"
                >
                  X — @{PROFILE.handle}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sheet no-underline hover:text-sheet/70">
                  Direct note
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="kicker text-sheet/50">Set in</p>
            <p className="mt-4 text-sm leading-relaxed text-sheet/75">
              Newsreader for the voice, Outfit for the furniture. Every card links to the
              original post. Written from the timeline, not a newsroom.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-sheet/15 pt-6 text-sm text-sheet/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {PROFILE.name}. Blue verified. {PROFILE.followers} readers.</p>
          <a href="#top" className="kicker text-sheet no-underline hover:text-sheet/70">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
