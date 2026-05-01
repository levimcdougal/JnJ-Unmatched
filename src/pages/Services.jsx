import { Link } from 'react-router-dom'
import candleImg from '../assets/candle.png'
import clipImg from '../assets/clip.png'
import broomImg from '../assets/broom.png'
import houseImg from '../assets/house.png'
import folderImg from '../assets/folder.png'
import keyImg from '../assets/key.png'
import comerImg from '../assets/comer.png'

const services = [
  {
    icon: '🕯️',
    img: candleImg,
    title: 'Spiritual Cleanings',
    desc: 'A sacred, intentional cleansing experience designed to clear stagnant energy and invite peace, clarity, and renewal into your space.',
    items: [
      'Incense & palo santo smudging',
      'Aromatherapy & essential oil diffusion',
      'Intention-setting & space blessing',
      'Crystal placement & energy alignment',
      'Deep energetic room clearing',
      'Full space energy reset',
    ],
  },
  {
    icon: '🏠',
    img: houseImg,
    title: 'Residential Cleaning',
    desc: 'Thorough, consistent home cleaning that keeps your space spotless, healthy, and feeling fresh — so you can breathe easy.',
    items: [
      'Full home surface cleaning',
      'Kitchen & bathroom deep clean',
      'Vacuuming & floor mopping',
      'Dusting & cobweb removal',
      'Trash removal & linen change',
      'Eco-friendly product options',
    ],
  },
  {
    icon: '🔑',
    img: keyImg,
    title: 'Move In / Move Out Cleaning',
    desc: 'Start fresh or leave it spotless. We deep clean every corner so your new or vacated space is truly ready.',
    items: [
      'Full property deep clean',
      'Inside cabinets & drawers',
      'Appliance cleaning inside & out',
      'Baseboards, vents & light fixtures',
      'Bathroom & kitchen scrub-down',
      'Final walkthrough ready',
    ],
  },
  {
    icon: '🏢',
    img: comerImg,
    title: 'Commercial Cleaning',
    desc: 'A clean workspace is a productive workspace. We keep your business environment fresh, sanitary, and professional.',
    items: [
      'Office & workspace cleaning',
      'Restroom sanitizing',
      'Common area maintenance',
      'Floor care & vacuuming',
      'Trash & recycling removal',
      'Flexible scheduling available',
    ],
  },
  {
    icon: '🗂️',
    img: folderImg,
    title: 'Deep Organizing',
    desc: 'Bring order and calm to every room. We organize your space with intention so everything has its place.',
    items: [
      'Closet & wardrobe organization',
      'Kitchen & pantry decluttering',
      'Home office organization',
      'Storage & garage sorting',
      'Donation & discard coordination',
      'Labeling & system setup',
    ],
  },
  {
    icon: '📋',
    img: clipImg,
    title: 'Errands',
    desc: 'Let us handle your to-do list so you can focus on what truly matters. We run your errands with care and efficiency.',
    items: [
      'Grocery shopping & delivery',
      'Prescription & pharmacy pickups',
      'Package drop-offs & returns',
      'Dry cleaning pickup & delivery',
      'Appointment scheduling assistance',
      'Miscellaneous task coordination',
    ],
  },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <h1>Our Services</h1>
        <p>Every offering is designed with one purpose — to bring more peace, purity, and ease into your life.</p>
      </section>

      <div className="page-content">
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-card-icon">
                {s.img
                  ? <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  : <span style={{ fontSize: '2rem' }}>{s.icon}</span>}
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <p style={{ color: '#3D2878', marginBottom: '20px', fontSize: '1rem' }}>
            Have something specific in mind? We'd love to create a custom plan for you.
          </p>
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </div>
    </>
  )
}
