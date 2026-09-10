import {
  Code2,
  Server,
  Database,
  Wrench,
  Brain,
} from "lucide-react";

import "./Skills.css";

function Skills() {
  return (
    <main className="skills-page">

      {/* HEADER */}
      <section className="skills-header">

        <p className="section-label">MY SKILLS</p>

        <h1>
          Tools I use to <span>build.</span>
        </h1>

        <p>
          My current technical skills are focused on full-stack
          development, backend engineering and building practical
          database-driven applications.
        </p>

      </section>


      {/* SKILL CARDS */}
      <section className="skills-grid">

        {/* FRONTEND */}
        <div className="skill-card">

          <div className="skill-icon">
            <Code2 size={25} />
          </div>

          <h2>Frontend</h2>

          <p>
            Technologies I use to create responsive and
            user-friendly interfaces.
          </p>

          <div className="skill-tags">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Responsive Design</span>
          </div>

        </div>


        {/* BACKEND */}
        <div className="skill-card featured-skill">

          <div className="skill-icon">
            <Server size={25} />
          </div>

          <h2>Backend</h2>

          <p>
            Building APIs, server-side applications and backend
            systems.
          </p>

          <div className="skill-tags">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>Python</span>
            <span>FastAPI</span>
            <span>REST APIs</span>
          </div>

        </div>


        {/* DATABASE */}
        <div className="skill-card">

          <div className="skill-icon">
            <Database size={25} />
          </div>

          <h2>Database</h2>

          <p>
            Working with relational databases and
            application data.
          </p>

          <div className="skill-tags">
            <span>MySQL</span>
            <span>SQL</span>
            <span>CRUD</span>
            <span>Joins</span>
            <span>Database Design</span>
          </div>

        </div>


        {/* TOOLS */}
        <div className="skill-card">

          <div className="skill-icon">
            <Wrench size={25} />
          </div>

          <h2>Tools</h2>

          <p>
            Tools and development environments I use during
            development.
          </p>

          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Thunder</span>
            <span>MySQL Workbench</span>
            <span>npm</span>
          </div>

        </div>


        {/* AI / ML */}
        <div className="skill-card learning-card">

          <div className="skill-icon">
            <Brain size={25} />
          </div>

          <h2>AI / ML</h2>

          <p>
            Currently building the foundation for my future
            AI and Machine Learning journey.
          </p>

          <div className="skill-tags">
            <span>Python</span>
            <span>NumPy</span>
            <span>Pandas</span>
            <span>Matplotlib</span>
            <span>Scikit-Learn</span>
            <span>Machine Learning</span>
            <span>Currently Learning</span>
          </div>

        </div>

      </section>


      {/* SKILL LEVEL */}
      <section className="skill-level-section">

        <div className="skill-level-content">

          <p className="section-label">MY APPROACH</p>

          <h2>
            Learn it. <span>Build it.</span> Improve it.
          </h2>

          <p>
            I believe the best way to learn development is by
            building real projects. Instead of focusing only on
            tutorials, I try to apply what I learn to practical
            applications and solve real problems.
          </p>

          <div className="learning-status">

            <div>
              <strong>Comfortable</strong>
              <span>Technologies I regularly work with</span>
            </div>

            <div>
              <strong>Growing</strong>
              <span>Technologies I'm actively improving</span>
            </div>

            <div>
              <strong>Learning</strong>
              <span>Areas I'm preparing to explore deeply</span>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Skills;