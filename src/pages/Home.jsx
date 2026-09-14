import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  Palette, 
  Sparkles, 
  Layers, 
  Truck, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { WhatsAppCTA, getWhatsAppUrl } from '../components/WhatsAppButton';
import { SERVICES_LIST } from '../data/servicesData';
import { HOMEPAGE_FAQS } from '../data/faqData';
import { GALLERY_ITEMS } from '../data/galleryData';

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Take the first 8 services for the homepage grid
  const homepageServices = SERVICES_LIST.slice(0, 8);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="homepage-wrapper">
      <SEOHead
        title="Surya Designs | Custom Signage & Name Boards in Thiruvananthapuram"
        description="Surya Designs creates custom house name boards, number plates, shop sign boards, LED signs, acrylic signs, neon signs and other signage solutions in Thiruvananthapuram, Kerala."
        canonicalUrl="https://suryadesigns.in/"
        faqData={HOMEPAGE_FAQS}
      />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <Sparkles size={14} /> Custom Signage Solutions in Thiruvananthapuram
              </div>
              <h1 className="hero-h1">
                Custom Signage & Name Boards for Homes and Businesses
              </h1>
              <p className="hero-subtext">
                Create a professional first impression with custom signage designed for your home, shop, office or business. Explore house name boards, number plates, shop signs, LED displays and other customised signage solutions from Surya Designs.
              </p>
              <div className="hero-buttons">
                <Link to="/get-a-quote/" className="btn btn-primary btn-lg">
                  GET A QUOTE
                </Link>
                <WhatsAppCTA label="WHATSAPP US" className="btn-lg" />
                <a href="tel:+919847000000" className="btn btn-secondary btn-lg">
                  <Phone size={18} /> CALL NOW
                </a>
              </div>
              
              <div className="hero-trust-badges">
                <div className="trust-item">
                  <CheckCircle2 size={16} className="trust-icon" />
                  <span>Residential & Commercial</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={16} className="trust-icon" />
                  <span>Quality Finishing</span>
                </div>
                <div className="trust-item">
                  <CheckCircle2 size={16} className="trust-icon" />
                  <span>Local Craftsmanship</span>
                </div>
              </div>
            </div>

            <div className="hero-image-block">
              <div className="hero-image-card">
                <ImagePlaceholder
                  src="/images/surya-designs-custom-signage-thiruvananthapuram.webp"
                  alt="Custom illuminated house name board Mizhi by Surya Designs"
                  title="Illuminated House Name Board — Mizhi Villa Project"
                  objectFit="cover"
                  height="360px"
                />
                <div className="hero-image-caption">
                  <span>★ Custom Spotlight Illuminated Gate Pillar Name Board</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOMEPAGE — SERVICES SECTION */}
      <section className="services-section section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">What We Do</span>
            <h2 className="section-title">Our Signage Solutions</h2>
            <p className="section-intro">
              Explore our range of high-quality customised signage solutions tailored for homes, shops, offices and commercial requirements.
            </p>
          </div>

          <div className="services-grid">
            {homepageServices.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-card-image">
                  <ImagePlaceholder
                    src={`/images/${service.imageFileName}`}
                    alt={service.name}
                    title={service.imagePlaceholder}
                    aspectRatio="4/3"
                  />
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{service.name}</h3>
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

          <div className="all-services-cta text-center margin-top-lg">
            <Link to="/services/" className="btn btn-secondary">
              View All 11 Signage Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOMEPAGE — ABOUT SECTION */}
      <section className="about-preview-section section-padding bg-soft-gray">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-subtitle">Who We Are</span>
              <h2 className="section-title">About Surya Designs</h2>
              <p className="about-paragraph">
                Surya Designs provides customised signage solutions for residential and commercial requirements. From personalised house name boards and vehicle number plates to shop signs, acrylic signage, LED displays and other custom signage, our focus is on creating practical and visually appealing solutions based on each customer's requirements.
              </p>
              <p className="about-paragraph">
                Located at Kaimanam Junction in Thiruvananthapuram, we assist customers in selecting suitable materials, dimensions, and visual finishes that enhance their home entry or business storefront identity.
              </p>
              <div className="about-cta-wrapper margin-top-md">
                <Link to="/about/" className="btn btn-primary">
                  Learn More About Us <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            <div className="about-visual">
              <ImagePlaceholder
                src="/images/surya-designs-about-workshop.webp"
                alt="Surya Designs Signage Workshop Thiruvananthapuram"
                title="Surya Designs Workshop & Crafting Facility"
                aspectRatio="4/3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOMEPAGE — WHY CHOOSE US */}
      <section className="why-choose-section section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Our Promise</span>
            <h2 className="section-title">Why Choose Surya Designs?</h2>
            <p className="section-intro">
              We focus on practical design, durable material choices, and clear communication for every signage requirement.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Palette size={28} />
              </div>
              <h3 className="benefit-title">Custom Designs</h3>
              <p className="benefit-desc">
                Choose designs, sizes and finishes according to your requirements.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <ShieldCheck size={28} />
              </div>
              <h3 className="benefit-title">Quality Finishing</h3>
              <p className="benefit-desc">
                Focus on clean finishing and suitable materials for each signage application.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Sparkles size={28} />
              </div>
              <h3 className="benefit-title">Personalised Service</h3>
              <p className="benefit-desc">
                Discuss your requirements and select a signage solution that suits your space.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Layers size={28} />
              </div>
              <h3 className="benefit-title">Residential & Commercial</h3>
              <p className="benefit-desc">
                Solutions for homes, shops, offices and businesses across Thiruvananthapuram.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOMEPAGE — FEATURED WORK */}
      <section className="recent-work-section section-padding bg-soft-gray">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Portfolio</span>
            <h2 className="section-title">Our Recent Work</h2>
            <p className="section-intro">
              Take a look at completed signage projects for house name boards, number plates, shop signs, and custom illuminated boards.
            </p>
          </div>

          <div className="recent-work-grid">
            {GALLERY_ITEMS.slice(0, 6).map((item) => (
              <div key={item.id} className="work-preview-card">
                <ImagePlaceholder
                  src={`/images/${item.image}`}
                  alt={item.title}
                  title={item.placeholderTitle}
                  aspectRatio="4/3"
                />
                <div className="work-card-info">
                  <span className="work-category">{item.category}</span>
                  <h4 className="work-title">{item.title}</h4>
                  <span className="work-location">📍 {item.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center margin-top-lg">
            <Link to="/gallery/" className="btn btn-primary">
              VIEW FULL GALLERY <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOMEPAGE — PROCESS */}
      <section className="process-section section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Step by Step</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-intro">
              Our straightforward process ensures your signage is made exactly as per your approved specifications.
            </p>
          </div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="step-num">01</div>
              <h3 className="step-title">Share Your Requirement</h3>
              <p className="step-desc">Tell us what type of signage you need.</p>
            </div>

            <div className="process-step">
              <div className="step-num">02</div>
              <h3 className="step-title">Discuss Design</h3>
              <p className="step-desc">Discuss the size, material, design and finish.</p>
            </div>

            <div className="process-step">
              <div className="step-num">03</div>
              <h3 className="step-title">Approve the Design</h3>
              <p className="step-desc">Confirm the selected design and requirements.</p>
            </div>

            <div className="process-step">
              <div className="step-num">04</div>
              <h3 className="step-title">Production</h3>
              <p className="step-desc">The signage is prepared according to the approved requirements.</p>
            </div>

            <div className="process-step">
              <div className="step-num">05</div>
              <h3 className="step-title">Delivery / Installation</h3>
              <p className="step-desc">Delivery or installation is provided where applicable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOMEPAGE — LOCAL SEO */}
      <section className="local-seo-section section-padding bg-white">
        <div className="container">
          <div className="local-seo-box">
            <span className="section-subtitle">Serving Kerala Capital</span>
            <h2 className="section-title">Signage Solutions in Thiruvananthapuram</h2>
            <p className="local-seo-text">
              Surya Designs provides customised signage solutions for customers in Thiruvananthapuram and applicable nearby areas. Whether you need a house name board, shop sign, LED signage, acrylic board, number plate or another customised signage solution, contact us to discuss your requirement.
            </p>
            <div className="location-tags">
              <span>Thiruvananthapuram</span>
              <span>Kaimanam</span>
              <span>Kowdiar</span>
              <span>Vazhuthacaud</span>
              <span>Pattom</span>
              <span>Palayam</span>
              <span>Technopark Area</span>
              <span>Kazhakkoottam</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOMEPAGE — FAQ */}
      <section className="faq-section section-padding bg-soft-gray">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-intro">
              Find answers to common questions about custom signage design, materials, and ordering.
            </p>
          </div>

          <div className="faq-accordion">
            {HOMEPAGE_FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${openFaqIndex === idx ? 'faq-open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle-icon">
                    {openFaqIndex === idx ? '−' : '+'}
                  </span>
                </div>
                {openFaqIndex === idx && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOMEPAGE — FINAL CTA */}
      <section className="final-cta-section section-padding bg-white">
        <div className="container text-center">
          <div className="cta-box">
            <h2 className="cta-h2">Have a Signage Requirement?</h2>
            <p className="cta-subtext">
              Tell us what you need. Share your preferred design, size or reference image and contact Surya Designs for a quotation.
            </p>
            <div className="cta-buttons">
              <Link to="/get-a-quote/" className="btn btn-primary btn-lg">
                GET A QUOTE
              </Link>
              <WhatsAppCTA label="WHATSAPP US" className="btn-lg" />
              <a href="tel:+919847000000" className="btn btn-secondary btn-lg">
                <Phone size={18} /> CALL NOW
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
