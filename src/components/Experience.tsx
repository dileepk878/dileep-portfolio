"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { experiences } from "@/data/portfolio";
import styles from "./Experience.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className="sectionInner">
        <ScrollReveal>
          <div className="sectionLabel">Professional Journey</div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="sectionTitle">
            Career<br />Timeline
          </h2>
        </ScrollReveal>

        <div className={styles.expContainer}>
          <div className={styles.timelineLine} />
          
          <motion.div 
            className={styles.timeline}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.role + i}
                className={styles.expItem}
                variants={itemVariants}
              >
                <div className={styles.node} />
                <div className={styles.expCard}>
                  <div className={styles.expHeader}>
                    <div className={styles.titleArea}>
                      <div className={styles.expRole}>{exp.role}</div>
                      <div className={styles.expCompany}>{exp.company}</div>
                    </div>
                    <div className={styles.expPeriod}>{exp.period}</div>
                  </div>
                  
                  <ul className={styles.expBullets}>
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className={styles.expBullet}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
