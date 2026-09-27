'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-2xl font-bold text-prose-primary mb-3">Something went wrong</h2>
      <p className="text-sm text-prose-secondary mb-6">{error?.message || 'An unexpected error occurred.'}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-prose-primary text-surface-0 font-semibold text-xs rounded-lg hover:bg-white transition-all cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
