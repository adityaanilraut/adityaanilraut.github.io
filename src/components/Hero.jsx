import React from "react";
import { Arrow } from "../App";
import { profile } from "../data/portfolio";
function SystemIllustration() {
  return (
    <div
      className="system-illustration"
      aria-label="Architecture illustration: request flows through an API and orchestration layer to services, models, and data"
    >
      <div className="system-caption">
        <span className="status-dot" /> SYSTEMS THINKING, END TO END{" "}
        <span>ARCH / 01</span>
      </div>
      <div className="system-canvas">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="system-request">
          <span className="tiny-label">INPUT</span>
          <span>
            request<span className="dim">.json</span>
          </span>
          <span className="request-arrow">↓</span>
        </div>
        <div className="system-core">
          <span className="core-icon">⌘</span>
          <div>
            <span className="tiny-label">THE ENGINEERING LAYER</span>
            <strong>Design. Build. Verify.</strong>
          </div>
          <span className="core-light" />
        </div>
        <div className="system-branches">
          <div>
            <span>01</span>
            <strong>Services</strong>
            <small>APIs · Events</small>
          </div>
          <div>
            <span>02</span>
            <strong>Intelligence</strong>
            <small>Agents · Models</small>
          </div>
          <div>
            <span>03</span>
            <strong>Data</strong>
            <small>Retrieval · Pipelines</small>
          </div>
        </div>
        <div className="system-output">
          <span className="status-dot" /> reliability <span>+</span> performance{" "}
          <span>+</span> clarity
        </div>
      </div>
      <div className="system-footnote">
        <span>
          Thoughtful architecture.
          <br />
          Measurable trade-offs.
        </span>
        <span className="system-coordinates">
          37.3382° N<br />
          SAN JOSE, CA
        </span>
      </div>
    </div>
  );
}
export default function Hero() {
  return (
    <section id="hero" className="hero container">
      <div className="hero-topline">
        <p className="eyebrow">
          <span className="status-dot" /> Open to engineering opportunities
        </p>
        <span className="hero-location">
          San Jose, CA <span>↗</span>
        </span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">BACKEND ENGINEERING · AI SYSTEMS</p>
          <h1>
            Reliable systems.
            <br />
            <span>Useful AI.</span>
          </h1>
          <p className="hero-description">
            I’m Aditya, a software engineer building distributed backend
            services in Go and TypeScript and AI tools in Python.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">
              Explore my work <Arrow />
            </a>
            <a
              className="text-link"
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              View résumé <Arrow diagonal />
            </a>
          </div>
          <div className="hero-proof">
            <span className="proof-line" />
            <p>
              3+ years in software engineering
              <br />
              <span>Previously TCS · M.S. Computer Science, CSU Chico</span>
            </p>
          </div>
        </div>
        <SystemIllustration />
      </div>
      <div className="impact-strip">
        <div className="impact-intro">
          <span className="tiny-label">PRODUCTION EXPERIENCE</span>
          <p>
            Engineering with
            <br />
            <strong>real-world impact.</strong>
          </p>
        </div>
        <div>
          <strong>
            40<span>%</span>
          </strong>
          <p>lower memory use after migrating to Go</p>
        </div>
        <div>
          <strong>
            3<span>×</span>
          </strong>
          <p>concurrent connection capacity</p>
        </div>
        <div>
          <strong>
            35<span>%</span>
          </strong>
          <p>lower p95 API latency</p>
        </div>
      </div>
    </section>
  );
}
