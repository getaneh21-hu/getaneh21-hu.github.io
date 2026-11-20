import "../styles/Freelance.css";

const work = [
  {
    title: "Your App Name",
    type: "App",
    description: "One or two lines about what the app does and who it is for.",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    link: "https://your-app-link.com",
  },
  {
    title: "Client or Project Name",
    type: "Freelance",
    description: "What you built for the client and the result.",
    tech: ["React", "Node.js"],
    link: "",
  },
];

function Freelance() {
  return (
    <section className="freelance" id="freelance">
      <p className="section-label">APPS &amp; FREELANCE</p>
      <h2>Apps &amp; Freelance Work</h2>

      <div className="work-grid">
        {work.map((item) => (
          <div className="work-card" key={item.title}>
            <span className="work-type">{item.type}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="work-tech">
              {item.tech.map((t) => (
                <b key={t}>{t}</b>
              ))}
            </div>
            {item.link && (
              <a href={item.link} target="_blank" rel="noreferrer">
                View ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Freelance;