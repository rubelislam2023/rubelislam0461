import { useEffect, useState } from "react";
import { CONTRIBUTIONS, CONSOLE_FIELDS, CHAINS, PROFILE } from "@/data/site";
import { Logo } from "@/components/lab/ecosystems";

export function XMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

export function TelegramMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function SocialIcons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        className="btn"
        href={PROFILE.xUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
      >
        <XMark />
      </a>
      <a
        className="btn"
        href={PROFILE.telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <TelegramMark />
      </a>
    </div>
  );
}

export function Contributions() {
  return (
    <section id="contributions" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Record</p>
        <h2 className="section-title mt-3">Selected contributions</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Categories of work, not a list of claimed launches or titles.
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CONTRIBUTIONS.map((item) => (
            <li key={item.title} className="glass reveal p-5">
              <h3 className="font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
        <h3 className="section-title mt-14">Ecosystem contributions</h3>
        <p className="mt-4 max-w-2xl text-muted">
          I contribute across every ecosystem listed here. Current contribution is Startale App,
          Soneium, and Base.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...CHAINS].sort((a, b) => Number(Boolean(b.current)) - Number(Boolean(a.current))).map((chain) => (
            <li key={chain.name} className="glass reveal flex flex-col items-start p-5">
              <Logo chain={chain} />
              <p className="kicker mt-4">{chain.current ? "Current" : "Contribution"}</p>
              <h3 className="mt-2 font-display text-xl">{chain.name}</h3>
              <p className="mt-2 text-sm text-muted">
                {chain.name === "Base"
                  ? "Current contribution. Base Advocate experience through ecosystem participation, not a staff role."
                  : chain.current
                    ? "Current contribution through research, onchain activity, and community participation."
                    : "Contribution through research, onchain activity, and community participation."}
              </p>
              <a
                className="mt-4 text-sm text-cyan no-underline"
                href={chain.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Official site
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Highlights() {
  return (
    <section id="ecosystem-contributions" className="px-5 py-8 md:py-12">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
        <article className="glass reveal p-6 md:col-span-2">
          <p className="kicker">Ecosystem contributions</p>
          <h2 className="section-title mt-3">Ecosystem contributions</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Current contribution is Startale App, Soneium, and Base. Every other ecosystem on this
            page is also a place I contribute, through participation, research, and onchain activity.
          </p>
        </article>
        <article className="glass p-6">
          <h3 className="font-display text-2xl">Startale App</h3>
          <p className="mt-2 text-sm text-muted">Current contribution in Startale App.</p>
        </article>
        <article className="glass p-6">
          <h3 className="font-display text-2xl">Soneium</h3>
          <p className="mt-2 text-sm text-muted">Current contribution on Soneium.</p>
        </article>
        <article className="glass p-6">
          <h3 className="font-display text-2xl">Base Advocate</h3>
          <p className="mt-2 text-sm text-muted">
            Current contribution. Advocate experience in the Base ecosystem. No further duties are stated beyond that participation.
          </p>
        </article>
        <article className="glass p-6">
          <h3 className="font-display text-2xl">Monad Ecosystem</h3>
          <p className="mt-2 text-sm text-muted">
            Time spent in the Monad ecosystem through research, onchain activity, and community presence.
          </p>
        </article>
      </div>
    </section>
  );
}

export function ResearchConsole() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => setTick((value) => value + 1), 1400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section aria-label="Research console" className="px-5 py-16 md:py-24">
      <div className="glass mx-auto max-w-6xl p-6 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="kicker">Research console</p>
            <h2 className="section-title mt-3">Simulated lab readout</h2>
          </div>
          <p className="max-w-xs text-sm text-muted">
            Visual demo data only. These figures are not a live chain feed.
          </p>
        </div>
        <svg className="mt-8 h-16 w-full" viewBox="0 0 640 72" aria-hidden="true">
          <path
            className="path-line"
            d="M8 48 C 90 48, 90 16, 170 16 S 250 52, 330 34 S 430 10, 510 28 S 590 54, 632 18"
          />
          <circle className="path-dot" r="3.5" cx="8" cy="48" />
        </svg>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CONSOLE_FIELDS.map((field, index) => {
            const value = ((tick * 17 + index * 53) % 9000) + 120;
            return (
              <li key={field} className="readout px-4 py-3">
                <p className="kicker">{field}</p>
                <p className="mt-2 font-display text-2xl tabular-nums text-chalk">{value}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <div id="contact" className="mt-6 flex w-full justify-center">
      <a
        className="hire-link"
        href={PROFILE.telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="hire-word">Hire me</span>
        <span className="text-sm text-muted">Opens Telegram</span>
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="px-5 pb-8">
      <div className="glass mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg">{PROFILE.name}</p>
          <p className="text-sm text-muted">Crypto • Blockchain • Onchain • Web3</p>
        </div>
        <SocialIcons />
        <p className="text-sm text-muted">© {PROFILE.name}</p>
      </div>
    </footer>
  );
}
