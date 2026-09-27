import { getLanguages, Project, PROJECTS_DATA } from '../data/projects';

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);

export function executeCommand(input: string, projects: Project[] = PROJECTS_DATA): string {
  const command = input.trim().split(/\s+/)[0].toLowerCase();
  const list = (items: Project[]) => items.map(repo => `<a href="${escapeHtml(repo.url)}" target="_blank" rel="noopener noreferrer" class="t-link">${escapeHtml(repo.name)}</a>${repo.isFork ? ' [fork]' : ''}${repo.language ? ` — ${escapeHtml(repo.language)}` : ''}\n${escapeHtml(repo.description)}`).join('\n\n') || 'No repositories in this category.';
  switch (command) {
    case 'help':
      return 'PORTFOLIO COMMANDS\nhelp      List commands\nbio       About this portfolio\nskills    Languages in original repositories\nprojects  Browse repositories\nai        AI-related repositories\nbackend   Backend repositories\ndevops    Infrastructure repositories\nstats     Current index counts\ncontact   Email and GitHub\nmatrix    Terminal status\nclear     Clear the terminal';
    case 'bio':
      return 'Reyfuu — developer\nProjects and experiments in AI agents, backend services and web applications. Explore the repositories for source code and history.';
    case 'skills':
      return getLanguages(projects).map(([name, count]) => `${escapeHtml(name)} — ${count} original repositories`).join('\n');
    case 'projects': return list(projects);
    case 'ai': case 'backend': case 'devops': return list(projects.filter(repo => repo.category === command));
    case 'stats': return `CURRENT PROJECT INDEX\n${projects.length} public repositories\n${projects.filter(repo => repo.isFork).length} forks\n${getLanguages(projects).length} primary languages in original repositories\nSource: GitHub API, with a saved snapshot when unavailable.`;
    case 'contact': return '<a href="mailto:audinathanael@gmail.com" class="t-link">audinathanael@gmail.com</a>\n<a href="https://github.com/reyfuu" target="_blank" rel="noopener noreferrer" class="t-link">github.com/reyfuu</a>';
    case 'matrix': return 'Portfolio terminal ready. This is a local command interface, not a system monitor.';
    case 'clear': return '';
    default: return `Unknown command: ${escapeHtml(command)}. Type help for available commands.`;
  }
}
