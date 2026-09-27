/**
 * Main Application Logic for Reyfuu Developer Portfolio
 */

document.addEventListener("DOMContentLoaded", async () => {
  // 1. Initialize State
  let allProjects = window.PROJECTS_DATA || [];
  let activeFilter = "all";
  let searchQuery = "";

  // 2. Initialize DOM Elements
  const projectGrid = document.getElementById("projects-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("repo-search");
  const statReposEl = document.getElementById("stat-repos");
  const statLangsEl = document.getElementById("stat-langs");
  const statAiEl = document.getElementById("stat-ai");
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body-content");
  const modalClose = document.getElementById("modal-close-btn");
  const copyBtn = document.getElementById("copy-contact-btn");
  const copyToast = document.getElementById("copy-toast");
  const mobileNavToggle = document.getElementById("mobile-menu-btn");
  const navMenu = document.getElementById("nav-links");

  // 3. Initialize Interactive Terminal
  if (window.InteractiveTerminal) {
    new window.InteractiveTerminal("cli-terminal-container");
  }

  // 4. Fetch Live GitHub Profile & Repositories
  if (window.GitHubService) {
    try {
      const liveRepos = await window.GitHubService.fetchRepositories();
      if (liveRepos && liveRepos.length > 0) {
        allProjects = liveRepos;
      }
      const profile = await window.GitHubService.fetchProfile();
      if (profile && statReposEl) {
        statReposEl.textContent = profile.public_repos || "54+";
      }
    } catch (e) {
      console.warn("GitHub Service fallback in use.");
    }
  }

  // Calculate stats
  updateStatsCounters();

  // 5. Render Projects
  renderProjects();

  // 6. Setup Filter Event Listeners
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter") || "all";
      renderProjects();
    });
  });

  // 7. Setup Search Event Listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }

  // 8. Render Project Cards Logic
  function renderProjects() {
    if (!projectGrid) return;

    const filtered = allProjects.filter(item => {
      const matchesCategory = activeFilter === "all" || item.category === activeFilter;
      const matchesSearch = !searchQuery || 
        item.name.toLowerCase().includes(searchQuery) ||
        (item.description && item.description.toLowerCase().includes(searchQuery)) ||
        (item.language && item.language.toLowerCase().includes(searchQuery)) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(searchQuery)));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      projectGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>No matching projects found</h3>
          <p>Try searching for a different keyword or switch the category filter.</p>
          <button class="btn btn-outline" id="reset-filter-btn">Reset All Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-filter-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          if (searchInput) searchInput.value = "";
          searchQuery = "";
          activeFilter = "all";
          filterButtons.forEach(b => b.classList.toggle("active", b.getAttribute("data-filter") === "all"));
          renderProjects();
        });
      }
      return;
    }

    projectGrid.innerHTML = filtered.map(repo => {
      const langBadgeClass = getLangBadgeClass(repo.language);
      const categoryBadge = getCategoryBadge(repo.category);

      return `
        <div class="project-card glass-card" data-repo-name="${escapeHtml(repo.name)}">
          <div class="card-top">
            <span class="category-pill ${categoryBadge.cls}">${categoryBadge.label}</span>
            <div class="repo-meta-right">
              ${repo.language ? `<span class="lang-pill ${langBadgeClass}">${escapeHtml(repo.language)}</span>` : ""}
            </div>
          </div>
          <div class="card-body">
            <h3 class="repo-title">
              <span class="repo-icon">⚡</span>
              ${escapeHtml(repo.name)}
            </h3>
            <p class="repo-desc">${escapeHtml(repo.description || "No description provided.")}</p>
            <div class="repo-tags">
              ${(repo.tags || []).slice(0, 3).map(tag => `<span class="tag-item">#${escapeHtml(tag)}</span>`).join("")}
            </div>
          </div>
          <div class="card-footer">
            <button class="btn-card-detail" data-action="open-detail" data-repo="${escapeHtml(repo.name)}">
              <span>Inspect Architecture</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a href="${escapeHtml(repo.url)}" target="_blank" rel="noopener noreferrer" class="btn-icon-link" title="Open GitHub Repo" aria-label="Open GitHub Repository ${escapeHtml(repo.name)}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      `;
    }).join("");

    // Attach card click handlers for modal
    projectGrid.querySelectorAll('[data-action="open-detail"]').forEach(btn => {
      btn.addEventListener("click", (e) => {
        const repoName = btn.getAttribute("data-repo");
        const repo = allProjects.find(r => r.name === repoName);
        if (repo) openModal(repo);
      });
    });
  }

  function getLangBadgeClass(lang) {
    if (!lang) return "badge-default";
    const l = lang.toLowerCase();
    if (l.includes("python")) return "badge-python";
    if (l.includes("go")) return "badge-go";
    if (l.includes("typescript")) return "badge-ts";
    if (l.includes("javascript")) return "badge-js";
    if (l.includes("php")) return "badge-php";
    if (l.includes("vue")) return "badge-vue";
    if (l.includes("kotlin")) return "badge-kotlin";
    return "badge-default";
  }

  function getCategoryBadge(cat) {
    switch (cat) {
      case "ai": return { label: "AI & Agents", cls: "cat-ai" };
      case "backend": return { label: "Backend / Microservices", cls: "cat-backend" };
      case "frontend": return { label: "Fullstack / Mobile", cls: "cat-frontend" };
      case "devops": return { label: "DevOps / Systems", cls: "cat-devops" };
      default: return { label: "Project", cls: "cat-default" };
    }
  }

  function updateStatsCounters() {
    if (statReposEl) statReposEl.textContent = allProjects.length || 54;
    if (statAiEl) {
      const aiCount = allProjects.filter(p => p.category === "ai").length;
      statAiEl.textContent = `${aiCount}+`;
    }
    if (statLangsEl) {
      const uniqueLangs = new Set(allProjects.map(p => p.language).filter(Boolean));
      statLangsEl.textContent = `${uniqueLangs.size}+`;
    }
  }

  // 9. Modal Management
  function openModal(repo) {
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="modal-header-info">
        <div class="modal-title-row">
          <span class="category-pill ${getCategoryBadge(repo.category).cls}">${getCategoryBadge(repo.category).label}</span>
          ${repo.language ? `<span class="lang-pill ${getLangBadgeClass(repo.language)}">${escapeHtml(repo.language)}</span>` : ""}
        </div>
        <h2 class="modal-repo-name">${escapeHtml(repo.name)}</h2>
        <p class="modal-repo-desc">${escapeHtml(repo.description || "Active production repository by @reyfuu.")}</p>
      </div>

      <div class="modal-section">
        <h4 class="modal-section-title">Architectural Highlights & Capabilities</h4>
        <div class="modal-highlight-box">
          <p>${escapeHtml(repo.highlights || "Modular design pattern with clean separation of concerns and robust error handling.")}</p>
        </div>
      </div>

      <div class="modal-section">
        <h4 class="modal-section-title">Technology Stack & Tags</h4>
        <div class="modal-tags-list">
          ${(repo.tags || ["Open Source", "Software Engineering"]).map(t => `<span class="modal-tag-pill">#${escapeHtml(t)}</span>`).join("")}
        </div>
      </div>

      <div class="modal-actions-row">
        <a href="${escapeHtml(repo.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary modal-cta-btn">
          <span>View Source on GitHub</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
        </a>
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // 10. Copy Contact Snippet
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const email = "reyfuu@users.noreply.github.com";
      navigator.clipboard.writeText(email).then(() => {
        if (copyToast) {
          copyToast.classList.add("show");
          setTimeout(() => copyToast.classList.remove("show"), 2500);
        }
      }).catch(() => {
        alert("GitHub profile: https://github.com/reyfuu");
      });
    });
  }

  // 11. Mobile Navigation Toggle
  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-open");
      mobileNavToggle.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("mobile-open");
        mobileNavToggle.classList.remove("active");
      });
    });
  }

  // 12. Ambient Background Particles
  initAmbientBackground();

  function escapeHtml(text) {
    if (!text) return "";
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
});

function initAmbientBackground() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 25), 45);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.5,
      color: Math.random() > 0.5 ? "rgba(0, 240, 255, " : "rgba(139, 92, 246, "
    });
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, idx) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + "0.6)";
      ctx.fill();

      for (let j = idx + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.12 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}
