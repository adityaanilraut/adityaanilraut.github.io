import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C++', 'Java', 'Python', 'Rust', 'JavaScript', 'C', 'Swift', 'MATLAB', 'PL/SQL']
    },
    {
      category: 'Frameworks & Platforms',
      skills: ['FastAPI', 'React.js', 'REST APIs', 'Node.js', 'Flask', 'Bootstrap', 'HTML5/CSS3', 'LangChain']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS (SageMaker, EC2, ECS, EKS, S3)', 'Docker', 'Kubernetes', 'PySpark', 'CI/CD', 'boto3']
    },
    {
      category: 'Databases & Storage',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Chroma']
    },
    {
      category: 'ML & Data Science',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Transformers', 'FAISS', 'LangFlow', 'CUDA', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'SciPy', 'NLTK']
    },
    {
      category: 'Analytics & Tooling',
      skills: ['Tableau', 'Power BI', 'Talend', 'Alteryx', 'Postman', 'Requests', 'Pillow']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="prompt-symbol">$</span> ls -la ./skills/
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="terminal-box skill-category">
              <h3 className="skill-category-title">
                <span className="file-icon">📁</span> {category.category}
              </h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

