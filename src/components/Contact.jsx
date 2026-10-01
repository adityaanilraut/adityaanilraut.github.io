import React, { useState } from "react";
import { Arrow, ExternalLink } from "../App";
import { profile } from "../data/portfolio";
export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Copy unavailable. Use the email link to get in touch.");
    }
  }
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">
            <span className="status-dot" /> Let’s build something useful
          </p>
          <h2>
            Your next engineer
            <br />
            could be <span>right here.</span>
          </h2>
          <p className="contact-description">
            Hiring for backend, software engineering, or AI systems roles?
            <br />
            I’d love to hear about the problems your team is solving.
          </p>
          <a
            className="contact-email"
            href={`mailto:${profile.email}?subject=Engineering%20opportunity`}
          >
            {profile.email} <Arrow diagonal />
          </a>
          <div className="contact-actions">
            <button className="copy-button" onClick={copyEmail}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <rect x="8" y="8" width="12" height="12" rx="2" />
                <path d="M16 8V4H4v12h4" />
              </svg>
              Copy email
            </button>
            <span className="copy-status" role="status">
              {copyStatus}
            </span>
          </div>
        </div>
        <aside className="contact-card">
          <span className="tiny-label">QUICK INTRO</span>
          <h3>Aditya Raut</h3>
          <p>
            Software Engineer
            <br />
            Backend & AI Systems
          </p>
          <div className="contact-card-detail">
            <span>Based in</span>
            <strong>San Jose, California</strong>
          </div>
          <div className="contact-card-detail">
            <span>Education</span>
            <strong>M.S. Computer Science</strong>
          </div>
          <a
            className="button button-light"
            href={profile.resume}
            download="Aditya_Raut_Resume.pdf"
          >
            Download résumé <Arrow />
          </a>
          <div className="contact-socials">
            <ExternalLink href={profile.linkedin}>
              LinkedIn <Arrow diagonal />
            </ExternalLink>
            <ExternalLink href={profile.github}>
              GitHub <Arrow diagonal />
            </ExternalLink>
          </div>
        </aside>
      </div>
    </section>
  );
}
