import { ArrowUpRight } from "lucide-react";

function ProjectCard({
  number,
  icon,
  title,
  type,
  description,
  features,
  tech,
  github,
  projectLink,
}) {
  return (
    <article className="project-card">
      <div className="project-top">
        <div className="project-icon">
          {icon}
        </div>

        <span className="project-number">
          {number}
        </span>
      </div>

      <h2>{title}</h2>

      <p className="project-type">
        {type}
      </p>

      <p className="project-description">
        {description}
      </p>

      <div className="project-features">
        {features.map((feature, index) => (
          <span key={index}>
            {feature}
          </span>
        ))}
      </div>

      <div className="project-tech">
        {tech.map((item, index) => (
          <span key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className="project-actions">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link secondary-project-link"
        >
          GitHub
          <ArrowUpRight size={17} />
        </a>

        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link primary-project-link"
        >
          View Project
          <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;