import React, { useState } from "react";

const EXPERIENCE = [
  {
    role: "Software Development Engineer II",
    company: "Kotak Mahindra Bank",
    url: "https://www.kotak.com",
    duration: "2024 — Present",
    current: true,
    highlights: [
      "Building highly performant and reliable backend systems for mission-critical financial services.",
      "Contributing to high-availability, secure, and scalable core banking infrastructure.",
    ],
  },
  {
    role: "Software Development Engineer I",
    company: "Flipkart",
    url: "https://www.flipkart.com",
    duration: "Jun 2021 — 2024",
    current: false,
    highlights: [
      "Led LLD, HLD, and end-to-end development for multiple projects with 100+ crore revenue impact within the shopping experience funnel.",
      "Built scalable Big Data applications and A/B-tested backend services powering personalised recommendations for 500M+ users.",
      "Developed a real-time user activity pipeline (cart additions, order events) — reduced insight SLA from day-level batch to seconds.",
      "Flipkart Big Billion Days: Introduced degradation flags, authored playbooks, and performed load testing to sustain 7× BAU traffic.",
      "Performed Spark configuration optimisations that onboarded 10+ jobs without any new hardware procurement.",
      "Mentored interns and junior engineers via technical training sessions and structured code reviews.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience" aria-label="Experience">
      <div className="wrap">
        <div className="sec-label reveal">
          <h2 className="sec-label__title">Experience</h2>
          <div className="sec-label__line" />
        </div>

        <div className="exp-list">
          {EXPERIENCE.map((exp, i) => (
            <div 
              className="exp-card reveal" 
              key={i} 
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="exp-card__header">
                <div>
                  <div className="exp-card__role">{exp.role}</div>
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-card__company"
                  >
                    {exp.company}
                  </a>
                </div>
                <div style={{ textAlign: "right" }}>
                  {exp.current && (
                    <div className="exp-card__badge">Current</div>
                  )}
                  <div className="exp-card__duration">{exp.duration}</div>
                </div>
              </div>

              <div className="exp-card__content">
                <ul className="exp-card__bullets">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
              
              <div className="exp-card__expand-hint">
                Hover to expand ↘
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
