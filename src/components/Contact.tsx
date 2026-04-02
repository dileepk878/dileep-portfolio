"use client";

import ScrollReveal from "./ScrollReveal";
import { contactItems } from "@/data/portfolio";
import styles from "./Contact.module.css";

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="sectionInner">
        <ScrollReveal>
          <div className="sectionLabel">Let&apos;s connect</div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className={styles.contactBox}>
            <div>
              <h2 className={styles.contactHeading}>
                Let&apos;s build<br />something <span className="accent">great</span>
              </h2>
              <p className={styles.contactSub}>
                Open to new opportunities, collaborations, and interesting projects.
                Whether you have a role in mind or just want to chat - reach out.
              </p>
            </div>
            <div className={styles.contactItems}>
              {contactItems.map((item) => {
                const isGithub = item.type === "github";
                const iconContent = isGithub ? <GitHubIcon /> : item.icon;

                if (item.isLink && item.href) {
                  return (
                    <a
                      key={item.type}
                      href={item.href}
                      className={styles.contactItem}
                      target={
                        item.type === "linkedin" || item.type === "github"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.type === "linkedin" || item.type === "github"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <div className={styles.contactIcon}>{iconContent}</div>
                      <div>
                        <div className={styles.contactLabel}>{item.label}</div>
                        <div className={styles.contactValue}>{item.value}</div>
                      </div>
                    </a>
                  );
                }

                return (
                  <div
                    key={item.type}
                    className={`${styles.contactItem} ${styles.contactItemStatic}`}
                  >
                    <div className={styles.contactIcon}>{iconContent}</div>
                    <div>
                      <div className={styles.contactLabel}>{item.label}</div>
                      <div className={styles.contactValue}>{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
