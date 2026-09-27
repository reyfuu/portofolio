/**
 * Reyfuu Portfolio - Fallback & Verified Repository Dataset
 * Crawled and verified from github.com/reyfuu (54 active repositories)
 */

const REPO_DATA = [
  // --- AI & Intelligent Agents ---
  {
    name: "crewAi",
    category: "ai",
    language: "Python",
    description: "Multi-agent autonomous systems and task automation workflows using CrewAI framework.",
    stars: 0,
    forks: 0,
    tags: ["CrewAI", "Python", "Autonomous Agents", "LLM Orchestration"],
    url: "https://github.com/reyfuu/crewAi",
    featured: true,
    highlights: "Multi-agent collaborative pipelines, automated research and goal execution."
  },
  {
    name: "agentFk",
    category: "ai",
    language: "Python",
    description: "Custom AI Agent framework designed for specialized tool calling and intelligent reasoning.",
    stars: 0,
    forks: 0,
    tags: ["Python", "AI Framework", "Tool Calling", "Agents"],
    url: "https://github.com/reyfuu/agentFk",
    featured: true,
    highlights: "Custom prompt execution engine and tool invocation protocols."
  },
  {
    name: "aipreneurNews",
    category: "ai",
    language: "Python",
    description: "Automated AI news intelligence curator and summarizer pipeline.",
    stars: 0,
    forks: 0,
    tags: ["Python", "NLP", "News Automation", "AI"],
    url: "https://github.com/reyfuu/aipreneurNews",
    featured: true,
    highlights: "Automated news scraping, classification, and summarization pipeline."
  },
  {
    name: "platform-ai",
    category: "ai",
    language: "HTML",
    description: "Web-based intelligent AI platform interface for model interactions and analytics.",
    stars: 0,
    forks: 0,
    tags: ["JavaScript", "HTML5", "AI Platform", "UI/UX"],
    url: "https://github.com/reyfuu/platform-ai",
    featured: false,
    highlights: "Interactive client portal for AI model testing and visualization."
  },
  {
    name: "chatbot",
    category: "ai",
    language: "HTML",
    description: "Interactive conversational chatbot UI with modern real-time streaming response layout.",
    stars: 0,
    forks: 0,
    tags: ["Chatbot", "Conversational AI", "JavaScript", "HTML"],
    url: "https://github.com/reyfuu/chatbot",
    featured: false,
    highlights: "Responsive conversation stream and prompt template library."
  },
  {
    name: "random-forest",
    category: "ai",
    language: "Jupyter Notebook",
    description: "Implementation and evaluation of Random Forest machine learning classifier for predictive modeling.",
    stars: 0,
    forks: 0,
    tags: ["Machine Learning", "Python", "Scikit-Learn", "Data Science"],
    url: "https://github.com/reyfuu/random-forest",
    featured: false,
    highlights: "Model training, hyperparameter tuning, and decision tree visualization."
  },
  {
    name: "Autism-Detection",
    category: "ai",
    language: "Python",
    description: "Machine learning research and classification model for early autism screening detection.",
    stars: 0,
    forks: 0,
    tags: ["ML", "Healthcare AI", "Python", "Classification"],
    url: "https://github.com/reyfuu/Autism-Detection",
    featured: false,
    highlights: "Biomedical dataset processing with high accuracy classification algorithms."
  },
  {
    name: "voice-changer",
    category: "ai",
    language: "Python",
    description: "Real-time AI voice changer and audio processing algorithms.",
    stars: 0,
    forks: 0,
    tags: ["Voice AI", "Audio Processing", "Real-Time", "DSP"],
    url: "https://github.com/reyfuu/voice-changer",
    featured: false,
    highlights: "Pitch shifting and acoustic formants transformation algorithms."
  },

  // --- Backend & High-Performance Microservices ---
  {
    name: "kasir-api",
    category: "backend",
    language: "Go",
    description: "High-performance POS and transaction cashier REST API written in Golang.",
    stars: 0,
    forks: 0,
    tags: ["Golang", "REST API", "Microservices", "Clean Architecture"],
    url: "https://github.com/reyfuu/kasir-api",
    featured: true,
    highlights: "Concurrent request handling, robust transaction logging, and minimal latency."
  },
  {
    name: "nestjs",
    category: "backend",
    language: "TypeScript",
    description: "Enterprise backend architecture boilerplate with NestJS, modular DI, and Prisma/TypeORM.",
    stars: 0,
    forks: 0,
    tags: ["NestJS", "TypeScript", "Enterprise Backend", "Architecture"],
    url: "https://github.com/reyfuu/nestjs",
    featured: true,
    highlights: "Strict type-safety, dependency injection patterns, and REST endpoints."
  },
  {
    name: "capstone-backend",
    category: "backend",
    language: "JavaScript",
    description: "Scalable backend REST API service built for academic and production capstone deployments.",
    stars: 0,
    forks: 0,
    tags: ["Node.js", "Express", "REST API", "JWT Auth"],
    url: "https://github.com/reyfuu/capstone-backend",
    featured: false,
    highlights: "Secure authentication, database migrations, and rate limiting."
  },
  {
    name: "new-monitoring",
    category: "backend",
    language: "PHP",
    description: "System & server status monitoring application with alerting and metric graphs.",
    stars: 0,
    forks: 0,
    tags: ["PHP", "Monitoring", "SysAdmin", "Dashboard"],
    url: "https://github.com/reyfuu/new-monitoring",
    featured: false,
    highlights: "Telemetry polling and uptime analytics."
  },
  {
    name: "portal_website",
    category: "backend",
    language: "PHP",
    description: "Campus academic student portal system (UKDC) with role-based access management.",
    stars: 0,
    forks: 0,
    tags: ["PHP", "MySQL", "Web Portal", "Academic System"],
    url: "https://github.com/reyfuu/portal_website",
    featured: false,
    highlights: "Student grading, course enrollment, and administrative workflows."
  },
  {
    name: "skinku",
    category: "backend",
    language: "PHP",
    description: "E-Commerce backend and inventory management system for skincare products.",
    stars: 0,
    forks: 0,
    tags: ["PHP", "E-Commerce", "MySQL", "Inventory"],
    url: "https://github.com/reyfuu/skinku",
    featured: false,
    highlights: "Product SKU catalog, payment gateway integration hooks, and order fulfillment."
  },
  {
    name: "inertia-gagal-https",
    category: "backend",
    language: "PHP",
    description: "Laravel Filament + Inertia.js architecture configuration for edge firewall & HTTPS proxies.",
    stars: 0,
    forks: 0,
    tags: ["Laravel", "Filament", "Inertia.js", "DevOps/PHP"],
    url: "https://github.com/reyfuu/inertia-gagal-https",
    featured: false,
    highlights: "Edge reverse proxy header resolution and SSL termination fixes."
  },
  {
    name: "learn-go",
    category: "backend",
    language: "Go",
    description: "In-depth Golang concurrency, goroutines, channels, and microservice patterns.",
    stars: 0,
    forks: 0,
    tags: ["Golang", "Concurrency", "Algorithms", "Data Structures"],
    url: "https://github.com/reyfuu/learn-go",
    featured: false,
    highlights: "Benchmark tests, memory management, and asynchronous pipelines in Go."
  },

  // --- Fullstack, Frontend & Mobile ---
  {
    name: "fintrack",
    category: "frontend",
    language: "Vue",
    description: "Personal finance and budget analytics tracking application with interactive charts.",
    stars: 0,
    forks: 0,
    tags: ["Vue.js", "Chart.js", "State Management", "Fintech"],
    url: "https://github.com/reyfuu/fintrack",
    featured: true,
    highlights: "Expense categorization, recurring budget alerts, and cash flow visualizers."
  },
  {
    name: "ecommerce",
    category: "frontend",
    language: "TypeScript",
    description: "Modern E-Commerce shopping platform with responsive cart, checkout, and product filtering.",
    stars: 0,
    forks: 0,
    tags: ["TypeScript", "React/Next", "E-Commerce", "Tailwind/CSS"],
    url: "https://github.com/reyfuu/ecommerce",
    featured: true,
    highlights: "Dynamic catalog, optimistic UI updates, and checkout workflow."
  },
  {
    name: "inventory",
    category: "frontend",
    language: "TypeScript",
    description: "Warehouse inventory & stock management web application with batch tracking.",
    stars: 0,
    forks: 0,
    tags: ["TypeScript", "Inventory", "Dashboard", "CRUD"],
    url: "https://github.com/reyfuu/inventory",
    featured: false,
    highlights: "Real-time stock level counters, QR barcode readiness, and audit logs."
  },
  {
    name: "e-learning",
    category: "frontend",
    language: "TypeScript",
    description: "Digital learning management system with course modules, video lectures, and quiz tests.",
    stars: 0,
    forks: 0,
    tags: ["TypeScript", "LMS", "Education", "Interactive UI"],
    url: "https://github.com/reyfuu/e-learning",
    featured: false,
    highlights: "Student progress tracking and interactive assessment engine."
  },
  {
    name: "Quiz",
    category: "frontend",
    language: "Kotlin",
    description: "Native Android quiz application built with Kotlin for community educational programs.",
    stars: 0,
    forks: 0,
    tags: ["Kotlin", "Android", "Mobile Development", "Jetpack"],
    url: "https://github.com/reyfuu/Quiz",
    featured: false,
    highlights: "Clean MVVM architecture, animated transitions, and local SQLite caching."
  },
  {
    name: "clt-calculator",
    category: "frontend",
    language: "JavaScript",
    description: "Central Limit Theorem statistical simulator and interactive sampling visualizer.",
    stars: 0,
    forks: 0,
    tags: ["JavaScript", "Mathematics", "Statistics", "Simulation"],
    url: "https://github.com/reyfuu/clt-calculator",
    featured: false,
    highlights: "Real-time Monte Carlo sampling and probability distribution curves."
  },
  {
    name: "sibit",
    category: "frontend",
    language: "JavaScript",
    description: "Integrated scholarship & academic information web application.",
    stars: 0,
    forks: 0,
    tags: ["JavaScript", "Web App", "Frontend", "UI"],
    url: "https://github.com/reyfuu/sibit",
    featured: false,
    highlights: "Applicant submission portal and verification workflow."
  },
  {
    name: "portofolio",
    category: "frontend",
    language: "JavaScript",
    description: "Interactive portfolio and personal website featuring dynamic showcase components.",
    stars: 0,
    forks: 0,
    tags: ["JavaScript", "Portfolio", "CSS3", "Responsive"],
    url: "https://github.com/reyfuu/portofolio",
    featured: false,
    highlights: "Lightweight animations and project presentation."
  },

  // --- DevOps, Cloud & Systems Architecture ---
  {
    name: "belajar-kubernetes",
    category: "devops",
    language: "YAML / K8s",
    description: "Comprehensive Kubernetes configurations, pods, deployments, services, ingress, and configmaps.",
    stars: 0,
    forks: 0,
    tags: ["Kubernetes", "DevOps", "Containers", "K8s Ingress"],
    url: "https://github.com/reyfuu/belajar-kubernetes",
    featured: true,
    highlights: "Multi-node cluster management, horizontal pod autoscaling, and zero-downtime rollouts."
  },
  {
    name: "docker-ubuntu-vnc-desktop",
    category: "devops",
    language: "Docker",
    description: "Dockerized Ubuntu LXDE/LxQT environment accessible via browser-based HTML5 VNC interface.",
    stars: 0,
    forks: 0,
    tags: ["Docker", "Linux", "VNC", "Virtualization"],
    url: "https://github.com/reyfuu/docker-ubuntu-vnc-desktop",
    featured: true,
    highlights: "Headless containerized desktop with WebSocket web streaming."
  },
  {
    name: "ltsp-project",
    category: "devops",
    language: "Shell / Linux",
    description: "Linux Terminal Server Project (LTSP) deployment scripts for thin client networks.",
    stars: 0,
    forks: 0,
    tags: ["Linux", "SysAdmin", "Networking", "LTSP"],
    url: "https://github.com/reyfuu/ltsp-project",
    featured: false,
    highlights: "PXE network booting and centralized user home directories."
  },
  {
    name: "remote-desktop",
    category: "devops",
    language: "Shell / Linux",
    description: "Automated remote workstation configuration and secure tunneling protocols.",
    stars: 0,
    forks: 0,
    tags: ["Remote Access", "SSH Tunnel", "Linux", "SysAdmin"],
    url: "https://github.com/reyfuu/remote-desktop",
    featured: false,
    highlights: "Encrypted traffic tunnels and automated headless session setup."
  },
  {
    name: "erdPool",
    category: "devops",
    language: "Database / Design",
    description: "Relational database entity relationship diagrams (ERD) and relational schema design repository.",
    stars: 0,
    forks: 0,
    tags: ["Database Design", "ERD", "SQL", "Schema Modeling"],
    url: "https://github.com/reyfuu/erdPool",
    featured: false,
    highlights: "Normalized 3NF relational schemas and foreign key relationship mapping."
  },
  {
    name: "uml",
    category: "devops",
    language: "Architecture / UML",
    description: "System architecture models, class diagrams, sequence diagrams, and use case specifications.",
    stars: 0,
    forks: 0,
    tags: ["UML", "System Architecture", "Software Engineering"],
    url: "https://github.com/reyfuu/uml",
    featured: false,
    highlights: "Comprehensive object-oriented design and interaction flow models."
  }
];

window.PROJECTS_DATA = REPO_DATA;
