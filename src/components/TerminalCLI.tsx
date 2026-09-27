'use client';

import React, { useState, useRef, useEffect } from 'react';
import { executeCommand } from '@/lib/terminal-commands';
import { Project } from '@/data/projects';

interface OutputLine {
  id: string;
  isCmd?: boolean;
  cmdText?: string;
  content: string;
}

export default function TerminalCLI({ projects }: { projects: Project[] }) {
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [inputVal, setInputVal] = useState<string>('');
  const [outputLines, setOutputLines] = useState<OutputLine[]>([
    {
      id: 'welcome',
      content: `
<span class="t-accent">Reyfuu / portfolio terminal</span>
Type <span class="t-cyan font-bold">'help'</span> to see all available commands.
Try <span class="t-purple font-bold">'projects'</span>, <span class="t-green font-bold">'skills'</span>, or <span class="t-yellow font-bold">'ai'</span>.
──────────────────────────────────────────────────`,
    },
  ]);

  const outputRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [outputLines]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const raw = inputVal.trim();
      if (!raw) return;

      const newHistory = [...history, raw];
      setHistory(newHistory);
      setHistoryIdx(newHistory.length);

      if (raw.toLowerCase() === 'clear') {
        setOutputLines([]);
        setInputVal('');
        return;
      }

      const res = executeCommand(raw, projects);
      setOutputLines((prev) => [
        ...prev,
        {
          id: `${Date.now()}-cmd`,
          isCmd: true,
          cmdText: raw,
          content: res,
        },
      ]);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(history[nextIdx] || '');
      } else if (history.length > 0 && historyIdx === -1) {
        const nextIdx = history.length - 1;
        setHistoryIdx(nextIdx);
        setInputVal(history[nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (history.length > 0 && historyIdx < history.length - 1) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInputVal(history[nextIdx] || '');
      } else {
        setHistoryIdx(history.length);
        setInputVal('');
      }
    }
  };

  return (
    <section id="terminal" className="py-24 border-t border-subtle">
      <div className="max-w-[1120px] mx-auto px-6">
        <details className="terminal-disclosure">
          <summary className="cursor-pointer flex flex-wrap items-center justify-between gap-4">
            <span className="text-2xl font-semibold tracking-tight">Prefer a command line?</span>
            <span className="text-sm text-prose-secondary">Open the portfolio terminal</span>
          </summary>
          <p className="text-prose-secondary mt-4 mb-8">Type help to explore the same repositories from a local prompt.</p>

        <div
          className="bg-surface-1 border border-default rounded-2xl overflow-hidden shadow-2xl font-mono cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Header */}
          <div className="bg-surface-2 px-5 py-3.5 flex items-center justify-between border-b border-subtle">
            <div className="flex gap-2">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="text-xs text-prose-tertiary">
              reyfuu / portfolio
            </div>
            <div className="text-[11px] font-mono text-prose-tertiary px-2 py-0.5 rounded bg-white/[0.04] border border-subtle">
              local
            </div>
          </div>

          {/* Output log */}
          <div
            ref={outputRef}
            className="p-6 h-80 overflow-y-auto text-xs sm:text-sm leading-relaxed text-prose-primary selection:bg-accent selection:text-surface-0"
          >
            {outputLines.map((line) => (
              <div key={line.id} className="mb-2">
                {line.isCmd && (
                  <div className="text-prose-tertiary mb-1">
                    $ {line.cmdText}
                  </div>
                )}
                <div
                  dangerouslySetInnerHTML={{ __html: line.content }}
                  className="whitespace-pre-wrap break-words"
                />
              </div>
            ))}
          </div>

          {/* Prompt line */}
          <div className="flex items-center px-6 py-3.5 bg-surface-2 border-t border-subtle">
            <span className="text-xs sm:text-sm whitespace-nowrap text-prose-tertiary">
              <span className="text-accent font-semibold">reyfuu</span>
              <span>@</span>
              <span className="text-lavender">dev</span>:
              <span className="text-amber-300">~</span>${' '}
            </span>
            <input
              ref={inputRef}
              type="text"
              aria-label="Terminal command"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              spellCheck="false"
              placeholder="Type 'help' and press Enter..."
              className="min-w-0 flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-prose-primary ml-2 placeholder:text-prose-tertiary"
            />
          </div>
        </div>
        </details>
      </div>
    </section>
  );
}
