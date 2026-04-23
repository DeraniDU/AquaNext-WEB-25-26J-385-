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
    icon: <FileText size={24} />,
    title: "Topic Assessment",
    description: "Initial project topic assessment form submitted during the project registration phase.",
    type: "PDF Document",
    group: "Individual",
  },
  {
    icon: <ClipboardList size={24} />,
    title: "Project Charter",
    description: "Comprehensive project charter outlining scope, objectives, deliverables, and timeline.",
    type: "PDF Document",
    group: "Group",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Project Proposal",
    description: "Detailed research proposal with literature review, methodology, and expected outcomes.",
    type: "PDF Presentations",
    group: "Individual",
  },
  {
    icon: <BarChart size={24} />,
    title: "Status Document I",
    description: "First status document reflecting 50% progress — containing data analysis and initial results.",
    type: "PDF Document",
    group: "Individual",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Status Document II",
    description: "Second status document with 90% completion — model evaluations and system integration status.",
    type: "PDF Document",
    group: "Individual",
  },
  {
    icon: <Newspaper size={24} />,
    title: "Research Paper",
    description: "Published research paper detailing novel contributions, experiments, and findings.",
    type: "PDF / IEEE Format",
    group: "Group",
  },
  {
    icon: <Book size={24} />,
    title: "Final Report",
    description: "Complete academic final report covering all aspects of the research and implementation.",
    type: "PDF Document",
    group: "Individual",
  },
  {
    icon: <MonitorPlay size={24} />,
    title: "Final Presentation",
    description: "Viva voce presentation slides for the final academic evaluation and defense.",
    type: "PPTX / PDF",
    group: "Group",
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
              <button className={styles.downloadBtn}>
                <Download size={16} />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
