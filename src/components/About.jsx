import React from "react";
import { SectionHeading, Arrow, ExternalLink } from "../App";
import { profile } from "../data/portfolio";
export default function About() {
  return (
    <section id="about" className="section about-section container">
      <SectionHeading
        number="03"
        label="A little context"
        title="An engineer who connects the dots."
      />
      <div className="about-layout">
        <div className="about-statement">
          Backend depth.
          <br />
          AI curiosity.
          <br />
          <span>Product mindset.</span>
          <div className="about-signature">
            Aditya Raut <span>↗</span>
          </div>
        </div>
        <div className="about-copy">
          <p>
            At TCS, I worked on real-time financial data, migrated a monitoring
            backend from Node.js to Go, and built background jobs that could
            recover from failures. That experience shapes how I approach AI
            systems today.
          </p>
          <p>
            A useful agent needs reliable tools and clear execution boundaries.
            A retrieval system needs fresh data and meaningful evaluation. A
            benchmark needs to explain what it actually measures. Those are the
            details I enjoy getting right.
          </p>
          <p>
            I completed my M.S. in Computer Science at California State
            University, Chico in May 2026. My recent independent work spans
            agent runtimes, GPU scheduling, vector infrastructure, and LLM
            post-training.
          </p>
          <ExternalLink className="text-link" href={profile.github}>
            Follow what I’m building <Arrow diagonal />
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
