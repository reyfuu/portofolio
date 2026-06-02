// Skills section showing technology proficiencies with progress visuals.
// It maps skill data into animated cards and renders progress bars.
'use client';
import styles from './Skills.module.css';

const skills = [
  { name: 'React', level: 90, color: '#61DAFB', category: 'Frontend' },
  { name: 'Vue.js', level: 85, color: '#42b883', category: 'Frontend' },
  { name: 'Next.js', level: 80, color: '#111827', category: 'Frontend' },
  { name: 'JavaScript', level: 92, color: '#F7DF1E', category: 'Language' },
  { name: 'Laravel', level: 88, color: '#FF2D20', category: 'Backend' },
  { name: 'Express.js', level: 85, color: '#68A063', category: 'Backend' },
  { name: 'Node.js', level: 82, color: '#339933', category: 'Backend' },
  { name: 'HTML/CSS', level: 95, color: '#E34F26', icon: '🎨', category: 'Frontend' },
  { name: 'MySQL', level: 80, color: '#4479A1', category: 'Database' },
  { name: 'PostgreSQL', level: 82, color: '#336791', category: 'Database' },
  { name: 'Django', level: 80, color: '#0C4B33', category: 'Backend' },
  { name: 'Git', level: 88, color: '#F05032', category: 'Tools' },
  { name: 'Docker', level: 70, color: '#2496ED', category: 'Tools' },
  { name: 'Kubernetes', level: 65, color: '#326CE5', category: 'Tools' },
  { name: 'TypeScript', level: 78, color: '#3178C6', category: 'Language' },
  { name: 'REST API', level: 90, color: '#8b5cf6', category: 'Backend' },
];

const categories = ['All', 'Frontend', 'Backend', 'Language', 'Database', 'Tools'];

// Skills component renders the tech stack section using progress cards.
export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">🛠️ Skills</div>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">Technologies I use to bring ideas to life</p>
        </div>
        <div className={styles.grid}>
          {skills.map((skill, i) => (
            <div key={skill.name} className={`glass-card ${styles.skillCard}`} style={{ animationDelay: `${i * 0.05}s` }}>
              <div className={styles.skillHeader}>
                {/* icons removed as requested */}
                <div>
                  <div className={styles.skillName}>{skill.name}</div>
                  <div className={styles.skillCategory}>{skill.category}</div>
                </div>
                <span className={styles.skillLevel} style={{ color: skill.color }}>{skill.level}%</span>
              </div>
              <div className={styles.progressBg}>
                <div
                  className={styles.progressBar}
                  style={{ '--width': `${skill.level}%`, '--color': skill.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
