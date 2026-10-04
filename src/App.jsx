import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Download,
  Code2,
  Folder,
  Users,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import "./index.css";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

const navigation = ["Home", "About", "Skills", "Projects", "Contact"];

const stats = [
  { icon: Code2, value: "3+", label: "Years Experience" },
  { icon: Folder, value: "15+", label: "Projects Completed" },
  { icon: Users, value: "100%", label: "Client Satisfaction" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(
    window.location.hash.slice(1) || "home",
  );

  // Close the mobile menu with Escape, and when the screen grows to desktop size
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth > 900 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <main className="portfolio">
      <div className="ambient ambient-blue" />
      <div className="ambient ambient-purple" />
      <div className="dot-pattern" />

      <header className="navbar">
        <a className="logo" href="#home" aria-label="MT Home">
          <span>M</span>
          <strong>T</strong>
        </a>

        <nav
          id="primary-nav"
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={
                activeNav === item.toLowerCase()
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => {
                setActiveNav(item.toLowerCase());
                setMenuOpen(false);
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="talk-button" href="#contact">
            Let's Talk <ArrowUpRight size={19} />
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="eyebrow">
            <span className="eyebrow-line" />
            SOFTWARE DEVELOPER
          </div>

          <h1>
            Hello,
            <br />
            I'm <span className="gradient-name">Muhammad Taha</span>
          </h1>

          <p className="hero-description">
            I build modern web applications with clean code, creative design and
            a passion for turning ideas into real products.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View My Work <ArrowUpRight size={20} />
            </a>
            <a href="/resume.pdf" className="secondary-button" download>
              Download CV <Download size={18} />
            </a>
          </div>

          <div className="stats">
            {stats.map(({ icon: Icon, value, label }) => (
              <div className="stat" key={label}>
                <Icon className="stat-icon" size={29} strokeWidth={1.6} />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="portrait-stage">
          <div className="portrait-frame" />
          <div className="portrait-glow" />

          <motion.img
            className="portrait"
            src="/pic.png"
            alt="Muhammad Taha, software developer"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
          />

          <motion.div
            className="code-badge"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="code-icon">
              <Code2 size={29} />
            </div>
            <div>
              <span>Clean Code</span>
              <span>Better Tomorrow</span>
              <i />
            </div>
          </motion.div>
        </div>

        <aside className="social-rail" aria-label="Social media">
          <span className="rail-line" />
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
            >
              <Icon size={19} />
            </a>
          ))}
        </aside>
      </section>
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </main>
  );
}
