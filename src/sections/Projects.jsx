
const projects = [
    {
      number: "01",
      title: "IT Asset Tracker",
      category: "Asset Management System",
      description:
        "A full-stack application for managing IT equipment, tracking assignments, monitoring maintenance, and maintaining asset history.",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Docker"],
      status: "In Development",
    },

    {
      number: "02",
      title: "ServiceHub",
      category: "Service Management Platform",
      description:
        "A service management platform designed to organize service operations and support efficient business workflows.",
      technologies: ["React", "Java", "Spring Boot", "Docker"],
      status: "In Development",
    },
    {
      number: "03",
      title: "Employee Management System",
      category: "Human Resource Management",
      description:
        "A full-stack employee management application for managing employee records, departments, authentication, and employee information with secure data storage.",
      technologies: [
        "Java 21",
        "Spring Boot",
        "React",
        "PostgreSQL",
        "Docker",
      ],
      status: "In Development",
    },
  ];
  
  function Projects() {
    return (
      <section className="projects-section section" id="projects">
        <div className="projects-header">
          <p className="section-label">03 — SELECTED WORK</p>
          <h2>Projects I've Been Building</h2>
          <p>
            A selection of software projects I'm developing and
            exploring through practical experience.
          </p>
        </div>
  
        <div className="projects-grid">
          {projects.slice(0, 3).map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span>{project.number}</span>
                <span className="project-status">{project.status}</span>
              </div>
  
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
  
              <p className="project-description">
                {project.description}
              </p>
  
              <div className="project-tech">
                {project.technologies.slice(0, 3).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
  
          {projects.length > 3 && (
            <article className="project-card project-more">
              <h3>+{projects.length - 3} more</h3>
              <p>More projects coming soon.</p>
            </article>
          )}
        </div>
      </section>
    );
  }
  
  export default Projects;
  