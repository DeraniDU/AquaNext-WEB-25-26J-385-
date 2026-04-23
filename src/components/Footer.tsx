import styles from "./Footer.module.css";
import { Droplet } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}><Droplet size={24} /></span>
            <span className={styles.logoText}>Aqua<span className={styles.logoAccent}>Next</span></span>
          </div>
          <p className={styles.brandDesc}>
            AI-Driven Smart Shrimp Farming — A SLIIT research project advancing 
            sustainable aquaculture through artificial intelligence and IoT technologies.
          </p>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.linksTitle}>Quick Links</h4>
          <a href="#home" className={styles.link}>Home</a>
          <a href="#project-scope" className={styles.link}>Project Scope</a>
          <a href="#milestones" className={styles.link}>Milestones</a>
          <a href="#downloads" className={styles.link}>Downloads</a>
        </div>

        <div className={styles.linksGroup}>
          <h4 className={styles.linksTitle}>Team</h4>
          <a href="#about" className={styles.link}>About Us</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomContent}`}>
          <p>&copy; {new Date().getFullYear()} AquaNext Research. Sri Lanka Institute of Information Technology.</p>
          <p className={styles.bottomRight}>Department of Information Technology</p>
        </div>
      </div>
    </footer>
  );
}
