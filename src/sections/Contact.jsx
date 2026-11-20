
function Contact() {
    return (
      <section className="contact-section section" id="contact">
        <div className="contact-header">
          <p className="section-label">05 — GET IN TOUCH</p>
          <h2>Let's Build Something Together.</h2>
          <p>
            Have a project idea, collaboration opportunity,any online work
            or just want to connect? Feel free to reach out or call out me.
          </p>
        </div>
  
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm interested in software development,
              technology, collaboration, and new learning
              opportunities.
            </p>
  
            <a className="contact-link" href="mailto:getatarkie@gmail.com">
              <span>Email</span>
              <span>getatarkie@gmail.com ↗</span>
            </a>
  
            <a className="contact-link" href="tel:0964422831">
              <span>Phone</span>
              <span>0964422831 ↗</span>
            </a>
  
            <a
              href="https://github.com/getaneh21-hu"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>GitHub</span>
              <span>getaneh21-hu ↗</span>
            </a>
  
            <div className="contact-link">
              <span>Location</span>
              <span>Ethiopia</span>
            </div>
          </div>
  
          <div className="contact-message">
            <p className="contact-message-label">HAVE AN IDEA?</p>
            <h3>Let's turn your ideas into reality.</h3>
            <a
              href="mailto:getatarkie@gmail.com"
              className="primary-button"
            >
              Send Me an Email ↗
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
  