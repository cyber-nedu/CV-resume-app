import {
  ArrowRight,
  Code2,
  Layout,
  Smartphone,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const strengths = [
  {
    icon: Code2,
    title: 'Clean Development',
    description:
      'I build structured and maintainable interfaces using modern frontend technologies and reusable components.',
  },
  {
    icon: Layout,
    title: 'UI Implementation',
    description:
      'I turn designs and ideas into practical interfaces with attention to layout, spacing, typography and usability.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description:
      'I create interfaces that adapt smoothly across desktop, tablet and mobile devices.',
  },
  {
    icon: Zap,
    title: 'User Experience',
    description:
      'I focus on creating simple, intuitive experiences that make websites easy and enjoyable to use.',
  },
];

const technologies = [
  'React',
  'JavaScript',
  'TypeScript',
  'Next.js',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Git',
];

const About = () => {
  return (
    <main className="about">
      <section className="about-hero">
        <div className="about-container">
          <div className="about-heading">
            <span className="section-label">About me</span>
            <h1>
              Building interfaces that
              <span> make ideas useful.</span>
            </h1>
          </div>

          <div className="about-intro">
            <p>
              I’m Ernest Daniel Chinedu, a Frontend Developer focused on
              building responsive, user-friendly websites and web
              applications.
            </p>

            <p>
              I enjoy taking ideas and turning them into clean, functional
              interfaces. My work focuses on responsive layouts, intuitive
              navigation and creating experiences that feel natural to use.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-container about-story-container">
          <div className="about-story-heading">
            <span className="section-label">My approach</span>
            <h2>Simple, thoughtful and focused on the user.</h2>
          </div>

          <div className="about-story-content">
            <p>
              I approach frontend development by first understanding what a
              website needs to achieve and who will be using it. From there,
              I focus on creating a clear structure and turning that structure
              into a responsive interface.
            </p>

            <p>
              I work primarily with React, JavaScript, TypeScript, Next.js
              and Tailwind CSS. I also use Git and GitHub to manage projects
              and maintain an organized development workflow.
            </p>

            <p>
              Whether I’m building a website from scratch or improving an
              existing project, I care about the details that make an
              interface feel polished and easy to use.
            </p>
          </div>
        </div>
      </section>

      <section className="about-strengths">
        <div className="about-container">
          <div className="about-section-header">
            <div>
              <span className="section-label">What I bring</span>
              <h2>Focused on creating better web experiences.</h2>
            </div>
          </div>

          <div className="strengths-grid">
            {strengths.map((strength) => {
              const Icon = strength.icon;

              return (
                <article className="strength-card" key={strength.title}>
                  <div className="strength-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{strength.title}</h3>

                  <p>{strength.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-technologies">
        <div className="about-container about-technologies-container">
          <div>
            <span className="section-label">Technologies</span>
            <h2>Tools I work with.</h2>
          </div>

          <div className="about-technology-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-container about-cta-container">
          <div>
            <span className="section-label">Let’s work together</span>
            <h2>Have an idea you want to bring to life?</h2>
          </div>

          <Link to="/contact" className="about-cta-button">
            Get in touch
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;