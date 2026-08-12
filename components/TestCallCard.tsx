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
    window.location.href = `mailto:hello@nexdim.ai?subject=${subject}&body=${body}`;
  }

  return (
    <div className="hero-call-form-wrap">
      <form className="hero-call-form" onSubmit={handleSubmit}>
        <PhoneInput
          international
          defaultCountry="IN"
          placeholder="Enter phone number"
          value={phone}
          onChange={setPhone}
          aria-label="Phone number"
        />
        <button type="submit" className="hero-call-submit" disabled={!phone}>
          Try an agent
        </button>
      </form>
      <p className="hero-call-note">
        Opens an email to us with your number — we&apos;ll set up the real test call.
      </p>
    </div>
  );
}
