import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: ['C++', 'Java', 'Python', 'Rust', 'JavaScript', 'C', 'Swift', 'MATLAB', 'PL/SQL']
    },
    {
      category: 'Frameworks & Platforms',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="9"></rect>
          <rect x="14" y="3" width="7" height="5"></rect>
          <rect x="14" y="12" width="7" height="9"></rect>
          <rect x="3" y="16" width="7" height="5"></rect>
        </svg>
      ),
      skills: ['FastAPI', 'React.js', 'REST APIs', 'Node.js', 'Flask', 'LangChain', 'LlamaIndex', 'Bootstrap', 'HTML5/CSS3']
    },
    {
      category: 'Cloud & DevOps',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      ),
      skills: ['AWS (SageMaker, EC2, ECS, EKS, S3)', 'Docker', 'Kubernetes', 'PySpark', 'CI/CD', 'boto3']
    },
    {
      category: 'Databases & Storage',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      ),
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Chroma']
    },
    {
      category: 'ML & Data Science',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Transformers', 'FAISS', 'LangFlow', 'CUDA', 'NumPy', 'Pandas', 'Matplotlib']
    },
    {
      category: 'Analytics & Tooling',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      skills: ['Tableau', 'Power BI', 'Talend', 'Alteryx', 'Postman', 'Requests', 'Pillow', 'Git']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        
        <div className="skills-layout">
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-card">
                <h3 className="skill-card-title">
                  <span className="skill-icon-wrapper">{category.icon}</span>
                  {category.category}
                </h3>
                <div className="skill-card-list">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
