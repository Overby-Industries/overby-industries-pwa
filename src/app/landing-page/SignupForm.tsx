'use client';

import { useState } from 'react';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-4 py-4 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 disabled:opacity-50"
      >
        {status === 'loading' ? 'Submitting...' : 'Join'}
      </button>

      {status === 'success' && (
        <p className="text-green-400 text-sm mt-2 sm:mt-0 text-center">
          ✅ Thanks! You’re subscribed.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-2 sm:mt-0 text-center">
          ❌ Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
