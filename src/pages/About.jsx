import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { WhatsAppCTA } from '../components/WhatsAppButton';
import { SERVICES_LIST } from '../data/servicesData';

export default function About() {
  return (
    <div className="page-wrapper">
      <SEOHead
        title="About Surya Designs | Signage Solutions in Thiruvananthapuram"
        description="Learn more about Surya Designs and our customised signage solutions for homes, shops, offices and businesses in Thiruvananthapuram."
        canonicalUrl="https://suryadesigns.in/about/"
      />

      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span className="current">About Us</span>
          </div>
          <h1 className="page-title">About Surya Designs</h1>
          <p className="page-lead">
            Customised signage and name board solutions for residential and commercial requirements in Thiruvananthapuram.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="about-main-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-subtitle">Introduction</span>
              <h2 className="section-title">Who We Are</h2>
              <p className="about-paragraph">
                Surya Designs is a signage solution provider located at Narayani Towers, Kaimanam Junction in Thiruvananthapuram, Kerala. We specialize in designing and crafting customized signage products for individual homeowners, local businesses, retail shop owners, and office establishments.
              </p>
              <p className="about-paragraph">
                Whether you require a personalised house name board that complements your villa frontage, vehicle number plates, a modern LED shop sign, or acrylic office branding, Surya Designs offers practical guidance and suitable finishing tailored to your specific requirements.
              </p>
            </div>

            <div className="about-visual">
              <ImagePlaceholder
                src="/images/surya-designs-about-workshop.webp"
                alt="Surya Designs Workshop Thiruvananthapuram"
                title="Surya Designs Workshop & Production Area"
                aspectRatio="4/3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-darker">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Our Expertise</span>
            <h2 className="section-title">What We Do</h2>
            <p className="section-intro">
              We design and produce a comprehensive variety of customised signage products.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES_LIST.map((service) => (
              <div key={service.id} className="service-card-sm">
                <h3 className="service-card-sm-title">{service.name}</h3>
                <p className="service-card-sm-desc">{service.shortDescription}</p>
                <Link to={`/services/${service.slug}/`} className="link-arrow">
                  Explore {service.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Work Ethic</span>
            <h2 className="section-title">Our Approach</h2>
            <p className="section-intro">
              How we work with each customer to ensure clear design choices and suitable materials.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <h3 className="benefit-title">Understanding Requirements</h3>
              <p className="benefit-desc">
                We take time to discuss space constraints, design preferences, language choice, and intended placement before starting.
              </p>
            </div>

            <div className="benefit-card">
              <h3 className="benefit-title">Suitable Material Selection</h3>
              <p className="benefit-desc">
                We recommend materials that perform well in Kerala weather conditions, including UV-resistant acrylics, ACP, stainless steel, and sealed woods.
              </p>
            </div>

            <div className="benefit-card">
              <h3 className="benefit-title">Clean Finishing</h3>
              <p className="benefit-desc">
                Attention to detail in laser cutting, edge polishing, letter alignment, and lighting module placement.
              </p>
            </div>

            <div className="benefit-card">
              <h3 className="benefit-title">Clear Communication</h3>
              <p className="benefit-desc">
                Transparent discussion regarding production timeline, pricing, and installation scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="section-padding bg-darker">
        <div className="container text-center">
          <span className="section-subtitle">Coverage</span>
          <h2 className="section-title">Areas We Serve</h2>
          <p className="section-intro max-width-700 margin-auto">
            Surya Designs serves clients across Thiruvananthapuram and nearby regions. Contact us to check availability for your area.
          </p>
          <div className="location-tags margin-top-md justify-center">
            <span>Kaimanam</span>
            <span>Thampanoor</span>
            <span>Kowdiar</span>
            <span>Vazhuthacaud</span>
            <span>Pattom</span>
            <span>Palayam</span>
            <span>Vellayambalam</span>
            <span>Peroorkada</span>
            <span>Kazhakkoottam</span>
            <span>Technopark Area</span>
            <span>Nemom</span>
            <span>Balaramapuram</span>
          </div>
        </div>
      </section>

      {/* Contact Surya Designs CTA */}
      <section className="section-padding text-center">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-h2">Contact Surya Designs</h2>
            <p className="cta-subtext">
              Have a question or want to discuss a new signage project for your home or business?
            </p>
            <div className="cta-buttons">
              <Link to="/get-a-quote/" className="btn btn-primary btn-lg">
                GET A QUOTE
              </Link>
              <WhatsAppCTA label="WHATSAPP US" className="btn-lg" />
              <Link to="/contact/" className="btn btn-secondary btn-lg">
                VIEW CONTACT DETAILS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
