import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-subtle text-xs text-prose-tertiary">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>Copyright 2026 Reyfuu. Engineered with Next.js, React & TypeScript.</p>
        <div className="flex gap-5">
          <a
            href="https://github.com/reyfuu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-prose-secondary hover:text-prose-primary transition-colors no-underline"
          >
            GitHub
          </a>
          <a
            href="#about"
            className="text-prose-secondary hover:text-prose-primary transition-colors no-underline"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
