// Navbar component with scroll-aware styling, smooth section navigation, and mobile menu toggle.
// It tracks scroll state, toggles mobile menu, and smoothly scrolls to sections.
'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track window scroll position to apply a sticky navbar style after scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation clicks by smoothly scrolling to the target section.
  // Also closes the mobile menu after navigation.
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo} onClick={(e) => handleNavClick(e, 'body')}>
          <span className={styles.logoIcon}>{'</>'}</span>
          <span className={styles.logoText}>reyfuu<span className={styles.logoDot}>.</span></span>
        </a>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/CV_IT_Operations_Engineer.pdf"
          className="btn"
          style={{ marginRight: '8px' }}
        >
          Download CV
        </a>

        <a
          href="#contact"
          className={`btn btn-primary ${styles.ctaBtn}`}
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Hire Me
        </a>

        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}
