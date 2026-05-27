import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-text-block">
            <p className="about-para">
              I'm an AI systems engineer specializing in bridging the gap between cutting-edge 
              <span className="about-highlight"> machine learning models</span> and robust, production-grade 
              <span className="about-highlight"> cloud architectures</span>. I love engineering systems that are 
              fast, data-driven, and highly cost-optimized.
            </p>
            
            <p className="about-para">
              Currently pursuing my <span className="about-highlight">M.S. in Computer Science</span> at California State 
              University, Chico, I focus my research and projects on retrieval-augmented generation (RAG) pipelines, 
              context-aware model routing, and agentic workflows that automate developer tasks.
            </p>

            <p className="about-para">
              During my time as a Systems Engineer at <span className="about-highlight">Tata Consultancy Services (TCS)</span>, 
              I built and launched production pipelines that scraped data from multiple sources, built dense semantic embeddings, 
              and served low-latency retrieval APIs with exceptionally high precision.
            </p>

            <p className="about-para">
              I'm always eager to collaborate on open-source AI projects, LLM orchestration harnesses, 
              and robust backend architectures that make intelligent developer tooling accessible to everyone.
            </p>
          </div>

          <div className="metrics-container">
            <div className="metric-card">
              <span className="metric-number">95%</span>
              <span className="metric-label">Semantic Precision</span>
              <span className="metric-desc">Precision & recall@K achieved for multi-source document ingestion and FAISS embeddings.</span>
            </div>

            <div className="metric-card">
              <span className="metric-number">20%</span>
              <span className="metric-label">API Cost Savings</span>
              <span className="metric-desc">Achieved via Context Router, dynamically classifying prompt complexity for LLM routing.</span>
            </div>

            <div className="metric-card">
              <span className="metric-number">12%</span>
              <span className="metric-label">KPI Performance Boost</span>
              <span className="metric-desc">Driven by containerized microservices and automated data pipeline optimizations.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
