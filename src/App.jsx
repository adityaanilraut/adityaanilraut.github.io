import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="container nav-container">
          <a href="#hero" className="nav-brand" onClick={closeMobileMenu}>
            aditya<span className="nav-brand-dot">.</span>dev
          </a>

          <button 
            className="mobile-nav-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

          <div className={`nav-menu-wrapper ${mobileMenuOpen ? 'open' : ''}`}>
            <nav>
              <ul className="nav-menu">
                <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
                <li><a href="#skills" onClick={closeMobileMenu}>Skills</a></li>
                <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
                <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
                <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
                <li>
                  <a 
                    href="/Aditya_Anil_Raut_resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>

            <button 
              className="theme-toggle-btn" 
              onClick={toggleTheme}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              aria-label="Toggle Theme Mode"
            >
              {theme === 'light' ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Aditya Raut. Built with React & modern styling.
          </p>
          <div className="footer-socials">
            <a 
              href="https://github.com/adityaanilraut" 
              className="footer-social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/adityaanilraut" 
              className="footer-social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:araut1@csuchico.edu" 
              className="footer-social-link"
              aria-label="Send Email"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
