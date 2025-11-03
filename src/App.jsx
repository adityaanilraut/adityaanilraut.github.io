import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <span className="prompt-symbol">$</span> aditya.dev
          </div>
          <ul className="nav-menu">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a href="/Aditya_Anil_Raut_resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            <span className="prompt-symbol">$</span> ©2025 Aditya Raut
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

