import styles from "./Technologies.module.css";
import { 
  Atom, 
  Server, 
  Code2, 
  Brain, 
  Flame, 
  Database, 
  Radio, 
  Eye, 
  Network, 
  ImageIcon, 
  Container, 
  Cloud 
} from "lucide-react";

const technologies = [
  { name: "React Native", category: "Frontend", icon: <Atom size={32} /> },
  { name: "Node.js", category: "Backend", icon: <Server size={32} /> },
  { name: "Python", category: "AI/ML", icon: <Code2 size={32} /> },
  { name: "TensorFlow", category: "Deep Learning", icon: <Brain size={32} /> },
  { name: "PyTorch", category: "Deep Learning", icon: <Flame size={32} /> },
  { name: "MongoDB", category: "Database", icon: <Database size={32} /> },
  { name: "MQTT / IoT", category: "IoT", icon: <Radio size={32} /> },
  { name: "OpenCV", category: "Computer Vision", icon: <Eye size={32} /> },
  { name: "LSTM Networks", category: "AI/ML", icon: <Network size={32} /> },
  { name: "CNN Models", category: "Computer Vision", icon: <ImageIcon size={32} /> },
  { name: "Docker", category: "DevOps", icon: <Container size={32} /> },
  { name: "AWS / GCP", category: "Cloud", icon: <Cloud size={32} /> },
];

const categoryColors: Record<string, string> = {
  Frontend: "#dbeafe",
  Backend: "#dcfce7",
  "AI/ML": "#fce7f3",
  "Deep Learning": "#ede9fe",
  Database: "#d1fae5",
  IoT: "#fef3c7",
  "Computer Vision": "#fee2e2",
  DevOps: "#e0f2fe",
  Cloud: "#f3e8ff",
};

const categoryText: Record<string, string> = {
  Frontend: "#1d4ed8",
  Backend: "#166534",
  "AI/ML": "#be185d",
  "Deep Learning": "#6d28d9",
  Database: "#065f46",
  IoT: "#92400e",
  "Computer Vision": "#991b1b",
  DevOps: "#0369a1",
  Cloud: "#7c3aed",
};

export default function Technologies() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Tech Stack</span>
          <h2>Technologies Used</h2>
          <p>
            A carefully selected combination of cutting-edge tools and frameworks powering the AquaNext platform.
          </p>
        </div>

        <div className={styles.grid}>
          {technologies.map((tech) => (
            <div key={tech.name} className={styles.card}>
              <div className={styles.iconWrapper}>{tech.icon}</div>
              <h4 className={styles.name}>{tech.name}</h4>
              <span
                className={styles.badge}
                style={{
                  background: categoryColors[tech.category] || "#f1f5f9",
                  color: categoryText[tech.category] || "#334155",
                }}
              >
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
