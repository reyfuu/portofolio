import React from 'react';
import { Project } from '@/data/projects';

export default function Experience({ projects }: { projects: Project[] }) {
  const years = [...new Set(projects.filter(p => !p.isFork && p.createdAt).map(p => p.createdAt.slice(0, 4)))].sort().reverse();
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-subtle">
      <div className="max-w-[1120px] mx-auto px-6 grid md:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Built over time.</h2>
          <p className="text-prose-secondary">Original public repositories, grouped by creation year on GitHub. These dates document project activity, not employment or project completion.</p>
        </div>
        <ol>
          {years.map((year, index) => (
            <li key={year} className="border-t border-default">
              <details open={index === 0} className="history-year">
                <summary className="cursor-pointer py-5 text-xl font-medium">{year}<span className="text-xs text-prose-secondary ml-4">{projects.filter(p => !p.isFork && p.createdAt.startsWith(year)).length} repositories</span></summary>
              <ul className="flex flex-wrap gap-x-4 gap-y-3 min-w-0 pb-6">
                {projects.filter(p => !p.isFork && p.createdAt.startsWith(year)).map(project => (
                  <li key={project.name} className="min-w-0"><a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm text-prose-secondary hover:text-prose-primary underline underline-offset-4 break-words">{project.name}</a></li>
                ))}
              </ul>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
