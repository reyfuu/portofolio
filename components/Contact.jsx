// Contact section with contact details, social links, and a simulated message form.
// It includes a simple form state and submit handling to display a success message.
'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

const socials = [
  { name: 'GitHub', href: 'https://github.com', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
    </svg>
  )},
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )},
  { name: 'Twitter', href: 'https://twitter.com', icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
    </svg>
  )},
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  // Simulated form submission handler that shows a temporary success message.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">📬 Contact</div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">Have a project in mind? I'd love to hear about it. Drop me a message!</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={`glass-card ${styles.infoCard}`}>
              <h3 className={styles.infoTitle}>Get In Touch</h3>
              <p className={styles.infoText}>
                I'm currently available for freelance projects, full-time positions,
                and interesting collaborations. Let's build something amazing together.
              </p>
              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📧</div>
                  <div>
                    <div className={styles.contactLabel}>Email</div>
                    <a href="mailto:reyfuu@email.com" className={styles.contactValue}>reyfuu@email.com</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📍</div>
                  <div>
                    <div className={styles.contactLabel}>Location</div>
                    <span className={styles.contactValue}>Indonesia 🇮🇩</span>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>⚡</div>
                  <div>
                    <div className={styles.contactLabel}>Response Time</div>
                    <span className={styles.contactValue}>Within 24 hours</span>
                  </div>
                </div>
              </div>
              <div className={styles.socials}>
                {socials.map((s) => (
                  <a key={s.name} href={s.href} className={styles.socialBtn} target="_blank" rel="noopener noreferrer" title={s.name}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={`glass-card ${styles.form}`}>
            {sent && (
              <div className={styles.successMsg}>
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}
            <div className={styles.formGroup}>
              <label className={styles.label}>Your Name</label>
              <input
                className={styles.input}
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address</label>
              <input
                className={styles.input}
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
              />
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className="divider" />
        <p>Built with ❤️ by <span className="gradient-text">Reyfuu</span> · Next.js · {new Date().getFullYear()}</p>
      </footer>
    </section>
  );
}
