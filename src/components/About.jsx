import React from "react";
import { SectionHeading, Arrow, ExternalLink } from "../App";
import { profile } from "../data/portfolio";
export default function About() {
  return (
    <section id="about" className="section about-section container">
      <SectionHeading
        number="03"
        label="About"
        title="A bit about me"
      />
      <div className="about-layout">
        <div className="about-statement">
          I enjoy making complex software <span>easier to use.</span>
          <div className="about-signature">
            Aditya Raut <span>↗</span>
          </div>
        </div>
        <div className="about-copy">
          <p>
            Working on financial systems at TCS taught me to think about what
            happens when software gets busy or something fails. I bring that
            same approach to the AI tools I build today.
          </p>
          <p>
            I like building tools I’d want to use myself. One example is
            CoderAI, a terminal tool that helps review code and test changes.
          </p>
          <p>
            I completed my M.S. in Computer Science at California State
            University, Chico in May 2026. I keep learning by building projects
            in AI and infrastructure.
          </p>
          <ExternalLink className="text-link" href={profile.github}>
            Follow what I’m building <Arrow diagonal />
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
