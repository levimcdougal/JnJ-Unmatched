import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.png'
import flowerImg from '../assets/flower.png'
import moneyImg from '../assets/money.png'
import candleImg from '../assets/candle.png'
import clipImg from '../assets/clip.png'
import broomImg from '../assets/broom.png'
import dimondImg from '../assets/dimond.png'

const serviceHighlights = [
  {
    img: candleImg,
    title: 'Spiritual Cleanings',
    desc: 'Deep energetic cleansing with incense, aromatherapy, and intention-setting to restore harmony and peace to your space.',
  },
  {
    img: broomImg,
    title: 'Residential Cleaning',
    desc: 'Thorough, reliable home cleaning that leaves every surface spotless and every room feeling fresh and renewed.',
  },
  {
    img: clipImg,
    title: 'Errands',
    desc: 'Let us handle your to-do list — grocery runs, pickups, drop-offs, and more — so you can focus on what truly matters.',
  },
]

const whyUs = [
  {
    img: dimondImg,
    title: 'Intentional & Trustworthy',
    desc: 'Every job is done with care, respect, and a deep sense of purpose. We treat your home as sacred space.',
  },
  {
    img: flowerImg,
    title: 'Reliable & On Time',
    desc: 'We show up when we say we will — consistent, dependable, and always prepared to do our best work.',
  },
  {
    img: moneyImg,
    title: 'Honest Pricing',
    desc: "Clear, upfront pricing with no hidden fees. You deserve to know exactly what you're paying for.",
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <div className="hero-content">
          <h1>
            Find Your Peace.<br />
            <span>Purify Your Space.</span>
          </h1>
          <p>
            JnJ Unmatched brings intention and tranquility into every corner
            of your home — spiritual cleanings, organized errands, and regular care
            that restores your environment and your spirit.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">Book a Cleaning</Link>
            <Link to="/services" className="btn-secondary">Our Services</Link>
          </div>
          <p className="hero-location">Serving San Antonio, TX &amp; surrounding areas</p>
        </div>

        <div className="hero-symbol">
          <img src={logoImg} alt="JnJ Unmatched" className="hero-logo-img" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="section-header">
<h2>Cleaning With Purpose & Care</h2>
          <p>We don't just clean spaces — we restore peace and harmony to the places you call home.</p>
        </div>
        <div className="why-grid">
          {whyUs.map((item) => (
            <div className="why-card" key={item.title}>
              <div className="why-icon">
                {item.img
                  ? <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  : <span>{item.symbol}</span>}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="section-header">
<h2>Services for Your Body, Home & Spirit</h2>
          <p>Three focused offerings — each designed to bring more peace and clarity into your life.</p>
        </div>
        <div className="services-preview-grid services-preview-grid--3">
          {serviceHighlights.map((s) => (
            <div className="service-preview-card" key={s.title}>
              <div className="service-preview-placeholder-lg">
                {s.img
                  ? <img src={s.img} alt={s.title} style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                  : s.icon}
              </div>
              <div className="service-preview-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/services" className="btn-primary">View All Services</Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <h2>Ready to <span>Restore Your Space?</span></h2>
        <p>Let us bring peace, purity, and fresh energy into your home.</p>
        <Link to="/contact" className="btn-primary">Book Your Session</Link>
      </section>
    </>
  )
}
