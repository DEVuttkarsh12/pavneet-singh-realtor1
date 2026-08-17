"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Real estate consultation request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterested in: ${interest}\n\nMessage:\n${message}`,
    );
    setSent(true);
    window.location.href = `mailto:realtorpavneetsingh@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-grid">
        <label>
          <span>Your name *</span>
          <input name="name" type="text" required autoComplete="name" placeholder="Full name" />
        </label>
        <label>
          <span>Email address *</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
        </label>
      </div>
      <div className="field-grid">
        <label>
          <span>Phone number</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="902 000 0000" />
        </label>
        <label>
          <span>I&apos;m interested in</span>
          <select name="interest" defaultValue="Buying a home">
            <option>Buying a home</option>
            <option>Selling a property</option>
            <option>Residential investment</option>
            <option>Commercial or industrial</option>
            <option>Land or development</option>
            <option>Relocating to Nova Scotia</option>
          </select>
        </label>
      </div>
      <label>
        <span>How can Pavneet help? *</span>
        <textarea name="message" required rows={4} placeholder="Share a little about your goals, preferred area, and timeline." />
      </label>
      <button className="button button-gold form-button" type="submit">
        Prepare my enquiry <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note" role="status">
        {sent
          ? "Your email app is opening with the enquiry prepared for you."
          : "Submitting prepares a private email directly to Pavneet."}
      </p>
    </form>
  );
}
