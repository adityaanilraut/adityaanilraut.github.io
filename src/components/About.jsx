import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-text-block">
            <p className="about-para">
              I'm a <span className="about-highlight">Software Development Engineer (SDE)</span> specializing in bridging the gap between cutting-edge 
              <span className="about-highlight"> distributed backend architectures</span> and robust 
              <span className="about-highlight"> machine learning systems</span>. I build highly scalable, fast, and cost-optimized production pipelines.
            </p>
            
            <p className="about-para">
              I recently graduated with my <span className="about-highlight">M.S. in Computer Science</span> from California State 
              University, Chico (completed May 2026). My core focus lies in building distributed systems, high-performance web services, retrieval-augmented generation (RAG) platforms, and intelligent multi-agent workflows.
            </p>

            <p className="about-para">
              During my tenure as a Systems Engineer at <span className="about-highlight">Tata Consultancy Services (TCS)</span>, 
              I architected and developed backend services for CIMS (Centralized Information Management System) processing data from 1,000+ financial institutions, migrated Talend ETLs to PySpark/PySQL pipelines in Databricks, and developed responsive web dashboards.
            </p>

            <p className="about-para">
              I am highly passionate about backend engineering, cloud systems design, and building intelligent software tooling that streamlines complex workflows.
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
