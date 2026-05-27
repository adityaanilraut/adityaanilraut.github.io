import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'M.S. Computer Science',
      organization: 'California State University, Chico',
      period: 'Aug 2024 - Present',
      type: 'education',
      description: [
        'Graduate focus on Retrieval-Augmented Generation (RAG) pipelines, LLM fine-tuning, and scalable cloud systems',
        'Leading academic projects that blend containerized fast APIs with advanced vector search mechanisms'
      ]
    },
    {
      title: 'Systems Engineer',
      organization: 'Tata Consultancy Services (TCS)',
      period: 'Apr 2021 - Oct 2023',
      type: 'work',
      description: [
        'Built and shipped a production scraping + semantic search pipeline using SentenceTransformers and FAISS vector index, achieving 95% precision/recall',
        'Designed containerized AWS Lambda microservices orchestrated via Docker and Kubernetes with smart API response caching',
        'Optimized data analytics stacks in SQL, delivered interactive Tableau dashboards, boosting client metrics by 8–12%'
      ]
    },
    {
      title: 'Winner - Wefunder AI Hackathon 2024',
      organization: 'Wefunder',
      period: '2024',
      type: 'achievement',
      description: [
        'Developed Context Router, an intelligent LLM routing handler driven by token size, complexity, and latency profiles',
        'Reduced overall API spending by 20% through prompt classifications, cost-aware switching, and local model integrations'
      ]
    },
    {
      title: 'B.E. Computer Engineering',
      organization: 'University of Mumbai',
      period: 'Feb 2021',
      type: 'education',
      description: [
        'Graduated with deep foundations in data structures, algorithms, database systems, and networking',
        'Designed capstone projects spanning full-stack web applications and machine learning classification models'
      ]
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
          </svg>
        );
      case 'work':
        return (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        );
      case 'achievement':
        return (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
            <path d="M4 22h16"></path>
            <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path>
            <path d="M12 2a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"></path>
          </svg>
        );
      default:
        return (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        );
    }
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Education & Experience</h2>
        
        <div className="experience-layout">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-title">{exp.title}</h3>
                      <div className="timeline-meta">
                        <span className="timeline-icon-box">{getIcon(exp.type)}</span>
                        {exp.organization}
                      </div>
                    </div>
                    <span className="timeline-date">{exp.period}</span>
                  </div>
                  <div className="timeline-details">
                    {exp.description.map((desc, descIndex) => (
                      <p key={descIndex} className="timeline-detail-item">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
