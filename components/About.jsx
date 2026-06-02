// About section component showing developer summary, current stack, and highlight cards.
// This component renders a bio, current tech stack, and highlight cards with animated delays.
'use client';

import styles from './About.module.css';

const highlights = [
  { icon: '🎯', title: 'Problem Solver', desc: 'Turning complex challenges into elegant solutions' },
  { icon: '⚡', title: 'Fast Learner', desc: 'Quickly adapting to new technologies and frameworks' },
  { icon: '🤝', title: 'Team Player', desc: 'Collaborating effectively in agile environments' },
  { icon: '🎨', title: 'Clean Code', desc: 'Writing maintainable, scalable, documented code' },
];

// Main About component for the About section.
// It renders section heading, biography, tech badges, and highlight cards.
export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.textSide}>
            <div className="section-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              About Me
            </div>

            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Building the Web,<br/>
              <span className="gradient-text">Front to Back</span>
            </h2>

            <div className={styles.bio}>
              <p>
                I'm a passionate <strong>Fullstack Developer</strong> with 3+ years of experience 
                creating modern web applications. I specialize in bridging the gap between beautiful 
                user interfaces and powerful backend systems.
              </p>
              <p>
                My expertise spans from crafting reactive UIs with <strong>React</strong> and <strong>Vue.js</strong>, 
                to building RESTful APIs with <strong>Express.js</strong> and full-featured web apps 
                with <strong>Laravel</strong>. I love clean code, performance optimization, and 
                delivering exceptional user experiences.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to open source, 
                or mentoring fellow developers in the community.
              </p>
            </div>

            <div className={styles.techStack}>
              <span className={styles.techLabel}>Currently working with:</span>
              <div className={styles.techBadges}>
                {[
                  'Next.js',
                  'TypeScript',
                  'Docker',
                  'MySQL',
                  'PostgreSQL',
                  'Django',
                  'Kubernetes',
                  'Redis',
                ].map((tech) => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>

            <div className={styles.actions}>
              <a
                href="https://raw.githubusercontent.com/reyfuu/portofolio/master/CV%20IT%20Operations%20Engineer.pdf"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
            </div>
          </div>

          <div className={styles.cardsSide}>
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={`glass-card ${styles.highlightCard}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={styles.cardIcon}>{item.icon}</div>
                <div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
