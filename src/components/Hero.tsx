"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";
import { heroData } from "@/data/portfolio";
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
            <a href="#contact" className="btnPrimary">
              Get in touch
            </a>
            <a href="#experience" className="btnSecondary">
              View work
            </a>
            <a
              href="/Dileep_K-1__1_.pdf"
              download
              className="btnSecondary"
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
