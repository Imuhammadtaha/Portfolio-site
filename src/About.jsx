import { motion } from "motion/react";
import { Code2, BrainCircuit, Puzzle, Folder, UserRound } from "lucide-react";
import "./About.css";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building fast, responsive and user-friendly web applications.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "Creating AI-powered tools and automations that add real value.",
  },
  {
    icon: Puzzle,
    title: "Problem Solving",
    description:
      "Turning complex challenges into simple and effective solutions.",
  },
];

const highlights = [
  { number: "01", label: "Developer" },
  { number: "02", label: "Problem Solver" },
  { number: "03", label: "AI Explorer" },
];

const stats = [
  { icon: Code2, value: "3+", label: "Years Learning\n& Building" },
  { icon: Folder, value: "15+", label: "Projects" },
  { icon: UserRound, value: "Always", label: "Learning" },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-dots about-dots-top" />
      <div className="about-dots about-dots-bottom" />
      <div className="about-orb" />

      <div className="about-container">
        <div className="about-main">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-eyebrow">
              <span />
              ABOUT ME
            </div>

            <h2>
              Building <span>Digital</span>
              <br />
              Experiences With <span>Purpose</span>
            </h2>

            <p>
              I’m Muhammad Taha, a Software Developer focused on building modern
              web applications, AI-powered tools, and practical digital
              products. I enjoy turning complex ideas into clean, reliable, and
              user-friendly experiences.
            </p>

            <p>
              I’m a self-driven developer who loves working with modern
              JavaScript technologies and the MERN stack. I’m constantly
              exploring AI/ML, and building intelligent systems that solve
              real-world problems.
            </p>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="about-frame-back" />
            <div className="about-frame">
        
            </div>

            {highlights.map((item, index) => (
              <motion.div
                key={item.number}
                className={`highlight-card highlight-${index + 1}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.15 }}
              >
                <strong>{item.number}</strong>
                <span>/ {item.label}</span>
                <i />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="about-bottom">
          {/* Moved here so on mobile the label sits right above the service cards */}
          <div className="about-what">
            <div className="about-eyebrow">
              <span />
              WHAT I DO
            </div>
          </div>

          <motion.div
            className="service-list"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
          >
            {services.map(({ icon: Icon, title, description }) => (
              <article className="service-card" key={title}>
                <Icon className="service-icon" size={39} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div className="about-stat" key={value}>
                <Icon size={34} strokeWidth={1.5} />
                <strong>{value}</strong>
                <span>
                  {label.split("\n").map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
