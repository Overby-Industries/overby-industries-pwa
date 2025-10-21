"use client";

import { useState } from "react";

export default function CustomDonateForm() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const dollars = parseFloat(amount);
    if (isNaN(dollars) || dollars < 1) {
      setError("Please enter a donation of at least $1.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Math.round(dollars * 100) }), // convert to cents
      });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Something went wrong, please try again.");
        setLoading(false);
      }
    } catch (err) {
      setError("Server error, please try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleDonate} className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-xl font-medium text-gray-300">$</span>
        <input
          type="number"
          min="1"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter any amount"
          className="rounded-lg bg-gray-800 px-4 py-2 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600 disabled:opacity-50"
      >
        {loading ? "Redirecting..." : "Donate"}
      </button>
    </form>
  );
}
