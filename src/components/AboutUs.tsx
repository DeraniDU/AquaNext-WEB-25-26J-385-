import styles from "./AboutUs.module.css";

const teamMembers = [
  {
    name: "Member 1",
    role: "Water Quality Prediction",
    id: "IT21xxxxx",
    department: "Information Technology",
  },
  {
    name: "Member 2",
    role: "Disease Detection",
    id: "IT21xxxxx",
    department: "Information Technology",
  },
  {
    name: "Member 3",
    role: "Feed Optimization",
    id: "IT21xxxxx",
    department: "Information Technology",
  },
  {
    name: "Member 4",
    role: "Growth Analytics",
    id: "IT21xxxxx",
    department: "Information Technology",
  },
];

const supervisors = [
  {
    name: "Supervisor Name",
    role: "Supervisor",
    department: "Faculty of Computing, SLIIT",
  },
  {
    name: "Co-Supervisor Name",
    role: "Co-Supervisor",
    department: "Faculty of Computing, SLIIT",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Team</span>
          <h2>About Us</h2>
          <p>
            Meet the researchers and academic supervisors behind the AquaNext project.
          </p>
        </div>

        {/* Supervisors */}
        <div className={styles.supervisorSection}>
          <h3 className={styles.subHeading}>Supervisors</h3>
          <div className={styles.supervisorGrid}>
            {supervisors.map((s) => (
              <div key={s.name} className={styles.supervisorCard}>
                <div className={styles.avatarPlaceholder}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <h4 className={styles.memberName}>{s.name}</h4>
                <span className={styles.memberRole}>{s.role}</span>
                <span className={styles.memberDept}>{s.department}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className={styles.teamSection}>
          <h3 className={styles.subHeading}>Research Team</h3>
          <div className={styles.teamGrid}>
            {teamMembers.map((m) => (
              <div key={m.name} className={styles.teamCard}>
                <div className={styles.teamAvatar}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className={styles.teamInfo}>
                  <h4 className={styles.teamName}>{m.name}</h4>
                  <span className={styles.teamRole}>{m.role}</span>
                  <span className={styles.teamId}>{m.id}</span>
                  <span className={styles.teamDept}>{m.department}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
