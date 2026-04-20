import React from "react";

export default function Contact() {
  return (
    <section className="section" id="contact" aria-label="Contact">
      <div className="wrap">
        <div className="contact-inner reveal">
          <p className="contact-inner__sub">What's Next</p>
          <h2 className="contact-inner__heading">
            Let's build<br />
            something great.
          </h2>
          <p className="contact-inner__body">
            I'm open to discussing new engineering challenges, senior roles, or
            collaborations. Whether you have a specific opportunity or simply want
            to connect, my inbox is always open.
          </p>
          <a href="mailto:capturesmk@gmail.com" className="btn btn-gold" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
            Say Hello ↗
          </a>
        </div>
      </div>
    </section>
  );
}
