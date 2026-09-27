import React from 'react';
import { Project } from '@/data/projects';

export default function Hero({ projects }: { projects: Project[] }) {
  const selected = ['audit', 'kasir-api', 'crewAi'].flatMap(name => projects.filter(project => project.name === name && !project.isFork));
  return (
    <section id="about" className="hero-section">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-copy">
            <h1>Reyfuu<span className="text-accent">.</span><br /><span className="hero-role">Software developer.</span></h1>
            <p className="hero-description">AI agents, Go APIs and web applications.<br />A collection of projects I build, explore and keep learning from.</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#projects" className="btn btn-primary">Explore my work<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M7 7h10v10" /></svg></a>
              <a href="mailto:audinathanael@gmail.com" className="btn btn-outline">Get in touch</a>
            </div>
            <p className="hero-footnote">Source code, not just a portfolio.</p>
          </div>
          <aside className="work-preview" aria-label="Selected repositories">
            <div className="flex justify-between items-center gap-4 mb-8">
              <h2 className="text-lg font-semibold tracking-tight">Selected repositories</h2>
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-10-2 20" /></svg>
            </div>
            {selected.map(project => (
              <a key={project.name} href={project.url} target="_blank" rel="noopener noreferrer" className="preview-project">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-2xl font-semibold tracking-tight break-words">{project.name}</span>
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17 17 7M7 7h10v10" /></svg>
                </div>
                <span className="preview-language">{project.language || 'Public repository'}</span>
              </a>
            ))}
            <a href="#projects" className="preview-all">Browse all {projects.length} repositories</a>
          </aside>
        </div>
        <div className="hero-index" aria-label="Portfolio contents">
          <a href="#projects">Explore the work</a>
          <a href="#skills">See the toolkit</a>
          <a href="#experience">Follow the project history</a>
        </div>
      </div>
    </section>
  );
}
