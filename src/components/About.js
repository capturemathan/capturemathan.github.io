import React from "react";

export default function About() {
  const stats = [
    { num: "5+",   label: "Years of industry experience" },
    { num: "9.18", label: "CGPA — B.Tech CSE, Amrita University" },
  ];

  return (
    <section className="section" id="about" aria-label="About">
      <div className="wrap">
        <div className="sec-label reveal">
          <h2 className="sec-label__title">About Me</h2>
          <div className="sec-label__line" />
        </div>

        <div className="about__grid">
          <div className="about__text reveal">
            <p>
              I'm a <strong>Software Development Engineer II</strong> with 5+ years of 
              experience designing and delivering production-grade systems across 
              <strong> financial services</strong> and <strong>e-commerce</strong> domains.
              Currently at <strong>Kotak Mahindra Bank</strong>, I build highly performant 
              and secure backend services that power mission-critical banking infrastructure.
            </p>
            <p>
              My core expertise spans <strong>backend system design</strong>, 
              <strong> Big Data engineering</strong>, <strong>cloud-native development</strong>, 
              and <strong>distributed systems</strong>. I take strong ownership across the 
              entire delivery lifecycle — from architecture and implementation through 
              integration testing, observability, and on-call support.
            </p>
            <p>
              I thrive in high-scale environments where reliability, performance, and 
              engineering rigour are non-negotiable. I have consistently delivered 
              complex, cross-team projects on schedule with zero post-delivery defects.
            </p>
          </div>

          <div className="about__stats reveal">
            {stats.map((s, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-card__num">{s.num}</div>
                <div className="stat-card__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
