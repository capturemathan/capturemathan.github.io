import React, { useEffect } from "react";
import "./App.css";

import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills   from "./components/Skills";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

function App() {
  // Scroll-reveal using IntersectionObserver
  useEffect(() => {
    // Add page load animation to body
    document.body.style.animation = "fadeIn 1.2s ease-out forwards";

    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Optional: comment out unobserve if you want elements to animate every time they scroll into view
            io.unobserve(entry.target); 
          }
        });
      },
      // Lower threshold and adjust rootMargin for a more dynamic triggering
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
