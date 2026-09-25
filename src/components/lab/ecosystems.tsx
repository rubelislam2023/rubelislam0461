import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CHAINS, type Chain } from "@/data/site";

export function Logo({ chain }: { chain: Chain }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span className="logo-fallback grid size-12 place-items-center font-display text-lg text-cyan" aria-hidden="true">
        {chain.name.slice(0, 1)}
      </span>
    );
  }
  return (
    <img
      src={chain.logo}
      alt={`${chain.name} logo`}
      width={48}
      height={48}
      loading="lazy"
      className={
        "size-12 object-contain " + (chain.framed ? "logo-plate" : "")
      }
      onError={() => setFailed(true)}
    />
  );
}

export function Ecosystems() {
  const groups = [
    { id: "Layer 1", label: "Layer 1" },
    { id: "Layer 2", label: "Layer 2" },
    { id: "App", label: "Apps" },
  ] as const;
  return (
    <section id="ecosystems" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Networks</p>
        <h2 className="section-title mt-3">Ecosystem experience</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Hands-on experience and active exploration across multiple Layer 1 and Layer 2 blockchain
          ecosystems through research, onchain activity, community participation, and content creation.
          Current contribution is Startale App, Soneium, and Base. The other networks are ecosystems
          I contribute to as well.
        </p>
        {groups.map((group) => (
          <div key={group.id} className="mt-10">
            <h3 className="kicker">{group.label}</h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {CHAINS.filter((chain) => chain.layer === group.id).map((chain) => (
                <li key={chain.name}>
                  <a
                    href={chain.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eco-card glass flex h-full flex-col items-center px-4 py-6 text-center no-underline"
                  >
                    <Logo chain={chain} />
                    <span className="mt-4 font-display text-lg text-chalk">{chain.name}</span>
                    <span className="mt-1 text-sm text-muted">{chain.layer === "App" ? "App" : chain.layer}</span>
                    <span className="kicker mt-3">{chain.current ? "Current contribution" : "Contribution"}</span>
                    <span className="ext mt-3 inline-flex items-center gap-1 text-sm text-cyan">
                      Official site
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
