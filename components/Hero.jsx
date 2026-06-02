// Hero section component with animated background particles and dynamic typing text.
// This component displays the main landing content and links to projects/contact.
'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

const roles = [
  'Fullstack Developer',
  'React Specialist',
  'Vue.js Expert',
  'Laravel Developer',
  'UI/UX Enthusiast',
];

// TypingText helper component animates rotating role text with type and delete effects.
function TypingText({ texts }) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex <= currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!isDeleting && charIndex > currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className={styles.typingText}>
      {displayText}
      <span className={styles.cursor}>|</span>
    </span>
  );
}

export default function Hero() {
  const particlesRef = useRef(null);

  // Initialize and animate floating particle background on component mount.
  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;

    // Resize canvas to fill the viewport and keep particle animation responsive.
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <canvas ref={particlesRef} className={styles.particles} />

      <div className={styles.content}>
        <div className={styles.badge} style={{ animationDelay: '0.1s' }}>
          <span className={styles.badgeDot}></span>
          Available for work
        </div>

        <h1 className={styles.title} style={{ animationDelay: '0.2s' }}>
          Hi, I'm{' '}
          <span className={styles.name}>Reyfuu</span>
          <br />
          <TypingText texts={roles} />
        </h1>

        <p className={styles.description} style={{ animationDelay: '0.4s' }}>
          Passionate fullstack developer crafting beautiful, performant web experiences.
          I build end-to-end solutions from sleek React & Vue frontends to robust
          Laravel & Express backends.
        </p>

        <div className={styles.cta} style={{ animationDelay: '0.6s' }}>
          <a href="#projects" className="btn btn-primary" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Get in Touch
          </a>
        </div>

        <div className={styles.stats}>
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '20+', label: 'Projects Done' },
            { value: '15+', label: 'Happy Clients' },
            { value: '5', label: 'Core Skills' },
          ].map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.avatarWrapper}>
        <div className={styles.avatarGlow}></div>
        <div className={styles.avatarRing}></div>
        <img
          src="/avatar.png"
          alt="Developer Avatar"
          className={styles.avatar}
        />
        <div className={styles.floatBadge1}>
          <span>⚡</span> React & Vue
        </div>
        <div className={styles.floatBadge2}>
          <span>🚀</span> Laravel & Express
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine}></div>
        <span>Scroll down</span>
      </div>
    </section>
  );
}
