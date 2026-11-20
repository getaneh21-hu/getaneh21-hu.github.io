
function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <a href="#home" className="footer-logo">
            GT<span>.</span>
          </a>
  
          <p>
            Building ideas into reality through code,
            creativity, and continuous learning.
          </p>
  
          <a
            href="https://github.com/getaneh21-hu"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
  
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Getaneh.</span>
          <span>Designed & Built with React.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  