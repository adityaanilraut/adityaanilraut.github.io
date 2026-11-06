import React from "react";
import { SectionHeading } from "../App";
import { experience, profile } from "../data/portfolio";
export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <SectionHeading
          number="02"
          label="Experience"
          title="Where I’ve worked"
        >
          I worked on backend systems at Tata Consultancy Services and
          Launchpad Technology.
        </SectionHeading>
        <div className="experience-list">
          {experience.map((job) => (
            <article className="experience-row" key={job.company}>
              <div className="experience-meta">
                <span className="company-mark">{job.short}</span>
                <div>
                  <h3>{job.company}</h3>
                  <p>{job.dates}</p>
                  <span>{job.context}</span>
                </div>
              </div>
              <div className="experience-content">
                <h4>{job.role}</h4>
                <p className="experience-summary">{job.summary}</p>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="tags">
                  {job.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="education-row">
          <div>
            <p className="eyebrow">Education</p>
            <h3>Where I studied</h3>
          </div>
          <div>
            <span className="education-degree">M.S. Computer Science</span>
            <p>
              California State University, Chico <span>May 2026</span>
            </p>
          </div>
          <div>
            <span className="education-degree">B.E. Computer Engineering</span>
            <p>
              University of Mumbai <span>May 2020</span>
            </p>
          </div>
        </div>
        <p className="source-note">
          Professional experience and impact figures from my{" "}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer">
            résumé
          </a>
          .
        </p>
      </div>
    </section>
  );
}
