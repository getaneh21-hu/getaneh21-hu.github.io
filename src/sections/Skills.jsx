
const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "TypeScript",
    "Redux",
    "Next.js",
    "Git",
  ];
  
  const backendSkills = [
    "Java",
    "Spring Boot",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Nginx",
    "Docker",
    "REST APIs",
  ];
  
  function Skills() {
    return (
      <section className="skills-section section" id="skills">
        <div className="skills-header">
          <p className="section-label">02 — MY EXPERTISE</p>
          <h2>Technologies I Work With</h2>
          <p>
            Technologies and tools I use while learning and
            building software applications.
          </p>
        </div>
  
        <div className="skills-groups">
          <div className="skills-group">
            <h3>Frontend Development</h3>
            <div className="skills-grid">
              {frontendSkills.map((skill) => (
                <div className="skill-card" key={skill}>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
  
          <div className="skills-group">
            <h3>Backend Development & Tools</h3>
            <div className="skills-grid">
              {backendSkills.map((skill) => (
                <div className="skill-card" key={skill}>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;
  