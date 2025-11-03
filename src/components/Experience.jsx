import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'M.S. Computer Science',
      organization: 'California State University, Chico',
      period: 'Aug 2024 - Present',
      type: 'education',
      description: [
        'Graduate focus on Retrieval-Augmented Generation, LLM tooling, and distributed systems',
        'Leading projects that blend cloud-native APIs with applied machine learning workflows'
      ]
    },
    {
      title: 'B.E. Computer Engineering',
      organization: 'University of Mumbai',
      period: 'Feb 2021',
      type: 'education',
      description: [
        'Graduated with a strong foundation in algorithms, systems programming, and data infrastructure',
        'Delivered capstone projects spanning ML-driven analytics and full-stack development'
      ]
    },
    {
      title: 'Systems Engineer',
      organization: 'Tata Consultancy Services (TCS)',
      period: 'Apr 2021 - Oct 2023',
      type: 'work',
      description: [
        'Built a production scraping + semantic search pipeline using Scrapy, SentenceTransformers/OpenAI, and FAISS with 95% precision & recall@K',
        'Shipped Dockerized AWS Lambda services with smart caching for latency-sensitive APIs',
        'Modeled KPI analytics in SQL, shipped Tableau dashboards, and drove 8–12% improvements in target KPIs',
        'Managed distributed workloads on AWS (EC2, S3, EKS) orchestrated via Docker and Kubernetes'
      ]
    },
    {
      title: '🏆 Winner - Wefunder AI Hackathon 2024',
      organization: 'Wefunder',
      period: '2024',
      type: 'achievement',
      description: [
        'Developed Context Router, an intelligent LLM-routing system driven by token length, task complexity, and reasoning depth',
        'Reduced API spend by up to 20% with prompt classification and cost-aware model switching',
        'Recognized for a modular orchestration strategy that reduced infrastructure waste across multiple model providers'
      ]
    }
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'education': return '🎓';
      case 'work': return '💼';
      case 'achievement': return '🏆';
      default: return '→';
    }
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="prompt-symbol">$</span> cat experience.log
        </h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="terminal-box experience-item">
              <div className="experience-header">
                <span className="experience-icon">{getIcon(exp.type)}</span>
                <div className="experience-title-block">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-org">{exp.organization}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <div className="experience-description">
                {exp.description.map((desc, descIndex) => (
                  <p key={descIndex} className="experience-desc-item">
                    <span className="bullet">→</span> {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

