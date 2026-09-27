const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
}).outputText, filename);
const { PROJECTS_DATA, getLanguages } = require('../src/data/projects.ts');
const { executeCommand } = require('../src/lib/terminal-commands.ts');

test('snapshot URLs, fork labels and language counts use repository metadata', () => {
  const snapshot = require('../src/data/github-snapshot.json');
  assert.equal(PROJECTS_DATA.length, snapshot.repositories.length);
  assert.ok(PROJECTS_DATA.length > 0);
  for (const [index, project] of PROJECTS_DATA.entries()) {
    const raw = snapshot.repositories[index];
    assert.equal(project.url, `https://github.com/reyfuu/${encodeURIComponent(raw.name)}`);
    assert.equal(project.isFork, raw.fork);
    assert.equal(project.language, raw.language || '');
    assert.equal(project.createdAt, raw.created_at);
    assert.equal(project.description, raw.description || 'No description published on GitHub yet.');
  }
  assert.deepEqual(getLanguages([
    { language: 'Go', isFork: false }, { language: 'Go', isFork: true },
    { language: '', isFork: false }, { language: 'Python', isFork: false },
  ]), [['Go', 1], ['Python', 1]]);
});

test('terminal commands use the displayed data, email and escaped external text', () => {
  const fixture = [{ ...PROJECTS_DATA[0], name: '<script>', description: '<img src=x onerror=alert(1)>', language: 'Go', category: 'backend', isFork: false }];
  for (const command of ['help', 'bio', 'skills', 'projects', 'ai', 'backend', 'devops', 'stats', 'contact', 'matrix', 'clear']) {
    assert.equal(typeof executeCommand(command, fixture), 'string');
  }
  assert.match(executeCommand('stats', fixture), /1 public repositories/);
  assert.match(executeCommand('contact'), /mailto:audinathanael@gmail.com/);
  assert.ok(!executeCommand('projects', fixture).includes('<script>'));
  assert.ok(!executeCommand('projects', fixture).includes('<img'));
  assert.match(executeCommand('<img>'), /&lt;img&gt;/);
  assert.equal(executeCommand('clear'), '');
});

test('GitHub errors, empty responses and pagination preserve a usable index', async () => {
  const { getRepositories } = require('../src/lib/github.ts');
  const originalFetch = global.fetch;
  try {
    for (const status of [403, 429, 500]) {
      global.fetch = async () => ({ ok: false, status });
      assert.deepEqual(await getRepositories(), PROJECTS_DATA);
    }
    global.fetch = async () => { throw new Error('offline'); };
    assert.deepEqual(await getRepositories(), PROJECTS_DATA);
    for (const body of [[], {}, [{ name: null }]]) {
      global.fetch = async () => ({ ok: true, json: async () => body });
      assert.deepEqual(await getRepositories(), PROJECTS_DATA);
    }
    const raw = require('../src/data/github-snapshot.json').repositories[0];
    let requests = 0;
    global.fetch = async () => ({ ok: true, json: async () => ++requests === 1 ? Array.from({length: 100}, (_, i) => ({...raw, name: `repo-${i}`})) : [{...raw, name: 'last-page'}] });
    const result = await getRepositories();
    assert.equal(result.length, 101);
    assert.equal(result[100].name, 'last-page');
    assert.equal(requests, 2);
  } finally { global.fetch = originalFetch; }
});
