/**
 * Interactive Hacker CLI Terminal for Reyfuu's Portfolio
 */

class InteractiveTerminal {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.history = [];
    this.historyIndex = -1;
    this.commands = {
      help: this.cmdHelp.bind(this),
      bio: this.cmdBio.bind(this),
      skills: this.cmdSkills.bind(this),
      projects: this.cmdProjects.bind(this),
      ai: this.cmdAi.bind(this),
      backend: this.cmdBackend.bind(this),
      devops: this.cmdDevops.bind(this),
      contact: this.cmdContact.bind(this),
      stats: this.cmdStats.bind(this),
      matrix: this.cmdMatrix.bind(this),
      sudo: this.cmdSudo.bind(this),
      clear: this.cmdClear.bind(this)
    };

    this.render();
    this.attachEvents();
    this.printWelcome();
  }

  render() {
    this.container.innerHTML = `
      <div class="terminal-header">
        <div class="terminal-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="terminal-title">reyfuu@cyber-workstation:~ (zsh)</div>
        <div class="terminal-badge">LIVE CLI v2.4</div>
      </div>
      <div class="terminal-body" id="terminal-output"></div>
      <div class="terminal-input-row">
        <span class="terminal-prompt"><span class="prompt-user">reyfuu</span><span class="prompt-at">@</span><span class="prompt-host">matrix</span>:<span class="prompt-path">~</span>$ </span>
        <input type="text" id="terminal-input" class="terminal-input" autocomplete="off" spellcheck="false" placeholder="Type 'help' and press Enter...">
      </div>
    `;

    this.outputEl = this.container.querySelector("#terminal-output");
    this.inputEl = this.container.querySelector("#terminal-input");
  }

  attachEvents() {
    this.inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const rawInput = this.inputEl.value.trim();
        if (rawInput) {
          this.history.push(rawInput);
          this.historyIndex = this.history.length;
          this.execute(rawInput);
        }
        this.inputEl.value = "";
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (this.historyIndex > 0) {
          this.historyIndex--;
          this.inputEl.value = this.history[this.historyIndex] || "";
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.inputEl.value = this.history[this.historyIndex] || "";
        } else {
          this.historyIndex = this.history.length;
          this.inputEl.value = "";
        }
      }
    });

    this.container.addEventListener("click", () => {
      this.inputEl.focus();
    });
  }

  printWelcome() {
    this.appendOutput(`
<span class="t-accent">⚡ Reyfuu Interactive Terminal Shell v2.4.0</span>
Type <span class="t-cyan font-bold">'help'</span> to see all available commands.
Try <span class="t-purple font-bold">'projects'</span>, <span class="t-green font-bold">'skills'</span>, or <span class="t-yellow font-bold">'ai'</span>.
--------------------------------------------------`);
  }

  appendOutput(html, isCommand = false, cmdText = "") {
    const line = document.createElement("div");
    line.className = "terminal-line";
    if (isCommand) {
      line.innerHTML = `<span class="t-muted">$ ${this.escapeHtml(cmdText)}</span>`;
      this.outputEl.appendChild(line);
      if (html) {
        const resLine = document.createElement("div");
        resLine.className = "terminal-response";
        resLine.innerHTML = html;
        this.outputEl.appendChild(resLine);
      }
    } else {
      line.innerHTML = html;
      this.outputEl.appendChild(line);
    }
    this.outputEl.scrollTop = this.outputEl.scrollHeight;
  }

  execute(cmdStr) {
    const parts = cmdStr.split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (this.commands[command]) {
      const result = this.commands[command](args);
      if (command !== "clear") {
        this.appendOutput(result, true, cmdStr);
      }
    } else {
      this.appendOutput(
        `<span class="t-red">zsh: command not found: ${this.escapeHtml(command)}</span>. Type <span class="t-cyan">'help'</span> for a list of commands.`,
        true,
        cmdStr
      );
    }
  }

  cmdHelp() {
    return `
<span class="t-cyan font-bold">AVAILABLE COMMANDS:</span>
  <span class="t-green">help</span>       - Display this assistance manual
  <span class="t-green">bio</span>        - Print developer background and profile summary
  <span class="t-green">skills</span>     - List technical skill matrix and proficiencies
  <span class="t-green">projects</span>   - Display curated flagship engineering repositories
  <span class="t-green">ai</span>         - Show specialized AI Agent & Machine Learning stack
  <span class="t-green">backend</span>    - Show Golang, NestJS & API microservice stack
  <span class="t-green">devops</span>     - Show Kubernetes, Docker, and Cloud infrastructure
  <span class="t-green">stats</span>      - Print live GitHub repository telemetry
  <span class="t-green">contact</span>    - Show developer links, email & social channels
  <span class="t-green">matrix</span>     - Trigger terminal cyber matrix animation
  <span class="t-green">clear</span>      - Clean up terminal viewport`;
  }

  cmdBio() {
    return `
<span class="t-cyan font-bold">REYFUU</span> — <span class="t-purple">AI Agent Engineer & Fullstack Systems Architect</span>
Location: Indonesia | GitHub: <a href="https://github.com/reyfuu" target="_blank" class="t-link">@reyfuu</a>
Passionate about building autonomous multi-agent pipelines (CrewAI), high-throughput Golang backend APIs, scalable enterprise TypeScript architectures, and containerized cloud systems.`;
  }

  cmdSkills() {
    return `
<span class="t-purple font-bold">🤖 AI & AGENTS:</span> CrewAI, Python, LangChain, Tool Calling, NLP, Scikit-Learn
<span class="t-cyan font-bold">⚡ BACKEND:</span> Golang, TypeScript (NestJS), Node.js, PHP (Laravel/Filament), MySQL, PostgreSQL
<span class="t-yellow font-bold">🎨 FRONTEND & MOBILE:</span> Vue.js, React, Kotlin (Android Jetpack Compose), Modern CSS
<span class="t-green font-bold">☁️ DEVOPS & SYSTEMS:</span> Kubernetes (K8s), Docker, Linux SysAdmin, LTSP, ERD/UML`;
  }

  cmdProjects() {
    const repos = (window.PROJECTS_DATA || []).slice(0, 6);
    let out = `<span class="t-cyan font-bold">TOP FLAGSHIP PROJECTS:</span>\n`;
    repos.forEach((r, idx) => {
      out += `  [${idx + 1}] <span class="t-yellow font-bold">${r.name}</span> (${r.language}) - ${r.description}\n      <a href="${r.url}" target="_blank" class="t-link">${r.url}</a>\n`;
    });
    return `<pre class="t-code">${out}</pre>`;
  }

  cmdAi() {
    return `
<span class="t-purple font-bold">🧠 AI & AUTONOMOUS AGENT REPOSITORIES:</span>
- <span class="t-cyan">crewAi</span>: Multi-agent automation workflows & collaborative LLM pipelines.
- <span class="t-cyan">agentFk</span>: Custom agent framework with dynamic tool execution.
- <span class="t-cyan">aipreneurNews</span>: Automated AI news aggregator and summarizer.
- <span class="t-cyan">random-forest</span> & <span class="t-cyan">Autism-Detection</span>: Applied ML classification models.`;
  }

  cmdBackend() {
    return `
<span class="t-cyan font-bold">⚡ BACKEND & HIGH PERFORMANCE MICROSERVICES:</span>
- <span class="t-green">kasir-api</span>: High-concurrency POS REST API in Golang.
- <span class="t-green">nestjs</span>: Enterprise architecture with TypeScript & modular DI.
- <span class="t-green">portal_website</span> & <span class="t-green">skinku</span>: Production web portals & e-commerce backends.`;
  }

  cmdDevops() {
    return `
<span class="t-green font-bold">☁️ DEVOPS & INFRASTRUCTURE:</span>
- <span class="t-yellow">belajar-kubernetes</span>: Cluster orchestration, Ingress, Pod autoscaling.
- <span class="t-yellow">docker-ubuntu-vnc-desktop</span>: Headless containerized desktop streaming.
- <span class="t-yellow">ltsp-project</span> & <span class="t-yellow">remote-desktop</span>: Thin client Linux workstation networking.`;
  }

  cmdStats() {
    const total = (window.PROJECTS_DATA || []).length || 54;
    return `
<span class="t-cyan font-bold">GITHUB TELEMETRY:</span>
- Total Public Repositories: <span class="t-green">${total}</span>
- Languages: Python, Go, TypeScript, PHP, Vue, Kotlin, JavaScript
- Status: Active Builder & Open Source Contributor`;
  }

  cmdContact() {
    return `
<span class="t-cyan font-bold">CONNECT WITH REYFUU:</span>
- GitHub: <a href="https://github.com/reyfuu" target="_blank" class="t-link">github.com/reyfuu</a>
- Inquiries: Open for AI Agent, Backend & Fullstack Architecture collaborations.`;
  }

  cmdMatrix() {
    return `<span class="t-green">Wake up, Neo... The Matrix has you. Follow the white rabbit 🐇. (Cyber security protocol initialized)</span>`;
  }

  cmdSudo() {
    return `<span class="t-red">reyfuu is not in the sudoers file. This incident will be reported to the cyber council.</span>`;
  }

  cmdClear() {
    this.outputEl.innerHTML = "";
    return "";
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
}

window.InteractiveTerminal = InteractiveTerminal;
