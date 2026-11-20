function Home() {
  return (
    <section className="home-layout" id="home">
      <aside className="profile-card">
        <div className="profile-avatar">GT</div>

        <p className="profile-label">BIOGRAPHY</p>
        <h2 className="profile-name">Getaneh</h2>
        <p className="profile-bio">
          Hey there! I'm Getaneh, a University Student and
          Full-Stack Developer. I love turning ideas into
          practical software solutions.
        </p>

        <div className="profile-divider" />

        <p className="profile-label">SERVICES</p>
        <ul className="service-list">
          <li>Full-Stack Web Development</li>
          <li>Custom Software Development</li>
          <li></li>
        </ul>

        <div className="profile-divider" />

        <p className="profile-label">CONTACT</p>
        <p className="profile-contact">
          <span>LOCATION</span>
          Ethiopia
        </p>
        <p className="profile-contact">
          <span>GIT_HUB</span>
          getaneh21-hu
        </p>

        <a
          className="profile-github"
          href="https://github.com/getaneh21-hu"
          target="_blank"
          rel="noreferrer"
        >
          For More Visit GitHub  ↗
        </a>
      </aside>

      <div className="home-main">
        <p className="section-label">WELCOME TO MY PORTFOLIO</p>
        <p className="home-greeting">Hello, I'm Getaneh 👋</p>

        <h1>
          Full-Stack Developer
          <br />
          <span>Building ideas into reality.</span>
        </h1>

        <p className="home-description">
          I'm a University Student passionate about software
          engineering, problem-solving and modern web development.
          I build full-stack applications, backend services and
          management systems using modern technologies.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            Explore My Projects ↗
          </a>
          <a className="secondary-button" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="home-stats">
          <div>
            <strong>03+</strong>
            <span>Featured Projects</span>
          </div>
          <div>
            <strong>08+</strong>
            <span>Technologies</span>
          </div>
          <div>
            <strong>01</strong>
            <span>Developer Journey</span>
          </div>
        </div>

        <div className="home-tech">
          <span>MY TECHNOLOGIES</span>
          <div>
            <b>Java</b>
            <b>Spring Boot</b>
            <b>React</b>
            <b>PostgreSQL</b>
            <b>Docker</b>
            <b>Typescript</b>
            <b>Next Js</b>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;