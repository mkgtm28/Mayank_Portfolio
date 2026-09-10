import {
  Download,
  Mail,
  MapPin,
  Code2,
  Database,
  Server,
} from "lucide-react";

import "./Resume.css";

function Resume() {
  return (
    <main className="resume-page">

      {/* Header */}
      <section className="resume-header">
        <p className="resume-label">MY RESUME</p>

        <h1>
          Mayank 
        </h1>

        <h2>Full Stack Developer | Backend Developer</h2>

        <p className="resume-intro">
          Developer focused on building practical web applications,
          backend systems, and REST APIs, with a growing interest in
          Python, FastAPI, and AI/ML.
        </p>

        <div className="resume-actions">
          <a href="/Mayank_Resume.pdf" className="resume-download" download>
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </section>

      {/* Contact */}
<section className="resume-section">
  <h2 className="resume-section-title">CONTACT</h2>

  <div className="resume-contact-grid">

    <div className="resume-contact-item">
      <Mail size={20} />

      <div>
        <span>Email</span>
        <p>mkgtm28@gmail.com</p>
      </div>
    </div>

    <div className="resume-contact-item">
      <div className="resume-contact-icon">
        GH
      </div>

      <div>
        <span>GitHub</span>
        <a
  href="https://github.com/mkgtm28"
  target="_blank"
  rel="noopener noreferrer"
>
  github.com/mkgtm28
</a>
      </div>
    </div>

    

    <div className="resume-contact-item">
      <MapPin size={20} />

      <div>
        <span>Location</span>
        <p>India</p>
      </div>
    </div>

  </div>
</section>

      {/* Summary */}
      <section className="resume-section">
        <h2 className="resume-section-title">PROFESSIONAL SUMMARY</h2>

        <p className="resume-text">
          I am a developer with a strong interest in full-stack and backend
          development. I enjoy building practical applications using
          JavaScript, Node.js, Express.js, MySQL, and Python. My current
          focus is improving my backend development skills with FastAPI
          while preparing for a future transition into AI and Machine
          Learning.
        </p>
      </section>

      {/* Skills */}
      <section className="resume-section">
        <h2 className="resume-section-title">TECHNICAL SKILLS</h2>

        <div className="resume-skills-grid">

          <div className="resume-skill-card">
            <Code2 size={22} />
            <h3>Frontend</h3>
            <p>
              HTML5, CSS3, JavaScript, React, Responsive Design
            </p>
          </div>

          <div className="resume-skill-card">
            <Server size={22} />
            <h3>Backend</h3>
            <p>
              Node.js, Express.js, Python, FastAPI, REST APIs
            </p>
          </div>

          <div className="resume-skill-card">
            <Database size={22} />
            <h3>Database</h3>
            <p>
              MySQL, SQL, CRUD, Joins, Database Design
            </p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section className="resume-section">
        <h2 className="resume-section-title">PROJECTS</h2>

        <div className="resume-project">

          <div>
            <h3>PartTrack Pro</h3>
            <p className="project-tech">
              QR Inventory Tracking System
            </p>
          </div>

          <p>
            Web-based inventory management system for tracking parts,
            quantities, locations, QR codes, and scan history.
            Built with HTML, CSS, JavaScript, Node.js, Express.js,
            and MySQL.
          </p>

        </div>

        

      </section>

      {/* Education */}
      <section className="resume-section">
        <h2 className="resume-section-title">EDUCATION</h2>

        <div className="education-item">
          <h3>B.Tech | Computer Science and Engineering</h3>
          <p>Delhi Institute of Engineering and Technology | Dr. A.P.J. Abdul Kalam Technical University, Lucknow</p>
          <span>2023 – 2027</span>
        </div>

      </section>

      {/* Career Direction */}
      <section className="resume-focus">

        <p>MY CAREER DIRECTION</p>

        <h2>
          Full Stack → Backend → Python/FastAPI →{" "}
          <span>AI/ML</span>
        </h2>

        <p>
          Continuously learning and building projects to strengthen
          my software development and problem-solving skills.
        </p>

      </section>

    </main>
  );
}

export default Resume;