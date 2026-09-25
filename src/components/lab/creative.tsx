import { useEffect, useRef, useState } from "react";
import { WORKS } from "@/data/site";

type Piece = (typeof WORKS)[number];

export function Creative() {
  const [open, setOpen] = useState<Piece | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    if (open && !node.open) node.showModal();
    if (!open && node.open) node.close();
  }, [open]);

  return (
    <section id="creative-work" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Studio</p>
        <h2 className="section-title mt-3">Creative work</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Creative work developed around Web3, crypto, digital culture, and ecosystem storytelling.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WORKS.map((work) => (
            <li key={work.title}>
              <button
                type="button"
                className="work-card glass w-full overflow-hidden p-0 text-left"
                onClick={() => setOpen(work)}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                <span className="block px-4 py-4">
                  <span className="font-display text-lg">{work.title}</span>
                  <span className="mt-1 block text-sm text-muted">
                    {work.video ? "Open player" : "Open study"}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <dialog
        ref={dialog}
        className="lab-dialog glass p-4"
        aria-labelledby="work-title"
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current?.close();
        }}
        onClose={() => setOpen(null)}
      >
        {open ? (
          <div>
            {open.video ? (
              <video
                key={open.title}
                className="frame aspect-square w-full bg-navy object-cover"
                controls
                playsInline
                poster={open.image}
                src={open.video}
              />
            ) : (
              <img src={open.image} alt={open.title} className="frame aspect-square w-full object-cover" />
            )}
            <h3 id="work-title" className="mt-4 font-display text-2xl">{open.title}</h3>
            <p className="mt-2 text-sm text-muted">{open.detail}</p>
            <button type="button" className="btn mt-4" onClick={() => dialog.current?.close()}>
              Close
            </button>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
