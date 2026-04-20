import React, { useState, useEffect } from "react";

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY && y > 120);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const links = [
    { label: "About",      href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects",   href: "#projects" },
    { label: "Skills",     href: "#skills" },
    { label: "Contact",    href: "#contact" },
  ];

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}
         role="navigation" aria-label="Main navigation">
      <div className="nav__inner">
        <a href="#hero" className="nav__logo">
          MK<span>.</span>
        </a>
        <div className="nav__links">
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav__link">{l.label}</a>
          ))}
          <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle theme" style={{ border: "none" }}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href="https://bit.ly/mathanresume"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__resume"
          >
            Résumé ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
