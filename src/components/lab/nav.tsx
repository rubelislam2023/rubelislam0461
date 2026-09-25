import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, PROFILE } from "@/data/site";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "light" ? "#ffffff" : "#0c0c0c");
  window.dispatchEvent(new Event("themechange"));
}

function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const choose = (next: Theme) => {
    setTheme(next);
    applyTheme(next);
  };

  return (
    <div className="theme-switch" role="group" aria-label="Color theme">
      <button type="button" aria-pressed={theme === "dark"} onClick={() => choose("dark")}>
        Dark
      </button>
      <button type="button" aria-pressed={theme === "light"} onClick={() => choose("light")}>
        White
      </button>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => {
      const mark = window.scrollY + 96;
      let current: string = NAV[0].id;
      for (const item of NAV) {
        const node = document.getElementById(item.id);
        if (!node) continue;
        const top = node.getBoundingClientRect().top + window.scrollY;
        if (top <= mark) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-3">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-navy focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="glass mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5">
        <a href="#home" className="font-display text-sm font-semibold tracking-wide text-chalk no-underline">
          {PROFILE.name}
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={active === item.id ? "true" : undefined}
              className="nav-link px-3 py-2 text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeSwitch />
          <button
            type="button"
            className="grid size-11 place-items-center text-chalk lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="glass mx-auto mt-2 max-w-6xl p-3 lg:hidden" aria-label="Mobile">
          <ul>
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-current={active === item.id ? "true" : undefined}
                  className="nav-link flex min-h-11 items-center px-2"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
