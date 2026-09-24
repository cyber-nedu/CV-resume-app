import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <main className="contact">
      <section className="contact-hero">
        <div className="contact-container contact-hero-container">
          <div className="contact-intro">
            <span className="section-label">Get in touch</span>

            <h1>
              Let's build something
              <span> useful together.</span>
            </h1>

            <p>
              Have a project in mind, need a frontend developer, or simply want
              to talk about an idea? I'd be happy to hear from you.
            </p>

            <div className="contact-details">
              <a
                href="mailto:chinedu.daniel.ernest@gmail.com"
                className="contact-detail"
              >
                <span className="contact-detail-icon">
                  <Mail size={18} />
                </span>

                <span>
                  <small>Email</small>
                  <strong>chinedu.daniel.ernest@gmail.com</strong>
                </span>
              </a>

              <a
                href="https://wa.me/2349129449905"
                target="_blank"
                rel="noreferrer"
                className="contact-detail"
              >
                <span className="contact-detail-icon">
                  <Phone size={18} />
                </span>

                <span>
                  <small>Phone / WhatsApp</small>
                  <strong>+234 9129449905</strong>
                </span>
              </a>

              <div className="contact-detail">
                <span className="contact-detail-icon">
                  <MapPin size={18} />
                </span>

                <span>
                  <small>Location</small>
                  <strong>Nigeria</strong>
                </span>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/cyber-nedu"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-square-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-form-glow"></div>

            <div className="contact-form-header">
              <span>Start a conversation</span>
              <p>Tell me a little about what you're working on.</p>
            </div>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What can I help you with?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                Send message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-location">
        <div className="contact-container">
          <div className="location-header">
            <div>
              <span className="section-label">Where I am</span>
              <h2>Based in Nigeria.</h2>
            </div>

            <p>
              Available for remote projects and opportunities with clients
              locally and internationally.
            </p>
          </div>

          <div className="map-wrapper">
            <iframe
              title="Location in Nigeria"
              src="https://www.google.com/maps?q=Nigeria&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-container contact-cta-container">
          <div>
            <span className="section-label">Available for work</span>
            <h2>Have an idea worth building?</h2>
          </div>

          <a href="mailto:chinedu.daniel.ernest@gmail.com">
            Email me
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;