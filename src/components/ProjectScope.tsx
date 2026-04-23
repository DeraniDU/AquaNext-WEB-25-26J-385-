import styles from "./ProjectScope.module.css";
import { Droplets, ShieldAlert, Utensils, BarChart3 } from "lucide-react";

const scopeItems = [
  {
    icon: <Droplets size={40} />,
    title: "Water Quality Prediction",
    description:
      "Real-time prediction of pH, dissolved oxygen, and temperature using LSTM deep learning models integrated with IoT sensors.",
    researcher: "Component 1",
  },
  {
    icon: <ShieldAlert size={40} />,
    title: "Disease Detection",
    description:
      "Automated detection of White Spot Syndrome Virus (WSSV) and other shrimp diseases through advanced computer vision and CNN architectures.",
    researcher: "Component 2",
  },
  {
    icon: <Utensils size={40} />,
    title: "Feed Optimization",
    description:
      "AI-driven feed management system that minimizes waste and optimizes feeding schedules for sustainable aquaculture practices.",
    researcher: "Component 3",
  },
  {
    icon: <BarChart3 size={40} />,
    title: "Growth Analytics",
    description:
      "Comprehensive growth tracking and predictive analytics dashboard for monitoring shrimp biomass and farm productivity metrics.",
    researcher: "Component 4",
  },
];

export default function ProjectScope() {
  return (
    <section id="project-scope" className="section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Research Focus</span>
          <h2>Project Scope</h2>
          <p>
            Our research addresses four critical domains in modern aquaculture,
            each powered by cutting-edge artificial intelligence methodologies.
          </p>
        </div>

        <div className={styles.grid}>
          {scopeItems.map((item, i) => (
            <div key={item.title} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <div className={styles.cardBadge}>{item.researcher}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <div className={styles.cardLine} />
            </div>
          ))}
        </div>

        {/* Research Problem */}
        <div className={styles.problem}>
          <div className={styles.problemContent}>
            <span className="section-badge">Research Problem</span>
            <h3>Why This Matters</h3>
            <p>
              Sri Lanka&apos;s shrimp farming industry faces significant challenges including unpredictable water quality fluctuations, 
              late disease detection leading to massive farm losses, suboptimal feeding practices causing environmental degradation, 
              and lack of data-driven growth management tools. Traditional methods are reactive rather than predictive, 
              resulting in economic losses exceeding $3 billion annually in the global aquaculture industry.
            </p>
          </div>
          <div className={styles.problemStats}>
            <div className={styles.problemStat}>
              <span className={styles.problemStatNum}>$3B+</span>
              <span className={styles.problemStatLabel}>Annual Global Losses</span>
            </div>
            <div className={styles.problemStat}>
              <span className={styles.problemStatNum}>40%</span>
              <span className={styles.problemStatLabel}>Disease-related Loss</span>
            </div>
            <div className={styles.problemStat}>
              <span className={styles.problemStatNum}>30%</span>
              <span className={styles.problemStatLabel}>Feed Waste Reduction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
