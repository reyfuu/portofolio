/**
 * GitHub API Client with Auto-Fallback & Caching for @reyfuu
 */

const GitHubService = (() => {
  const USERNAME = "reyfuu";
  const API_URL = `https://api.github.com/users/${USERNAME}`;
  const REPOS_URL = `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`;
  const CACHE_KEY_USER = "reyfuu_gh_user";
  const CACHE_KEY_REPOS = "reyfuu_gh_repos";
  const CACHE_TTL = 1000 * 60 * 15; // 15 minutes

  async function fetchProfile() {
    try {
      const cached = getCache(CACHE_KEY_USER);
      if (cached) return cached;

      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`GitHub API Error: ${res.status}`);
      const data = await res.json();
      setCache(CACHE_KEY_USER, data);
      return data;
    } catch (err) {
      console.warn("Using offline profile fallback due to:", err.message);
      return {
        login: "reyfuu",
        name: "Reyfuu",
        public_repos: 54,
        followers: 7,
        following: 16,
        html_url: "https://github.com/reyfuu",
        avatar_url: "https://avatars.githubusercontent.com/u/63893194?v=4"
      };
    }
  }

  async function fetchRepositories() {
    try {
      const cached = getCache(CACHE_KEY_REPOS);
      if (cached) return cached;

      const res = await fetch(REPOS_URL);
      if (!res.ok) throw new Error(`GitHub API Error: ${res.status}`);
      const liveRepos = await res.json();
      
      // Merge live repos with our rich category tags & descriptions
      const merged = mergeWithFallback(liveRepos);
      setCache(CACHE_KEY_REPOS, merged);
      return merged;
    } catch (err) {
      console.warn("Using offline repos fallback dataset due to:", err.message);
      return window.PROJECTS_DATA || [];
    }
  }

  function mergeWithFallback(liveRepos) {
    const fallbackMap = new Map((window.PROJECTS_DATA || []).map(r => [r.name.toLowerCase(), r]));
    
    return liveRepos.map(r => {
      const fallback = fallbackMap.get(r.name.toLowerCase());
      return {
        name: r.name,
        category: fallback ? fallback.category : inferCategory(r),
        language: r.language || (fallback ? fallback.language : "Code"),
        description: r.description || (fallback ? fallback.description : "Repository by @reyfuu"),
        stars: r.stargazers_count || 0,
        forks: r.forks_count || 0,
        tags: fallback ? fallback.tags : [r.language || "Project", "Open Source"],
        url: r.html_url || `https://github.com/reyfuu/${r.name}`,
        featured: fallback ? fallback.featured : false,
        highlights: fallback ? fallback.highlights : "Active GitHub project codebase."
      };
    });
  }

  function inferCategory(repo) {
    const name = repo.name.toLowerCase();
    const lang = (repo.language || "").toLowerCase();
    if (name.includes("ai") || name.includes("agent") || name.includes("chat") || name.includes("model")) return "ai";
    if (lang === "go" || lang === "php" || name.includes("api") || name.includes("backend")) return "backend";
    if (lang === "typescript" || lang === "javascript" || lang === "vue" || lang === "kotlin" || name.includes("ui")) return "frontend";
    return "devops";
  }

  function getCache(key) {
    try {
      const itemStr = localStorage.getItem(key);
      if (!itemStr) return null;
      const item = JSON.parse(itemStr);
      if (Date.now() - item.timestamp > CACHE_TTL) {
        localStorage.removeItem(key);
        return null;
      }
      return item.data;
    } catch (e) {
      return null;
    }
  }

  function setCache(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), data }));
    } catch (e) {}
  }

  return {
    fetchProfile,
    fetchRepositories
  };
})();

window.GitHubService = GitHubService;
