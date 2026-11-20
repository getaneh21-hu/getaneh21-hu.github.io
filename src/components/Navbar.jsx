
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let current = "#home";

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 150) {
          current = `#${section.id}`;
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo">
        GT<span>.</span>
      </a>

      <nav className="navbar-links">
        {navLinks.map((link) => (
          <a
            href={link.href}
            key={link.label}
            className={activeLink === link.href ? "active" : ""}
            onClick={() => setActiveLink(link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="navbar-contact">
        Let's Talk <span>↗</span>
      </a>
    </header>
  );
}

export default Navbar;
