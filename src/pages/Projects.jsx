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
        <ProjectCard
          number="02"
          icon={<UserCheck size={28} />}
          title="Personal Portfolio"
          type="Developer Portfolio"
          description="A responsive personal portfolio website showcasing my skills, projects, and experience as a developer."
          features={[
            "Responsive Design",
            "Modern UI/UX",
            "Contact Form",
            "Project Showcase",
          ]}
          tech={[
            "React",
            "CSS",
            "JavaScript",
          ]}
          github="https://github.com/mkgtm28/Mayank_Portfolio"
          projectLink="https://mayank-portfolio-pearl.vercel.app"
        />
        <ProjectCard
          number="03"
          icon={<QrCode size={28} />}
          title="ShopEase"
          type="Online Shopping Website"
          description="A full-featured e-commerce platform that allows users to browse products, add items to their cart, and complete purchases securely."
          features={[
            "Product Browsing",
            "Shopping Cart",
            "Secure Checkout",
            "User Accounts",
          ]}
          tech={[
            "React",
            "CSS",
            "JavaScript",
            "Node.js",
            "Django",
            "MySQL",
          ]}
          github="https://github.com/mkgtm28/E-Commerce-Platform"
          projectLink="https://github.com/mkgtm28/E-Commerce-Platform"
        />
        <ProjectCard
          number="04"
          icon={<QrCode size={28} />}
          title="SMRM_project"
          type="Group Project"
          description="A collaborative project developed with a team to showcase our skills in web development and project management."
          features={[
            "Task Management",
            "Communication Tools",
            "Progress Tracking",
            "File Sharing",
          ]}
          tech={[
            "React",
            "CSS",
            "JavaScript",
          ]}
          github="https://github.com/mkgtm28/SMRM_project"
          projectLink="https://github.com/mkgtm28/SMRM_project"
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