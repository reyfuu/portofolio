'use client';
import styles from './Skills.module.css';

const skills = [
  { name: 'React', level: 90, color: '#61DAFB', icon: '⚛️', category: 'Frontend' },
  { name: 'Vue.js', level: 85, color: '#42b883', icon: '💚', category: 'Frontend' },
  { name: 'JavaScript', level: 92, color: '#F7DF1E', icon: '🟨', category: 'Language' },
  { name: 'Laravel', level: 88, color: '#FF2D20', icon: '🔴', category: 'Backend' },
  { name: 'Express.js', level: 85, color: '#68A063', icon: '🟢', category: 'Backend' },
  { name: 'Node.js', level: 82, color: '#339933', icon: '🟩', category: 'Backend' },
  { name: 'HTML/CSS', level: 95, color: '#E34F26', icon: '🎨', category: 'Frontend' },
  { name: 'MySQL', level: 80, color: '#4479A1', icon: '🗄️', category: 'Database' },
  { name: 'Git', level: 88, color: '#F05032', icon: '🔀', category: 'Tools' },
  { name: 'Docker', level: 70, color: '#2496ED', icon: '🐳', category: 'Tools' },
  { name: 'TypeScript', level: 78, color: '#3178C6', icon: '🔷', category: 'Language' },
  { name: 'REST API', level: 90, color: '#8b5cf6', icon: '🔗', category: 'Backend' },
];

const categories = ['All', 'Frontend', 'Backend', 'Language', 'Database', 'Tools'];

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
                <span className={styles.skillIcon}>{skill.icon}</span>
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
