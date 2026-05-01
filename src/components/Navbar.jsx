import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from '../assets/image.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
        <img src={logoImg} alt="JnJ Unmatched" className="navbar-logo-img" />
      </NavLink>

      <ul className={`navbar-links${open ? ' open' : ''}`}>
        <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink></li>
        <li><NavLink to="/contact" className="navbar-cta" onClick={() => setOpen(false)}>Book Now</NavLink></li>
      </ul>

      <button
        className="navbar-hamburger"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
