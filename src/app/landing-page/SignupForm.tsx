"use client";

import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="btn"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="btn"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary"
      >
        {status === "loading" ? "Submitting..." : "Join"}
      </button>

      {status === "success" && (
        <p className="mt-2 text-center text-sm text-green-400 sm:mt-0">
          ✅ Thanks! You’re subscribed.
        </p>
      )}
      {status === "error" && (
        <p className="mt-2 text-center text-sm text-red-400 sm:mt-0">
          ❌ Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
