'use client';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'Full-featured online store with cart, payment gateway, admin dashboard, and real-time inventory management.',
    tags: ['React', 'Laravel', 'MySQL', 'Stripe'],
    color: '#8b5cf6',
    emoji: '🛒',
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management App',
    desc: 'Collaborative project management tool with drag-and-drop boards, real-time updates, and team workspaces.',
    tags: ['Vue.js', 'Express.js', 'Socket.io', 'MongoDB'],
    color: '#06b6d4',
    emoji: '📋',
    github: '#',
    demo: '#',
  },
  {
    title: 'Social Media Dashboard',
    desc: 'Analytics dashboard aggregating social media data with beautiful charts, scheduling, and auto-posting features.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    color: '#ec4899',
    emoji: '📊',
    github: '#',
    demo: '#',
  },
  {
    title: 'REST API Gateway',
    desc: 'Scalable microservices API gateway with rate limiting, JWT authentication, caching, and detailed logging.',
    tags: ['Express.js', 'Redis', 'Docker', 'JWT'],
    color: '#f59e0b',
    emoji: '🔌',
    github: '#',
    demo: '#',
  },
  {
    title: 'Blog CMS Platform',
    desc: 'Full-stack content management system with markdown support, SEO tools, comments, and multi-author support.',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Algolia'],
    color: '#10b981',
    emoji: '✍️',
    github: '#',
    demo: '#',
  },
  {
    title: 'Real-time Chat App',
    desc: 'End-to-end encrypted messaging app with group chats, file sharing, voice messages, and push notifications.',
    tags: ['React', 'Express.js', 'Socket.io', 'MongoDB'],
    color: '#3b82f6',
    emoji: '💬',
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">🚀 Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A selection of projects that showcase my skills and passion for building great products</p>
        </div>
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div key={p.title} className={`glass-card ${styles.card}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={styles.cardTop} style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}08)` }}>
                <span className={styles.emoji}>{p.emoji}</span>
                <div className={styles.cardLinks}>
                  <a href={p.github} className={styles.iconBtn} title="GitHub" target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                    </svg>
                  </a>
                  <a href={p.demo} className={styles.iconBtn} title="Live Demo" target="_blank" rel="noopener noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle} style={{ color: p.color }}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
                <div className={styles.tags}>
                  {p.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
