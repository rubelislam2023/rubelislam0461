import { PROFILE } from "@/data/profile";

const FACTS = [
  { label: "Practice", value: "Baseposting, in public" },
  { label: "Readers", value: `${PROFILE.followers} on X` },
  { label: "Mark", value: "Blue verified" },
  { label: "Subject", value: "Tokenized equities & wallets" },
];

export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="about-grid mx-auto max-w-6xl px-5 py-16 md:py-24 xl:pl-16">
        <div className="about-copy">
          <p className="kicker text-accent">01 — About</p>
          <h2 className="headline mt-4">A record kept on purpose.</h2>
          <div className="mt-8 max-w-xl space-y-5 text-lg text-ink">
            <p>
              I write field notes on how traditional markets move onchain — especially Coinbase
              tokenized stocks on Base, the wallets people actually open, and the builder surface
              around both.
            </p>
            <p className="text-muted">
              The habit is simple. Read the day, keep the useful part, and leave a trail someone
              else can build from. Patience first. Then the implementation.
            </p>
          </div>
          <blockquote className="mt-10 max-w-xl border-l-2 border-accent pl-5">
            <p className="font-serif text-3xl leading-snug italic">{PROFILE.motto}</p>
            <footer className="kicker mt-4 text-muted">From the bio on X</footer>
          </blockquote>
          <dl className="mt-10 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
            {FACTS.map((fact) => (
              <div key={fact.label} className="bg-sheet px-4 py-4">
                <dt className="kicker text-muted">{fact.label}</dt>
                <dd className="mt-2 font-serif text-lg leading-snug">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="about-figure lg:justify-self-end">
          <div className="portrait-plate">
            <img
              src="/portrait.jpg"
              alt="Rubel Islam wearing a black mask with the Base mark. Portrait from X."
              width={400}
              height={400}
              className="aspect-square w-full object-cover"
            />
          </div>
          <figcaption className="mx-auto mt-4 flex w-full max-w-xs items-baseline justify-between gap-4">
            <span className="kicker text-muted">Fig. 01 — Portrait</span>
            <a
              href={PROFILE.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent no-underline hover:underline"
            >
              @{PROFILE.handle}
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
