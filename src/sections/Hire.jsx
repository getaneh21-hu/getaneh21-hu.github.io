import "../styles/Hire.css";

function Hire() {
  return (
    <section className="hire" id="hire">
      <p className="section-label">AVAILABLE FOR WORK</p>
      <h2>Let's Work Together</h2>
      <p className="hire-intro">
        I'm open to freelance projects and app development work.
        Tell me your idea and I'll help build it.
      </p>

      <div className="hire-grid">
        <div className="hire-card">
          <h3>Freelance Work</h3>
          <p>Websites, web apps, and management systems built for your business or idea.</p>
        </div>
        <div className="hire-card">
          <h3>App Development</h3>
          <p>Full-stack apps with React, Spring Boot, and PostgreSQL, from design to launch.</p>
        </div>
      </div>

      <a className="primary-button" href="#contact">
        Hire Me ↗
      </a>
    </section>
  );
}

export default Hire;