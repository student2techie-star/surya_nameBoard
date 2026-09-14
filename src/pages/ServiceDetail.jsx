import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, Phone, AlertCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { WhatsAppCTA } from '../components/WhatsAppButton';
import { getServiceBySlug, SERVICES_LIST } from '../data/servicesData';
import { GALLERY_ITEMS } from '../data/galleryData';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!service) {
    return <Navigate to="/services/" replace />;
  }

  // Filter gallery items related to this service
  const relatedGallery = GALLERY_ITEMS.filter(item => 
    item.category.toLowerCase().includes(service.name.toLowerCase().replace('custom ', '').replace('boards', '').replace('signs', '').trim())
  ).slice(0, 4);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="page-wrapper">
      <SEOHead
        title={service.seoTitle}
        description={service.metaDescription}
        canonicalUrl={`https://suryadesigns.in/services/${service.slug}/`}
        faqData={service.faqs}
      />

      {/* Service Detail Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <Link to="/services/">Services</Link> <span>/</span> <span className="current">{service.name}</span>
          </div>
          <h1 className="page-title">{service.h1}</h1>
          <p className="page-lead">{service.intro}</p>
        </div>
      </section>

      {/* Compliance banner for number plates if applicable */}
      {service.complianceNotice && (
        <section className="section-padding-sm bg-darker">
          <div className="container">
            <div className="compliance-banner">
              <AlertCircle size={20} className="compliance-icon" />
              <span>{service.complianceNotice}</span>
            </div>
          </div>
        </section>
      )}

      {/* Main Content & Feature Sections */}
      <section className="section-padding">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-main">
              <div className="service-hero-image margin-bottom-lg">
                <ImagePlaceholder
                  src={`/images/${service.imageFileName}`}
                  alt={service.name}
                  title={service.imagePlaceholder}
                  aspectRatio="16/9"
                />
              </div>

              {/* Dynamic H2 Sections */}
              {service.sections && service.sections.map((sec, idx) => (
                <div key={idx} className="service-detail-block margin-bottom-lg">
                  <h2 className="detail-h2">{sec.title}</h2>
                  <p className="detail-text">{sec.content}</p>
                </div>
              ))}

              {/* Service Work Gallery Preview */}
              <div className="service-work-preview margin-top-xl">
                <h2 className="detail-h2">Our {service.name} Work</h2>
                {relatedGallery.length > 0 ? (
                  <div className="recent-work-grid">
                    {relatedGallery.map((item) => (
                      <div key={item.id} className="work-preview-card">
                        <ImagePlaceholder
                          src={`/images/${item.image}`}
                          alt={item.title}
                          title={item.placeholderTitle}
                          aspectRatio="4/3"
                        />
                        <div className="work-card-info">
                          <h4 className="work-title">{item.title}</h4>
                          <span className="work-location">📍 {item.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="placeholder-work-box">
                    <p>View completed project photographs in our gallery.</p>
                    <Link to="/gallery/" className="btn btn-outline-sm">
                      View Signage Gallery →
                    </Link>
                  </div>
                )}
              </div>

              {/* Frequently Asked Questions (H2) */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="service-faqs-block margin-top-xl">
                  <h2 className="detail-h2">Frequently Asked Questions</h2>
                  <div className="faq-accordion">
                    {service.faqs.map((faq, idx) => (
                      <div 
                        key={idx} 
                        className={`faq-item ${openFaqIndex === idx ? 'faq-open' : ''}`}
                        onClick={() => toggleFaq(idx)}
                      >
                        <div className="faq-question">
                          <h3>{faq.q}</h3>
                          <span className="faq-toggle-icon">{openFaqIndex === idx ? '−' : '+'}</span>
                        </div>
                        {openFaqIndex === idx && (
                          <div className="faq-answer">
                            <p>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Sticky Navigation & Quote Form Link */}
            <aside className="service-detail-sidebar">
              <div className="sidebar-widget">
                <h3 className="widget-title">All Signage Services</h3>
                <ul className="sidebar-links-list">
                  {SERVICES_LIST.map((item) => (
                    <li key={item.id}>
                      <Link 
                        to={`/services/${item.slug}/`}
                        className={item.slug === service.slug ? 'active-sidebar-link' : ''}
                      >
                        <span>{item.name}</span>
                        <ChevronRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-widget quote-widget">
                <h3 className="widget-title">Request a Quote</h3>
                <p className="widget-text">
                  Interested in {service.name}? Share your required dimensions or design references.
                </p>
                <div className="widget-ctas">
                  <Link to="/get-a-quote/" className="btn btn-primary btn-block">
                    GET A QUOTE
                  </Link>
                  <WhatsAppCTA serviceName={service.name} className="btn-block" />
                  <a href="tel:+919847000000" className="btn btn-secondary btn-block">
                    <Phone size={14} /> CALL NOW
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom Request Quote CTA */}
      <section className="section-padding bg-darker text-center">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-h2">Request a Quote for {service.name}</h2>
            <p className="cta-subtext">
              Share your details, approximate sizes or reference design to receive a customized quotation.
            </p>
            <div className="cta-buttons">
              <Link to="/get-a-quote/" className="btn btn-primary btn-lg">
                GET A QUOTE
              </Link>
              <WhatsAppCTA serviceName={service.name} label="WHATSAPP US" className="btn-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
