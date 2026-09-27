import { writeFile, rename } from 'node:fs/promises';

const base = 'https://api.github.com/users/reyfuu';
async function get(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`GitHub HTTP ${res.status}`);
  return res.json();
}
const profile = await get(base);
if (profile.login !== 'reyfuu') throw new Error('Unexpected profile');
const repositories = [];
const fields = ['name', 'language', 'description', 'stargazers_count', 'forks_count', 'fork', 'archived', 'created_at', 'pushed_at', 'topics'];
for (let page = 1; ; page++) {
  const batch = await get(`${base}/repos?per_page=100&sort=updated&page=${page}`);
  if (!Array.isArray(batch) || batch.some(repo => typeof repo.name !== 'string' || !repo.name)) throw new Error('Invalid repository response');
  repositories.push(...batch.map(repo => Object.fromEntries(fields.map(key => [key, repo[key]]))));
  if (batch.length < 100) break;
}
if (!repositories.length) throw new Error('Empty response; existing snapshot preserved');
const profileFields = ['login', 'name', 'public_repos', 'followers', 'following', 'html_url', 'avatar_url', 'created_at'];
const snapshot = { syncedAt: new Date().toISOString().slice(0, 10), profile: Object.fromEntries(profileFields.map(key => [key, profile[key]])), repositories };
const file = new URL('../src/data/github-snapshot.json', import.meta.url);
const temporary = new URL(`${file.href}.tmp`);
await writeFile(temporary, JSON.stringify(snapshot, null, 2) + '\n');
await rename(temporary, file);
console.log(`Synced ${repositories.length} public repositories.`);
