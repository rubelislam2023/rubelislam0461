import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/profile";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", email: "", message: "" };

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) errors.name = "Add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Use a real email so I can tell who wrote.";
  }
  if (fields.message.trim().length < 20) {
    errors.message = "A note needs at least a sentence — 20 characters.";
  }
  return errors;
}

export function Contact() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [draft, setDraft] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function update(key: keyof Fields, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(fields);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const text = `Hi Rubel — ${fields.name.trim()} (${fields.email.trim()})\n\n${fields.message.trim()}`;
    setDraft(text);
    setCopied(false);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const dmUrl = draft
    ? `https://x.com/messages/compose?recipient_id=${PROFILE.recipientId}&text=${encodeURIComponent(draft)}`
    : PROFILE.xUrl;

  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 xl:pl-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kicker text-accent">04 — Correspondence</p>
          <h2 className="headline mt-4">Send a line.</h2>
          <p className="mt-5 max-w-md text-muted">
            If a note was useful, or you are building on the same surface — tokenized equities,
            wallets, Base — write here. It opens as a message to @{PROFILE.handle}. Nothing is
            stored on this page.
          </p>
          <a
            href={PROFILE.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-serif text-2xl text-ink no-underline hover:text-accent"
          >
            @{PROFILE.handle}
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </a>
        </div>

        <div className="lg:col-span-7">
          {draft ? (
            <div className="border border-ink bg-sheet p-6 md:p-8" role="status">
              <p className="kicker text-accent">Ready</p>
              <h3 className="mt-3 font-serif text-3xl">The note is composed.</h3>
              <p className="mt-3 text-muted">
                {copied
                  ? "Copied to your clipboard. Open X to deliver it as a direct message."
                  : "Clipboard was blocked. The note is below — copy it, or open the message draft."}
              </p>
              <pre className="mt-6 overflow-x-auto border border-line bg-paper p-4 font-sans text-sm leading-relaxed whitespace-pre-wrap">
                {draft}
              </pre>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={dmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center bg-ink px-5 text-sm font-medium text-sheet no-underline hover:bg-accent"
                >
                  Open message on X
                </a>
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center border border-ink px-5 text-sm font-medium"
                  onClick={() => {
                    setDraft(null);
                    setFields(EMPTY);
                    setCopied(false);
                  }}
                >
                  Write another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="border border-line bg-sheet p-6 md:p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Name"
                  value={fields.name}
                  error={errors.name}
                  autoComplete="name"
                  onChange={(value) => update("name", value)}
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  value={fields.email}
                  error={errors.email}
                  autoComplete="email"
                  onChange={(value) => update("email", value)}
                />
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="kicker text-muted">
                  Note
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={fields.message}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  onChange={(event) => update("message", event.target.value)}
                  className="mt-2 w-full resize-y border-b border-line bg-transparent py-3 text-ink outline-none"
                />
                {errors.message ? (
                  <p id="message-error" className="mt-2 text-sm text-accent">
                    {errors.message}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                className="mt-8 inline-flex min-h-11 items-center bg-accent px-5 text-sm font-medium text-sheet hover:bg-ink"
              >
                Compose message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="kicker text-muted">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink outline-none"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}
