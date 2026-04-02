"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { experiences } from "@/data/portfolio";
import styles from "./Experience.module.css";

export default function Experience() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "0px 0px -40px 0px" });

  return (
    <section id="experience" className={styles.experience}>
      <div className="sectionInner">
        <ScrollReveal>
          <div className="sectionLabel">Career</div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="sectionTitle">
            Work<br />Experience
          </h2>
        </ScrollReveal>
        <div className={styles.expGrid} ref={gridRef}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              className={styles.expCard}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className={styles.expRole}>{exp.role}</div>
              <div className={styles.expCompany}>{exp.company}</div>
              <div className={styles.expPeriod}>{exp.period}</div>
              <ul className={styles.expBullets}>
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className={styles.expBullet}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
