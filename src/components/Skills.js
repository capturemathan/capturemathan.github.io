import React from "react";

const SKILLS = [
  {
    head: "Languages",
    items: ["Python", "Java", "Scala"],
  },
  {
    head: "Big Data & Streaming",
    items: ["Apache Spark", "Apache Hive", "Kafka", "Google PubSub"],
  },
  {
    head: "Databases",
    items: ["HBase / BigTable", "Aerospike", "SQL", "MongoDB"],
  },
  {
    head: "Cloud & Infrastructure",
    items: ["Google Cloud Platform (GCP)", "Amazon Web Services (AWS)", "Kubernetes", "Linux"],
  },
  {
    head: "Web & Mobile",
    items: ["HTML / CSS / JavaScript", "React", "Node.js", "Android (Java)", "Flask", "PHP"],
  },
];

const CERTS = [
  { icon: "⎈", name: "Certified Kubernetes Developer", org: "Flipkart" },
  { icon: "☁", name: "AWS Certified Cloud Practitioner", org: "Amazon Web Services" },
  { icon: "⚛", name: "Front-End Web Dev with React", org: "Coursera" },
  { icon: "🧠", name: "AI & Deep Learning Workshop", org: "E-Summit, IIT Roorkee" },
  { icon: "📊", name: "Data Science & Business Analytics", org: "Microsoft" },
];

export default function Skills() {
  return (
    <section className="section" id="skills" aria-label="Skills and Certifications">
      <div className="wrap">
        <div className="sec-label reveal">
          <h2 className="sec-label__title">Skills</h2>
          <div className="sec-label__line" />
        </div>

        <div className="skills-grid" style={{ marginBottom: "4rem" }}>
          {SKILLS.map((cat, i) => (
            <div className="card skill-block reveal" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="skill-block__head">{cat.head}</div>
              <ul className="skill-block__list">
                {cat.items.map((item, j) => (
                  <li className="skill-block__item" key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="sec-label reveal" style={{ marginBottom: "2rem" }}>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}>
            Certifications & Workshops
          </h3>
          <div className="sec-label__line" />
        </div>

        <div className="cert-list">
          {CERTS.map((c, i) => (
            <div className="cert-item reveal" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="cert-item__icon">{c.icon}</div>
              <div>
                <div className="cert-item__name">{c.name}</div>
                <div className="cert-item__org">{c.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
