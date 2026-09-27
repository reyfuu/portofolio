'use client';

import React, { useEffect, useRef } from 'react';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!project || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [project]);

  if (!project) return null;

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'ai': return { label: 'AI & Agents', cls: 'cat-ai' };
      case 'backend': return { label: 'Backend / Microservices', cls: 'cat-backend' };
      case 'frontend': return { label: 'Fullstack / Mobile', cls: 'cat-frontend' };
      case 'devops': return { label: 'DevOps / Systems', cls: 'cat-devops' };
      default: return { label: 'Project', cls: 'cat-devops' };
    }
  };

  const getLangBadgeClass = (lang: string) => {
    const l = (lang || '').toLowerCase();
    if (l.includes('python')) return 'badge-python';
    if (l.includes('go')) return 'badge-go';
    if (l.includes('typescript')) return 'badge-ts';
    if (l.includes('javascript')) return 'badge-js';
    if (l.includes('php')) return 'badge-php';
    if (l.includes('vue')) return 'badge-vue';
    if (l.includes('kotlin')) return 'badge-kotlin';
    return 'text-prose-tertiary';
  };

  const catBadge = getCategoryBadge(project.category);
  const langBadge = getLangBadgeClass(project.language);

  return (
    <dialog
      ref={dialogRef}
      className="modal-overlay"
      onCancel={onClose}
      aria-labelledby="project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-surface-2 border border-default rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto p-8 shadow-2xl relative">
        <button
          className="absolute top-4 right-4 bg-white/[0.06] hover:bg-white/[0.12] text-prose-secondary hover:text-prose-primary w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer border border-subtle transition-all"
          onClick={onClose}
          aria-label="Close Project Modal"
        >
          ×
        </button>

        <div className="mb-6">
          <div className="flex gap-2 mb-3 flex-wrap items-center">
            <span className={`category-pill ${catBadge.cls}`}>{catBadge.label}</span>
            {project.language && (
              <span className={`font-mono text-xs px-2 py-0.5 rounded bg-white/[0.04] border border-subtle ${langBadge}`}>
                {project.language}
              </span>
            )}
          </div>
          <h2 id="project-title" className="text-2xl font-bold text-prose-primary tracking-tight mb-2 break-words">
            {project.name}
          </h2>
          <p className="text-sm text-prose-secondary leading-relaxed">
            {project.description || 'Active repository by @reyfuu.'}
          </p>
        </div>

        <div className="mb-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-prose-tertiary mb-2">
            Repository context
          </h4>
          <div className="bg-white/[0.02] border-l border-default p-3.5 rounded-r-lg text-sm text-prose-secondary leading-relaxed">
            {project.highlights || 'See the repository source and history on GitHub.'}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-prose-tertiary mb-2">
            Tags
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {(project.tags || ['Open Source']).map((t: string) => (
              <span
                key={t}
                className="font-mono text-xs px-2 py-0.5 rounded bg-white/[0.04] border border-subtle text-prose-tertiary"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 bg-prose-primary text-surface-0 font-semibold text-sm rounded-xl hover:bg-white transition-all no-underline shadow-md"
          >
            <span>View Source on GitHub</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
      </div>
    </dialog>
  );
}
