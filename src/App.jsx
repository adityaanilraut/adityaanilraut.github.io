import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="container nav-container">
          <a href="#hero" className="nav-brand" onClick={closeMobileMenu}>
            ADITYA_PORTFOLIO
          </a>

          <button 
            className="mobile-nav-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
              </ul>
            </nav>

            <a 
              href="/Aditya_Anil_Raut_resume.pdf" 
              className="btn btn-primary" 
              style={{ padding: '0.45rem 1rem', fontSize: '0.75rem' }}
              target="_blank" 
              rel="noopener noreferrer"
              download="Aditya_Anil_Raut_resume.pdf"
              onClick={closeMobileMenu}
            >
              Resume
            </a>
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
          <div className="nav-brand" style={{ fontSize: '1.1rem' }}>
            ADITYA_PORTFOLIO
          </div>
          <div className="footer-socials">
            <a 
              href="https://github.com/adityaanilraut" 
              className="footer-social-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/adityaanilraut" 
              className="footer-social-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:araut1@csuchico.edu" 
              className="footer-social-link"
            >
              Email
            </a>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Built with Precision. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
