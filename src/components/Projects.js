import React from "react";

const PROJECTS = [
  {
    title: "Anokha — Techfest Mobile Application",
    desc: "Engineered a production-grade, JWT-secured Android application for Amrita University's annual national techfest. Delivered end-to-end features including event discovery, workshop registration, and real-time scheduling — scaling to 10,000+ downloads with a 4.2-star rating on Google Play Store.",
    tags: ["Android", "Java", "JWT", "REST API"],
    github: null,
    external: null,
  },
  {
    title: "gitcardjs",
    desc: "Published an open-source NPM package that renders customisable, embeddable GitHub profile cards for personal websites and developer blogs. Lightweight, zero-dependency, and designed for seamless integration with any web stack.",
    tags: ["JavaScript", "NPM", "Web Component"],
    github: "https://github.com/capturemathan/Gitcard",
    external: null,
  },
  {
    title: "Smart Parking — Computer Vision",
    desc: "Developed an Android application leveraging YOLO object detection to identify real-time parking slot occupancy via live camera feeds. Built during the CISCO ThingQbator Product Development programme, integrating a Python-based inference backend with a native mobile client.",
    tags: ["Android", "Python", "YOLO", "Computer Vision", "CISCO ThingQbator"],
    github: null,
    external: null,
  },
];

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const FolderIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
);

export default function Projects() {
  return (
    <section className="section" id="projects" aria-label="Projects">
      <div className="wrap">
        <div className="sec-label reveal">
          <h2 className="sec-label__title">Projects</h2>
          <div className="sec-label__line" />
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div
              className="card proj-card reveal"
              key={i}
              style={{
                transitionDelay: `${i * 80}ms`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="proj-card__top">
                <div className="proj-card__folder">
                  <FolderIcon />
                </div>
                <div className="proj-card__links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub repository">
                      <GithubIcon />
                    </a>
                  )}
                  {p.external && (
                    <a href={p.external} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="External link">
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="proj-card__title">{p.title}</h3>
              <p className="proj-card__desc">{p.desc}</p>

              <div className="tag-row">
                {p.tags.map((t, j) => (
                  <span className="tag" key={j}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
