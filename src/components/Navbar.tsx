'use client';

import React, { useState } from 'react';

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Toolkit', href: '#skills' },
  { label: 'History', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 h-16 bg-surface-0 border-b border-subtle z-[1000]">
      <div className="max-w-[1120px] mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-prose-primary font-bold text-sm tracking-tight no-underline">
          <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-white/[0.08] border border-subtle text-accent">rf</span>
          reyfuu
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-prose-secondary hover:text-prose-primary text-[13px] font-medium transition-colors no-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/reyfuu"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium text-prose-secondary border border-default rounded-lg hover:text-prose-primary hover:border-white/20 transition-all no-underline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden min-h-11 min-w-11 p-2 bg-transparent border-none text-prose-primary cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav id="mobile-navigation" className="md:hidden bg-surface-2 border-b border-subtle px-6 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-prose-secondary hover:text-prose-primary text-sm font-medium no-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
