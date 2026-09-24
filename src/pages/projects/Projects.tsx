import {
  ArrowUpRight,
  ExternalLink,
  } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    number: '01',
    category: 'Food & Restaurant',
    title: 'Food Website',
    description:
      'A modern food website designed to showcase meals, explore menus and make ordering simple through a clean and responsive interface.',
    image: '/images/eatry.jpg',
    technologies: ['React', 'JavaScript', 'CSS'],
    liveUrl: 'https://foodhub-official.vercel.app',
    githubUrl: 'https://github.com/cyber-nedu',
  },
  {
    number: '02',
    category: 'Real Estate',
    title: 'Modern House Website',
    description:
      "A modern farm website designed to showcase fresh agricultural products, connect customers with local farmers, and make it easy to explore and purchase quality farm produce.",
    image: '/images/house2.jpg',
    technologies: ['React', 'JavaScript', 'CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/cyber-nedu',
  },
  {
    number: '03',
    category: 'Farm Website',
    title: 'Poultry Farm Website',
    description:
      "A responsive housing website designed to help users explore properties, view details, compare options, and find homes through a clean and intuitive interface.",
    image: '/images/farm.jpg',
    technologies: ['React', 'Tailwind CSS', 'Git'],
    liveUrl: '#',
    githubUrl: 'https://github.com/cyber-nedu',
  },
];

const Projects = () => {
  return (
    <main className="projects">
      <section className="projects-hero">
  <div className="projects-container projects-hero-container">
    <div className="projects-hero-content">
      <span className="section-label">My projects</span>

      <h1>
        Work that turns
        <span> ideas into experiences.</span>
      </h1>

      <p>
        A selection of websites and frontend projects I have built while
        developing my skills in modern web development.
      </p>
    </div>

    <div className="projects-hero-visual">
      <div className="project-showcase">
        <div className="showcase-header">
          <div className="showcase-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span className="showcase-file">projects.jsx</span>

          <span className="showcase-status">WORK</span>
        </div>

        <div className="showcase-body">
          <div className="showcase-line">
            <span className="showcase-number">01</span>
            <span>
              <span className="code-keyword">const</span>{' '}
              <span className="code-variable">projects</span> = [
            </span>
          </div>

          <div className="showcase-line showcase-indent">
            <span className="showcase-number">02</span>
            <span>
              {'{ '}
              <span className="code-variable">name</span>:{' '}
              <span className="code-string">"FoodHub"</span>,
            </span>
          </div>

          <div className="showcase-line showcase-indent-2">
            <span className="showcase-number">03</span>
            <span>
              <span className="code-variable">type</span>:{' '}
              <span className="code-string">"Web Application"</span>,
            </span>
          </div>

          <div className="showcase-line showcase-indent-2">
            <span className="showcase-number">04</span>
            <span>
              <span className="code-variable">stack</span>:{' '}
              <span className="code-string">"React"</span>
            </span>
          </div>

          <div className="showcase-line showcase-indent">
            <span className="showcase-number">05</span>
            <span>{'}'},</span>
          </div>

          <div className="showcase-line showcase-indent">
            <span className="showcase-number">06</span>
            <span>
              {'{ '}
              <span className="code-variable">name</span>:{' '}
              <span className="code-string">"House Website"</span>,
            </span>
          </div>

          <div className="showcase-line showcase-indent-2">
            <span className="showcase-number">07</span>
            <span>
              <span className="code-variable">type</span>:{' '}
              <span className="code-string">"Real Estate"</span>,
            </span>
          </div>

          <div className="showcase-line showcase-indent-2">
            <span className="showcase-number">08</span>
            <span>
              <span className="code-variable">responsive</span>:{' '}
              <span className="code-keyword">true</span>
            </span>
          </div>

          <div className="showcase-line showcase-indent">
            <span className="showcase-number">09</span>
            <span>{'}'},</span>
          </div>

          <div className="showcase-line">
            <span className="showcase-number">10</span>
            <span>];</span>
          </div>
        </div>

        <div className="showcase-footer">
          <div>
            <span className="showcase-dot"></span>
            Available for projects
          </div>

          <span>3 projects</span>
        </div>
      </div>

      <div className="projects-floating-card">
        <div className="floating-card-icon">
          <ArrowUpRight size={18} />
        </div>

        <div>
          <span>Latest work</span>
          <strong>FoodHub</strong>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="projects-list">
        <div className="projects-container">
          <div className="projects-header">
            <div>
              <span className="section-label">Selected work</span>
              <h2>Projects with purpose.</h2>
            </div>

            <span className="projects-count">
              {projects.length.toString().padStart(2, '0')} projects
            </span>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />

                  <span className="project-number">
                    {project.number}
                  </span>
                </div>

                <div className="project-card-content">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-live-link"
                    >
                      Live project
                      <ArrowUpRight size={16} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-github-link"
                      aria-label={`${project.title} GitHub repository`}
                    >
                     <i className='fa-brands fa-github'></i>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="project-evidence">
        <div className="projects-container">
          <div className="evidence-header">
            <span className="section-label">Evidence of work</span>

            <h2>See the work, not just the description.</h2>

            <p>
              Each project is supported by a visual preview so visitors can
              see the interface and understand the type of work I build.
            </p>
          </div>

          <div className="evidence-grid">
            {projects.map((project) => (
              <div className="evidence-item" key={project.title}>
                <div className="evidence-image">
                  <img src={project.image} alt={`${project.title} preview`} />
                </div>

                <div className="evidence-info">
                  <span>{project.number}</span>
                  <h3>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-cta">
        <div className="projects-container projects-cta-container">
          <div>
            <span className="section-label">Have a project?</span>
            <h2>Let's build something useful.</h2>
          </div>

          <a href="mailto:chinedu.daniel.ernest@gmail.com">
            Start a conversation
            <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Projects;