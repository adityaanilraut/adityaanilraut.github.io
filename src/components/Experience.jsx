import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Research Assistant',
      organization: 'California State University, Chico',
      period: 'Aug 2025 – May 2026',
      type: 'work',
      description: [
        'Conducted comparative performance research on Rust vs. C++ for CPU and GPU workloads, benchmarking execution speed, memory usage, and parallel throughput across compute-intensive tasks.',
        'Designed and implemented GPU-accelerated benchmarks, analyzing low-level performance trade-offs and safety-versus-speed characteristics between the two languages.'
      ]
    },
    {
      title: 'Master of Science in Computer Science',
      organization: 'California State University, Chico',
      period: 'Aug 2024 – May 2026',
      type: 'education',
      description: [
        'Graduate focus on Advanced Algorithms, Distributed Systems, LLM Fine-tuning, Semantic Search, and Scalable Backend Systems',
        'Academic research and project work focused on high-performance computational systems and AI infrastructure'
      ]
    },
    {
      title: 'Systems Engineer',
      organization: 'Tata Consultancy Services (TCS)',
      period: 'Apr 2021 – Oct 2023',
      type: 'work',
      description: [
        'Developed production backend applications in Python and Java, building scalable REST APIs and distributed services for mission-critical financial systems serving 1,000+ regulated financial institutions (clients: GE Aerospace, Reserve Bank of India).',
        'Designed and deployed an enterprise semantic search platform using dense embeddings, vector retrieval, and metadata indexing across 100,000+ documents, improving search relevance by 35% and reducing query latency by 40%.',
        'Built scalable Python data pipelines with PySpark, Databricks, and AWS; optimized SQL queries and schemas, cutting reporting latency by 30% while increasing pipeline throughput.',
        'Containerized services with Docker, deployed on AWS ECS and Kubernetes, and implemented CI/CD with automated monitoring via CloudWatch and Prometheus.'
      ]
    },
    {
      title: 'Software Engineer',
      organization: 'Launchpad Technology',
      period: 'May 2020 – Apr 2021',
      type: 'work',
      description: [
        'Engineered backend microservices in Python, Java, and Node.js, exposing 10+ production REST APIs for customer-facing applications.',
        'Deployed cloud-native applications on AWS, improving availability to 99.9% and reducing deployment issues by 25%; optimized Oracle SQL queries, procedures, and indexes, reducing response time by 25%.'
      ]
    },
    {
      title: 'Winner - Wefunder AI Hackathon (Context Router)',
      organization: 'Wefunder',
      period: '2024',
      type: 'achievement',
      description: [
        'Developed Context Router, an intelligent LLM-routing system that dynamically analyzes user queries and selects the most suitable LLM based on criteria like token length, task complexity, and required reasoning depth.',
        'Won the Pond Challenge among 20+ teams; received recognition for designing a novel LLM orchestration strategy that reduced infrastructure waste and introduced a new paradigm for modular, cost-aware AI deployments.',
        'Achieved up to 20% reduction in API costs by implementing prompt classification and cost-aware model switching.'
      ]
    },
    {
      title: 'Bachelor of Engineering in Computer Engineering',
      organization: 'University of Mumbai',
      period: 'Aug 2017 – May 2020',
      type: 'education',
      description: [
        'Completed BE degree with rigorous training in Software Engineering, Data Structures, Algorithms, Distributed Databases, and Computer Networks.'
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
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
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
