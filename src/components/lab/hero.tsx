import { useRef, type PointerEvent } from "react";
import { Contact } from "@/components/lab/rest";
import { PROFILE } from "@/data/site";

export function Hero() {
  const board = useRef<HTMLDivElement>(null);

  const tilt = (event: PointerEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;
    const node = board.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `perspective(900px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg)`;
  };

  const reset = () => {
    if (board.current) board.current.style.transform = "";
  };

  return (
    <section id="home" className="px-5 pt-28 pb-6">
      <div
        ref={board}
        className="glass board mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-8 text-center md:px-10 md:py-10"
        onPointerMove={tilt}
        onPointerLeave={reset}
      >
        <div className="portrait-stage">
          <img
            src="/portrait.jpg"
            alt="Portrait of MD Rubel Islam"
            width={400}
            height={400}
            className="portrait portrait-float size-56 object-cover md:size-72"
          />
        </div>
        <p className="kicker type-line mt-8">
          Crypto researcher • Onchain analyst • Web3 creator
        </p>
        <h1 className="display mt-4 text-chalk">
          Building
          <span className="block text-cyan">onchain value.</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Crypto and blockchain professional active since 2016, focused on onchain research,
          ecosystem exploration, community contribution, and visual storytelling.
        </p>
        <a
          className="mt-6 text-muted no-underline"
          href={PROFILE.xUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="block font-display text-3xl text-chalk">{PROFILE.followers}</span>
          <span className="mt-1 block text-sm">followers on X</span>
        </a>
        <Contact />
      </div>
    </section>
  );
}