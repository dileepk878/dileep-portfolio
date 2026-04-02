import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCopy}>
        2026 <span>Dileep K</span> - All rights reserved
      </div>
      <div className={styles.footerCopy}>Built with precision and passion</div>
    </footer>
  );
}
