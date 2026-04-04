"use client";

import { useState, useCallback } from "react";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const scrollTo = useCallback(
    (href: string) => {
      closeMobile();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [closeMobile]
  );

  return (
    <>
      <nav className={styles.nav} id="main-nav">
        <a
          href="#about"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#about");
          }}
        >
          Dileep <span>K</span>
        </a>
        <ul className={styles.links}>
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                className={styles.linkItem}
                onClick={() => scrollTo(item.href)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
          onClick={toggleMobile}
          aria-label="Menu"
          id="hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div
        className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}
        id="mobile-menu"
      >
        {navItems.map((item) => (
          <button
            key={item.href}
            className={styles.mobileLink}
            onClick={() => scrollTo(item.href)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
