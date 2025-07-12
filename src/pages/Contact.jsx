import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jfmkdw2",
        "template_dzl9t2n",
        form.current,
        "yRgRCuGAC-yyJcY2b"
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-section bg-dark text-white py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-primary fw-bold display-5">
            Let’s Work Together
          </h2>
          <p className="text-light fs-5">
            Feel free to reach me for collaborations or just a friendly hello 👋
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="row g-4">
          <div className="row g-4">
            {/* Form Section */}
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control p-3 rounded-4"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control p-3 rounded-4"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control p-3 rounded-4"
                    rows="6"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary custom-hover px-4 py-3 custom-rounded fw-bold"
                  >
                    <i className="bi bi-send-fill me-2"></i> Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="col-md-4">
              <div className="bg-dark rounded-4 shadow-sm p-4 h-100">
                <ul className="list-unstyled text-start">
                  <li className="d-flex align-items-start mb-4">
                    <i className="bi bi-geo-alt-fill text-warning fs-3 me-3"></i>
                    <div>
                      <h5 className="mb-1 fw-bold">Address</h5>
                      <span>Purwokerto, Indonesia</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <i className="bi bi-instagram text-danger fs-3 me-3"></i>
                    <div>
                      <h5 className="mb-1 fw-bold">Instagram</h5>
                      <span>
                        <a
                          href="https://instagram.com/al_fianmutaqin"
                          className="text-decoration-none text-light"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          @al_fianmutaqin
                        </a>
                      </span>
                    </div>
                  </li>
                  <li className="d-flex align-items-start">
                    <i className="bi bi-whatsapp text-success fs-3 me-3"></i>
                    <div>
                      <h5 className="mb-1 fw-bold">Whats App</h5>
                      <span>
                        <a
                          href="https://wa.me/085117495040"
                          className="text-decoration-none text-light"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          +62 851 1749 5040
                        </a>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
