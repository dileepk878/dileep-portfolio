"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/portfolio";
import styles from "./StatsBar.module.css";

function AnimatedNum({ value, inView }: { value: string; inView: boolean }) {
  const numericPart = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = numericPart;
    const duration = 1200;
    const stepTime = duration / end;

    const timer = setInterval(() => {
      start++;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, numericPart]);

  return (
    <span>
      {inView ? count : 0}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  return (
    <div className={styles.statsBar} ref={ref}>
      <div className={styles.statsInner}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={styles.statItem}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.1 + i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className={styles.statNum}>
              <AnimatedNum value={stat.num} inView={isInView} />
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
