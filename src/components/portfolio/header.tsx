import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PROFILE } from "@/data/profile";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#practice", label: "Practice" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-sheet"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 xl:pl-16">
        <a href="#top" className="flex items-center gap-3 no-underline">
          <span className="grid size-9 place-items-center bg-accent font-serif text-lg text-sheet">
            RI
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-medium tracking-wide">{PROFILE.name}</span>
            <span className="kicker block text-muted">Field notes</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="kicker text-ink no-underline hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href={PROFILE.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="kicker bg-ink px-3 py-2 text-sheet no-underline hover:bg-accent"
          >
            On X
          </a>
        </nav>
        <button
          type="button"
          className="grid size-11 place-items-center border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-line px-5 py-3 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex min-h-11 items-center border-b border-line text-lg font-serif no-underline"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={PROFILE.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center text-lg font-serif text-accent no-underline"
                onClick={() => setOpen(false)}
              >
                @{PROFILE.handle}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
      <div className="h-0.5 bg-line" aria-hidden="true">
        <div className="h-full bg-accent" style={{ width: `${progress * 100}%` }} />
      </div>
    </header>
  );
}
