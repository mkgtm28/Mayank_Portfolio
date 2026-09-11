import {
  QrCode,
  UserCheck,
} from "lucide-react";

import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <main className="projects-page">

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

      <section className="projects-grid">

        <ProjectCard
          number="01"
          icon={<QrCode size={28} />}
          title="PartTrack Pro"
          type="QR Inventory Tracking System"
          description="A web-based inventory management system designed to track parts using QR codes. The system manages parts, quantities, locations, and scan history through a centralized backend."
          features={[
            "QR Code Tracking",
            "Inventory Management",
            "Manage History",
            "REST API",
          ]}
          tech={[
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MySQL",
          ]}
          github="https://github.com/mkgtm28/PartTrack-Pro"
          projectLink="https://github.com/mkgtm28/PartTrack-Pro"
        />

      </section>

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