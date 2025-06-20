import { Link } from "react-router-dom"
import "../styles/Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Aashish Khadka</h3>
              <p>Full Stack Developer</p>
            </div>
            <p className="footer-description">
              Passionate about creating innovative web solutions with modern technologies.
            </p>
            <div className="footer-social">
              <a href="https://github.com/Ashishkdk18" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:ashishkhadka014@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="tel:+9779702505709">
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>
                <span>Web Development</span>
              </li>
              <li>
                <span>Frontend Development</span>
              </li>
              <li>
                <span>Backend Development</span>
              </li>
              <li>
                <span>Full Stack Solutions</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>
                <i className="fas fa-envelope"></i> ashishkhadka014@gmail.com
              </p>
              <p>
                <i className="fas fa-phone"></i> +977 9702505709
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> Itahari, Nepal
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Aashish Khadka. All rights reserved.</p>
          </div>
          <div className="footer-credits">
            <p>Built with React.js & Django</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
