import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = '> Aditya A. Raut_';
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-button red"></span>
          <span className="terminal-button yellow"></span>
          <span className="terminal-button green"></span>
          <span className="terminal-title">aditya@portfolio:~</span>
        </div>
        <div className="terminal-body">
          <pre className="ascii-art">
{`                  _    __       _ _       
 _ __   ___  _ __| |_ / _| ___ | (_) ___  
| '_ \\ / _ \\| '__| __| |_ / _ \\| | |/ _ \\ 
| |_) | (_) | |  | |_|  _| (_) | | | (_) |
| .__/ \\___/|_|   \\__|_|  \\___/|_|_|\\___/ 
|_|                                       `}
          </pre>
          <div className="typewriter">
            <h1>{displayedText}</h1>
          </div>
          <div className="hero-content">
            <p className="prompt">$ whoami</p>
            <p className="output">M.S. Computer Science Candidate @ CSU Chico</p>
            <p className="output">AI Systems Engineer · Retrieval + LLM Tooling Builder</p>

            <p className="prompt mt-2">$ cat location.txt</p>
            <p className="output">📍 San Jose, CA · +1 (669) 499-7554</p>

            <p className="prompt mt-2">$ cat specialties.txt</p>
            <p className="output">RAG Pipelines · Agentic Workflows · Cloud-Native APIs</p>

            <div className="hero-actions">
              <a
                className="hero-button"
                href="/Aditya_Anil_Raut_resume.pdf"
                download
              >
                <span className="prompt-symbol">$</span> curl resume.pdf --output
              </a>
              <a
                className="hero-button secondary"
                href="/Aditya_Anil_Raut_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="prompt-symbol">$</span> open resume.pdf
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

