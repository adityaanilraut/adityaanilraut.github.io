import React, { useState, useEffect } from 'react';
import { fetchGitHubRepos } from '../utils/githubApi';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('featured'); // 'featured' or 'all'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [visibleCount, setVisibleCount] = useState(9);

  const featuredProjects = [
    {
      title: 'CoderAI: Multi-Agent Code Intelligence CLI',
      subtitle: 'Agentic developer workstation in the terminal',
      link: 'https://github.com/adityaanilraut/CoderAI',
      highlights: [
        'Built a multi-agent engineering assistant (planner, coder, reviewer agents) for repository analysis, code generation, debugging, and iterative repair.',
        'Enabled sandboxed code execution and tool calling via the Model Context Protocol (MCP) with dynamic multi-LLM orchestration.'
      ],
      tech: 'Python · MCP · Multi-Agent Systems · LLMs'
    },
    {
      title: 'TurboQuant - KV Cache Quantization',
      subtitle: 'KV Cache Quantization for LLM Inference',
      link: 'https://github.com/adityaanilraut/TurboQuant-KV-Cache-Quantization',
      highlights: [
        'Implemented FP16→INT4 KV-cache quantization in PyTorch, reducing inference memory by ~4× and enabling longer context windows.',
        'Benchmarked throughput, latency, GPU memory, and accuracy across quantization strategies.'
      ],
      tech: 'Python · PyTorch · CUDA · Quantization'
    },
    {
      title: 'AI Context Router',
      subtitle: 'Cost-aware multi-LLM routing platform',
      link: 'https://github.com/adityaanilraut/AI-Model-Context-Routing',
      highlights: [
        'Built an intelligent routing platform that dynamically selects LLM providers by reasoning complexity, latency, token usage, and cost.',
        'Developed async FastAPI services with Dockerized deployment and health monitoring; reduced API costs by up to 20%.'
      ],
      tech: 'FastAPI · Python · Docker · LLMs'
    },
    {
      title: 'Semantic Search Engine - RAG Pipeline',
      subtitle: 'Retrieval augmented insight generator',
      link: 'https://github.com/adityaanilraut/llm-embedding-pipeline',
      highlights: [
        'Developed an end-to-end RAG pipeline with document ingestion, embedding generation, metadata filtering, reranking, and FastAPI inference.',
        'Built scalable FAISS indexes, improving Top-3 retrieval precision over baseline vector search.'
      ],
      tech: 'Python · FAISS · Sentence Transformers · FastAPI · RAG'
    },
    {
      title: 'Rust vs. C++ Performance Benchmarks',
      subtitle: 'CPU and GPU comparative performance research',
      link: 'https://github.com/adityaanilraut/Rust-vs-Cpp-for-CPU-and-GPU-Performance',
      highlights: [
        'Conducted comparative performance research on Rust vs. C++ for CPU and GPU workloads, benchmarking execution speed, memory usage, and parallel throughput.',
        'Designed GPU-accelerated benchmarks analyzing low-level trade-offs and safety-versus-speed characteristics.'
      ],
      tech: 'Rust · C++ · CUDA · Benchmarking'
    }
  ];

  useEffect(() => {
    const loadRepos = async () => {
      const data = await fetchGitHubRepos();
      setRepos(data);
      setLoading(false);
    };
    loadRepos();
  }, []);

  // Filter repositories based on search and language selected
  const filteredRepos = repos.filter((repo) => {
    const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLanguage = selectedLanguage === 'All' || repo.language === selectedLanguage;
    return matchesSearch && matchesLanguage;
  });

  // Extract unique languages from repositories list for filters
  const languagesList = ['All', ...new Set(repos.map((repo) => repo.language).filter(Boolean))];

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setVisibleCount(9); // reset pagination on search
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setVisibleCount(9); // reset pagination on language filter
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects Hub</h2>

        <div className="hub-controls">
          {/* Tabs header */}
          <div className="hub-tabs">
            <button 
              className={`hub-tab-btn ${activeTab === 'featured' ? 'active' : ''}`}
              onClick={() => setActiveTab('featured')}
            >
              Featured Work
            </button>
            <button 
              className={`hub-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Repositories
              <span className="hub-tab-count">{repos.length}</span>
            </button>
          </div>

          {/* Search and Filter row */}
          {activeTab === 'all' && (
            <div className="search-filter-row">
              <div className="search-input-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search public repositories..." 
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>

              <div className="language-pills">
                {languagesList.map((lang) => (
                  <button
                    key={lang}
                    className={`lang-pill ${selectedLanguage === lang ? 'active' : ''}`}
                    onClick={() => handleLanguageChange(lang)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tab Content: Featured Projects */}
        {activeTab === 'featured' && (
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <div key={project.title} className="card featured-card">
                <div className="featured-card-header">
                  <div>
                    <h3 className="featured-card-title">{project.title}</h3>
                    <p className="featured-card-subtitle">{project.subtitle}</p>
                  </div>
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="repo-github-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Code
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </a>
                  )}
                </div>

                <ul className="featured-card-bullets">
                  {project.highlights.map((bullet, idx) => (
                    <li key={idx} className="featured-card-bullet-item">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="featured-card-footer">
                  <span className="featured-card-tech">{project.tech}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: All Repositories */}
        {activeTab === 'all' && (
          <>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '4rem' }}>
                <p style={{ color: 'var(--text-secondary)' }}>Loading GitHub repositories...</p>
              </div>
            ) : (
              <div className="repos-grid">
                {filteredRepos.length > 0 ? (
                  filteredRepos.slice(0, visibleCount).map((repo) => (
                    <div key={repo.id} className="card repo-card">
                      <div className="repo-card-header">
                        <h3 className="repo-card-title">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                          </svg>
                          {repo.name}
                        </h3>
                        {repo.language && (
                          <span className="repo-card-lang">{repo.language}</span>
                        )}
                      </div>

                      <p className="repo-card-desc">
                        {repo.description || 'No description provided.'}
                      </p>

                      <div className="repo-card-footer">
                        <div className="repo-card-stats">
                          <span className="repo-card-stat-item" title="Stars">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            {repo.stargazers_count}
                          </span>
                          <span className="repo-card-stat-item" title="Forks">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="18" cy="18" r="3"></circle>
                              <circle cx="6" cy="6" r="3"></circle>
                              <circle cx="6" cy="18" r="3"></circle>
                              <path d="M18 15V9a4 4 0 0 0-4-4H9"></path>
                              <line x1="6" y1="9" x2="6" y2="15"></line>
                            </svg>
                            {repo.forks_count}
                          </span>
                        </div>

                        <a 
                          href={repo.html_url} 
                          className="repo-github-link" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          GitHub
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="hub-empty-state">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <h4>No repositories found</h4>
                    <p>Try modifying your search query or language filter.</p>
                  </div>
                )}
              </div>
            )}

            {filteredRepos.length > visibleCount && (
              <div className="hub-load-more">
                <button className="btn btn-secondary" onClick={handleLoadMore}>
                  Load More Repositories
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
