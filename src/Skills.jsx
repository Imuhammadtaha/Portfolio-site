
import { motion } from "motion/react";
import {
  Code2,
  Server,
  Wrench,
  PencilRuler,
  Sparkles,
  Plus,
  BrainCircuit,
} from "lucide-react";
import "./Skills.css";

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS / SCSS", level: 90 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "MongoDB", level: 80 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Firebase", level: 80 },
      { name: "Docker", level: 70 },
      { name: "Postman", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    icon: PencilRuler,
    title: "Design & Others",
    skills: [
      { name: "Figma", level: 90 },
      { name: "UI/UX Design", level: 80 },
      { name: "Responsive Design", level: 95 },
      { name: "Clean Code", level: 90 },
      { name: "Problem Solving", level: 95 },
    ],
  },
];

const technologies = [
  { name: "HTML5", short: "5", style: "html" },
  { name: "CSS3", short: "3", style: "css" },
  { name: "JavaScript", short: "JS", style: "js" },
  { name: "React", short: "⚛", style: "react" },
  { name: "Node.js", short: "JS", style: "node" },
  { name: "Express", short: "ex", style: "express" },
  { name: "MongoDB", short: "◆", style: "mongo" },
  { name: "PostgreSQL", short: "🐘", style: "postgres" },
  { name: "Git", short: "◆", style: "git" },
  { name: "GitHub", short: "◉", style: "github" },
  { name: "Tailwind CSS", short: "≈", style: "tailwind" },
  { name: "Firebase", short: "▲", style: "firebase" },
  { name: "Docker", short: "▰", style: "docker" },
  { name: "Figma", short: "◉", style: "figma" },
];

const codeLines = [
  { number: "01", parts: [["keyword", "function "], ["function", "buildSolution"], ["plain", "() {"]] },
  { number: "02", parts: [["plain", "  think();"]] },
  { number: "03", parts: [["plain", "  plan();"]] },
  { number: "04", parts: [["plain", "  code();"]] },
  { number: "05", parts: [["plain", "  refine();"]] },
  { number: "06", parts: [["keyword", "  return "], ["variable", "impact"], ["plain", ";"]] },
  { number: "07", parts: [["plain", "}"]] },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-bg-glow skills-bg-blue" />
      <div className="skills-bg-glow skills-bg-purple" />
      <div className="skills-dots" />

      <div className="skills-container">
        {/* Intro */}
        <div className="skills-intro">
          <motion.div
            className="skills-copy"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="skills-eyebrow">
              <span />
              MY SKILLS
            </div>

            <h2>
              The Skills Behind
              <br />
              <span>Digital Solutions</span>
            </h2>

            <p>
              I combine technical expertise with creative thinking to build
              scalable, efficient, and user-friendly web applications
              that make an impact.
            </p>
          </motion.div>

          {/* Abstract visual — no portrait */}
          <motion.div
            className="skills-visual"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="skills-visual-back" />
            <div className="skills-visual-frame">
              <div className="visual-orb visual-orb-blue" />
              <div className="visual-orb visual-orb-purple" />
              <div className="visual-grid" />
              <div className="visual-center">
                <div className="visual-icon">
                  <Code2 size={54} strokeWidth={1.3} />
                </div>
                <span className="visual-caption">THINK · BUILD · CREATE</span>
                <div className="visual-line" />
              </div>
              <div className="visual-ring visual-ring-one" />
              <div className="visual-ring visual-ring-two" />
              <span className="visual-node node-one" />
              <span className="visual-node node-two" />
              <span className="visual-node node-three" />
            </div>

            <motion.div
              className="skills-code-card"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <div className="skills-code-header">
                <div className="skills-code-icon">
                  <Code2 size={25} />
                </div>
                <div>
                  <strong>Clean Code</strong>
                  <span>Better Tomorrow</span>
                  <i />
                </div>
              </div>

              <div className="code-snippet">
                {codeLines.map((line) => (
                  <div className="code-line" key={line.number}>
                    <span className="code-number">{line.number}</span>
                    <code>
                      {line.parts.map(([type, content], index) => (
                        <span className={`syntax-${type}`} key={index}>
                          {content}
                        </span>
                      ))}
                    </code>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skill cards */}
        <motion.div
          className="skill-groups"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {skillGroups.map(({ icon: Icon, title, skills }) => (
            <motion.article
              className="skill-card"
              key={title}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55 },
                },
              }}
            >
              <div className="skill-card-heading">
                <div className="skill-card-icon">
                  <Icon size={27} strokeWidth={1.6} />
                </div>
                <h3>{title}</h3>
              </div>

              <div className="skill-items">
                {skills.map(({ name, level }, index) => (
                  <div className="skill-item" key={name}>
                    <div className="skill-item-top">
                      <span>{name}</span>
                      <span className="skill-percent">{level}%</span>
                    </div>
                    <div
                      className="skill-track"
                      role="progressbar"
                      aria-label={name}
                      aria-valuenow={level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <motion.div
                        className="skill-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.15 + index * 0.08,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Technologies */}
        <div className="skills-bottom">
          <div className="tech-stack">
            <div className="tech-heading">
              <div className="skills-eyebrow">
                <span />
                TECHNOLOGIES I WORK WITH
              </div>
              <div className="tech-heading-line" />
            </div>

            <motion.div
              className="tech-list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.055 } },
              }}
            >
              {technologies.map((tech) => (
                <motion.div
                  className={`tech-tile tech-${tech.style}`}
                  key={tech.name}
                  title={tech.name}
                  aria-label={tech.name}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.35 },
                    },
                  }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <span>{tech.short}</span>
                </motion.div>
              ))}

              <motion.div
                className="tech-tile tech-add"
                title="More technologies coming soon"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                <Plus size={28} strokeWidth={1.4} />
              </motion.div>
            </motion.div>
          </div>

          <motion.aside
            className="learning-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="learning-icon">
              <BrainCircuit size={49} strokeWidth={1.4} />
              <Sparkles className="learning-sparkle" size={17} />
            </div>
            <div className="learning-content">
              <h3>Always Learning</h3>
              <p>
                I'm constantly exploring new technologies
                and improving my skills.
              </p>
              <i />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}