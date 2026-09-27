import React from 'react';
import Hero from '@/components/Hero';
import TechMatrix from '@/components/TechMatrix';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import Experience from '@/components/Experience';
import TerminalCLI from '@/components/TerminalCLI';
import Contact from '@/components/Contact';
import { getRepositories } from '@/lib/github';

export const revalidate = 1800; // ISR 30 minutes

export default async function HomePage() {
  const repositories = await getRepositories();

  return (
    <>
      <Hero projects={repositories} />
      <ProjectsShowcase initialProjects={repositories} />
      <TechMatrix projects={repositories} />
      <Experience projects={repositories} />
      <TerminalCLI projects={repositories} />
      <Contact />
    </>
  );
}
