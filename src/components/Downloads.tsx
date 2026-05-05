import styles from "./Downloads.module.css";
import {
  BookOpen,
  BarChart,
  TrendingUp,
  MonitorPlay,
  ClipboardCheck,
  Download,
  Eye,
  ExternalLink
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
    kind: "pdf",
  },
  {
    icon: <BarChart size={24} />,
    title: "Progress Presentation 1",
    description: "First progress presentation covering initial research findings and 50% milestone updates.",
    type: "PPTX / PDF",
    group: "Group",
    fileUrl: "/documents/AquaNext Progress Presentation 1_compressed.pdf",
    status: "Completed",
    kind: "pdf",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Progress Presentation 2",
    description: "Second progress presentation covering advanced implementations and 90% milestone updates.",
    type: "PPTX / PDF",
    group: "Group",
    fileUrl: "/documents/AquaNext Progress Presentation 2.pdf",
    status: "Completed",
    kind: "pdf",
  },
  {
    icon: <MonitorPlay size={24} />,
    title: "Final Presentation",
    description: "Viva voce presentation slides for the final academic evaluation and defense.",
    type: "PPTX / PDF",
    group: "Group",
    fileUrl: "/documents/final presentation.pdf",
    status: "Completed",
    kind: "pdf",
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: "Check List 1",
    description: "Project repository and source code checklist on GitHub — AquaNext AI Shrimp Farm system.",
    type: "External Link",
    group: "Group",
    fileUrl: "https://github.com/DeraniDU/AquaNext-AI-ShrimpFarm-25-26J-385.git",
    status: "Completed",
    kind: "external",
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: "Check List 2",
    description: "Project task management and progress checklist on Microsoft Planner.",
    type: "External Link",
    group: "Group",
    fileUrl: "https://planner.cloud.microsoft/webui/v1/plan/1o1o4MFgQUu8_-zkDRKnYskADexs?tid=44e3cf94-19c9-4e32-96c3-14f5bf01391a",
    status: "Completed",
    kind: "external",
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
                <div className={styles.btnRow}>
                  {item.kind === 'pdf' ? (
                    <>
                      <a
                        href={item.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.viewBtn}
                      >
                        <Eye size={15} />
                        View
                      </a>
                      <a
                        href={item.fileUrl}
                        download
                        className={styles.downloadBtn}
                      >
                        <Download size={15} />
                        Download
                      </a>
                    </>
                  ) : (
                    <a
                      href={item.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.downloadBtn}
                    >
                      <ExternalLink size={15} />
                      Open
                    </a>
                  )}
                </div>
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
