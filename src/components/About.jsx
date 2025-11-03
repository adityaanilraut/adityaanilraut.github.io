import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="prompt-symbol">$</span> cat about.md
        </h2>
        <div className="terminal-box">
          <div className="about-content">
            <p className="about-text">
              <span className="comment"># About Me</span>
            </p>
            <p className="about-text">
              I'm an AI systems engineer who loves building end-to-end experiences where <span className="highlight">LLMs</span>,
              <span className="highlight"> data engineering</span>, and <span className="highlight">cloud-native software</span> intersect.
            </p>
            <p className="about-text">
              Currently pursuing my <span className="highlight">M.S. in Computer Science</span> at California State University, Chico,
              I focus on retrieval-augmented generation, agentic workflows, and developer tooling that shortens the gap between idea and shipped product.
            </p>
            <p className="about-text mt-2">
              <span className="comment"># Experience</span>
            </p>
            <p className="about-text">
              At <span className="highlight">Tata Consultancy Services (TCS)</span> I launched production pipelines that scraped multi-source content,
              generated semantic embeddings, and served low-latency retrieval APIs with <span className="highlight">95% precision/recall@K</span>.
              I also shipped KPI analytics stacks and containerized services on AWS that boosted target metrics by 8–12%.
            </p>
            <p className="about-text mt-2">
              <span className="comment"># Current Focus</span>
            </p>
            <p className="about-text">
              → Crafting <span className="highlight">RAG systems</span>, <span className="highlight">agentic CLI workflows</span>,
              and <span className="highlight">LLM fine-tuning</span> playbooks for production teams
            </p>
            <p className="about-text">
              → Building production-ready AI applications with FastAPI, React, and modern cloud infrastructure
            </p>
            <p className="about-text">
              → Contributing to open-source AI/ML projects and hackathons that explore model routing and orchestration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

