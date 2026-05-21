import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>JnJ Unmatched</h3>
          <p>
            Bringing peace, purity, and intention to every space we touch.
            More than a clean home — a renewed spirit.
          </p>
        </div>

        <div className="footer-col footer-col--links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Book Now</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            (210) 502-9134<br />
            jnjunmatched@gmail.com<br />
            San Antonio and surrounding areas
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} JnJ Unmatched. All Rights Reserved.
      </div>
    </footer>
  )
}
