import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageCircle, Sparkles } from 'lucide-react';
import { SERVICES_LIST } from '../data/servicesData';
import { getWhatsAppUrl } from './WhatsAppButton';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Col 1: Brand Info & NAP */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand" title="Surya Designs Home">
              <img 
                src={`${import.meta.env.BASE_URL}surya-designs-logo.png`} 
                alt="Surya Designs Logo" 
                className="footer-logo-img"
                style={{ height: '44px', width: 'auto', display: 'block', objectFit: 'contain' }}
              />
            </Link>
            <p className="footer-about-text">
              Surya Designs provides customised signage solutions for homes, shops, offices and commercial establishments in Thiruvananthapuram, Kerala.
            </p>
            <div className="footer-nap-info">
              <div className="nap-item">
                <MapPin size={18} className="nap-icon" />
                <span>Narayani Towers, Kaimanam Junction, Thiruvananthapuram, Kerala 695040</span>
              </div>
              <div className="nap-item">
                <Phone size={18} className="nap-icon" />
                <a href="tel:+919847000000">+91 98470 00000</a>
              </div>
              <div className="nap-item">
                <MessageCircle size={18} className="nap-icon" />
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">WhatsApp Support</a>
              </div>
              <div className="nap-item">
                <Clock size={18} className="nap-icon" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about/">About Us</Link></li>
              <li><Link to="/services/">All Services</Link></li>
              <li><Link to="/gallery/">Signage Gallery</Link></li>
              <li><Link to="/our-work/">Our Work Showcase</Link></li>
              <li><Link to="/get-a-quote/">Request a Quote</Link></li>
              <li><Link to="/contact/">Contact Us</Link></li>
              <li><Link to="/privacy-policy/">Privacy Policy</Link></li>
              <li><Link to="/terms/">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Col 3: Signage Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Signage Services</h4>
            <ul className="footer-links">
              {SERVICES_LIST.map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.slug}/`}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Local SEO Keyword Focus & CTA */}
          <div className="footer-col seo-col">
            <h4 className="footer-heading">Thiruvananthapuram Signage</h4>
            <p className="footer-seo-text">
              Looking for reliable sign board manufacturers in Thiruvananthapuram? We craft customised house name boards, vehicle number plates, shop sign boards, acrylic boards, 3D letters, LED displays, and neon signs.
            </p>
            <div className="footer-cta-box">
              <h5>Need a Quick Quote?</h5>
              <p>Send your requirements or reference photo via WhatsApp.</p>
              <a 
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm btn-block"
              >
                <MessageCircle size={16} /> WHATSAPP ENQUIRY
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p>© {new Date().getFullYear()} Surya Designs. All rights reserved. Custom Signage & Name Boards in Thiruvananthapuram, Kerala.</p>
            <div className="footer-legal-links">
              <Link to="/privacy-policy/">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms/">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
