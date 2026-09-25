import { useEffect, useRef } from "react";
import { TIMELINE } from "@/data/site";

export function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      section.style.setProperty("--line", "1");
      return;
    }
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const total = Math.max(rect.height - window.innerHeight * 0.35, 1);
      const passed = Math.min(1, Math.max(0, -rect.top / total));
      section.style.setProperty("--line", String(passed));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="experience" ref={ref} className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="kicker">Since 2016</p>
        <h2 className="section-title mt-3">Experience</h2>
        <p className="mt-4 text-muted">
          A record of the work, not a list of employers. Dates that were not given stay marked
          as ongoing.
        </p>
        <div className="relative mt-10 pl-8">
          <div className="timeline-track" aria-hidden="true" />
          <div className="timeline-line" aria-hidden="true" />
          <ol className="space-y-4">
            {TIMELINE.map((item) => (
              <li key={item.title} className="glass reveal relative px-5 py-4">
                <span className="year-dot" aria-hidden="true" />
                <p className="kicker">{item.marker}</p>
                <h3 className="mt-1 font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
