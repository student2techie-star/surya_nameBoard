import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { SERVICES_LIST } from '../data/servicesData';
import { WhatsAppCTA } from '../components/WhatsAppButton';

export default function ServicesHub() {
  return (
    <div className="page-wrapper">
      <SEOHead
        title="Signage Services in Thiruvananthapuram | Surya Designs"
        description="Explore Surya Designs signage services including house name boards, number plates, shop signs, LED signs, acrylic boards, neon signs and custom signage."
        canonicalUrl="https://suryadesigns.in/services/"
      />

      {/* Services Hub Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span className="current">Services</span>
          </div>
          <h1 className="page-title">Our Signage Services</h1>
          <p className="page-lead">
            Explore our range of customised signage solutions for homes, shops, offices and businesses in Thiruvananthapuram.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="services-grid">
            {SERVICES_LIST.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-card-image">
                  <ImagePlaceholder
                    src={`${import.meta.env.BASE_URL}images/${service.imageFileName}`}
                    alt={service.name}
                    title={service.imagePlaceholder}
                    aspectRatio="4/3"
                  />
                </div>
                <div className="service-card-body">
                  <h2 className="service-card-title">{service.name}</h2>
                  <p className="service-card-desc">{service.shortDescription}</p>
                  <div className="service-card-footer">
                    <Link to={`/services/${service.slug}/`} className="btn btn-outline-sm btn-block">
                      {service.btnText} <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Quote Banner */}
      <section className="section-padding bg-darker text-center">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-h2">Need Help Choosing the Right Signage?</h2>
            <p className="cta-subtext">
              Share your location, space details or reference photo and our team will recommend suitable signage solutions.
            </p>
            <div className="cta-buttons">
              <Link to="/get-a-quote/" className="btn btn-primary btn-lg">
                REQUEST A QUOTE
              </Link>
              <WhatsAppCTA label="WHATSAPP CONSULTATION" className="btn-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
