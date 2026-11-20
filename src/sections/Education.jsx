
const learningResources = [
    {
      category: "Frontend Development",
      resources: [
        {
          name: "freeCodeCamp",
          description: "Free coding lessons and practical projects.",
          url: "https://www.freecodecamp.org/",
        },
        {
          name: "MDN Web Docs",
          description: "HTML, CSS, JavaScript and web development.",
          url: "https://developer.mozilla.org/en-US/docs/Learn",
        },
        {
          name: "React Documentation",
          description: "Learn React through official tutorials.",
          url: "https://react.dev/learn",
        },
      ],
    },
    {
      category: "Backend Development",
      resources: [
        {
          name: "Java Learning",
          description: "Java programming tutorials and learning paths.",
          url: "https://dev.java/learn/",
        },
        {
          name: "Spring Guides",
          description: "Practical Spring Boot and backend tutorials.",
          url: "https://spring.io/guides",
        },
      ],
    },
    {
      category: "Databases & DevOps",
      resources: [
        {
          name: "PostgreSQL Tutorial",
          description: "Learn relational databases and SQL.",
          url: "https://www.postgresql.org/docs/current/tutorial.html",
        },
        {
          name: "Docker Get Started",
          description: "Learn containers and Docker fundamentals.",
          url: "https://docs.docker.com/get-started/",
        },
      ],
    },
  ];
  
  function Education() {
    return (
      <section className="education-section section" id="education">
        <div className="education-header">
          <p className="section-label">04 — EDUCATION & LEARNING</p>
          <h2>Learning Never Stops.</h2>
          <p>
            My academic journey, independent learning, and
            the resources helping me grow as a developer.
          </p>
        </div>
  
        <div className="education-content">
          <div className="education-card">
            <span className="education-number">01</span>
            <div>
              <p className="education-type">ACADEMIC EDUCATION</p>
              <h3>University Studies</h3>
              <p>
                Currently pursuing university studies while
                developing my knowledge, critical thinking,
                and problem-solving skills.
              </p>
              <span className="education-status">
                Currently Studying
              </span>
            </div>
          </div>
  
          <div className="education-card">
            <span className="education-number">02</span>
            <div>
              <p className="education-type">SELF-DIRECTED LEARNING</p>
              <h3>Independent Learning</h3>
              <p>
                Expanding my technical knowledge through online
                tutorials, official documentation, programming
                practice, and hands-on software projects.
              </p>
              <span className="education-status">
                Continuous Learning
              </span>
            </div>
          </div>
        </div>
  
        <div className="learning-resources">
          <p className="section-label">MY LEARNING RESOURCES</p>
          <h3>Knowledge From Everywhere.</h3>
  
          <div className="resource-groups">
            {learningResources.map((group) => (
              <div className="resource-group" key={group.category}>
                <h4>{group.category}</h4>
  
                <div className="resource-list">
                  {group.resources.map((resource) => (
                    <a
                      className="resource-card"
                      href={resource.url}
                      target="_blank"
                      rel="noreferrer"
                      key={resource.name}
                    >
                      <div>
                        <h5>{resource.name}</h5>
                        <p>{resource.description}</p>
                      </div>
                      <span>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Education;
  