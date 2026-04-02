"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { skillCategories, skillBars } from "@/data/portfolio";
import styles from "./Skills.module.css";

export default function Skills() {
  const barsRef = useRef(null);
  const barsInView = useInView(barsRef, { once: true, margin: "0px 0px -40px 0px" });
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    if (barsInView) {
      const timer = setTimeout(() => setBarsVisible(true), 200);
      return () => clearTimeout(timer);
    }
  }, [barsInView]);

  return (
    <section id="skills" className={styles.skills}>
      <div className="sectionInner">
        <ScrollReveal>
          <div className="sectionLabel">Toolkit</div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="sectionTitle">
            Technical<br />Skills
          </h2>
        </ScrollReveal>
        <div className={styles.skillsLayout}>
          <div>
            {skillCategories.map((cat, ci) => (
              <ScrollReveal key={cat.title} delay={0.05 * ci}>
                <div className={styles.skillsCategory}>
                  <div className={styles.skillsCatTitle}>{cat.title}</div>
                  <div className={styles.skillChips}>
                    {cat.chips.map((chip, i) => (
                      <motion.span
                        key={chip.name}
                        className={`${styles.chip} ${chip.highlight ? styles.chipHighlight : ""}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.03 * i,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        {chip.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div>
              <div className={`${styles.skillsCatTitle} ${styles.proficiencyTitle}`}>
                Proficiency
              </div>
              <div className={styles.skillBars} ref={barsRef}>
                {skillBars.map((bar, i) => (
                  <div key={bar.name}>
                    <div className={styles.skillBarHeader}>
                      <span className={styles.skillBarName}>{bar.name}</span>
                      <span className={styles.skillBarPct}>{bar.percentage}%</span>
                    </div>
                    <div className={styles.skillBarTrack}>
                      <div
                        className={styles.skillBarFill}
                        style={{
                          width: barsVisible ? `${bar.percentage}%` : "0%",
                          transitionDelay: `${i * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
