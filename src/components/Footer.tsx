import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo />

            <p>
              Frontend developer focused on building responsive, accessible
              and useful web experiences.
            </p>

            <div className="footer-socials">
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

              <a
                href="mailto:chinedu.daniel.ernest@gmail.com"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>

            <nav className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>

            <div className="footer-contact">
              <a href="mailto:chinedu.daniel.ernest@gmail.com">
                <Mail size={16} />
                <span>chinedu.daniel.ernest@gmail.com</span>
              </a>

              <a
                href="https://wa.me/2349129449905"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <span>+234 912 944 9905</span>
              </a>

              <div>
                <MapPin size={16} />
                <span>Nigeria</span>
              </div>
            </div>
          </div>

          <div className="footer-column footer-availability">
            <h3>Stay in the loop</h3>

            <p>
              Get occasional updates, new projects and frontend insights.
            </p>

            <form className="footer-newsletter">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                aria-label="Email address"
              />

              <button type="submit" aria-label="Subscribe">
                <ArrowUpRight size={16} />
              </button>
            </form>

            <Link to="/contact" className="footer-cta">
              Start a conversation
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Ernest Daniel. All rights reserved.</p>
          <span>Designed & built with React</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;