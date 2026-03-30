"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });

      const payload = await response.json();
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Could not send lead");
      }

      form.reset();
      setStatus("success");
      setMessage("Message sent. 954 On The Rise has the details now.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <form className="lead-form media-card" onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          Name
          <input name="name" required placeholder="Your name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required placeholder="you@example.com" />
        </label>
        <label>
          Company or artist
          <input name="company" placeholder="Artist, label, or company name" />
        </label>
        <label>
          Interest
          <select name="interest" defaultValue="full-pack">
            <option value="full-pack">Full vault</option>
            <option value="custom-song">Custom song</option>
            <option value="visual-build">Visual build</option>
            <option value="booking">Booking</option>
          </select>
        </label>
      </div>
      <label>
        What do you want to make happen?
        <textarea
          name="notes"
          rows={5}
          placeholder="Tell 954 On The Rise if you want a custom song, a visual rollout, a booking, or a collab."
        />
      </label>
      <button className="primary-button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send the note"}
      </button>
      {message ? <p className={`form-message is-${status}`}>{message}</p> : null}
    </form>
  );
}
