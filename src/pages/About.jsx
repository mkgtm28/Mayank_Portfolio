import {
  Code2,
  Server,
  Database,
  Brain,
  ArrowRight,
} from "lucide-react";

import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">

        <div className="about-heading">
          <p className="section-label">ABOUT ME</p>

          <h1>
            Building with <span>purpose.</span>
          </h1>

          <p className="about-intro">
            I'm Mayank Gautam, a developer interested in building
            practical, reliable and user-friendly applications.
            My journey started with web development and has gradually
            moved toward backend development, Python and modern
            backend technologies.
          </p>
        </div>

      </section>


      {/* STORY */}
      <section className="about-story">

        <div className="story-text">

          <p className="section-label">MY STORY</p>

          <h2>
            From writing code to <span>building systems.</span>
          </h2>

          <p>
            I started my development journey by learning the
            fundamentals of web development and gradually moved
            toward full-stack application development.
          </p>

          <p>
            While building projects, I became increasingly interested
            in what happens behind the interface — APIs, databases,
            authentication, server-side logic and how different parts
            of an application communicate with each other.
          </p>

          <p>
            This led me to focus more on backend development using
            technologies such as Node.js, Express.js, MySQL and Python.
          </p>

          <p>
            My current direction is to strengthen my backend skills
            with Python and FastAPI and eventually move deeper into
            Artificial Intelligence and Machine Learning.
          </p>

        </div>


        {/* QUICK INFO */}
        <div className="about-card">

          <div className="about-card-icon">
            <Code2 size={26} />
          </div>

          <h3>What I enjoy building</h3>

          <ul>
            <li>Web applications</li>
            <li>Backend systems</li>
            <li>REST APIs</li>
            <li>Database-driven applications</li>
            <li>Automation & practical tools</li>
          </ul>

        </div>

      </section>


      {/* JOURNEY */}
      <section className="journey-section">

        <div className="section-title-center">
          <p className="section-label">MY JOURNEY</p>

          <h2>
            Learning, building, <span>growing.</span>
          </h2>
        </div>


        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot">
              <Code2 size={18} />
            </div>

            <div className="timeline-content">
              <span>01</span>
              <h3>Programming & Web Fundamentals</h3>
              <p>
                Started learning programming concepts and the
                fundamentals of building websites and web applications.
              </p>
            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-dot">
              <Server size={18} />
            </div>

            <div className="timeline-content">
              <span>02</span>
              <h3>Full-Stack Development</h3>
              <p>
                Built applications using HTML, CSS, JavaScript, React.js,
                Node.js, Express.js and MySQL while learning how
                frontend and backend systems work together.
              </p>
            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-dot">
              <Database size={18} />
            </div>

            <div className="timeline-content">
              <span>03</span>
              <h3>Backend Development</h3>
              <p>
                Began focusing more deeply on APIs, authentication,
                databases, server-side logic and building reliable
                backend systems.
              </p>
            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-dot">
              <Brain size={18} />
            </div>

            <div className="timeline-content">
              <span>04</span>
              <h3>Python, FastAPI & AI/ML</h3>
              <p>
                Continuing to strengthen Python and FastAPI while
                preparing for the next stage of the journey into
                Artificial Intelligence and Machine Learning.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CURRENT FOCUS */}
      <section className="focus-section">

        <div className="focus-content">

          <p className="section-label">CURRENT FOCUS</p>

          <h2>
            What's next?
          </h2>

          <p>
            I'm currently focused on becoming a stronger backend
            developer while expanding my Python skills. My long-term
            goal is to combine strong software engineering fundamentals
            with AI and Machine Learning.
          </p>

          <a href="/skills" className="focus-btn">
            Explore My Skills
            <ArrowRight size={18} />
          </a>

        </div>

      </section>

    </main>
  );
}

export default About;