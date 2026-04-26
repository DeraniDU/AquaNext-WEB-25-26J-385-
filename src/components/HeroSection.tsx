import styles from "./HeroSection.module.css";
import { Microscope } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      {/* Grid overlay */}
      <div className={styles.grid} />
      {/* Decorative floating shapes */}
      <div className={styles.shapes}>
        <div className={styles.shape1} />
        <div className={styles.shape2} />
        <div className={styles.shape3} />
        <div className={styles.shape4} />
      </div>

      <div className={`container ${styles.content}`}>
        <span className={styles.badge}>
          <Microscope size={14} style={{ display: "inline", verticalAlign: "text-bottom", marginRight: "6px" }} />
          SLIIT Research Project 2025-2026
        </span>
        <h1 className={styles.title}>
          AquaNext — AI-Powered<br />
          <span className={styles.highlight}>Smart Aquaculture</span>
        </h1>
        <p className={styles.subtitle}>
          Revolutionising Sri Lankan shrimp farms with real-time water quality monitoring, 
          smart AI feeding, disease detection, and an intelligent assistant.
        </p>
        <div className={styles.actions}>
          <a href="#project-scope" className={styles.primaryBtn}>
            Explore Research
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </a>
          <a href="#downloads" className={styles.secondaryBtn}>
            Download Papers
          </a>
        </div>

        {/* Stats strip */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>4</span>
            <span className={styles.statLabel}>Research Components</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>4</span>
            <span className={styles.statLabel}>Team Members</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>2025-2026</span>
            <span className={styles.statLabel}>Academic Year</span>
          </div>
        </div>
      </div>
    </section>
  );
}
