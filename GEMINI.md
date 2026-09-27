# GEMINI.md — Project Memory & Context Rules

---

## 1. Project Context
- **Developer Name**: Reyfuu
- **GitHub URL**: `https://github.com/reyfuu`
- **Total Repositories**: 54+ active public repositories
- **Key Technical Areas**:
  1. AI Agents & Intelligent Systems (`crewAi`, `agentFk`, `aipreneurNews`, `chatbot`, `platform-ai`, `random-forest`, `Autism-Detection`)
  2. High-Performance Backend & Go (`kasir-api`, `nestjs`, `capstone-backend`, `new-monitoring`, `portal_website`)
  3. Modern Frontend & Mobile (`fintrack`, `ecommerce`, `inventory`, `e-learning`, `react`, `Quiz`)
  4. DevOps & Cloud Infrastructure (`belajar-kubernetes`, `docker-ubuntu-vnc-desktop`, `ltsp-project`, `remote-desktop`)

---

## 2. Architectural Guidelines
- **No Heavy Framework Overhead**: Built with clean, optimized Semantic HTML5, Modular CSS, and ES6+ Vanilla JavaScript for instantaneous loading (< 1s FCP).
- **Offline & Rate-Limit Resilient**: Always maintain static verified dataset in `js/projects-data.js` so if GitHub API rate-limits the user, all 54 repos still display flawlessly.
- **Interactive Hacker Terminal**: Built-in developer CLI widget allowing terminal interaction (`help`, `skills`, `projects`, `ai`, `backend`, `contact`, `clear`).

---

## 3. Persistent Guidelines for Agents
1. When updating skills or adding projects, update both `js/projects-data.js` and the corresponding skill cards.
2. Maintain strict separation of concerns across CSS modules (`variables.css`, `style.css`, `components.css`, `animations.css`).
3. Always verify changes using local browser tests or test matrix in `PRD.md`.
