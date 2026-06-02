// Experience timeline section displaying professional roles, achievements, and skills.
// It maps through experience data to render animated timeline cards.
'use client';
import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Senior Fullstack Developer',
    company: 'Tech Startup Co.',
    period: '2023 – Present',
    color: '#8b5cf6',
    points: [
      'Led development of microservices architecture serving 50k+ daily active users',
      'Built React dashboards reducing reporting time by 60%',
      'Architected Laravel REST APIs consumed by mobile & web clients',
    ],
    tags: ['React', 'Laravel', 'Docker', 'PostgreSQL'],
  },
  {
    role: 'Fullstack Developer',
    company: 'Digital Agency XYZ',
    period: '2022 – 2023',
    color: '#06b6d4',
    points: [
      'Developed 10+ client websites with Vue.js and Express.js backends',
      'Implemented CI/CD pipelines reducing deployment time by 40%',
      'Mentored 3 junior developers in modern JavaScript practices',
    ],
    tags: ['Vue.js', 'Express.js', 'MySQL', 'Git'],
  },
  {
    role: 'Junior Web Developer',
    company: 'Freelance & Agency',
    period: '2021 – 2022',
    color: '#ec4899',
    points: [
      'Built e-commerce and CMS platforms using Laravel & PHP',
      'Created responsive UIs with HTML, CSS, and JavaScript',
      'Maintained and optimized legacy web applications',
    ],
    tags: ['Laravel', 'JavaScript', 'HTML/CSS', 'MySQL'],
  },
];

// Experience component renders the professional timeline section.
export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.expSection}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">💼 Career</div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey in software development</p>
        </div>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={exp.role} className={styles.item} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className={styles.dot} style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}66` }} />
              <div className={`glass-card ${styles.card}`}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.company}>{exp.company}</div>
                  </div>
                  <span className={styles.period} style={{ color: exp.color }}>{exp.period}</span>
                </div>
                <ul className={styles.points}>
                  {exp.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className={styles.tags}>
                  {exp.tags.map((t) => (
                    <span key={t} className={styles.tag} style={{ borderColor: `${exp.color}44`, color: exp.color }}>{t}</span>
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
