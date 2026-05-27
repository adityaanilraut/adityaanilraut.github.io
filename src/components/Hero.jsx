import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-layout">
          <p className="hero-subtitle">Software Development Engineer (SDE)</p>
          <h1 className="hero-title">
            Software Development Engineer.<br />
            <span className="hero-title-gradient">Distributed Systems.</span><br />
            AI & Backend Builder.
          </h1>
          
          <div className="hero-role-list">
            <span className="hero-role-badge">Distributed Systems</span>
            <span className="hero-role-badge">Backend APIs</span>
            <span className="hero-role-badge">RAG & AI Agents</span>
            <span className="hero-role-badge">Data Pipelines</span>
          </div>

          <p className="hero-description">
            I design and build high-performance backend systems, distributed data pipelines, and intelligent agentic workflows that solve complex technical challenges at scale.
          </p>

          <div className="hero-meta">
            <span className="hero-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              San Jose, CA
            </span>
            <span className="hero-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              M.S. in Computer Science Graduate, CSU Chico
            </span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore Projects
            </a>
            <a 
              href="https://github.com/adityaanilraut" 
              className="btn btn-secondary"
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub Profile
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-graphic-wrapper">
          <div className="hero-graphic">
            <div className="graphic-code">
              <p><span className="graphic-keyword">def</span> <span className="graphic-value">optimize_systems</span>(sys: System) -&gt; None:</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="graphic-keyword">if</span> sys.latency &gt; threshold:</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sys.scale_horizontally()</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sys.optimize_db_queries()</p>
              <br />
              <p><span className="graphic-keyword"># SDE Systems - 100% Operational</span></p>
              <p>completed_ms_cs = <span className="graphic-value">True</span></p>
              <p>latency_reduction = <span className="graphic-value">"40%"</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
