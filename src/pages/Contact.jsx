import timeImg from '../assets/clock.png'
import pinImg from '../assets/pin.png'
import envelopeImg from '../assets/envelope.png'
import textImg from '../assets/text.png'
import phoneImg from '../assets/phone.png'

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <h1>Book a Session</h1>
        <p>Ready to restore peace and purity to your space? Reach out — we'd love to connect with you.</p>
      </section>

      <div className="page-content">

        {/* Contact Cards */}
        <div className="contact-trio">
          <a href="tel:1234567890" className="contact-trio-item">
            <div className="contact-trio-icon"><img src={phoneImg} alt="Call" /></div>
            <span className="contact-trio-label">Call Us</span>
            <span className="contact-trio-value">(123) 456-7890</span>
          </a>
          <div className="contact-trio-divider" />
          <a href="mailto:email@email.com" className="contact-trio-item">
            <div className="contact-trio-icon"><img src={envelopeImg} alt="Email" /></div>
            <span className="contact-trio-label">Email Us</span>
            <span className="contact-trio-value">email@email.com</span>
          </a>
          <div className="contact-trio-divider" />
          <a href="sms:1234567890" className="contact-trio-item">
            <div className="contact-trio-icon"><img src={textImg} alt="Text" /></div>
            <span className="contact-trio-label">Text Us</span>
            <span className="contact-trio-value">(123) 456-7890</span>
          </a>
        </div>

        <div className="contact-row-2">
          <div className="contact-direct-card">
            <div className="contact-direct-icon"><img src={timeImg} alt="Hours" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            <div className="contact-direct-text">
              <span className="contact-direct-label">Hours</span>
              <span className="contact-direct-value">Mon – Sat: 8am – 6pm</span>
              <span className="contact-direct-value">Sun: By appointment</span>
              <span className="contact-direct-sub">Spiritual sessions by request</span>
            </div>
          </div>

          <div className="contact-direct-card">
            <div className="contact-direct-icon"><img src={pinImg} alt="Service Area" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>
            <div className="contact-direct-text">
              <span className="contact-direct-label">Service Area</span>
              <span className="contact-direct-value">San Antonio, TX &amp; surrounding areas</span>
              <span className="contact-direct-sub">Not sure if we cover your area? Just ask!</span>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="contact-how">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <span className="section-label">The Process</span>
            <h2>How It Works</h2>
            <p>Getting started is simple — here's what happens when you reach out.</p>
          </div>
          <div className="contact-steps">
            <div className="contact-step">
              <div className="contact-step-num">1</div>
              <h3>Reach Out</h3>
              <p>Call, text, or email us with details about what you need. Let us know if you're interested in a spiritual, regular, or errand session.</p>
            </div>
            <div className="contact-step-divider" />
            <div className="contact-step">
              <div className="contact-step-num">2</div>
              <h3>We Plan Together</h3>
              <p>We'll talk through your needs and set up a session that fits your schedule. Every home and every person is unique.</p>
            </div>
            <div className="contact-step-divider" />
            <div className="contact-step">
              <div className="contact-step-num">3</div>
              <h3>Feel the Difference</h3>
              <p>We arrive with care, work with intention, and leave your space — and your spirit — feeling lighter and renewed.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="contact-faq">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <span className="section-label">FAQ</span>
            <h2>Common Questions</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-card">
              <h4>What is a spiritual cleaning?</h4>
              <p>A spiritual cleaning is an intentional energetic cleanse of your home using incense, aromatherapy, intention-setting, and more. It's designed to clear negative or stagnant energy and invite in peace and clarity.</p>
            </div>
            <div className="faq-card">
              <h4>Do I need to be home during the session?</h4>
              <p>It's your choice. Some clients prefer to be present for the experience, especially for spiritual cleanings. Others provide access and return to a refreshed space. We're flexible.</p>
            </div>
            <div className="faq-card">
              <h4>What areas do you cover for errands?</h4>
              <p>We serve San Antonio, TX and the surrounding areas. Reach out and we'll confirm if we can come to you. Most grocery runs, pickups, and drop-offs can be handled within a short radius.</p>
            </div>
            <div className="faq-card">
              <h4>Can I combine services?</h4>
              <p>Absolutely. Many clients pair a regular cleaning with a spiritual clearing for the full reset experience. Just let us know what you're looking for and we'll build a session around it.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
