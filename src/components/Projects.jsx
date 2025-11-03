import React, { useState, useEffect } from 'react';
import { fetchGitHubRepos, isPinnedRepo } from '../utils/githubApi';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const featuredProjects = [
    {
      title: 'CoderAI CLI',
      subtitle: 'Agentic developer workstation in the terminal',
      link: 'https://github.com/adityaanilraut/homebrew-coderai',
      highlights: [
        'Multi-LLM backend with OpenAI GPT-5 family + local LM Studio models and dynamic model switching',
        'Implements Model Context Protocol tool-use agent for file I/O, terminal exec, git ops, semantic + grep code search, web docs lookup, and lightweight memory',
        'Slash-command UX with pre/post execution hooks to streamline end-to-end coding workflows'
      ],
      tech: 'TypeScript · Node.js · MCP · LangChain · OpenAI'
    },
    {
      title: 'Fine-Tuning LLMs',
      subtitle: 'Personalized outputs on quantized Gemma-2B',
      link: 'https://github.com/adityaanilraut/Finetuning-Google-Gemma2',
      highlights: [
        'Optimized LoRA fine-tuning pipeline with 30% lower storage footprint',
        'Quantized 16-bit base model to 4-bit for faster throughput without accuracy loss',
        'Evaluation harness for regression tests across custom tasks'
      ],
      tech: 'Python · PyTorch · LoRA · Hugging Face · BitsAndBytes'
    },
    {
      title: 'Search Engine · RAG',
      subtitle: 'Retrieval augmented insight generator',
      link: undefined,
      highlights: [
        'AI-powered search that extracts key facts from engine results and returns concise, context-aware summaries',
        'Cosine similarity ranking over semantic embeddings to boost precision of answer retrieval',
        'Pluggable retriever layer that supports multi-source ingestion'
      ],
      tech: 'Python · FAISS · SentenceTransformers · FastAPI · LangChain'
    },
    {
      title: 'Chess Engine',
      subtitle: 'Interactive engine with Minimax + alpha-beta pruning',
      link: 'https://github.com/adityaanilraut/Chess-engine',
      highlights: [
        'Deterministic search with iterative deepening and move ordering heuristics',
        'Alpha-beta pruning reduces search space for faster decision making',
        'Flask backend paired with interactive JavaScript UI for gameplay'
      ],
      tech: 'Python · Flask · JavaScript · Minimax'
    }
  ];

  useEffect(() => {
    const loadRepos = async () => {
      const data = await fetchGitHubRepos();
      setRepos(data.slice(0, 12)); // Show top 12 repos
      setLoading(false);
    };
    loadRepos();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="prompt-symbol">$</span> git log --all --graph
          </h2>
          <div className="terminal-box">
            <p className="loading">Loading repositories...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="prompt-symbol">$</span> git log --all --graph
        </h2>
          <div className="featured-projects">
            {featuredProjects.map((project) => (
              <div key={project.title} className="terminal-box featured-card">
                <div className="featured-header">
                  <div>
                    <h3 className="featured-title">{project.title}</h3>
                    <p className="featured-subtitle">{project.subtitle}</p>
                  </div>
                  {project.link && (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="link-text">→ Repo</span>
                    </a>
                  )}
                </div>
                <ul className="featured-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>
                      <span className="bullet">→</span> {item}
                    </li>
                  ))}
                </ul>
                <p className="featured-tech">{project.tech}</p>
              </div>
            ))}
          </div>
        <div className="projects-grid">
          {repos.map((repo, index) => (
            <div key={repo.id} className={`terminal-box project-card ${isPinnedRepo(repo.name) ? 'pinned' : ''}`}>
              {isPinnedRepo(repo.name) && (
                <span className="pinned-badge">📌 Pinned</span>
              )}
              <div className="project-header">
                <h3 className="project-title">
                  <span className="folder-icon">📂</span> {repo.name}
                </h3>
                {repo.language && (
                  <span className="project-language">{repo.language}</span>
                )}
              </div>
              <p className="project-description">
                {repo.description || 'No description provided'}
              </p>
              <div className="project-stats">
                <span className="stat">
                  <span className="stat-icon">⭐</span> {repo.stargazers_count}
                </span>
                <span className="stat">
                  <span className="stat-icon">🔱</span> {repo.forks_count}
                </span>
              </div>
              <div className="project-footer">
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span className="link-text">→ View on GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="terminal-box view-all">
          <p className="view-all-text">
            <span className="prompt-symbol">$</span> More projects available at{' '}
            <a 
              href="https://github.com/adityaanilraut?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-link"
            >
              github.com/adityaanilraut
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

