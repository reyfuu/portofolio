'use client';

import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory } from '@/data/projects';
import ProjectModal from './ProjectModal';

interface ProjectsShowcaseProps {
  initialProjects: Project[];
}

export default function ProjectsShowcase({ initialProjects }: ProjectsShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return initialProjects.filter((item: Project) => {
      const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.language && item.language.toLowerCase().includes(q)) ||
        (item.tags && item.tags.some((t: string) => t.toLowerCase().includes(q)));
      return matchesCategory && matchesSearch;
    });
  }, [initialProjects, activeFilter, searchQuery]);

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'ai': return { label: 'AI & Agents', cls: 'cat-ai' };
      case 'backend': return { label: 'Backend & Go', cls: 'cat-backend' };
      case 'frontend': return { label: 'Fullstack & Mobile', cls: 'cat-frontend' };
      case 'devops': return { label: 'DevOps & Systems', cls: 'cat-devops' };
      default: return { label: 'Other', cls: 'cat-devops' };
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

  const filterTabs: { key: 'all' | ProjectCategory; label: string }[] = [
    { key: 'all', label: `All (${initialProjects.length})` },
    { key: 'ai', label: 'AI & Agents' },
    { key: 'backend', label: 'Backend & Go' },
    { key: 'frontend', label: 'Fullstack & Mobile' },
    { key: 'devops', label: 'DevOps & Systems' },
    { key: 'tools', label: 'Other' },
  ];

  return (
    <section id="projects" className="py-24 border-t border-subtle">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[680px] mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-prose-primary mb-4">
            The project archive.
          </h2>
          <p className="text-base text-prose-secondary leading-relaxed">
            A closer look at the code. Filter by field, search a language, or open a repository to see the work for yourself.
          </p>
        </div>

        {/* Controls: Filter tabs & Search */}
        <div className="flex flex-col gap-5 mb-8">
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => {
              const active = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  aria-pressed={active}
                  onClick={() => { setActiveFilter(tab.key); setVisibleCount(6); }}
                  className={`min-h-11 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-white/[0.1] text-prose-primary border border-white/20'
                      : 'bg-white/[0.02] text-prose-secondary border border-subtle hover:text-prose-primary hover:border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full sm:max-w-sm">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-prose-tertiary pointer-events-none"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              aria-label="Search projects"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(6); }}
              placeholder="Filter by name, tag, or stack..."
              className="min-h-11 w-full pl-9 pr-3.5 py-2 bg-surface-1 border border-subtle rounded-lg text-xs text-prose-primary placeholder:text-prose-tertiary focus:outline-none focus:border-white/20 transition-colors"
            />
          </div>
        </div>

        <p role="status" className="text-sm text-prose-secondary mb-4">Showing {Math.min(visibleCount, filteredProjects.length)} of {filteredProjects.length} repositories</p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-16 bg-surface-1 border border-dashed border-subtle rounded-2xl">
              <h3 className="text-lg font-semibold text-prose-primary mb-2">No matching projects found</h3>
              <p className="text-sm text-prose-secondary mb-6">
                Try searching for a different keyword or reset filters.
              </p>
              <button
                className="px-4 py-2 text-xs font-semibold rounded-lg border border-default text-prose-secondary hover:text-prose-primary transition-all cursor-pointer"
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                  setVisibleCount(6);
                }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            filteredProjects.slice(0, visibleCount).map((repo: Project) => {
              const catBadge = getCategoryBadge(repo.category);
              const langBadge = getLangBadgeClass(repo.language);

              return (
                <div
                  key={repo.name}
                  className="min-w-0 flex flex-col justify-between py-8 border-t border-default group"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs text-prose-secondary">{catBadge.label}{repo.isFork ? ' / Fork' : ''}{repo.archived ? ' / Archived' : ''}</span>
                      {repo.language && (
                        <span className={`font-mono text-xs ${langBadge}`}>
                          {repo.language}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-prose-primary mb-3 tracking-tight break-words group-hover:text-accent transition-colors">
                      {repo.name}
                    </h3>

                    <p className="text-sm text-prose-secondary leading-relaxed mb-4">
                      {repo.description || 'Active repository by @reyfuu.'}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {(repo.tags || []).slice(0, 3).map((tag: string) => (
                        <span
                          key={tag}
                          className="font-mono text-xs text-prose-tertiary px-1.5 py-0.5 rounded bg-white/[0.02] border border-subtle"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-subtle">
                    <button
                      aria-label={`Details for ${repo.name}`}
                      onClick={() => setSelectedProject(repo)}
                      className="bg-transparent border-none text-accent text-xs font-semibold flex items-center gap-1.5 cursor-pointer min-h-11 p-0 hover:underline"
                    >
                      <span>Project details</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>

                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-prose-tertiary hover:text-prose-primary transition-colors p-3"
                      title="Open GitHub Repo"
                      aria-label={`Open GitHub Repository ${repo.name}`}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {visibleCount < filteredProjects.length && (
          <div className="mt-6 flex justify-center">
            <button className="btn btn-outline" onClick={() => setVisibleCount(count => count + 6)}>Show more repositories</button>
          </div>
        )}

        {/* Modal */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
}
