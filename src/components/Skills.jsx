import React from "react";
import { skills } from "../data/portfolio";
export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-section container"
      aria-labelledby="skills-title"
    >
      <div className="skills-heading">
        <p className="eyebrow">The tools behind the work</p>
        <h2 id="skills-title">Technical skills</h2>
      </div>
      <div className="skills-grid">
        {skills.map((group, i) => (
          <article className="skill-group" key={group.title}>
            <span className="skill-number">0{i + 1}</span>
            <h3>{group.title}</h3>
            <p>{group.text}</p>
            <div className="tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
