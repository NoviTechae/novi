"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setOk(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });

      if (!res.ok) throw new Error("Failed");

      setOk(true);
      form.reset();
    } catch {
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      <input
        name="name"
        placeholder="Full name"
        required
        className="border border-border bg-transparent px-4 py-3 focus:border-accent outline-none"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="border border-border bg-transparent px-4 py-3 focus:border-accent outline-none"
      />

      <input
        name="phone"
        placeholder="Phone (optional)"
        className="border border-border bg-transparent px-4 py-3 focus:border-accent outline-none"
      />

      <textarea
        name="message"
        placeholder="Tell me about your project"
        rows={5}
        required
        className="md:col-span-3 border border-border bg-transparent px-4 py-3 focus:border-accent outline-none resize-none"
      />

      <div className="md:col-span-3 flex items-center justify-between">
        <p className="text-xs text-muted">
          Your information stays private.
        </p>

        <button
          type="submit"
          disabled={loading}
          className="border border-charcoal px-10 py-3 hover:bg-charcoal hover:text-beige transition"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>

      {ok === true && (
        <p className="md:col-span-3 text-sm text-green-700">
          Message sent successfully ✓
        </p>
      )}

      {ok === false && (
        <p className="md:col-span-3 text-sm text-red-700">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}