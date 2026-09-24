import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Code2,
  ExternalLink,
} from 'lucide-react';

import { Link } from 'react-router-dom';

import './Home.css';

const technologies = [
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Git',
];

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-intro">
              <span className="hero-line"></span>
              <span>Hello, I'm</span>
            </div>

            <h1 className="hero-title">
              Ernest Daniel
              <span>Chinedu</span>
            </h1>

            <h2 className="hero-role">
              Frontend Developer
            </h2>

            <p className="hero-description">
              I build clean, responsive and user-friendly web
              applications using modern frontend technologies.
              I focus on creating interfaces that are simple,
              functional and enjoyable to use.
            </p>

            <div className="hero-location">
              <MapPin size={16} />
              <span>Nigeria</span>
            </div>

            <div className="hero-actions">
              <Link
                to="/projects"
                className="primary-button"
              >
                <span>View My Projects</span>
                <ArrowRight size={18} />
              </Link>

              <a
                href="/resume.pdf"
                className="secondary-button"
                download
              >
                <Download size={17} />
                <span>Download CV</span>
              </a>
            </div>

            <div className="hero-socials">
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
                <Mail size={19} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-window">
              <div className="code-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="code-file">
                  developer.js
                </span>
              </div>

              <div className="code-body">
                <div className="code-line">
                  <span className="code-number">01</span>
                  <span>
                    <span className="code-keyword">
                      const
                    </span>{' '}
                    <span className="code-variable">
                      developer
                    </span>{' '}
                    =
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-number">02</span>
                  <span className="code-indent">
                    {'{'}
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-number">03</span>
                  <span className="code-indent-2">
                    name:{' '}
                    <span className="code-string">
                      'Ernest Daniel'
                    </span>,
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-number">04</span>
                  <span className="code-indent-2">
                    role:{' '}
                    <span className="code-string">
                      'Frontend Developer'
                    </span>,
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-number">05</span>
                  <span className="code-indent-2">
                    skills:
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-number">06</span>
                  <span className="code-indent-3">
                    [
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-number">07</span>
                  <span className="code-indent-4">
                    <span className="code-string">
                      'React'
                    </span>,
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-number">08</span>
                  <span className="code-indent-4">
                    <span className="code-string">
                      'JavaScript'
                    </span>,
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-number">09</span>
                  <span className="code-indent-4">
                    <span className="code-string">
                      'Tailwind CSS'
                    </span>
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-number">10</span>
                  <span className="code-indent-3">
                    ]
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-number">11</span>
                  <span className="code-indent">
                    {'}'}
                  </span>
                </div>

                <div className="code-line">
                  <span className="code-number">12</span>
                  <span>
                    <span className="code-keyword">
                      export default
                    </span>{' '}
                    <span className="code-variable">
                      developer
                    </span>;
                  </span>
                </div>
              </div>

              <div className="code-footer">
                <div className="code-status">
                  <span className="status-dot"></span>
                  <span>Available for work</span>
                </div>

                <Code2 size={17} />
              </div>
            </div>

            <div className="hero-badge">
              <div className="badge-icon">
                <Code2 size={19} />
              </div>

              <div className="badge-content">
                <span>Building</span>
                <strong>Web Experiences</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="technology-section">
        <div className="technology-container">
          <div className="technology-heading">
            <span>Technologies I work with</span>
          </div>

          <div className="technology-list">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="technology-item"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="home-intro">
        <div className="home-intro-container">
          <div className="intro-heading">
            <span className="section-label">
              What I do
            </span>

            <h2>
              Turning ideas into
              <span> usable experiences.</span>
            </h2>
          </div>

          <div className="intro-content">
            <p>
              I enjoy taking ideas and turning them into
              responsive web interfaces that work well across
              different screen sizes.
            </p>

            <Link
              to="/about"
              className="text-link"
            >
              More about me
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-work">
  <div className="featured-work-container">
    <div className="featured-work-header">
      <div>
        <span className="section-label">Selected work</span>
        <h2>Projects built with purpose.</h2>
      </div>

      <Link to="/projects" className="featured-work-link">
        View all projects
        <ArrowRight size={16} />
      </Link>
    </div>

    <div className="featured-work-grid">
      <article className="featured-project">
        <div className="project-image">
          <img
            src="/images/house.jpg"
            alt="Modern Business Website"
          />
        </div>

        <div className="project-content">
          <div className="project-number">01</div>

          <span className="project-category">Web Application</span>

          <h3>Modern Business Website</h3>

          <p>
            A modern real estate website designed to showcase beautiful homes, 
            property details, pricing, and locations with a clean and responsive user experience.
          </p>

          <div className="project-technologies">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>

          <Link to="/projects" className="project-link">
            View project
            <ExternalLink size={15} />
          </Link>
        </div>
      </article>

      <article className="featured-project">
        <div className="project-image">
          <img
            src="/images/fastfood.jpg"
            alt="Responsive Dashboard"
          />
        </div>

        <div className="project-content">
          <div className="project-number">02</div>

          <span className="project-category">Frontend Project</span>

          <h3>Responsive Food Website</h3>

          <p>
            A modern food website designed to showcase delicious meals, explore menus, 
            and make ordering simple with a clean and responsive user experience.
          </p>

          <div className="project-technologies">
            <span>React</span>
            <span>Tailwind CSS</span>
            <span>Git</span>
          </div>

          <Link to="/projects" className="project-link">
            View project
            <ExternalLink size={15} />
          </Link>
        </div>
      </article>
    </div>
  </div>
</section>
    </main>
  );
};

export default Home;