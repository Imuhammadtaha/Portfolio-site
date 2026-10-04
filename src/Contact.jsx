import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Clock3,
  Send,
  UserRound,
  MessageSquare,
  ArrowUpRight,
  Code2,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

import "./Contact.css";

const email = "mmuhammadtaha786@gmail.com";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: email,
    detail: "Drop me a line anytime",
    href: `mailto:${email}`,
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Pakistan",
    detail: "Open to remote opportunities",
  },
  {
    icon: Clock3,
    title: "Response Time",
    value: "Within 24 hours",
    detail: "I always try to reply fast",
  },
  {
    icon: Code2,
    title: "Availability",
    value: "Open to Projects",
    detail: "Let's build something great",
  },
];

const socials = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Imuhammadtaha/",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-taha-7a5748284/",
  },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      form.subject || `Portfolio inquiry from ${form.name}`,
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-orb contact-orb-left" />
      <div className="contact-orb contact-orb-right" />
      <div className="contact-dots contact-dots-left" />
      <div className="contact-dots contact-dots-right" />

      <div className="contact-container">
        {/* Left side */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-eyebrow">
            <span />
            GET IN TOUCH
          </div>

          <h2>
            Let's Work
            <br />
            <span>Together</span>
          </h2>

          <p className="contact-description">
            Have a project in mind, a question, or just want to say hello? I'm
            always open to new opportunities, collaborations and interesting
            conversations. Feel free to reach out — I'd love to hear from you!
          </p>

          <div className="contact-info-grid">
            {contactInfo.map(
              ({ icon: Icon, title, value, detail, href }, i) => {
                const content = (
                  <>
                    <div className="contact-info-icon">
                      <Icon size={25} strokeWidth={1.7} />
                    </div>
                    <div className="contact-info-text">
                      <h3>{title}</h3>
                      <strong>{value}</strong>
                      <span>{detail}</span>
                    </div>
                  </>
                );

                return (
                  <motion.div
                    className="contact-info-card"
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {href ? (
                      <a href={href} className="contact-info-link">
                        {content}
                      </a>
                    ) : (
                      <div className="contact-info-link">{content}</div>
                    )}
                  </motion.div>
                );
              },
            )}
          </div>

          <div className="contact-social-card">
            <div className="contact-social-content">
              <div className="contact-social-heading">
                <span />
                FOLLOW ME
              </div>

              <div className="contact-social-links">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    href={href}
                    key={label}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    title={label}
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-handwriting">
              <span>Let's build</span>
              <span>something great</span>
              <span>together!</span>
              <ArrowUpRight size={27} />
              <i />
            </div>
          </div>
        </motion.div>

        {/* Right side: contact form */}
        <motion.div
          className="contact-form-wrap"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="contact-form-glow" />

          <div className="contact-form-inner">
            <div className="contact-eyebrow">
              <span />
              SEND A MESSAGE
            </div>

            <h3>
              Drop Me a <span>Message</span>
            </h3>

            <p className="form-description">
              Fill out the form below and I'll get back to you as soon as
              possible. Whether it's a project, job opportunity, or just a quick
              question — I'm here to help.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label className="contact-input-wrap">
                  <UserRound size={21} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="contact-input-wrap">
                  <Mail size={21} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label className="contact-input-wrap">
                <MessageSquare size={21} />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                />
              </label>

              <label className="contact-input-wrap message-wrap">
                <MessageSquare size={21} />
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={form.message}
                  onChange={handleChange}
                  maxLength={500}
                  required
                />
              </label>

              <div className="message-counter">{form.message.length}/500</div>

              <button type="submit" className="contact-submit">
                <Send size={20} />
                <span>Send Message</span>
                <ArrowUpRight size={21} />
              </button>
            </form>

            <div className="contact-response">
              <span className="response-dot" />I usually reply within 24 hours
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
