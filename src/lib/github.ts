import { GITHUB_PROFILE, GitHubRepo, Project, PROJECTS_DATA, toProject } from '../data/projects';

export type GitHubProfile = typeof GITHUB_PROFILE;
const API_URL = 'https://api.github.com/users/reyfuu';

export async function getGitHubProfile(): Promise<GitHubProfile> {
  try {
    const res = await fetch(API_URL, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`GitHub returned ${res.status}`);
    const profile = await res.json();
    if (profile.login !== 'reyfuu') throw new Error('Unexpected GitHub profile');
    return profile;
  } catch {
    return GITHUB_PROFILE;
  }
}

export async function getRepositories(): Promise<Project[]> {
  try {
    const projects: Project[] = [];
    for (let page = 1; ; page++) {
      const res = await fetch(`${API_URL}/repos?per_page=100&sort=updated&page=${page}`, {
        next: { revalidate: 1800 }, signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) throw new Error(`GitHub returned ${res.status}`);
      const repos: GitHubRepo[] = await res.json();
      if (!Array.isArray(repos) || repos.some(repo => typeof repo.name !== 'string' || !repo.name)) throw new Error('Invalid GitHub repository data');
      projects.push(...repos.map(toProject));
      if (repos.length < 100) break;
    }
    return projects.length ? projects : PROJECTS_DATA;
  } catch {
    return PROJECTS_DATA;
  }
}
