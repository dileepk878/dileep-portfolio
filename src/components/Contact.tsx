"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import styles from "./Contact.module.css";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdvv42LJpTwMcIBAHK1_qTzfU2YTYaMggq2-MRHXtXSHQ6fpg/formResponse";

    try {
      await fetch(formUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Required for Google Forms cross-origin POST
      });
      // We assume victory because mode: 'no-cors' doesn't give us a readable status
      setStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

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
            <div className={styles.contactFormContainer}>
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={styles.successMessage}
                  >
                    <div className={styles.successIcon}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <h3>Message Sent!</h3>
                    <p>Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p>
                    <button onClick={() => setStatus("idle")} className="btnPrimary">Send another message</button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.contactForm} 
                    onSubmit={handleSubmit}
                  >
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="entry.996340074" 
                        className={styles.input} 
                        required 
                        disabled={status === "sending"}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="entry.739924264" 
                        className={styles.input} 
                        required 
                        disabled={status === "sending"}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.label}>Message</label>
                      <textarea 
                        id="message" 
                        name="entry.1646191296" 
                        className={styles.textarea} 
                        required 
                        disabled={status === "sending"}
                      ></textarea>
                    </div>
                    <button type="submit" className="btnPrimary" disabled={status === "sending"}>
                      {status === "sending" ? "Sending..." : "Send Message"}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </button>
                    {status === "error" && (
                      <p className={styles.errorMessage}>Something went wrong. Please try again.</p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
