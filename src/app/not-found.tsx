import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <div className="font-mono text-4xl font-bold text-accent mb-4">404</div>
      <h2 className="text-2xl font-bold text-prose-primary mb-3">Page Not Found</h2>
      <p className="text-sm text-prose-secondary mb-6">
        The requested resource could not be found.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-prose-primary text-surface-0 font-semibold text-xs rounded-lg hover:bg-white transition-all no-underline"
      >
        Return Home
      </Link>
    </div>
  );
}
