import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import { SERVICES_LIST } from '../data/servicesData';
import { getWhatsAppUrl } from './WhatsAppButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  return (
    <header className={`floating-dock-header ${isScrolled ? 'dock-compact' : ''}`}>


      {/* FESTIVE THORAN LIGHT GARLAND NAVBAR */}
      <div className="dock-container thoran-dock-container">
        {/* SLEEK FLOATING DOCK NAVBAR */}
        <div className="floating-dock-pill thoran-dock-pill">
          {/* LEFT: OFFICIAL BRAND LOGO & TITLE CAPSULE */}
          <Link to="/" className="dock-brand-capsule thoran-brand-capsule" title="Suriya Designs Home">
            <img 
              src={`${import.meta.env.BASE_URL}surya-designs-logo.png`} 
              alt="Suriya Designs Logo" 
              className="brand-logo-img"
              style={{ height: '36px', width: 'auto', display: 'block', objectFit: 'contain' }}
            />
            <div className="dock-brand-info">
              <span className="dock-brand-name thoran-brand-name">SURIYA DESIGNS</span>
              <span className="dock-brand-sub thoran-brand-sub">NUMBER PLATE & NAME BOARD DESIGNS</span>
            </div>
          </Link>

          {/* CENTER: SEGMENTED NAVIGATION DOCK */}
          <nav className="dock-nav-segment desktop-only">
            <ul className="dock-nav-list retro-nav-list">
              <li>
                <Link to="/" className={`dock-nav-link retro-nav-link ${location.pathname === '/' ? 'active-dock' : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about/" className={`dock-nav-link retro-nav-link ${location.pathname === '/about/' ? 'active-dock' : ''}`}>
                  About
                </Link>
              </li>

              {/* Mega Dropdown Trigger */}
              <li 
                className="dock-dropdown-wrapper"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <Link 
                  to="/services/" 
                  className={`dock-nav-link retro-nav-link dropdown-dock-link ${location.pathname.startsWith('/services') ? 'active-dock' : ''}`}
                >
                  Services
                  <span className="services-count-badge retro-count-badge">11</span>
                  <ChevronDown size={14} className={`dock-arrow ${isServicesDropdownOpen ? 'rotate-dock' : ''}`} />
                </Link>

                {/* Glass Floating Mega Panel */}
                {isServicesDropdownOpen && (
                  <div className="dock-mega-menu retro-mega-menu">
                    <div className="mega-menu-header">
                      <span className="mega-title retro-mega-title">★ Signage & Name Board Services</span>
                      <Link to="/services/" className="mega-all-link">
                        View Hub →
                      </Link>
                    </div>
                    <div className="mega-services-grid">
                      {SERVICES_LIST.map((service) => (
                        <Link 
                          key={service.id}
                          to={`/services/${service.slug}/`}
                          className="mega-service-item retro-mega-item"
                        >
                          <span className="mega-item-dot retro-item-dot"></span>
                          <span className="mega-item-name">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link to="/gallery/" className={`dock-nav-link retro-nav-link ${location.pathname === '/gallery/' ? 'active-dock' : ''}`}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/our-work/" className={`dock-nav-link retro-nav-link ${location.pathname === '/our-work/' ? 'active-dock' : ''}`}>
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact/" className={`dock-nav-link retro-nav-link ${location.pathname === '/contact/' ? 'active-dock' : ''}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* RIGHT: ACTION CAPSULES */}
          <div className="dock-actions-segment">
            <a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="dock-action-icon-btn whatsapp-dock-btn retro-wa-btn desktop-only"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={18} />
            </a>

            <Link to="/get-a-quote/" className="dock-cta-btn retro-cta-btn desktop-only">
              <span>GET QUOTE</span>
              <ArrowRight size={14} />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="dock-mobile-toggle mobile-only retro-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

      </div>

      {/* MOBILE FULL-SCREEN GLASS DRAWER */}
      {isMobileMenuOpen && (
        <div className="mobile-dock-overlay">
          <div className="mobile-dock-card">
            <div className="mobile-dock-header">
              <span className="mobile-dock-title">Menu Navigation</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="mobile-close-icon">
                <X size={20} />
              </button>
            </div>
            
            <ul className="mobile-dock-links">
              <li>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/about/" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              </li>
              
              <li className="mobile-dock-accordion">
                <div 
                  className="mobile-accordion-btn"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  <span>Signage Services (11)</span>
                  <ChevronDown size={16} className={isMobileServicesOpen ? 'rotate' : ''} />
                </div>
                {isMobileServicesOpen && (
                  <div className="mobile-accordion-content">
                    <Link to="/services/" onClick={() => setIsMobileMenuOpen(false)} className="mobile-all-services-btn">
                      Explore All Services Hub →
                    </Link>
                    {SERVICES_LIST.map((service) => (
                      <Link 
                        key={service.id}
                        to={`/services/${service.slug}/`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mobile-sub-service-link"
                      >
                        • {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <Link to="/gallery/" onClick={() => setIsMobileMenuOpen(false)}>Signage Gallery</Link>
              </li>
              <li>
                <Link to="/our-work/" onClick={() => setIsMobileMenuOpen(false)}>Our Work Showcase</Link>
              </li>
              <li>
                <Link to="/contact/" onClick={() => setIsMobileMenuOpen(false)}>Contact Details</Link>
              </li>
            </ul>

            <div className="mobile-dock-actions">
              <Link 
                to="/get-a-quote/" 
                className="btn btn-primary btn-block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                REQUEST A QUOTE
              </Link>
              <a 
                href={getWhatsAppUrl()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-block"
              >
                <MessageCircle size={18} /> WHATSAPP INQUIRY
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
