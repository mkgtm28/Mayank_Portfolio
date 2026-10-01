
import "./TechMarquee.css";

const technologies = [
  { name: "HTML5", symbol: "5", color: "#f97316" },
  { name: "CSS3", symbol: "3", color: "#3b82f6" },
  { name: "JavaScript", symbol: "JS", color: "#facc15" },
  { name: "React", symbol: "⚛", color: "#61dafb" },
  { name: "Node.js", symbol: "N", color: "#68a063" },
  { name: "Express.js", symbol: "Ex", color: "#e2e8f0" },
  { name: "Python", symbol: "Py", color: "#60a5fa" },
  { name: "MySQL", symbol: "SQL", color: "#38bdf8" },
  { name: "FastAPI", symbol: "F", color: "#34d399" },
  { name: "Git", symbol: "G", color: "#f97316" },
];

function TechMarquee() {
  return (
    <section className="tech-marquee" aria-label="Technologies I use">
      <p className="tech-marquee-label">TECHNOLOGIES I WORK WITH</p>

      <div className="tech-marquee-track">
        {[0, 1].map((group) => (
          <div
            className="tech-marquee-group"
            key={group}
            aria-hidden={group === 1}
          >
            {technologies.map((tech) => (
              <div className="tech-card" key={tech.name}>
                <span
                  className="tech-symbol"
                  style={{ "--tech-color": tech.color }}
                >
                  {tech.symbol}
                </span>

                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechMarquee;