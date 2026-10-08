import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contact } from "../data/profile";
import "./Contact.css";

const EMAILJS_SERVICE_ID = "service_jfmkdw2";
const EMAILJS_TEMPLATE_ID = "template_dzl9t2n";
const EMAILJS_PUBLIC_KEY = "yRgRCuGAC-yyJcY2b";

const cvUrl = `${import.meta.env.BASE_URL}CV_Alfian_Mutakim.pdf`;

const topics = [
  { label: "Job opportunity", icon: "bi-briefcase" },
  { label: "Project", icon: "bi-code-slash" },
  { label: "MC & Event", icon: "bi-mic" },
  { label: "Just saying hi", icon: "bi-emoji-smile" },
];

const channels = [
  {
    icon: "bi-whatsapp",
    color: "#25d366",
    label: "WhatsApp",
    value: "+62 851 1749 5040",
    href: contact.whatsapp,
  },
  {
    icon: "bi-linkedin",
    color: "#0a66c2",
    label: "LinkedIn",
    value: "Alfian Mutakim",
    href: contact.linkedin,
  },
  {
    icon: "bi-github",
    color: "#ffffff",
    label: "GitHub",
    value: "alfianmutaqin01",
    href: contact.github,
  },
  {
    icon: "bi-instagram",
    color: "#e1306c",
    label: "Instagram",
    value: "@al_fianmutaqin",
    href: contact.instagram,
  },
  {
    icon: "bi-tiktok",
    color: "#ffffff",
    label: "TikTok",
    value: "@al_00209",
    href: contact.tiktok,
  },
];

function Contact() {
  const form = useRef();
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(form.current);
    const message = data.get("message");

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          user_name: data.get("user_name"),
          user_email: data.get("user_email"),
          message: topic ? `[${topic}]\n\n${message}` : message,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          setTopic("");
          form.current.reset();
        },
        (error) => {
          setStatus("error");
          console.error(error.text);
        }
      );
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <div className="contact-page text-white">
      {/* ---------- HEADER ---------- */}
      <section className="pt-5 pb-4">
        <div className="container text-center" data-aos="fade-up">
          <p className="section-eyebrow mb-2">Contact</p>
          <h1 className="display-5 fw-bold mb-3">
            Let's work together <span className="contact-wave">👋</span>
          </h1>
          <p className="section-lead">
            Got a role, a project, or an event that needs an MC? Or just want to
            say hi? Send a message and I'll get back to you.
          </p>
        </div>
      </section>

      <section className="pb-5">
        <div className="container">
          <div className="row g-4">
            {/* ---------- FORM ---------- */}
            <div className="col-lg-7" data-aos="fade-right">
              <div className="contact-card h-100">
                {status === "success" ? (
                  <div className="contact-success">
                    <div className="success-icon">
                      <i className="bi bi-check-lg"></i>
                    </div>
                    <h3 className="fw-bold mb-2">Message sent!</h3>
                    <p className="contact-muted mb-4">
                      Thanks for reaching out. I'll reply to your email as soon
                      as I can.
                    </p>
                    <button
                      type="button"
                      className="contact-ghost"
                      onClick={() => setStatus("idle")}
                    >
                      <i className="bi bi-arrow-counterclockwise me-2"></i>
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form ref={form} onSubmit={sendEmail} className="text-start">
                    <h4 className="fw-bold mb-1">Send me a message</h4>
                    <p className="contact-muted small mb-4">
                      Goes straight to my inbox.
                    </p>

                    <p className="contact-label mb-2">What's it about?</p>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {topics.map(({ label, icon }) => (
                        <button
                          type="button"
                          key={label}
                          className={`topic-chip ${topic === label ? "is-active" : ""}`}
                          aria-pressed={topic === label}
                          onClick={() => setTopic(topic === label ? "" : label)}
                        >
                          <i className={`bi ${icon} me-2`}></i>
                          {label}
                        </button>
                      ))}
                    </div>

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="contact-label mb-2" htmlFor="user_name">
                          Your name
                        </label>
                        <input
                          id="user_name"
                          type="text"
                          name="user_name"
                          className="form-control contact-input"
                          placeholder="Jane Doe"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="contact-label mb-2" htmlFor="user_email">
                          Your email
                        </label>
                        <input
                          id="user_email"
                          type="email"
                          name="user_email"
                          className="form-control contact-input"
                          placeholder="jane@company.com"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label className="contact-label mb-2" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="form-control contact-input"
                          rows="9"
                          placeholder="Tell me a bit about what you have in mind..."
                          required
                        ></textarea>
                      </div>
                    </div>

                    {status === "error" && (
                      <div className="contact-error mt-3" role="alert">
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        Something went wrong while sending. Please try again, or
                        email me directly at {contact.email}.
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn btn-primary custom-hover custom-rounded fw-bold px-4 py-3 mt-4 w-100"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            aria-hidden="true"
                          ></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send-fill me-2"></i>Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* ---------- DIRECT CONTACT ---------- */}
            <div className="col-lg-5" data-aos="fade-left">
              <div className="d-flex flex-column gap-4 h-100">
                <div className="contact-card text-start">
                  <p className="contact-label mb-2">Prefer email?</p>
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                    <a href={`mailto:${contact.email}`} className="contact-email">
                      {contact.email}
                    </a>
                    <button
                      type="button"
                      className="contact-ghost contact-copy"
                      onClick={copyEmail}
                    >
                      <i className={`bi ${copied ? "bi-check2" : "bi-copy"} me-2`}></i>
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                <div className="contact-card text-start flex-grow-1">
                  <p className="contact-label mb-3">Find me elsewhere</p>
                  <div className="d-flex flex-column gap-2">
                    {channels.map((channel) => (
                      <a
                        key={channel.label}
                        href={channel.href}
                        className="channel-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ "--channel-color": channel.color }}
                      >
                        <span className="channel-icon">
                          <i className={`bi ${channel.icon}`}></i>
                        </span>
                        <span className="flex-grow-1">
                          <span className="d-block fw-semibold">{channel.label}</span>
                          <span className="contact-muted small">{channel.value}</span>
                        </span>
                        <i className="bi bi-arrow-up-right channel-arrow"></i>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="contact-card text-start">
                  <div className="d-flex align-items-center gap-3">
                    <span className="channel-icon" style={{ "--channel-color": "#ffc107" }}>
                      <i className="bi bi-geo-alt-fill"></i>
                    </span>
                    <div className="flex-grow-1">
                      <span className="d-block fw-semibold">Karawang, Indonesia</span>
                      <span className="contact-muted small">
                        Where I am based right now
                      </span>
                    </div>
                    <a
                      href={cvUrl}
                      download="CV_Alfian_Mutakim.pdf"
                      className="contact-ghost"
                    >
                      <i className="bi bi-download me-2"></i>CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
