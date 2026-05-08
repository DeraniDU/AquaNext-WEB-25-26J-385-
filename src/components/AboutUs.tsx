import styles from "./AboutUs.module.css";

const teamMembers = [
  {
    name: "Deranindu Gunasekara",
    role: "BSc (Hons) IT – SLIIT Malabe",
    email: "deranindu@gmail.com",

    image: "/images/team/deranindu.jpg",
  },
  {
    name: "Samadi Senavirathne",
    role: "BSc (Hons) IT – SLIIT Malabe",
    email: "jithmisamadi2001@gmail.com",

    image: "/images/team/samadi.jpg",
  },
  {
    name: "Piyumali Palihawadana",
    role: "BSc (Hons) IT – SLIIT Malabe",
    email: "piyumalipalihawadana@gmail.com",

    image: "/images/team/piyumali.jpg",
  },
  {
    name: "Raveen De Silva",
    role: "BSc (Hons) IT – SLIIT Malabe",
    email: "rdesilva614@gmail.com",

    image: "/images/team/raveen.jpg",
  },
];

const supervisors = [
  {
    name: "Dr. Anjana Junius Vidanaralage",
    role: "Supervisor",
    department: "Faculty of Computing, SLIIT",
    image: "/images/team/profile_1777636661.jpg",
  },
  {
    name: "Mrs. Osuri Dunuwila",
    role: "Co-Supervisor",
    department: "Faculty of Computing, SLIIT",
    image: "/images/team/osurid_20260426_1777223615.jpeg",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About AquaNext</span>
          <h2>Who We Are</h2>
          <p>
            We are a dedicated team of undergraduate students from SLIIT Malabe, specialising in Information Technology and driven to modernise aquaculture with real-time monitoring, AI-powered decision-making, and smart automation.
          </p>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutCard}>
            <h3>Our Mission</h3>
            <p>To transform shrimp farming in Sri Lanka through advanced AI technology and sustainable innovation.</p>
          </div>
          <div className={styles.aboutCard}>
            <h3>Our Vision</h3>
            <p>Our diverse skill sets—spanning machine learning, IoT, full-stack development, and UI/UX—fuel our shared vision for profitable, sustainable, and efficient shrimp farms across Sri Lanka.</p>
          </div>
        </div>

        {/* Values */}
        <div className={styles.valuesSection}>
          <h3 className={styles.subHeading}>Our Values</h3>
          <p className={styles.valuesDesc}>The principles that guide every line of code and every design decision we make.</p>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h4>Innovation</h4>
              <p>Pushing the frontiers of AI and IoT to solve real aquaculture challenges.</p>
            </div>
            <div className={styles.valueCard}>
              <h4>Sustainability</h4>
              <p>Building solutions that protect marine ecosystems for future generations.</p>
            </div>
            <div className={styles.valueCard}>
              <h4>Impact</h4>
              <p>Delivering measurable results for farmers: higher yields, lower costs, safer harvests.</p>
            </div>
            <div className={styles.valueCard}>
              <h4>Collaboration</h4>
              <p>Uniting cross-disciplinary expertise in AI, IoT, and software engineering to build solutions greater than any one of us.</p>
            </div>
          </div>
        </div>

        {/* Supervisors */}
        <div className={styles.supervisorSection}>
          <h3 className={styles.subHeading}>Supervisors</h3>
          <div className={styles.supervisorGrid}>
            {supervisors.map((s) => (
              <div key={s.name} className={styles.supervisorCard}>
                <div className={styles.avatarPlaceholder}>
                  {s.image ? (
                    <img src={s.image} alt={s.name} className={styles.avatarImg} />
                  ) : (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
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
                  {m.image ? (
                    <img src={m.image} alt={m.name} className={styles.avatarImg} />
                  ) : (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                </div>
                <div className={styles.teamInfo}>
                  <h4 className={styles.teamName}>{m.name}</h4>
                  <span className={styles.teamRole}>{m.role}</span>
                  <a href={`mailto:${m.email}`} className={styles.teamContact}>{m.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
