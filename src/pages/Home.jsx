import {
  ArrowRight,
  Mail,
  Code2,
  Database,
} from "lucide-react";


import mayankPhoto from "../assets/images/mayank.png";

function Home() {
  return (
    <section className="home">

      {/* Hero Content */}
      <div className="hero-content">

        <p className="hero-greeting">
          👋 Hi, I'm
        </p>

        <h1>
          Mayank
        </h1>

        <h2>
          Backend Developer
        </h2>

        <p className="hero-description">
          I build practical web applications and backend systems,
          with a growing focus on Python and modern backend technologies.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">

          <a href="/projects" className="primary-btn">
            View My Work
            <ArrowRight size={20} />
          </a>

          <a href="/contact" className="secondary-btn">
            Get In Touch
            <Mail size={19} />
          </a>

        </div>

        {/* Social Links */}
        <div className="social-links">
  <a
    href="https://github.com/mkgtm28"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    GH
  </a>

  

  <a
    href="mailto:mkgtm28@gmail.com"
    aria-label="Email"
  >
    <Mail size={21} />
  </a>
</div>

      </div>


      {/* Hero Image */}
      <div className="hero-image-container">

        <div className="hero-glow"></div>

        <div className="hero-circle"></div>

        <img
          src={mayankPhoto}
          alt="Mayank"
          className="hero-image"
        />

        {/* Node.js Badge */}
        <div className="tech-badge node-badge">
          <Code2 size={22} />
          <span>Node.js</span>
        </div>

        {/* Python Badge */}
        <div className="tech-badge python-badge">
          <span className="python-icon">🐍</span>
          <span>Python</span>
        </div>

        {/* MySQL Badge */}
        <div className="tech-badge mysql-badge">
          <Database size={21} />
          <span>MySQL</span>
        </div>

      </div>

    </section>
  );
}

export default Home;