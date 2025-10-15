'use client';

import { useState } from 'react';

export default function DonateButton({ amount = 2000 }: { amount?: number }) {
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    setLoading(true);
    const res = await fetch('/api/donate', { method: 'POST' });
    const data = await res.json();
    setLoading(false);

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <button
      onClick={handleDonate}
      disabled={loading}
      className="px-4 py-4 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition disabled:opacity-50"
    >
      {loading ? 'Redirecting...' : `Donate $${amount / 100}`}
    </button>
  );
}
