import React, { useEffect, useMemo, useState } from "react";
import { Arrow, ExternalLink, SectionHeading } from "../App";
import { projects, additionalWork, profile } from "../data/portfolio";
import { fetchGitHubRepos, repoSnapshot } from "../utils/githubApi";
const github = (repo) => `${profile.github}/${repo}`;
const categories = ["All work", "AI agents", "ML infrastructure", "Products"];

function CaseStudy({ project }) {
  return (
    <details className="case-study">
      <summary>
        Engineering notes <span>+</span>
      </summary>
      <div className="case-study-content">
        <div>
          <h4>The problem</h4>
          <p>{project.challenge}</p>
        </div>
        <div>
          <h4>What I built</h4>
          <p>{project.approach}</p>
        </div>
        <div>
          <h4>Evidence & scope</h4>
          <p>{project.evidence}</p>
        </div>
        <ExternalLink className="text-link" href={project.source}>
          {project.sourceLabel} <Arrow diagonal />
        </ExternalLink>
      </div>
    </details>
  );
}
function ProjectVisual({ type }) {
  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      {type === "pipeline" && (
        <>
          <span className="visual-caption">INCREMENTAL BY DESIGN</span>
          <div className="mini-pipeline">
            <span>ingest</span>
            <i>→</i>
            <span>embed</span>
            <i>→</i>
            <span className="mini-highlight">retrieve</span>
          </div>
          <span className="visual-footer">HASH → CHUNK → INDEX</span>
        </>
      )}
      {type === "quant" && (
        <>
          <span className="visual-caption">QUALITY × MEMORY × OVERHEAD</span>
          <div className="quant-grid">
            <div>
              {Array.from({ length: 16 }, (_, i) => (
                <i key={i} />
              ))}
              <small>FP16</small>
            </div>
            <b>→</b>
            <div className="compressed">
              {Array.from({ length: 4 }, (_, i) => (
                <i key={i} />
              ))}
              <small>LOW-BIT</small>
            </div>
          </div>
          <span className="visual-footer">
            ANALYTICAL STORAGE · SIMULATED DECODE
          </span>
        </>
      )}
      {type === "bench" && (
        <>
          <span className="visual-caption">
            EVALUATION DIMENSIONS · ILLUSTRATION
          </span>
          <div className="bench-chart">
            <div>
              <span>latency</span>
              <i style={{ width: "78%" }} />
            </div>
            <div>
              <span>tokens</span>
              <i style={{ width: "58%" }} />
            </div>
            <div>
              <span>cost</span>
              <i style={{ width: "35%" }} />
            </div>
          </div>
          <span className="visual-footer">
            TASKS + TELEMETRY + VERIFICATION
          </span>
        </>
      )}
      {type === "router" && (
        <>
          <span className="visual-caption">THE RIGHT MODEL FOR THE TASK</span>
          <div className="mini-routing">
            <span>query</span>
            <i>→</i>
            <strong>analyze & route</strong>
            <div>
              <span>reasoning</span>
              <span>coding</span>
              <span>creative</span>
            </div>
          </div>
        </>
      )}
      {type === "audio" && (
        <>
          <span className="visual-caption">
            FROM THE PAGE TO YOUR HEADPHONES
          </span>
          <div className="audio-wave">
            <span className="audio-doc">PDF</span>
            <span>→</span>
            <div>
              {[
                12, 25, 39, 22, 48, 61, 43, 26, 51, 33, 18, 37, 58, 42, 24, 12,
              ].map((height, i) => (
                <i key={i} style={{ height }} />
              ))}
            </div>
          </div>
          <span className="visual-footer">OCR → CHAPTERS → SPEECH</span>
        </>
      )}
      {type === "satellite" && (
        <>
          <span className="visual-caption">
            EVALUATE THE SIGNAL, NOT THE SHORTCUT
          </span>
          <div className="field-map">
            {Array.from({ length: 12 }, (_, i) => (
              <i key={i} className={`field-${i % 4}`} />
            ))}
            <span>
              0.888<small>MACRO F1 · GROUPED CV</small>
            </span>
          </div>
        </>
      )}
    </div>
  );
}
function Flagship({ project }) {
  return (
    <article className="flagship">
      <div className="flagship-copy">
        <p className="eyebrow">
          <span className="status-dot" /> {project.type}{" "}
          <span className="flagship-year">2026</span>
        </p>
        <h3>
          {project.name}
          <span>↗</span>
        </h3>
        <p className="flagship-title">{project.title}</p>
        <p className="flagship-description">{project.description}</p>
        <div className="tags">
          {project.stack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="flagship-actions">
          <ExternalLink
            className="button button-light"
            href={github(project.repo)}
          >
            Explore repository <Arrow diagonal />
          </ExternalLink>
          <ExternalLink
            className="text-link"
            href="https://github.com/adityaanilraut/CoderAI/blob/main/docs/architecture.md"
          >
            Architecture <Arrow diagonal />
          </ExternalLink>
        </div>
      </div>
      <div className="flagship-preview">
        <div className="terminal">
          <div className="terminal-top">
            <span className="terminal-dots">
              <i />
              <i />
              <i />
            </span>
            <span>coderai / engineering workflow</span>
            <span>⌘</span>
          </div>
          <div className="terminal-body">
            <p>
              <span className="terminal-prompt">❯</span> coderai{" "}
              <span className="terminal-comment">
                # from intent to verified change
              </span>
            </p>
            <p className="terminal-comment">A look inside the agent runtime</p>
            <div className="terminal-step">
              <span>01</span>
              <div>
                <strong>Inspect the repository</strong>
                <small>Search, read, and build context.</small>
              </div>
              <b>↗</b>
            </div>
            <div className="terminal-step">
              <span>02</span>
              <div>
                <strong>Plan & delegate</strong>
                <small>Coordinate bounded agent tasks.</small>
              </div>
              <b>↗</b>
            </div>
            <div className="terminal-step">
              <span>03</span>
              <div>
                <strong>Edit with precision</strong>
                <small>Anchored patches. Explicit permissions.</small>
              </div>
              <b>↗</b>
            </div>
            <div className="terminal-step">
              <span>04</span>
              <div>
                <strong>Verify & checkpoint</strong>
                <small>Run checks. Inspect diffs. Recover.</small>
              </div>
              <b>✓</b>
            </div>
            <div className="terminal-bottom">
              <span className="status-dot" /> TOOLS + CONTEXT + CONTROL{" "}
              <span>_</span>
            </div>
          </div>
        </div>
        <div className="flagship-metrics">
          <div>
            <strong>50</strong>
            <span>PRs in evaluation</span>
          </div>
          <div>
            <strong>
              58.2<span>%</span>
            </strong>
            <span>reported precision</span>
          </div>
          <div>
            <strong>
              6.63<span>s</span>
            </strong>
            <span>avg. review latency</span>
          </div>
        </div>
        <p className="benchmark-note">
          Project-reported code-review evaluation.{" "}
          <ExternalLink href={project.source}>
            Configuration & methodology ↗
          </ExternalLink>
        </p>
      </div>
      <div className="flagship-notes">
        <CaseStudy project={project} />
      </div>
    </article>
  );
}
function RepoDirectory() {
  const [repos, setRepos] = useState(repoSnapshot.repos);
  const [source, setSource] = useState("snapshot");
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("All languages");
  const [limit, setLimit] = useState(6);
  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    fetchGitHubRepos(controller.signal)
      .then((data) => {
        setRepos(data);
        setSource("live");
      })
      .catch(() => {
        if (!controller.signal.aborted) setSource("snapshot");
      })
      .finally(() => clearTimeout(timer));
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, []);
  const languages = useMemo(
    () =>
      [...new Set(repos.map((repo) => repo.language).filter(Boolean))].sort(),
    [repos],
  );
  const filtered = repos.filter(
    (repo) =>
      `${repo.name} ${repo.description || ""}`
        .toLowerCase()
        .includes(query.toLowerCase().trim()) &&
      (language === "All languages" || repo.language === language),
  );
  const syncedDate = new Date(repoSnapshot.syncedAt).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "America/Los_Angeles",
    },
  );
  return (
    <details className="repository-directory">
      <summary>
        <span>
          <span className="eyebrow">Keep exploring</span>
          <strong>
            Browse all public repositories{" "}
            <span className="repo-count">{repos.length}</span>
          </strong>
        </span>
        <span className="directory-toggle">+</span>
      </summary>
      <div className="directory-content">
        <div className="repo-toolbar">
          <label>
            <span>Search repositories</span>
            <input
              type="search"
              placeholder="Search by name or description…"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setLimit(6);
              }}
            />
          </label>
          <label>
            <span>Filter by language</span>
            <select
              value={language}
              onChange={(event) => {
                setLanguage(event.target.value);
                setLimit(6);
              }}
            >
              <option>All languages</option>
              {languages.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="repo-status">
          <span role="status">
            {filtered.length}{" "}
            {filtered.length === 1 ? "repository" : "repositories"}
            {query || language !== "All languages" ? " found" : ""}
          </span>
          <span>
            {source === "live"
              ? "Updated from GitHub"
              : `Saved GitHub snapshot · ${syncedDate}`}
          </span>
        </div>
        <div className="repo-grid">
          {filtered.slice(0, limit).map((repo) => (
            <article key={repo.name} className="repo-card">
              <ExternalLink href={repo.html_url} className="repo-title">
                {repo.name.replaceAll("-", " ")} <Arrow diagonal />
              </ExternalLink>
              <p>
                {repo.description ||
                  "Explore the source, documentation, and recent development on GitHub."}
              </p>
              <div className="repo-card-meta">
                <span>
                  <i />
                  {repo.language || "Source & documentation"}
                </span>
                <span>
                  Updated{" "}
                  {new Date(repo.pushed_at).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                    timeZone: "America/Los_Angeles",
                  })}
                </span>
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="repo-empty">
            <h4>No matching repositories.</h4>
            <p>Try another search or language.</p>
            <button
              className="text-button"
              onClick={() => {
                setQuery("");
                setLanguage("All languages");
              }}
            >
              Clear filters <Arrow />
            </button>
          </div>
        )}
        {filtered.length > limit && (
          <button
            className="button button-outline load-more"
            onClick={() => setLimit((value) => value + 9)}
          >
            Show more repositories <span>({filtered.length - limit} more)</span>{" "}
            <Arrow />
          </button>
        )}
        <ExternalLink
          className="directory-github text-link"
          href={profile.github + "?tab=repositories"}
        >
          View the full directory on GitHub <Arrow diagonal />
        </ExternalLink>
      </div>
    </details>
  );
}
export default function Projects() {
  const [category, setCategory] = useState("All work");
  const featured = projects[0];
  const filtered = projects
    .slice(1)
    .filter(
      (project) => category === "All work" || project.category === category,
    );
  const showFlagship = category === "All work" || category === "AI agents";
  return (
    <section id="projects" className="section projects-section container">
      <SectionHeading
        number="01"
        label="Selected work"
        title="Ideas, engineered into reality."
      >
        Open-source systems, applied AI, and experiments with clear questions
        and inspectable answers.
      </SectionHeading>
      <div
        className="project-filters"
        role="group"
        aria-label="Filter selected projects"
      >
        {categories.map((item) => (
          <button
            key={item}
            aria-pressed={category === item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
            {category === item && <span>↗</span>}
          </button>
        ))}
        <span className="project-result-count" role="status">
          {filtered.length + (showFlagship ? 1 : 0)} projects
        </span>
      </div>
      <div>
        {showFlagship && <Flagship project={featured} />}
        <div className="project-grid">
          {filtered.map((project) => (
            <article key={project.repo} className="project-card">
              <ProjectVisual type={project.visual} />
              <div className="project-card-body">
                <div className="project-card-top">
                  <span className="eyebrow">{project.type}</span>
                  <ExternalLink
                    className="project-code-link"
                    href={github(project.repo)}
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <Arrow diagonal />
                  </ExternalLink>
                </div>
                <h3>
                  <ExternalLink href={github(project.repo)}>
                    {project.name}
                  </ExternalLink>
                </h3>
                <p className="project-description">{project.description}</p>
                <div className="tags">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <CaseStudy project={project} />
              </div>
            </article>
          ))}
        </div>
      </div>
      {category === "All work" && (
        <div className="more-work">
          <div className="more-work-heading">
            <h3>Always building. Always learning.</h3>
            <p>A few more corners of my GitHub.</p>
          </div>
          <div className="more-work-grid">
            {additionalWork.map((project) => (
              <article key={project.repo}>
                <ExternalLink href={github(project.repo)}>
                  <h4>{project.name}</h4>
                  <Arrow diagonal />
                </ExternalLink>
                <p>{project.text}</p>
                <span>{project.tags}</span>
                {project.secondaryRepo && (
                  <ExternalLink
                    className="secondary-project"
                    href={github(project.secondaryRepo)}
                  >
                    RoomieQueue ↗
                  </ExternalLink>
                )}
              </article>
            ))}
          </div>
        </div>
      )}
      <RepoDirectory />
    </section>
  );
}
