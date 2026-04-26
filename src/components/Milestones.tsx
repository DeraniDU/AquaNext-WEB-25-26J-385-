import styles from "./Milestones.module.css";

const milestones = [
  {
    date: "February 2025",
    title: "Project Proposal",
    description: "Initial proposal presentation including research problem identification, literature review, and proposed AI-driven solution architecture.",
    status: "completed" as "completed" | "in-progress" | "upcoming",
    marks: "Proposal Evaluation",
  },
  {
    date: "May 2025",
    title: "Progress Presentation 1",
    description: "Demonstration of 50% project completion — data collection, initial model training, and prototype system architecture.",
    status: "completed" as "completed" | "in-progress" | "upcoming",
    marks: "Progress Review",
  },
  {
    date: "September 2025",
    title: "Progress Presentation 2",
    description: "Demonstration of 90% project completion — refined models, system integration, and preliminary testing results.",
    status: "completed" as "completed" | "in-progress" | "upcoming",
    marks: "Progress Review",
  },
  {
    date: "November 2025",
    title: "Final Presentation",
    description: "Complete project demonstration, viva voce examination, and final evaluation by academic panel and industry experts.",
    status: "upcoming" as "completed" | "in-progress" | "upcoming",
    marks: "Final Viva",
  },
];

export default function Milestones() {
  return (
    <section id="milestones" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Timeline</span>
          <h2>Project Milestones</h2>
          <p>
            Key academic milestones and deliverables throughout our research journey.
          </p>
        </div>

        <div className={styles.timeline}>
          {milestones.map((m, i) => (
            <div key={m.title} className={`${styles.item} ${styles[m.status]}`}>
              <div className={styles.lineContainer}>
                <div className={styles.dot} />
                {i < milestones.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={`${styles.statusBadge} ${styles[`badge_${m.status}`]}`}>
                    {m.status === "completed" ? "✓ Completed" : m.status === "in-progress" ? "⏳ In Progress" : "◦ Upcoming"}
                  </span>
                  <span className={styles.marks}>{m.marks}</span>
                </div>
                <span className={styles.date}>{m.date}</span>
                <h3 className={styles.cardTitle}>{m.title}</h3>
                <p className={styles.cardDesc}>{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
