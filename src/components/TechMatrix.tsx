import React from 'react';
import { getLanguages, Project } from '@/data/projects';

export default function TechMatrix({ projects }: { projects: Project[] }) {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-subtle">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[680px] mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">The toolkit, in use.</h2>
          <p className="text-prose-secondary">Based on GitHub’s primary language for each original repository. Counts describe projects, not proficiency; forks and repositories without a detected language are excluded.</p>
        </div>
        <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12">
          {getLanguages(projects).map(([language, count]) => (
            <div key={language} className="flex items-baseline justify-between gap-4 py-5 border-t border-default">
              <dt className="text-lg font-medium">{language}</dt>
              <dd className="font-mono text-xs text-prose-secondary">{count} repos</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
