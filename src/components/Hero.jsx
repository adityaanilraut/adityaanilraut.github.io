import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-layout">
          <p className="hero-subtitle">Hello World, I'm</p>
          <h1 className="hero-title">
            <span className="hero-title-gradient">Aditya Raut</span>
          </h1>
          
          <div className="hero-role-list">
            <span className="hero-role-badge">AI Systems Engineer</span>
            <span className="hero-role-badge">RAG Pipelines</span>
            <span className="hero-role-badge">Agentic Workflows</span>
            <span className="hero-role-badge">Cloud-Native APIs</span>
          </div>

          <p className="hero-description">
            Pursuing my M.S. in Computer Science at California State University, Chico. 
            I design and build end-to-end production systems where Large Language Models, 
            data engineering pipelines, and scalable cloud-native architectures intersect to solve real-world problems.
          </p>

          <div className="hero-meta">
            <span className="hero-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              San Jose, CA
            </span>
            <span className="hero-meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              CSU Chico Graduate Candidate
            </span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
            <a 
              href="/Aditya_Anil_Raut_resume.pdf" 
              className="btn btn-secondary"
              download
            >
              Get Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
            <a 
              href="/Aditya_Anil_Raut_resume.pdf" 
              className="btn btn-secondary"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Open PDF
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
