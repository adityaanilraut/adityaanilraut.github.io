import React from 'react';

const Contact = () => {
  const contacts = [
    {
      label: 'GitHub',
      value: '@adityaanilraut',
      url: 'https://github.com/adityaanilraut',
      icon: '💻'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/adityaanilraut',
      url: 'https://www.linkedin.com/in/adityaanilraut',
      icon: '💼'
    },
    {
      label: 'Email',
      value: 'araut1@csuchico.edu',
      url: 'mailto:araut1@csuchico.edu',
      icon: '📧'
    },
    {
      label: 'Email (Alt)',
      value: 'adityaanilraut@gmail.com',
      url: 'mailto:adityaanilraut@gmail.com',
      icon: '📧'
    },
    {
      label: 'Phone',
      value: '+1 (669) 499-7554',
      url: 'tel:+16694997554',
      icon: '📞'
    },
    {
      label: 'Resume',
      value: 'View / Download',
      url: '/Aditya_Anil_Raut_resume.pdf',
      icon: '📄'
    },
    {
      label: 'Location',
      value: 'San Jose, CA',
      url: 'https://maps.app.goo.gl/bur6TAA3LFmLci7Q6',
      icon: '📍'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="prompt-symbol">$</span> cat contact.txt
        </h2>
        <div className="terminal-box">
          <div className="contact-content">
            <p className="contact-intro">
              <span className="comment"># Let's Connect!</span>
            </p>
            <p className="contact-description">
              Feel free to reach out for collaborations, opportunities, or just to chat about AI, software engineering, and technology.
            </p>
            <div className="contact-grid">
              {contacts.map((contact, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-icon">{contact.icon}</span>
                  <div className="contact-details">
                    <span className="contact-label">{contact.label}:</span>
                    <a 
                      href={contact.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-footer">
              <p className="terminal-prompt">
                <span className="prompt-symbol">$</span> echo "Thanks for visiting!"
              </p>
              <p className="output-text">Thanks for visiting! 🚀</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

