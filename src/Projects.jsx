import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ExternalLink, Code2, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiPython,
  SiTensorflow,
  SiNextdotjs,
  SiFlask,
  SiRedux,
  SiPostgresql,
} from "react-icons/si";
import "./Projects.css";

const filters = ["All", "MERN Stack", "Python / ML", "Django", "Other"];

const projects = [
  {
    id: 1,
    title: "Nike-Style E-Commerce Store",
    category: "MERN Stack",
    description:
      "Built a modern e-commerce store with product listings, cart and checkout using the MERN stack.",
    image: "/projects/nike-store.png",
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#83CD29" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
    demo: "https://example.com",
    github: "https://github.com/Imuhammadtaha/nike_personal_proj",
    featured: true,
  },
  {
    id: 2,
    title: "Full Stack E-Commerce App",
    category: "MERN Stack",
    description:
      "Developed a complete e-commerce application with REST APIs and Redux state management.",
    image: "/projects/ecommerce-dashboard.png",
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#83CD29" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
    demo: "https://example.com",
    github: "https://github.com/Imuhammadtaha/Ecommerece_app",
  },
  {
    id: 3,
    title: "Blockchain Voting System",
    category: "Other",
    description:
      "Built a secure voting system using blockchain technology to ensure transparency and data integrity.",
    image: "/projects/voting-system.png",
    technologies: [
      { name: "Python", icon: SiPython, color: "#FFD43B" },
      { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
    ],
    demo: "https://example.com",
    github: "https://github.com/Imuhammadtaha/block_chain_prac",
  },
  {
    id: 4,
    title: "Banking FAQ Chatbot",
    category: "Python / ML",
    description:
      "Created a retrieval-based chatbot with CSV data, TF-IDF, Logistic Regression and a clean Tailwind UI.",
    image: "/projects/banking-chatbot.png",
    technologies: [
      { name: "Python", icon: SiPython, color: "#FFD43B" },
      { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
    demo: "https://example.com",
    github: "https://github.com/Imuhammadtaha/CodeAlpha_Chatbot_FAQs",
  },
  {
    id: 5,
    title: "MRI Brain Tumor Detection",
    category: "Python / ML",
    description:
      "Built a deep learning model to detect brain tumors from MRI scans using TensorFlow and Keras.",
    image: "/projects/brain-tumor.png",
    technologies: [
      { name: "Python", icon: SiPython, color: "#FFD43B" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF9A00" },
    ],
    demo: "https://example.com",
    github: "https://github.com/Imuhammadtaha/Machine_Learning",
  },
  {
    id: 6,
    title: "Resume AI",
    category: "Other",
    description:
      "Built an AI-powered resume analyzer using FastAPI, PDF parsing and intelligent insights.",
    image: "/projects/resume-ai.png",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Python", icon: SiPython, color: "#FFD43B" },
      { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
    ],
    demo: "https://example.com",
    github: "https://github.com/Imuhammadtaha/Resme",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
    >
      <div className="project-image-wrap">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="project-image"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="project-image-overlay" />
        <span className="project-image-number">
          {String(project.id).padStart(2, "0")}
        </span>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="project-preview-link"
          aria-label={`Open ${project.title}`}
        >
          <ArrowUpRight size={19} />
        </a>
      </div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tech" aria-label="Technologies">
          {project.technologies.map(({ name, icon: Icon, color }) => (
            <span
              className="tech-icon"
              key={name}
              title={name}
              aria-label={name}
            >
              <Icon style={{ color }} />
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="project-demo"
          >
            <ExternalLink size={15} />
            Live Demo
            <ArrowUpRight size={14} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-source"
          >
            <FaGithub size={17} />
            Source Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-orb projects-orb-left" />
      <div className="projects-orb projects-orb-right" />
      <div className="projects-dots" />

      <div className="projects-container">
        <div className="projects-top">
          <motion.div
            className="projects-intro"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="projects-eyebrow">
              <span />
              MY PROJECTS
            </div>

            <h2>
              My Recent
              <br />
              <span>Projects</span>
            </h2>

            <p>
              Here are some of the projects I've built using modern technologies
              like MERN stack, Next.js, Python and more. Each project helped me
              learn, solve real problems and grow as a developer.
            </p>
          </motion.div>

          <motion.div
            className="projects-showcase"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="showcase-frame">
              <div className="showcase-glow" />
              <div className="showcase-laptop">
                <div className="laptop-screen">
                  <div className="screen-code-icon">
                    <Code2 strokeWidth={1.5} />
                  </div>
                </div>
                <div className="laptop-base" />
              </div>
            </div>

            <div className="showcase-code">
              <div className="code-dots">
                <i />
                <i />
                <i />
              </div>
              <code>
                <span>const</span> project = {"{"}
                <br />
                &nbsp; build: <b>"real solutions"</b>,
                <br />
                &nbsp; learn: <b>"everyday"</b>,
                <br />
                &nbsp; grow: <em>true</em>
                <br />
                {"}"}
              </code>
            </div>

            <div className="showcase-tech">
              <div>
                <SiReact /> <span>React</span>
              </div>
              <div>
                <SiNodedotjs /> <span>Node.js</span>
              </div>
              <div>
                <SiMongodb /> <span>MongoDB</span>
              </div>
              <div>
                <SiNextdotjs /> <span>Next.js</span>
              </div>
              <div>
                <SiPython /> <span>Python</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="projects-toolbar">
          <div className="project-filters" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={
                  activeFilter === filter
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="github-all"
          >
            <FaGithub size={19} />
            View All on GitHub
            <ArrowUpRight size={15} />
          </a>
        </div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="projects-footer"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="footer-sparkle">
            <Sparkles size={22} />
          </div>
          <div>
            <h3>Have an idea in mind?</h3>
            <p>Let's turn your next big idea into a real product.</p>
          </div>
          <a href="#contact" className="projects-contact">
            Let's Work Together <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
