import styles from "./Downloads.module.css";
import {
  FileText,
  ClipboardList,
  BookOpen,
  BarChart,
  TrendingUp,
  Newspaper,
  Book,
  MonitorPlay,
  Download
} from "lucide-react";

const downloads = [
  {
    icon: <BookOpen size={24} />,
    title: "Project Proposal",
    description: "Detailed research proposal with literature review, methodology, and expected outcomes.",
    type: "PDF Document",
    group: "Group",
    fileUrl: "/documents/AquaNext Project Proposal_compressed.pdf",
    status: "Completed",
  },
  {
    icon: <BarChart size={24} />,
    title: "Progress Presentation 1",
    description: "First progress presentation covering initial research findings and 50% milestone updates.",
    type: "PPTX / PDF",
    group: "Group",
    fileUrl: "/documents/AquaNext Progress Presentation 1_compressed.pdf",
    status: "Completed",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Progress Presentation 2",
    description: "Second progress presentation covering advanced implementations and 90% milestone updates.",
    type: "PPTX / PDF",
    group: "Group",
    fileUrl: "/documents/AquaNext Progress Presentation 2.pdf",
    status: "Completed",
  },
  {
    icon: <MonitorPlay size={24} />,
    title: "Final Presentation",
    description: "Viva voce presentation slides for the final academic evaluation and defense.",
    type: "PPTX / PDF",
    group: "Group",
    fileUrl: "/documents/final-presentation.pdf",
    status: "Not completed yet",
  },
];

export default function Downloads() {
  return (
    <section id="downloads" className="section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Documents</span>
          <h2>Downloads</h2>
          <p>
            Access all project-related academic documents, presentations, and publications.
          </p>
        </div>

        <div className={styles.grid}>
          {downloads.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.typeBadge}>{item.type}</span>
                  <span className={styles.groupBadge}>{item.group}</span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
              {item.status === 'Completed' ? (
                <a href={item.fileUrl} download className={styles.downloadBtn}>
                  <Download size={16} />
                  Download
                </a>
              ) : (
                <span className={styles.pendingBtn}>
                  Pending
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
