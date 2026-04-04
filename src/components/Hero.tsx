"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";
import { heroData, contactItems } from "@/data/portfolio";
import styles from "./Hero.module.css";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const roleIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    const roles = heroData.roles;

    const tick = () => {
      const currentRole = roles[roleIndexRef.current];

      if (deletingRef.current) {
        charIndexRef.current--;
      } else {
        charIndexRef.current++;
      }

      setTypedText(currentRole.slice(0, charIndexRef.current));

      if (!deletingRef.current && charIndexRef.current === currentRole.length) {
        deletingRef.current = true;
        return setTimeout(tick, 2000);
      }

      if (deletingRef.current && charIndexRef.current === 0) {
        deletingRef.current = false;
        roleIndexRef.current = (roleIndexRef.current + 1) % roles.length;
      }

      return setTimeout(tick, deletingRef.current ? 40 : 80);
    };

    const timer = setTimeout(tick, 1200);
    return () => clearTimeout(timer);
  }, []);

  const nameChars = heroData.name.split("");

  return (
    <section className={styles.hero} id="about">
      <ParticleCanvas />
      <div className={styles.heroGlow} />
      <div className={styles.heroGlow2} />
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroTag}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.heroTagDot} />
            {heroData.tag}
          </motion.div>

          <h1 className={styles.heroName}>
            {nameChars.map((ch, i) => (
              <motion.span
                key={i}
                className={`${styles.char} ${ch === "K" ? "accent" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {ch === " " ? "\u00a0" : ch}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className={styles.heroRole}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>{typedText}</span>
            <span className={styles.cursor} />
          </motion.p>

          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {heroData.description}
          </motion.p>

          <motion.div
            className={styles.heroCta}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            {contactItems.filter(item => ["github", "linkedin", "email", "phone"].includes(item.type)).map((item) => (
              <a
                key={item.type}
                href={item.href}
                className={styles.heroSocialBtn}
                target={["linkedin", "github"].includes(item.type) ? "_blank" : undefined}
                rel={["linkedin", "github"].includes(item.type) ? "noopener noreferrer" : undefined}
                aria-label={item.label}
              >
                {item.type === "github" ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ) : (
                  <span style={{ fontSize: item.type === "linkedin" ? "18px" : "20px", fontWeight: 700 }}>{item.icon}</span>
                )}
              </a>
            ))}
            <a
              href="/Dileep_K-1__1_.pdf"
              download
              className="btnSecondary"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
