import snapshot from './github-snapshot.json';

export type ProjectCategory = 'ai' | 'backend' | 'frontend' | 'devops' | 'tools';

export interface GitHubRepo {
  name: string;
  language: string | null;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  created_at: string;
  pushed_at: string;
  topics: string[];
}

export interface Project {
  name: string;
  category: ProjectCategory;
  language: string;
  description: string;
  stars: number;
  forks: number;
  tags: string[];
  url: string;
  featured: boolean;
  highlights: string;
  isFork: boolean;
  archived: boolean;
  createdAt: string;
  pushedAt: string;
}

export function toProject(repo: GitHubRepo): Project {
  const name = repo.name.toLowerCase();
  let category: ProjectCategory = 'tools';
  if (/agent|crewai|chatbot|platform-ai|aipreneur|random-forest|autism/.test(name)) category = 'ai';
  else if (/kubernetes|docker|ltsp|remote-desktop|openindiana/.test(name)) category = 'devops';
  else if (['Go', 'PHP', 'Blade'].includes(repo.language || '') || /backend|api|nestjs/.test(name)) category = 'backend';
  else if (['TypeScript', 'JavaScript', 'Vue', 'Kotlin', 'HTML', 'CSS'].includes(repo.language || '')) category = 'frontend';

  return {
    name: repo.name,
    category,
    language: repo.language || '',
    description: repo.description || 'No description published on GitHub yet.',
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    tags: repo.topics || [],
    url: `https://github.com/reyfuu/${encodeURIComponent(repo.name)}`,
    featured: false,
    highlights: repo.fork ? 'Forked repository. See GitHub for its upstream source and contribution history.' : 'Public repository owned by reyfuu. See the source and commit history on GitHub.',
    isFork: repo.fork,
    archived: repo.archived,
    createdAt: repo.created_at,
    pushedAt: repo.pushed_at,
  };
}

export const SNAPSHOT_DATE = snapshot.syncedAt;
export const GITHUB_PROFILE = snapshot.profile;
export const PROJECTS_DATA: Project[] = snapshot.repositories.map(toProject);

export function getLanguages(projects: Project[]): [string, number][] {
  const counts = new Map<string, number>();
  for (const project of projects) {
    if (project.language && !project.isFork) counts.set(project.language, (counts.get(project.language) || 0) + 1);
  }
  return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}
