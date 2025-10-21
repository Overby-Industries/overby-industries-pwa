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
      className="mx-auto flex max-w-md flex-col items-center gap-4 sm:flex-row"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full rounded-lg bg-gray-800 px-4 py-4 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg bg-cyan-500 px-4 py-4 font-semibold text-white hover:bg-cyan-600 disabled:opacity-50"
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
