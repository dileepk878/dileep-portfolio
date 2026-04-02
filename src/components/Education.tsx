"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { educations } from "@/data/portfolio";
import styles from "./Education.module.css";

export default function Education() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "0px 0px -40px 0px" });

  return (
    <section id="education" className={styles.education}>
      <div className="sectionInner">
        <ScrollReveal>
          <div className="sectionLabel">Academic</div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="sectionTitle">Education</h2>
        </ScrollReveal>
        <div className={styles.eduGrid} ref={gridRef}>
          {educations.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className={styles.eduCard}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className={styles.eduSchool}>{edu.school}</div>
              <div className={styles.eduDegree}>{edu.degree}</div>
              <div className={styles.eduYear}>{edu.year}</div>
              <div className={styles.eduIcon}>{edu.icon}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
