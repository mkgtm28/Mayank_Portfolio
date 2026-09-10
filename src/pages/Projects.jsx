import {
  QrCode,
  UserCheck,
  ArrowUpRight,
} from "lucide-react";

import "./Projects.css";

function Projects() {
  return (
    <main className="projects-page">

      {/* HEADER */}
      <section className="projects-header">
        <p className="section-label">MY PROJECTS</p>

        <h1>
          Things I've <span>built.</span>
        </h1>

        <p>
          A selection of practical projects where I applied my
          development skills to solve real-world problems.
        </p>
      </section>


      {/* PROJECTS */}
      <section className="projects-grid">

        {/* PARTTRACK PRO */}
        <article className="project-card">

          <div className="project-top">

            <div className="project-icon">
              <QrCode size={28} />
            </div>

            <span className="project-number">
              01
            </span>

          </div>

          <h2>PartTrack Pro</h2>

          <p className="project-type">
            QR Inventory Tracking System
          </p>

          <p className="project-description">
            A web-based inventory management system designed to
            track parts using QR codes. The system manages parts,
            quantities, locations and  history through a
            centralized backend.
          </p>

          <div className="project-features">
            <span>QR Code Tracking</span>
            <span>Inventory Management</span>
            <span>Manage History</span>
            <span>REST API</span>
          </div>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MySQL</span>
          </div>

          <div className="project-actions">

  <a
  href="https://github.com/mkgtm28/PartTrack-Pro"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link secondary-project-link"
>
  GitHub
  <ArrowUpRight size={17} />
</a>

  <a
  href="https://github.com/mkgtm28/PartTrack-Pro"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link primary-project-link"
>
  View Project
  <ArrowUpRight size={17} />
</a>

</div>

        </article>


        

      </section>


      {/* MORE PROJECTS */}
      <section className="more-projects">

        <p className="section-label">MORE TO COME</p>

        <h2>
          I'm still <span>building.</span>
        </h2>

        <p>
          More projects will be added as I continue exploring
          backend development, Python, FastAPI and eventually
          Artificial Intelligence and Machine Learning.
        </p>

      </section>

    </main>
  );
}

export default Projects;