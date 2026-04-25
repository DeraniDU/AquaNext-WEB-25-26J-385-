import styles from "./ProjectScope.module.css";
import { Droplets, ShieldAlert, Utensils, Bot } from "lucide-react";

const scopeItems = [
  {
    icon: <Droplets size={40} />,
    title: "Water Quality Monitoring",
    description:
      "pH, oxygen, ammonia, temperature—24/7 real-time monitoring with instant alerts.",
    fileUrl: "/documents/water-quality-monitoring.pdf"
  },
  {
    icon: <Utensils size={40} />,
    title: "Automated Feed System",
    description:
      "AI-powered feeding reduces waste by up to 50% and optimises schedules for growth.",
    fileUrl: "/documents/automated-feed-system.pdf"
  },
  {
    icon: <ShieldAlert size={40} />,
    title: "Disease Identifier",
    description:
      "Early AI detection of diseases and pathogens—95% accuracy before visible symptoms.",
    fileUrl: "/documents/disease-identifier.pdf"
  },
  {
    icon: <Bot size={40} />,
    title: "AI Agent",
    description:
      "Your intelligent assistant providing insights, recommendations, and automations.",
    fileUrl: "/documents/ai-agent.pdf"
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
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <a href={item.fileUrl} download className={styles.learnMore}>
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              </a>
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
              <span className={styles.problemStatNum}>24/7</span>
              <span className={styles.problemStatLabel}>Real-Time Monitoring</span>
            </div>
            <div className={styles.problemStat}>
              <span className={styles.problemStatNum}>95%</span>
              <span className={styles.problemStatLabel}>Disease Det. Accuracy</span>
            </div>
            <div className={styles.problemStat}>
              <span className={styles.problemStatNum}>50%</span>
              <span className={styles.problemStatLabel}>Feed Waste Reduction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
