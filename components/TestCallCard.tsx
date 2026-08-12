"use client";

import { useState, type FormEvent } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function TestCallCard() {
  const [phone, setPhone] = useState<string | undefined>();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!phone) return;
    const subject = encodeURIComponent("Test call request");
    const body = encodeURIComponent(`Please set up a test call to ${phone}.`);
    window.location.href = `mailto:support@nexdim.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="mt-8">
      {/*
        "hero-call-form" is kept as a literal class (in addition to the Tailwind
        utilities below) because globals.css still has `.hero-call-form .PhoneInput`,
        `.hero-call-form .PhoneInputInput`, etc. override rules that style the
        react-phone-number-input library's own internal markup, plus a
        `.hero-call-form *:focus` reset. Those descendant selectors need this
        ancestor class to keep matching — see globals.css lines ~411-475.
      */}
      <form
        className="hero-call-form inline-flex max-w-full items-center gap-2 rounded-full border border-border-subtle bg-surface py-1.5 pr-1.5 pl-5.5 shadow-[0_24px_60px_-32px_rgba(46,107,79,0.4)] focus-within:border-text-muted max-[600px]:w-full max-[600px]:flex-col max-[600px]:items-stretch max-[600px]:gap-2.5 max-[600px]:rounded-[24px] max-[600px]:p-3.5"
        onSubmit={handleSubmit}
      >
        <PhoneInput
          international
          defaultCountry="IN"
          placeholder="Enter phone number"
          value={phone}
          onChange={setPhone}
          aria-label="Phone number"
        />
        <button
          type="submit"
          className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-text px-6 py-3.25 text-[0.92rem] [font-family:var(--font-inter)] font-semibold text-bg transition-[background-color,opacity] duration-180 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 [&:hover:not(:disabled)]:bg-(--btn-primary-hover) max-[600px]:w-full"
          disabled={!phone}
        >
          Try an agent
        </button>
      </form>
      <p className="mt-3.5 text-[0.8rem] text-text-muted">
        Opens an email to us with your number — we&apos;ll set up the real test call.
      </p>
    </div>
  );
}
